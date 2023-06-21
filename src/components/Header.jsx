import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='w-full h-20 bg-white shadow-md fixed z-10 font-satoshi'>
        <div className="container mx-auto w-full ">
            <div className="flex py-4 px-4 gap-2 cursor-pointer items-center">
                <img src={logo} className='h-14' alt="" />
                <p className='font-semibold text-[20px]'>Task manager</p>
            </div>
        </div>
    </div>
  )
}

export default Header