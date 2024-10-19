import React from 'react'

function Navbar() {
  return (
    <nav className='w-full h-20 bg-blue-500 items-center justify-center flex flex-col gap-3'>
      <div className='w-[70%]'>
        <div className='flex gap-2'>
        <img width="15" height="5" src="https://img.icons8.com/ios/ffffff/menu--v1.png" alt="menu--v1"/>
        <img className='w-16' src="https://bbd.super-deel.site/sp/public/brand.png" alt="" />
        </div>
      </div>
      <div className='w-[70%]'>
        <input className='w-full px-3 rounded-sm' type="text" placeholder='search for products, brands and more' />
      </div>
    </nav>
  )
}

export default Navbar