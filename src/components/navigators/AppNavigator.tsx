import React from "react";
import NavBar from "../navigationBars/NavBar";
import { Routes, Route } from "react-router-dom";
// Screens
import PersonalInfo from "../../screens/PersonalInfo";
import Skills from "../../screens/Skills";
import Home from "../../screens/Home";

const AppNavigator = () => {
  return (
    <div className="h-screen w-screen overflow-y-hidden overflow-x-hidden">
      <nav>
        <NavBar />
      </nav>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalInfo" element={<PersonalInfo />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppNavigator;
