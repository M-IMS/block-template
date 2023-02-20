import React from "react";

import MainBody from "./components/MainBody";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="h-screen flex">
      <Nav />
      <MainBody />
    </div>
  );
}

export default App;
