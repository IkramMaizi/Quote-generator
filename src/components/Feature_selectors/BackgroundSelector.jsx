import React from 'react'
import SimpleToggle from '../SimpleToggle'

export default function BackgroundSelector() {
  return (
    <div className=" h-[400px] w-1/4 bg-transparentBlack rounded-lg">
      <div className="mt-6 ml-6 flex">
        <SimpleToggle />
        <p className="ml-2">Add background</p>
      </div>
    </div>
  )
}
