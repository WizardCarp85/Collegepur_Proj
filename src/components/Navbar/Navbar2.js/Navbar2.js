"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar2 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* topbar */}
      <div className="topbar flex flex-row justify-between items-center w-full px-9 py-5 border-b border-[#4f79a9] text-[#4f79a9]">
        <div className="flex flex-row gap-4 items-center justify-between">
          <i className="fa-regular fa-envelope pr-6 cursor-pointer">
            <span className="text-sm pl-2">info@webmail.com</span>
          </i>
          <i className="fa-solid fa-phone-flip cursor-pointer">
            <span className="text-sm pl-2 font-normal">786 875 864 75 7</span>
          </i>
        </div>
        <div className="flex flex-row gap-4 items-center justify-between">
          <i className="fa-brands fa-facebook-f hover:text-[#0c59db] transition-all duration-300 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:text-[#0c59db] transition-all duration-300 cursor-pointer"></i>
          <i className="fa-brands fa-behance hover:text-[#0c59db] transition-all duration-300 cursor-pointer"></i>
          <i className="fa-brands fa-linkedin-in hover:text-[#0c59db] transition-all duration-300 cursor-pointer"></i>
          <i className="fa-brands fa-youtube hover:text-[#0c59db] transition-all duration-300 cursor-pointer"></i>
        </div>
      </div>

      {/* bottom */}
      <div className="navbar1 flex items-center justify-between py-7 px-9 text-base text-[#555555] w-full">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.webp" alt="desc" width={164} height={60} />
          </Link>
        </div>
        <div className="navigate flex gap-7 items-center justify-between text-[#4f79a9]">
          <Link href="/" className="links font-semibold text-[1rem] hover:text-[#0c59db]">
            HOME
            <span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
          </Link>
          <Link href="/about" className="links font-semibold text-[1rem] hover:text-[#0c59db]">
            ABOUT
          </Link>
          <Link href="/services" className="links font-semibold text-[1rem] hover:text-[#0c59db]">
            SERVICES
            <span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
          </Link>
          <Link href="/pages" className="links font-semibold text-[1rem] hover:text-[#0c59db]">
            PAGES
            <span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
          </Link>
          <Link href="/blog" className="links font-semibold text-[1rem] hover:text-[#0c59db]">
            BLOG
            <span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
          </Link>
          <Link href="/contact" className="links font-semibold text-[1rem] hover:text-[#0c59db]">
            CONTACT
          </Link>
        </div>
        <div>
          <button className="bg-[#0c59db] text-white px-[4em] py-5 ml-2 border-[#0c59db] rounded-lg border-2 font-bold hover:bg-white hover:text-[#0c59db] hover:border-[#0c59db] transition-all duration-300">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
