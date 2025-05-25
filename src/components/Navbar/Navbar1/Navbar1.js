"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar1 = () => {
  return (
    <div className='navbar1 flex gap-4 items-center justify-between p-8 text-base'>
      <div className='logo'>
          <Image src="/logo.webp" alt="desc" width={164} height={60} />
      </div>
      <div className='navigate flex gap-7 items-center justify-between'>
          <Link href="/" className='links font-semibold'>Home<span className='dropdown pl-2'>+</span></Link>
          <Link href="/about" className='links font-semibold'>About</Link>
          <Link href="/services" className='links font-semibold'>Services<span className='dropdown pl-2'>+</span></Link>
          <Link href="/pages" className='links font-semibold'>Pages<span className='dropdown pl-2'>+</span></Link>
          <Link href="/blog" className='links font-semibold'>Blog<span className='dropdown pl-2'>+</span></Link>
          <Link href="/contact" className='links font-semibold'>Contact</Link>
      </div>
      <div className='nav-icons'>

      </div>
    </div>
  )
}

export default Navbar1