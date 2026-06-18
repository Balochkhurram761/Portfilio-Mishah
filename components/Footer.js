import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 transition"
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
