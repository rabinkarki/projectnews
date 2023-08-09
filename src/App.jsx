import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Fetch from "./fetch.jsx";
import Header from "./components/header";
import React from "react";
import "./index.css";
import Search from "./components/search.jsx";

function App() {
  return (
    <>
      <Header />
      <Search />
    </>
  );
}

export default App;
