import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import LLMOutput from "./components/Output";

function App() {
  return (
    <>
      <div className="min-h-screen  ">
        {" "}
        <Search />
        <LLMOutput />
      </div>
    </>
  );
}

export default App;
