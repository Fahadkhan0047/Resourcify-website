import React from "react";
import Header from "./components/Header/Header";
import "@radix-ui/themes/styles.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import SignUpForm from "./pages/SignUpForm";
import { Route, Routes, useLocation } from "react-router-dom";
import YourProfile from "./pages/YourProfile";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  const knownRoutes = ["/", "/signup", "/YourProfile",'/roadmap'];
  const isNotFoundPage = !knownRoutes.includes(location.pathname);

  return (
    <div className="font-sans">
      {!isNotFoundPage && (
        <>
          <div className="">
            <Popup />
          </div>
          <nav className="bg-[#83c5be]">
            <Header />
            <SideBar />
          </nav>
        </>
      )}
      <main
        className={`pt-16 w-full ${
          !isNotFoundPage ? "pl-0 md:pt-16 lg:pl-72" : ""
        } bg-[#edf6f9]`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/YourProfile" element={<YourProfile />} />
          <Route path="*" element={<NotFound />} /> {/* 404 page route */}
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>

      {!isNotFoundPage && (
        <footer className="lg:pl-72 pl-0">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
