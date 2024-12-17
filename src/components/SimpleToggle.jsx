import React, { useState } from "react";

function SimpleToggle({onToggle }) {
    const [enabled, setEnabled] = useState(false);
  
    const toggle = () => {
      setEnabled(!enabled);
      if (onToggle) {
        onToggle(!enabled);
      }
    };
  
    return (
        <div className="flex items-center gap-2 justify-center">
        <button
          onClick={toggle}
          className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
            enabled ? "bg-blue-400" : "bg-gray-200"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full shadow-md bg-white transform transition-transform duration-300 ${
              enabled ? "translate-x-5" : "translate-x-0"
            }`}
          ></span>
        </button>
      </div>
    );
  }
  
  export default SimpleToggle;