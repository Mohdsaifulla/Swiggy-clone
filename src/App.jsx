import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default App;
