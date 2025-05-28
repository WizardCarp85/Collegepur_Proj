"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="main-div bg-white ">
      {/* first container */}
      <div className="conatiner1 w-full h-[600px] lg:h-[950px] bg-[url('/banner.webp')] bg-cover bg-center pl-2 pt-32 lg:pl-6 lg:pt-48 flex">
        <div className="bg-transparent w-[80%] lg:w-[60%]">
          <h2 className="pl-3 font-extrabold text-xl lg:text-[1.5rem] text-[#002249] bg-transparent pb-4 lg:pb-6 tracking-widest" data-aos="fade-right">
            IT Business Consulting
          </h2>
          <h1 className="pl-3 font-extrabold text-3xl lg:text-8xl text-[#002249] bg-transparent pb-10 lg:pb-12" data-aos="fade-right" data-aos-duration="1400"> 
            Best IT Soluations Provider Agency
          </h1>
          <p className="pl-3 font-extrabold text-sm lg:text-[1rem] text-[#002249] bg-transparent tracking-wider leading-7 pb-12 lg:w-[90%] lg:font-[900]"  data-aos="fade-right" data-aos-duration="1400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo
            inventore veritatis
          </p>
          <button className="group bg-[#0c59db] text-white text-sm tracking-wider px-9 py-5 ml-2 border-[#0c59db] rounded-lg border-2 font-semibold hover:bg-[#002249]  transition-all duration-300" data-aos="fade-up" data-aos-duration="1600">
            Our Services
            <i className="fa-solid fa-arrow-right text-white bg-[#0c59db] group-hover:bg-[#002249] transition-all duration-300 font-thin pl-1"></i>
          </button>
        </div>
        <div>
          <Image
            src="/banner2.webp"
            alt="banner2"
            height={550}
            width={550}
            className="hidden lg:block bg-transparent ml-2"
          ></Image>
        </div>
      </div>
      {/* second container */}
      <div className="container2 lg:mt-8 mb-[6em]">
        <div className="flex flex-col items-center justify-center text-center pt-28 pb-16">
          <h2 className="text-[#0C59DB] font-extrabold tracking-widest text-md pb-3">
            SERVICES
          </h2>
          <h1 className="text-[#002249] font-extrabold text-2xl lg:text-6xl">What We Do</h1>
        </div>
        <div className="minicontainer1 flex flex-col lg:flex-row lg:gap-8 justify-center items-center mr-5 lg:mx-[11em]">
          <div className="group w-[90%] m-auto rounded-lg mb-7 p-10 flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:bg-[#0C59DB] hover:text-white bg-[url('/minicontainer1.webp')] bg-contain bg-center transition-all duration-500 ease-in-out" >
            <i className="fa-solid fa-laptop-code text-6xl text-[#00978E] rounded-full bg-[#00978E1A] group-hover:bg-white px-8 py-9 mb-4"></i>
            <h3 className="font-extrabold text-xl mb-3">IT Soluations</h3>
            <p className="tracking-wide text-sm text-center">
              Sed ut perspiciatis unde omnis iste natus error volup
            </p>
          </div>
          <div className="group w-[90%] m-auto rounded-lg mb-7 p-10 flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:bg-[#0C59DB] hover:text-white bg-[url('/minicontainer1.webp')] bg-contain bg-center transition-all duration-500 ease-in-out">
            <i className="fa-solid fa-fingerprint text-6xl text-[#0C59DB] rounded-full bg-[#0C59DB1A] group-hover:bg-white px-8 py-9 mb-4"></i>
            <h3 className="font-extrabold text-xl mb-3">Security System</h3>
            <p className="tracking-wide text-sm text-center">
              Sed ut perspiciatis unde omnis iste natus error volup
            </p>
          </div>
          <div className="group w-[90%] m-auto rounded-lg mb-7 p-10 flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:bg-[#0C59DB] hover:text-white bg-[url('/minicontainer1.webp')] bg-contain bg-center transition-all duration-500 ease-in-out">
            <i className="fa-solid fa-chalkboard text-6xl text-[#FBB81B] rounded-full bg-[#FBB81B1A] group-hover:bg-white px-8 py-9 mb-4"></i>
            <h3 className="font-extrabold text-xl mb-3">Web Development</h3>
            <p className="tracking-wide text-sm text-center">
              Sed ut perspiciatis unde omnis iste natus error volup
            </p>
          </div>
          <div className="group w-[90%] m-auto rounded-lg mb-7 p-10 pt-12 flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:bg-[#0C59DB] hover:text-white bg-[url('/minicontainer1.webp')] bg-contain bg-center transition-all duration-500 ease-in-out">
            <i className="fa-solid fa-database text-6xl text-[#EF452E] rounded-full bg-[#EF452E1A] group-hover:bg-white px-9 py-8 mb-4"></i>
            <h3 className="font-extrabold text-xl mb-3">Database Security</h3>
            <p className="tracking-wide text-sm text-center">
              Sed ut perspiciatis unde omnis iste natus error volup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
