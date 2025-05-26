"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar1 from "../Navbar/Navbar1/Navbar1";
import Navbar2 from "../Navbar/Navbar2.js/Navbar2";

const Header = () => {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <>
      {isHome ? (
        <Navbar1 />
      ) : (
        <div>
          <Navbar2 />
        </div>
      )}
    </>
  );
};

export default Header;
