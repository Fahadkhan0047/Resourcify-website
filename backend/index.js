const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { body, validationResult } = require('express-validator');
const { error } = require("console");

require('dotenv').config();

const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;
const dbUri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

//database connection
mongoose.connect((dbUri), {}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error', err);
});

//API creation
app.get("/", (req, res) => {
    res.send("Express app is running");
});

//Schema for user model
const User = mongoose.model('User', {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, dafault: Date.now }
});

//Endpoint for registering user
app.post('/signup', [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "Existing user found with same email" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();

        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

//Endpoint for user login
app.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const passMatch = await bcrypt.compare(req.body.password, user.password);
            if (passMatch) {
                const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });
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