import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalInfo from "./components/PracticalInfo";

function App() {
  return (
    <div>
      <GeneralInfo />
      <EducationInfo />
      <PracticalInfo />
    </div>
  );
}

export default App;
