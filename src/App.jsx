import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Input from "./Components/Input";
import Guide from "./Components/Guide";
import Loading from "./Components/Loading";
import Faq from "./Components/FAQ";
import Contact from "./Components/Contact";
import Changelog from "./Components/Changelog";
import Donation from "./Components/Donation";
import Copyright from "./Components/CopyrightClaims";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Tou from "./Components/Tou";
import History from "./Components/History";

function App() {
  // MAKE CONST FOR DARK MODE
  const [theme, Settheme] = useState("light");
  // HANDL CLICK DARK
  const darkHandler = () => {
    Settheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar theme={theme} darkHandler={darkHandler} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/loading" element={<Loading theme={theme} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Faq" element={<Faq theme={theme} />} />
        <Route path="/Contact" element={<Contact theme={theme} />} />
        <Route
          path="/Changelog"
          element={
            <>
              <Changelog theme={theme} />
            </>
          }
        />
        <Route path="/Contact" element={<Contact theme={theme} />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Copyright" element={<Copyright theme={theme} />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Tou" element={<Tou />} />
        <Route path="/History" element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

function Home({ theme }) {
  return (
    <>
      <Input theme={theme} />
      <Guide theme={theme} />
    </>
  );
}

export default App;
