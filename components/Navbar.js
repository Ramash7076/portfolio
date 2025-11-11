import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-0 sm:justify-around items-center bg-[rgb(13,13,57)] h-25 sm:h-20 px-5 sm:px-0'>
        <Link href={"/"}><div className="logo text-xl sm:text-2xl text-gray-200 font-bold">
            Ramash's Portfolio
        </div></Link>

        <ul className='flex items-center gap-2 sm:gap-5 text-gray-200 '>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/service"}><li>Services</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
