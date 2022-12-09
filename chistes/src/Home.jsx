import React from 'react'
import Chiste from './Chiste'
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-5xl mb-10  text-neutral-50	 font-bold'>Los mejores Chistes de Internet</h1>
        <Chiste/>
    </div>
  )
}
