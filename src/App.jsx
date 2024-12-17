import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage"
import background from "./assets/background.png"

function App() {

  return (
    <div className="bg-[url('./assets/background.png')] bg-cover bg-bottom w-full min-h-screen px-16 pt-8">
      <HomePage />
    </div>
  );
}

export default App;
