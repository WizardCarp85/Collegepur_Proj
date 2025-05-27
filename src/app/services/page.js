"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="text-center mt-20 mb-[15em]">
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
        <div className="relative w-[330px] h-[267px] mb-8 group">
          <Image src="/ser1.webp" alt="img2" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[65%] bg-[rgba(0,34,73,0.7)] hover:bg-[#0C59DBDD] flex flex-col items-center justify-start text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out overflow-hidden">
            <span className="py-2 bg-transparent pt-5">UI/UX Design</span>
            <p className="max-w-[90%] opacity-0 translate-y-full group-hover:opacity-100 bg-transparent  group-hover:translate-y-0 transition-all duration-[200ms] ease-in-out text-sm font-normal text-center">
              The functional goal of technical content is to help people use a
              product successfully. The business goal must tie the content.
            </p>
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8 group">
          <Image src="/ser2.webp" alt="img2" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[65%] bg-[rgba(0,34,73,0.7)] hover:bg-[#0C59DBDD] flex flex-col items-center justify-start text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out overflow-hidden">
            <span className="py-2 bg-transparent pt-5">Technology Prof.</span>
            <p className="max-w-[90%] opacity-0 translate-y-full group-hover:opacity-100 bg-transparent  group-hover:translate-y-0 transition-all duration-[200ms] ease-in-out text-sm font-normal text-center">
              The functional goal of technical content is to help people use a
              product successfully. The business goal must tie the content.
            </p>
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8 group">
          <Image src="/ser3.webp" alt="img2" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[65%] bg-[rgba(0,34,73,0.7)] hover:bg-[#0C59DBDD] flex flex-col items-center justify-start text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out overflow-hidden">
            <span className="py-2 bg-transparent pt-5">IT Consultancy</span>
            <p className="max-w-[90%] opacity-0 translate-y-full group-hover:opacity-100 bg-transparent  group-hover:translate-y-0 transition-all duration-[200ms] ease-in-out text-sm font-normal text-center">
              The functional goal of technical content is to help people use a
              product successfully. The business goal must tie the content.
            </p>
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8 group">
          <Image src="/ser4.webp" alt="img2" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[65%] bg-[rgba(0,34,73,0.7)] hover:bg-[#0C59DBDD] flex flex-col items-center justify-start text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out overflow-hidden">
            <span className="py-2 bg-transparent pt-5">Web Development</span>
            <p className="max-w-[90%] opacity-0 translate-y-full group-hover:opacity-100 bg-transparent  group-hover:translate-y-0 transition-all duration-[200ms] ease-in-out text-sm font-normal text-center">
              The functional goal of technical content is to help people use a
              product successfully. The business goal must tie the content.
            </p>
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8 group">
          <Image src="/ser5.webp" alt="img2" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[65%] bg-[rgba(0,34,73,0.7)] hover:bg-[#0C59DBDD] flex flex-col items-center justify-start text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out overflow-hidden">
            <span className="py-2 bg-transparent pt-5">Web Development</span>
            <p className="max-w-[90%] opacity-0 translate-y-full group-hover:opacity-100 bg-transparent  group-hover:translate-y-0 transition-all duration-[200ms] ease-in-out text-sm font-normal text-center">
              The functional goal of technical content is to help people use a
              product successfully. The business goal must tie the content.
            </p>
          </div>
        </div>
        <div className="relative w-[330px] h-[267px] mb-8 group">
          <Image src="/ser6.webp" alt="img2" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-1/4 hover:h-[65%] bg-[rgba(0,34,73,0.7)] hover:bg-[#0C59DBDD] flex flex-col items-center justify-start text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out overflow-hidden">
            <span className="py-2 bg-transparent pt-5">Game Design</span>
            <p className="max-w-[90%] opacity-0 translate-y-full group-hover:opacity-100 bg-transparent  group-hover:translate-y-0 transition-all duration-[200ms] ease-in-out text-sm font-normal text-center">
              The functional goal of technical content is to help people use a
              product successfully. The business goal must tie the content.
            </p>
          </div>
        </div>
      </div>
      <div className="bottompart text-center pb-28 pt-28 bg-[#002249] text-white">
        <h1 className="bg-[#002249] text-4xl font-extrabold pb-4 lg:text-6xl">
          News Feeds
        </h1>
        <p className="bg-[#002249] lg:w-[40%] lg:mx-auto">
          Does any industry face a more complex audience journey and marketing
          sales process than B2B technology.
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-7 items-center justify-center bg-[#002249] mt-[5em]">
          <div className="relative w-[330px] h-[330px] lg:w-[370px] lg:h-[370px] mb-7">
            <Image src="/ser7.webp" alt="img4" fill className="object-cover" />
            <div className="absolute h-full bg-[#00224975] w-full flex flex-col items-start justify-end hover:pb-[230px] text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out pl-6 pb-10 pt-10 pr-5 hover:bg-[#0C59DBEE]">
              <div className="bg-transparent text-xs pl-6">Design/SEO</div>
              <div className="bg-transparent text-left pl-6 text-2xl">
                A series of iOS 7 inspired vector icons.
              </div>
            </div>
          </div>
          <div className="relative w-[330px] h-[330px] lg:w-[370px] lg:h-[370px]  mb-7">
            <Image src="/ser8.webp" alt="img4" fill className="object-cover" />
            <div className="absolute h-full bg-[#00224975] w-full flex flex-col items-start justify-end hover:pb-[230px] text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out pl-6 pb-10 pt-10 pr-5 hover:bg-[#0C59DBEE]">
              <div className="bg-transparent text-xs pl-6">Design/SEO</div>
              <div className="bg-transparent text-left pl-6 text-2xl">
                A series of iOS 7 inspired vector icons.
              </div>
            </div>
          </div>
          <div className="relative w-[330px] h-[330px] lg:w-[370px] lg:h-[370px]  mb-7">
            <Image src="/ser9.webp" alt="img4" fill className="object-cover" />
            <div className="absolute h-full bg-[#00224975] w-full flex flex-col items-start justify-end hover:pb-[230px] text-white font-extrabold text-lg transition-all duration-[400ms] ease-in-out pl-6 pb-10 pt-10 pr-5 hover:bg-[#0C59DBEE]">
              <div className="bg-transparent text-xs pl-6">Design/SEO</div>
              <div className="bg-transparent text-left pl-6 text-2xl">
                A series of iOS 7 inspired vector icons.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
