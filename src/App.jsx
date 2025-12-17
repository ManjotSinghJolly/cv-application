import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";

function App() {
  return (
    <div>
      <GeneralInfo />
      <EducationInfo />
    </div>
  );
}

export default App;
