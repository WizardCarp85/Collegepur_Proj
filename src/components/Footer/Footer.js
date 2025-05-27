import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer text-white bg-[#00152e] w-full">
      <div className="upperpart bg-[#00152e] flex flex-col lg:flex-row justify-start lg:gap-[7em] gap-[3.5em] mx-auto lg:py-[6em] py-[5em] w-[80%] lg:w-auto border-b-[0.3px] border-[#616161]">
        <div className="bg-[#00152e] lg:w-[32%]">
          <Image
            src="/footer.webp"
            alt="desc"
            width={164}
            height={30}
            className="bg-[#00152e] pb-8"
          />
          <p className="bg-[#00152e] pb-8 text-[#c2d1e2] tracking-wide leading-7">
            The web has changed a lot since Vitaly posted his first article back
            in 2006. The team at Smashing has changed too, as have the things
            that we bring to our community onferences, books, and our membership
            added to the online magazine.
          </p>
          <p className="bg-[#00152e] text-[#c2d1e2] tracking-wide leading-7 lg:w-[90%]">
            One thing that hasn’t changed is that we’re a small team — with most
            of us not working
          </p>
        </div>
        <div className="bg-[#00152e] flex flex-col gap-8">
          <div className="bg-[#00152e] text-4xl font-extrabold pb-3">Pages</div>
          <div className="bg-[#00152e] text-[#c2d1e2] flex flex-row gap-12 ">
            <div className="bg-[#00152e]">
              <ul className="list-none">
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Home
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Services
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  About
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Career
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Refund
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Terms
                </li>
              </ul>
            </div>
            <div className="bg-[#00152e]">
              <ul className="list-none">
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Details
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Contact
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Business
                </li>
                <li className="bg-[#00152e] text-sm tracking-wider cursor-pointer w-[90px]">
                  <i className="fa-solid fa-chevron-right bg-[#00152e] text-xs mr-2 pb-8"></i>
                  Affiliate
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#00152e] lg:w-[32%]">
          <h4 className="bg-[#00152e] text-4xl font-extrabold pb-8">
            Working Hours
          </h4>
          <ul className="list-none">
            <li className="bg-[#00152e] text-lg tracking-widest text-[#c2d1e2] pb-2">
              Monday - Friday: 7:00 - 17:00
            </li>
            <li className="bg-[#00152e] text-lg tracking-widest text-[#c2d1e2] pb-2">
              Saturday: 7:00 - 12:00
            </li>
            <li className="bg-[#00152e] text-lg tracking-widest text-[#c2d1e2] pb-4">
              Sunday and holidays: 8:00 - 10:00
            </li>
          </ul>
          <p className="bg-[#00152e] text-[#c2d1e2] text-sm tracking-wider leading-7">
            <span className="font-extrabold bg-[#00152e] text-white">
              For more then 30 years,
            </span>{" "}
            IT Service has been a reliable partner in the field of logistics and
            cargo forwarding.
          </p>
          <i className="fa-solid fa-chevron-right bg-[#00152e] text-[10px] mr-2 pb-8 pt-5 text-[#0c59db]"></i>
          <span className="bg-[#00152e]  text-sm text-[#0c59db] font-extrabold tracking-wider cursor-pointer">
            Discover More
          </span>
        </div>
      </div>

      <div className="lowerpart bg-[#00152e] flex justify-around items-center p-7">
        <h4 className="bg-[#00152e] text-[#c2d1e2] text-sm">
          Copyright By@{" "}
          <span className="font-bold text-white bg-[#00152e]">WebTend</span> -
          2021
        </h4>
      </div>
    </div>
  );
};

export default Footer;
