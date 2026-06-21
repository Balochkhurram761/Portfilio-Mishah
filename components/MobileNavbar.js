"use client";

import Link from "next/link";
import { IoClose } from "react-icons/io5";

function MobileNavbar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#0B0B0F] border-l border-gray-800 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h2 className="text-white text-xl font-bold">
            <span>Edit</span>
            <span className="text-[#FF7A00]">Verse</span>
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-white text-3xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-5 gap-5 text-white">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF7A00] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF7A00] transition"
          >
            About
          </Link>

          <Link
            href="/#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF7A00] transition"
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF7A00] transition"
          >
            Portfolio
          </Link>

          <Link
            href="/#testimonials"
            onClick={() => setIsOpen(false)}
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

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#FF7A00] text-center py-3 rounded-full font-medium hover:opacity-90"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
