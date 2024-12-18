import React from 'react'
import Logo from "../assets/logo.png"

export default function () {
  return (
    <div className="w-full flex justify-between items-center">
        <div className="logo px-3 py-3 text-white">
          <img src={Logo} alt="" className="h-14" />

        </div>
        <ul className="flex gap-6 ">
            <li>Generator</li>
            <li>Favorites</li>
            <li>About</li>
        </ul>
    </div>
  )
}
