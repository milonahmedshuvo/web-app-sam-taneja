"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const DeelnewsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className="bg-white custom-container">
      <div className="">
        <div className="flex justify-between items-center">

          {/* Left Side: Logo */}
          <div  className="flex-shrink-0">
            <Link href="/">
              <Image src='https://corp.dealnews.com/wp-content/uploads/2021/10/logo.png' width={150} height={500} alt="logo" />
            </Link>
          </div>



          {/* Right Side: Nav Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-6 items-center mt-3">
            <Link href="/" className="text-[#232323] text-[19px] hover:text-[#3e5aa7] mulish">
              Home
            </Link>
            <Link href="/about" className="text-[#232323] text-[19px] hover:text-[#3e5aa7] mulish">
              About Us
            </Link>
            <Link href="/services" className="text-[#232323] text-[19px] hover:text-[#3e5aa7] mulish">
              Press Room
            </Link>
            <Link href="/contact" className="text-[#232323] text-[19px] hover:text-[#3e5aa7] mulish">
              Careers
            </Link>
            <Link href="/contact" className="text-[#232323] text-[19px] hover:text-[#3e5aa7] mulish">
              FAQs
            </Link>
            <Link href="/contact" className="text-white text-[16px] py-4 px-7 rounded bg-[#3e5aa7] mulish ">
               <button className="text-white mulish">DeelNews.com</button>
            </Link>
          </div>



          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <Link href="/" className="text-[#232323] text-[18px] hover:text-[#3e5aa7] mulish">
            Home
          </Link>
          <Link href="/about" className="text-[#232323] text-[18px] hover:text-[#3e5aa7] mulish">
            About
          </Link>
          <Link href="/services" className="text-[#232323] text-[18px] hover:text-[#3e5aa7] mulish">
            Services
          </Link>
          <Link href="/contact" className="text-[#232323] text-[18px] hover:text-[#3e5aa7] mulish">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default DeelnewsNavbar;
