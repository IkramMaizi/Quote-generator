import React from 'react'
import Navbar from ".././components/Navbar"
import ToggleSwitch from "../components/ModeToggle";
import QuoteGenerator from "../components/QuoteGenarator"

export default function HomePage() {
  const handleToggle = (state) => {
    console.log("Toggle state:", state); // React to toggle state change
  };

  return (
    <div>
        <Navbar />
        <ToggleSwitch enabledText="Light mode" disabledText="Dark mode" onToggle={handleToggle} />
        <h1 className="mt-10 pb-3 text-center text-3xl font-extrabold">Generate your customized quote</h1>
        <p className="text-center text-sm font-medium">lorem ipsum bla blabla bla blablabal ndbla nla nba hagadnf </p>
        <QuoteGenerator />
        <div className="flex justify-center gap-8 mb-4">
          <button className="bg-blue-500 text-white py-2 px-14 rounded-md text-md hover:bg-blue-400">Inspire Me!</button>
          <button className="bg-blue-500 text-white py-2 px-14 rounded-md text-md hover:bg-blue-400">Download</button>
        </div>
    </div>
  )
}
