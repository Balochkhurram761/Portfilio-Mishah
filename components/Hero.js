"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

function Hero() {
  return (
    <section className="bg-[#0B0B0F] text-white">
      <div className="px-8 py-7 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-[#FF7A00] font-semibold uppercase tracking-widest mb-2">
            Video Editor
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-1">
            Transforming{" "}
            <span className="text-[#FF7A00]">Vision Into Story</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
            I create cinematic videos that captivate, engage and inspire. From
            concept to final cut - I bring your story to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/portfolio"
              className="bg-[#FF7A00] flex items-center gap-1 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-medium"
            >
              View My Work <FaLongArrowAltRight />
            </Link>

            <Link
              href="/Misbah_Tahir_Professional_CV.pdf"
              download target="_blank"
              className="border flex items-center gap-1 border-gray-700 hover:border-[#FF7A00] transition px-8 py-4 rounded-2xl font-medium"
            >
              <FaLongArrowAltDown />
              Download Resume
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-[#FF7A00]">
                <CountUp start={0} end={50} duration={5} />+
              </h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FF7A00]">
                {" "}
                <CountUp start={0} end={3} duration={5} />+
              </h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FF7A00]">
                {" "}
                <CountUp start={0} end={30} duration={5} />+
              </h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FF7A00]">
                {" "}
                <CountUp start={0} end={100} duration={5} />
                M+
              </h3>
              <p className="text-gray-400 text-sm">Views Generated</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-gray-800">
            <Image
              src="/editor.png"
              alt="Video Editor"
              width={700}
              height={600}
              className="w-full h-[600px] object-cover"
              priority
            />
          </div>

          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-[#151515] border border-gray-700 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <div>
                <p className="text-xs text-gray-400">Available for</p>
                <p className="font-semibold">Fiverr Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
