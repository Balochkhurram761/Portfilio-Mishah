import Link from "next/link";
import { BiSolidMovie } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="w-full px-5 py-2 bg-[#0B0B0F] border-b border-gray-800">
      <div className="  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl text-[#FF7A00]">
            <BiSolidMovie />
          </span>

          <h1 className="text-3xl font-bold">
            <span className="text-white">Edit</span>
            <span className="text-[#FF7A00]">Verse</span>
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          <Link
            href="/"
            className="text-[#FF7A00] border-b-2 border-[#FF7A00] pb-1"
          >
            Home
          </Link>

          <Link href="/about" className="hover:text-[#FF7A00] transition">
            About
          </Link>

          <Link href="#services" className="hover:text-[#FF7A00] transition">
            Services
          </Link>

          <Link href="/portfolio" className="hover:text-[#FF7A00] transition">
            Portfolio
          </Link>

          <Link
            href="/testimonials"
            className="hover:text-[#FF7A00] transition"
          >
            Testimonials
          </Link>

          <Link href="/contact" className="hover:text-[#FF7A00] transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-[#FF7A00] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Let's Work Together
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
