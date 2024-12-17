import React from 'react'
import SimpleToggle from '../SimpleToggle'

export default function MusicSelector() {
  return (
    <div className="h-[225px] w-full bg-transparentBlack rounded-lg">
      <div className="mt-6 ml-6 flex">
        <SimpleToggle />
        <p className="ml-2">Background music</p>
      </div>
    </div>
  )
}
