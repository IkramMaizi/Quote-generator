import React from 'react'
import SimpleToggle from '../SimpleToggle'

export default function MusicSelector() {
  return (
    <div className="h-[225px] w-full bg-transparentBlack rounded-lg text-white">
  <div className="mt-6 ml-6 flex">
    <SimpleToggle />
    <p className="ml-2">Background music</p>
  </div>
  <div className="mt-4 mx-6 h-[150px] overflow-y-auto scrollbar-thin">
    <ul className="space-y-2">
      {[...Array(10)].map((_, index) => (
        <li
          key={index}
          className="flex items-center justify-between p-2 bg-gray-200 rounded-md shadow hover:bg-gray-300 transition duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="h-[32px] w-[32px] rounded-full bg-gradient-to-br from-blue-500 to-blue-200 flex items-center justify-center text-xs font-bold text-white">
              {index + 1}
            </div>
            <p className="text-xs text-gray-800 truncate w-[120px]">
              Track {index + 1}
            </p>
          </div>
          <button className="h-[28px] w-[28px] bg-blue-400 hover:bg-blue-300 rounded-full flex items-center justify-center text-white transition duration-300">
            ▶
          </button>
        </li>
      ))}
    </ul>
  </div>
  <style jsx>{`
    /* Minimalist Scrollbar Styles */
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-track {
      background: transparent;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background-color: #bbb;
      border-radius: 4px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover {
      background-color: #999;
    }
  `}</style>
</div>

  )
}
