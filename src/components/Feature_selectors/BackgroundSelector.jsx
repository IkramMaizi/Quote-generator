import React from 'react'
import SimpleToggle from '../SimpleToggle'

export default function BackgroundSelector() {
  return (
    <div className="h-[400px] w-1/4 bg-transparentBlack rounded-lg text-white">
  <div className="mt-6 ml-6 flex">
    <SimpleToggle />
    <p className="ml-2">Add background</p>
  </div>
  <div className="mt-4 mx-6 h-[300px] overflow-y-auto scrollbar-thin">
    <div className="grid grid-cols-3 gap-2">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="h-[75px] w-[75px] rounded-md bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          style={{
            backgroundImage: "",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
    </div>
  </div>
  <style jsx>{`
    /* Minimalist Scrollbar Styles */
    .scrollbar-thin::-webkit-scrollbar {
      width: 8px; /* Scrollbar width */
    }

    .scrollbar-thin::-webkit-scrollbar-track {
      background: transparent; /* Track background */
    }

    .scrollbar-thin::-webkit-scrollbar-thumb {
      background-color: #888; /* Thumb color */
      border-radius: 10px; /* Rounded corners */
      border: 2px solid transparent; /* Padding around the thumb */
    }

    .scrollbar-thin::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Thumb hover color */
    }
  `}</style>
</div>
  )
}
