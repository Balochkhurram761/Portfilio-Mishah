"use client";
import Link from "next/link";
import { useState } from "react";
import { BiSolidMovie } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import MobileNavbar from "../components/MobileNavbar";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handlemenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <nav className="w-full px-5 py-2 bg-[#0B0B0F] border-b border-gray-800">
        <div className="  flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl text-[#FF7A00]">
              <BiSolidMovie />
            </span>

            <h1 className="text-xl md:text-3xl font-bold">
              <span className="text-white">Edit</span>
              <span className="text-[#FF7A00]">Verse</span>
            </h1>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:inline-flex items-center gap-10 text-white font-medium">
            <Link
              href="/"
              className="text-[#FF7A00] border-b-2 border-[#FF7A00] pb-1"
            >
              Home
            </Link>

            <Link href="/about" className="hover:text-[#FF7A00] transition">
              About
            </Link>

            <Link href="/#services" className="hover:text-[#FF7A00] transition">
              Services
            </Link>

            <Link href="/portfolio" className="hover:text-[#FF7A00] transition">
              Portfolio
            </Link>

            <Link
              href="/#testimonials"
              className="hover:text-[#FF7A00] transition"
            >
              Testimonials
            </Link>

            <a
              href="https://wa.me/923427139312"
              target="_blank"
              className="hover:text-[#FF7A00] transition"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center bg-[#FF7A00] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Let's Work Together
          </Link>
          <button
            onClick={handlemenu}
            className="text-white text-2xl cursor-pointer lg:hidden"
          >
           <CiMenuBurger />
          </button>
        </div>
      </nav>
      <div>
      <MobileNavbar isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      </div>
    </>
  );
}

export default Navbar;
