import React from 'react'
import MusicSelector from './Feature_selectors/MusicSelector'
import QuoteImage from './QuoteImage'
import BackgroundSelector from './Feature_selectors/BackgroundSelector'
import LanguageSelector from './Feature_selectors/LanguageSelector'

export default function QuoteGenarator() {
  return (
    <div className="pt-10 pb-4 flex justify-between gap-2 ">
      <BackgroundSelector />
      <QuoteImage/>
      <div className="w-1/4 flex flex-col gap-6">
        <LanguageSelector />
        <MusicSelector />
      </div>

    </div>
  )
}


// lg:bg-gray-400 md:bg-red-400 sm:bg-green-400