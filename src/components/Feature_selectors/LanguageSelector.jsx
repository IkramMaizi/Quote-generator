import React from 'react'

export default function LanguageSelector() {
  return (
    <div className="h-[150px] w-full bg-transparentBlack rounded-lg ">
      <div className="mt-6 ml-6 flex flex-col gap-6">
        <p className="text-white">Quote Language</p>
        <div className="flex gap-4">
          <div className="bg-gray-200 px-2 py-1 rounded cursor-pointer text-sm">EN</div>
          <div className="bg-gray-200 px-2 py-1 rounded cursor-pointer text-sm">FR</div>
          <div className="bg-gray-200 px-2 py-1 rounded cursor-pointer text-sm">AR</div>
        </div>
      </div>
    </div>
  )
}
