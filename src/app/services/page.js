"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="text-center mt-20 mb-10 lg:mb-[15em]">
        <h1 className="text-[#002249] text-6xl font-extrabold tracking-tight lg:text-7xl lg:font-extrabold">
          Services
        </h1>
        <h2 className="text-[#69A1BB] text-2xl font-semibold mt-4">
          <Link href="/" className="mr-2">
            Home
          </Link>
          <span>|</span>
          <Link href="/services" className="ml-2">
            Services
          </Link>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 mb-[8em] lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8  lg:w-[80%] lg:mx-auto">
        <div className="relative w-[330px] h-[267px] mb-8">
          <Image src="/ser1.webp" alt="img1" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[60%] bg-[rgba(0,34,73,0.7)] flex items-center justify-center text-white font-extrabold text-lg transition-all duration-300 ease-in-out">
            UI/UX Design
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8">
          <Image src="/ser2.webp" alt="img2" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[60%] bg-[rgba(0,34,73,0.7)] flex items-center justify-center text-white font-extrabold text-lg transition-all duration-300 ease-in-out">
            IT Consultancy
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8">
          <Image src="/ser3.webp" alt="img3" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[60%] bg-[rgba(0,34,73,0.7)] flex items-center justify-center text-white font-extrabold text-lg transition-all duration-300 ease-in-out">
            Technology Prof.
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8">
          <Image src="/ser4.webp" alt="img4" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[60%] bg-[rgba(0,34,73,0.7)] flex items-center justify-center text-white font-extrabold text-lg transition-all duration-300 ease-in-out">
            Web Development
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8">
          <Image src="/ser5.webp" alt="img5" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[60%] bg-[rgba(0,34,73,0.7)] flex items-center justify-center text-white font-extrabold text-lg transition-all duration-300 ease-in-out">
            Web Development
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8">
          <Image src="/ser6.webp" alt="img6" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[60%] bg-[rgba(0,34,73,0.7)] flex items-center justify-center text-white font-extrabold text-lg transition-all duration-300 ease-in-out">
            Game Design
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
