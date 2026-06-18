import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-orange-500/10 bg-black">
      <div className="mx-auto max-w-8xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Edit<span className="text-orange-500">Verse</span>
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="mailto:misbahbaloch101@gmail.com "
              target="_blank"
              className="flex h-10 w-10 text-white items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <CiMail size={18} />
            </Link>
            <Link
              href="mailto:misbahbaloch101@gmail.com "
              target="_blank"
              className="flex h-10 text-white w-10 white items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <FaYoutube size={18} />
            </Link>

            <Link
              href="#"
              className="flex text-white h-10 w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <FaInstagram size={18} />
            </Link>

            <a
              href="#"
              className="flex h-10 text-white w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 text-white w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2026 EditVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
