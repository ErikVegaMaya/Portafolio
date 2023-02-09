import React from "react";
import NavBar from "../navigationBars/NavBar";
import { Routes, Route } from "react-router-dom";
// Screens
import PersonalInfo from "../../screens/PersonalInfo";
import Skills from "../../screens/skills/Skills";
import Home from "../../screens/Home";
import SkillDetail from "../../screens/skills/SkillDetail";
import Experiences from "../../screens/experience/Experiences";

const AppNavigator = () => {
  return (
    <div className="h-screen w-screen overflow-y-hidden overflow-x-hidden bg-gradient-to-b from-gray-500 to-gray-800">
      <nav>
        <NavBar />
      </nav>
      <div className="flex h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalInfo" element={<PersonalInfo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skillDetail" element={<SkillDetail />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppNavigator;
