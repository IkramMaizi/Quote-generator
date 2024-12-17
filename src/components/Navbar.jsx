import React from 'react'

export default function () {
  return (
    <div className="w-full flex justify-between items-center">
        <div className="logo px-3 py-3 bg-gray-400 text-white">Logo</div>
        <ul className="flex gap-6 ">
            <li>Generator</li>
            <li>Favorites</li>
            <li>About</li>
        </ul>
    </div>
  )
}
