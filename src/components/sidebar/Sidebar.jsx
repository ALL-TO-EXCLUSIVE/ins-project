import React from 'react'
import SignoutButton from '../signoutButton/SignoutButton'

const Sidebar = () => {
  return (
    <div className='w-[380px] h-screen bg-gray-50/80 flex flex-col gap-2 p-3 text-5xl font-[poppins]'>
      <div className='flex items-center justify-between'>
        <div className='h-10 w-10 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full'></div>
        <p>Dev Patel</p>
      </div>
      <hr />
      <ul className='w-full h-full flex flex-col gap-5 my-[1vw]'>
        <li>Notes</li>
        <li>Favourites</li>
      </ul>
      <div className='text-3xl text-center text-gray-500 flex items-center justify-center'>
      <span className='text-4xl mr-3'>&#11104;</span>
      <SignoutButton/>
      </div>
    </div>
  )
}

export default Sidebar