import React,{useState} from "react";
import Header from "./components/Header/Header";
import "@radix-ui/themes/styles.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import SignUpForm from "./pages/SignUpForm";
import { Route, Routes, useLocation } from "react-router-dom";
import YourProfile from "./pages/YourProfile";
import Roadmap from "./pages/Roadmap";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Roadmap" element={<Roadmap/>}/>
        <Route path="/YourProfile" element={<YourProfile/>}/> 
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/signup" element={<SignUpForm />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App