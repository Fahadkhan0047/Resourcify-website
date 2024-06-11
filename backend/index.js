const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;
const dbUri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

// Database connection
mongoose
  .connect(dbUri, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });

// User schema and model
const User = mongoose.model("User", {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String },
  password: { type: String },
  date: { type: Date, default: Date.now },
});

// Passport configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            profilePicture:
              profile.photos && profile.photos.length > 0
                ? profile.photos[0].value
                : null, // Save profile picture URL if available
          });
          await user.save();
        }
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Session middleware
app.use(
  session({
    secret: "supersecretkey123",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get(
  "/auth/google",
  (req, res, next) => {
    console.log("Google authentication initiated");
    next();
  },
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  (req, res, next) => {
    console.log("Google authentication callback");
    next();
  },
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, jwtSecret, { expiresIn: "1h" });
    res.redirect(`http://localhost:5173/home?token=${token}`);
  }
);

// API endpoint for registering user
app.post(
  "/signup",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    try {
      let check = await User.findOne({ email: req.body.email });
      if (check) {
        return res.status(400).json({
          success: false,
          errors: "Existing user found with the same email",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      // Check if profile picture URL is provided
      if (req.body.profilePicture) {
        user.profilePicture = req.body.profilePicture;
      }

      await user.save();

      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });
      res.json({ success: true, token });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

// API endpoint for user login
app.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const passMatch = await bcrypt.compare(req.body.password, user.password);
      if (passMatch) {
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });
        res.json({ success: true, token });
      } else {
        res.status(400).json({ success: false, errors: "Wrong Password" });
      }
    } else {
      res.status(400).json({ success: false, errors: "Wrong email address" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on Port ${port}`);
  } else {
    console.log("Error:", error);
  }
});
