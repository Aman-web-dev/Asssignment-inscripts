import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import ToolBar from "./Components/ToolBar";
import Table from "./Components/Table";

function App() {
  return (
    <>
      <div className="text-black">
        <Navbar />
        <ToolBar />
        <div className="overflow-auto">
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
