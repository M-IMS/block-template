import React from "react";
import { Routes, Route } from "react-router-dom";

import MainBody from "./components/MainBody";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="h-screen flex">
      <Nav />
      <Routes>
        <Route path="/" element={<MainBody/>} />
      </Routes>
      {/* <MainBody /> */}
    </div>
  );
}

export default App;
