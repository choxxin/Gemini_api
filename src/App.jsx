import { useState } from "react";

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
