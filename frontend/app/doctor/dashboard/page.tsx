import React from 'react'
import Logo from '@/components/Logo'
import Searchbox from '@/components/Searchbox'
const header = () => {
  return (
   <main><header className="bg-white-background sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-gray-300 p-8"><Logo/><Searchbox/></header>
    </main>
   
  )
}

export default header