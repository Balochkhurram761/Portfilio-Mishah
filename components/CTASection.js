import { ArrowRight } from "lucide-react";
import { BiSolidMovie } from "react-icons/bi";
function CTASection() {
  return (
    <section className=" px-6 py-10 bg-[#0B0B0F]">
      <div className="flex flex-col  broder border-[#ff7a00] md:flex-row items-center justify-between gap-6 rounded-2xl border border-orange-500/20 bg-[#111] p-8">
        <div className="rap flex-col flex sm:flex-row gap-3 items-center">
          <span className="text-2xl  text-[#FF7A00]">
            <BiSolidMovie size={50} />
          </span>

          <div>
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              Let's Create Something Amazing Together!
            </h2>
            <p className="mt-2 text-gray-400">
              Have a project in mind? Let's discuss and create magic.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600 transition">
          Get In Touch
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default CTASection;
