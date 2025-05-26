"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar1 = () => {
  return (
    <div className="navbar1 flex items-center justify-between py-7 px-9 text-base text-[#555555]">
      <div className="logo cursor-pointer">
        <Link href="/">
          <Image src="/logo.webp" alt="desc" width={164} height={60} />
        </Link>
      </div>
      <div className="navigate flex gap-7 items-center justify-between">
        <Link
          href="/"
          className="links font-semibold text-[1.1rem] hover:text-[#0c59db]"
        >
          Home<span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
        </Link>
        <Link
          href="/about"
          className="links font-semibold text-[1.1rem] hover:text-[#0c59db]"
        >
          About
        </Link>
        <Link
          href="/services"
          className="links font-semibold text-[1.1rem] hover:text-[#0c59db]"
        >
          Services
          <span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
        </Link>
        <Link
          href="/pages"
          className="links font-semibold text-[1.1rem] hover:text-[#0c59db]"
        >
          Pages<span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
        </Link>
        <Link
          href="/blog"
          className="links font-semibold text-[1.1rem] hover:text-[#0c59db]"
        >
          Blog<span className="dropdown pl-2 font-thin text-[#a3a3a3]">+</span>
        </Link>
        <Link
          href="/contact"
          className="links font-semibold text-[1.1rem] hover:text-[#0c59db]"
        >
          Contact
        </Link>
        <i className="fa-solid fa-cart-shopping text-xl cursor-pointer hover:text-[#0c59db]"></i>
        <i className="fa-solid fa-magnifying-glass text-xl cursor-pointer hover:text-[#0c59db]"></i>
        <i className="fa-solid fa-bars text-3xl cursor-pointer hover:text-[#0c59db]"></i>
        <button className="group bg-[#0c59db] text-white px-7 py-5 ml-2 border-[#0c59db] rounded-lg border-2 font-bold hover:bg-white hover:text-[#0c59db] hover:border-[#0c59db] transition-all duration-300">
          Free Consulting
          <i className="fa-solid fa-arrow-right text-white bg-[#0c59db] group-hover:text-[#0c59db] group-hover:bg-white transition-all duration-300 font-thin pl-1"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar1;
