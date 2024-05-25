import React, { useState } from "react";
import Header from "./components/Header/Header";
import "@radix-ui/themes/styles.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-20 w-full pl-0 md:pt-20 md:pl-72">
        
        <Home />
      </main>
      <footer className="md:pl-72 pl-0">
        <Footer />
      </footer>
    </>
  );
}

export default App;
