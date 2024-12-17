import React, { useState } from "react";

function ToggleSwitch({ enabledText = "Enabled", disabledText = "Disabled", onToggle }) {
    const [enabled, setEnabled] = useState(false);
  
    const toggle = () => {
      setEnabled(!enabled);
      if (onToggle) {
        onToggle(!enabled);
      }
    };
  
    return (
        <div className="flex items-center gap-2 justify-center">
        <span
          className={`text-xs transition-opacity duration-300 ${
            enabled ? "text-fontColor opacity-100" : "text-gray-500 opacity-40"
          }`}
        >
          {enabledText}
        </span>
        <button
          onClick={toggle}
          className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
            enabled ? "bg-gray-800" : "bg-white"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full shadow-md transform transition-transform duration-300 ${
              enabled ? "translate-x-5 bg-white" : "translate-x-0 bg-gray-800"
            }`}
          ></span>
        </button>
        <span
          className={`text-xs font-medium transition-opacity duration-300 ${
            enabled ? "text-gray-500 opacity-40" : "text-gray-800 opacity-100"
          }`}
        >
          {disabledText}
        </span>
      </div>
    );
  }
  
  export default ToggleSwitch;