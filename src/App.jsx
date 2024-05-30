import React, { useState } from "react";
import Header from "./components/Header/Header";
import "@radix-ui/themes/styles.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Authentication from "./components/Authentication/Authentication";
import AuthPopup from "./components/Authentication/AuthPopup";
function App() {
  return (
    <>
      <div className="">
        <Popup />
      </div>

      <nav className="bg-[#83c5be]">
        <Header />
        <SideBar />
      </nav>

      <main className="pt-16 w-full pl-0 md:pt-16 lg:pl-72 bg-[#edf6f9]">
        <Home />
      </main>


      <footer className="lg:pl-72 pl-0">
        <Footer />
      </footer>
    </>
  );
}

export default App;
