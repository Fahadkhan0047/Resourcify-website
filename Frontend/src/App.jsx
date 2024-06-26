import React, { useState } from "react";
import Header from "./components/Header/Header";
import "@radix-ui/themes/styles.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import YourProfile from "./pages/YourProfile";
import Roadmap from "./pages/Roadmap";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Resources from "./pages/Resources";
import FullStack from "./pages/Roadmaps/FullStack";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {(location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/Signup") && <SideBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/YourProfile" element={<YourProfile />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Roadmap/FullStack" element={<FullStack />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App