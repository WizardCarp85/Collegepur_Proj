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
          <h2
            className="pl-3 font-extrabold text-xl lg:text-[1.5rem] text-[#002249] bg-transparent pb-4 lg:pb-6 tracking-widest"
            data-aos="fade-right"
          >
            IT Business Consulting
          </h2>
          <h1
            className="pl-3 font-extrabold text-3xl lg:text-8xl text-[#002249] bg-transparent pb-10 lg:pb-12"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            Best IT Soluations Provider Agency
          </h1>
          <p
            className="pl-3 font-extrabold text-sm lg:text-[1rem] text-[#002249] bg-transparent tracking-wider leading-7 pb-12 lg:w-[90%] lg:font-[900]"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo
            inventore veritatis
          </p>
          <button
            className="group bg-[#0c59db] text-white text-sm tracking-wider px-9 py-5 ml-2 border-[#0c59db] rounded-lg border-2 font-semibold hover:bg-[#002249]  transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
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
          <h1 className="text-[#002249] font-extrabold text-2xl lg:text-6xl">
            What We Do
          </h1>
        </div>
        <div className="minicontainer1 flex flex-col lg:flex-row lg:gap-8 justify-center items-center lg:mx-[11em]">
          <div className="group w-[90%] m-auto rounded-lg mb-7 p-10 flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:bg-[#0C59DB] hover:text-white bg-[url('/minicontainer1.webp')] bg-contain bg-center transition-all duration-500 ease-in-out">
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
      {/* third conatainer */}
      <div className="container3 bg-[#F5FAFF] flex flex-col lg:flex-row justify-center lg:gap-[6em] items-center pb-[8em] lg:pb-[2em] mb-[6em]">
        <div className="images w-full flex flex-col justify-center items-center gap-4 py-[6em] lg:pr-1">
          <Image
            src="/container3pic1.webp"
            alt="container3"
            height={459}
            width={373}
            className="border-[1em] border-white lg:h-[80%] lg:w-[80%] lg:ml-36"
          ></Image>
          <Image
            src="/container3pic2.webp"
            alt="container3"
            height={459}
            width={373}
            className="border-[1em] border-white lg:h-[80%] lg:w-[80%] lg:ml-36"
          ></Image>
        </div>
        <div className="images-content pl-24">
          <h2 className="text-[#0C59DB] font-extrabold text-md tracking-widest pb-3">
            CORE FEATURES
          </h2>
          <h2 className="text-[#002249] font-extrabold text-4xl w-[70%] pb-8 lg:text-6xl">
            Get More Good Experience.
          </h2>
          <p className="text-[#69A1BB] font-medium text-2xl pb-8">
            Our knowledge of computers will help us
          </p>
          <p className="text-[#69A1BB] text-sm pb-8 pr-24 tracking-widest leading-6 lg:w-[80%]">
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology? Consider the number of people who
            influence a sale, the length of the decision-making cycle, the
            competing interests of the people who purchase, implement, manage,
            and use the technology. It’s a lot meaningful content here.
          </p>
          <button className="bg-[#0C59DB] px-8 py-4 items-center font-semibold tracking-wider mr-8 text-white">
            Learn More
          </button>
          <span />
          <button className="bg-[#B7C3D6] px-8 py-4 items-center font-semibold tracking-wider mr-8 text-white">
            <i className="fa-solid fa-video pr-2"></i>Intro Video
          </button>
        </div>
      </div>
      {/* Fourth Container */}
      <div className="container4 flex flex-col items-center justify-center pb-[7em] lg:pt-8">
        <h2 className="text-[#0C59DB] text-sm text-center font-extrabold px-12 tracking-widest pb-4">
          OUR LATEST SERVICES
        </h2>
        <h1 className="text-[#002249] text-4xl text-center font-extrabold px-12 pb-12 lg:text-6xl lg:px-[6em]">
          We Offer Better Soluation For Your IT Business
        </h1>
        <div className="px-[8em] py=[2em] flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:px-[6em] lg:py-[4em]">
          <div className="p-8 bg-[#F5FAFF]">
            <i className="fa-solid fa-laptop-code text-5xl pb-5 text-[#ef452e]"></i>
            <h2 className="font-extrabold pb-6 text-2xl">Desktop Computing</h2>
            <p className="tracking-widest text-sm leading-6 text-[#616161]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantiutotam
            </p>
          </div>
          <div className="p-8 bg-[#F5FAFF]">
            <i className="fa-solid fa-laptop-code text-5xl pb-5 text-[#FBB81B]"></i>
            <h2 className="font-extrabold pb-6 text-2xl">Desktop Computing</h2>
            <p className="tracking-widest text-sm leading-6 text-[#616161]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantiutotam
            </p>
          </div>
          <div className="p-8 bg-[#F5FAFF]">
            <i className="fa-solid fa-laptop-code text-5xl pb-5 text-[#006DE8]"></i>
            <h2 className="font-extrabold pb-6 text-2xl">Desktop Computing</h2>
            <p className="tracking-widest text-sm leading-6 text-[#616161]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantiutotam
            </p>
          </div>
          <div className="p-8 bg-[#F5FAFF]">
            <i className="fa-solid fa-laptop-code text-5xl pb-5 text-[#006DE8]"></i>
            <h2 className="font-extrabold pb-6 text-2xl">Desktop Computing</h2>
            <p className="tracking-widest text-sm leading-6 text-[#616161]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantiutotam
            </p>
          </div>
          <div className="p-8 bg-[#F5FAFF]">
            <i className="fa-solid fa-laptop-code text-5xl pb-5 text-[#ef452e]"></i>
            <h2 className="font-extrabold pb-6 text-2xl">Desktop Computing</h2>
            <p className="tracking-widest text-sm leading-6 text-[#616161]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantiutotam
            </p>
          </div>
          <div className="p-8 bg-[#F5FAFF]">
            <i className="fa-solid fa-laptop-code text-5xl pb-5 text-[#00978E]"></i>
            <h2 className="font-extrabold pb-6 text-2xl">Desktop Computing</h2>
            <p className="tracking-widest text-sm leading-6 text-[#616161]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantiutotam
            </p>
          </div>
        </div>
      </div>
      {/* Fifth container */}
      <div className="container6 bg-[#0c59db] bg-[url('/container5bg.webp')] bg- -full pb-[7rem] lg:pl-[6em] lg:pt-[2em] lg:pb-[12em]">
        <div className="cont5-heading flex flex-col px-[4em] py-[6em] text-white lg:flex-row lg:justify-between lg:items-center">
          <div className="heading w-[90%]">
            <h2 className="font-extrabold text-sm pb-4 tracking-widest">LATEST CASE STUDIES</h2>
            <h1 className="font-extrabold text-4xl pb-8 lg:text-6xl lg:w-[50%]">Reads Our Recent Case Studies</h1>
          </div>
          <div className="head-navigate w-[20%]">
            <i className="fa-solid fa-arrow-left bg-[#FFFFFF1A] p-5 border border-[#0C59DB] rounded-full text-sm mr-3 hover:bg-white hover:text-[#0C59DB] lg:scale-125 cursor-pointer"></i>
            <i className="fa-solid fa-arrow-right bg-[#FFFFFF1A] p-5 border border-[#0C59DB] rounded-full text-sm hover:bg-white hover:text-[#0C59DB] lg:scale-125 lg:ml-4 cursor-pointer"></i>
          </div>
        </div>
        <div className="cont5-img flex flex-row justify-center items-center gap-12 lg:pt-8">
          <Image
            src="/container5pic1.webp"
            alt="container5img"
            height={320}
            width={240}
            className="lg:scale-150 mr-40 hover:brightness-50 transition-all duration-700 ease-in-out"
          ></Image>
          <Image
            src="/container5pic2.webp"
            alt="container5img"
            height={320}
            width={240}
            className="lg:scale-150 mr-40 hover:brightness-50 transition-all duration-700 ease-in-out"
          ></Image>
          <Image
            src="/container5pic3.webp"
            alt="container5img"
            height={320}
            width={240}
            className="lg:scale-150 hover:brightness-50 transition-all duration-700 ease-in-out"
          ></Image>
        </div>
      </div>
    </div>
  );
}
