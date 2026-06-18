"use client";
import Link from "next/link";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="py-20 bg-[#090909] text-white">
      <div className=" px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Skills */}
          <div className="bg-[#111] border border-orange-500/10 rounded-2xl p-8">
            <h2 className="text-4xl font-bold mb-8">
              My <span className="text-orange-500">Skills</span>
            </h2>

            {[
              { name: "Adobe Premiere Pro", value: 95 },
              { name: "After Effects", value: 85 },
              { name: "DaVinci Resolve", value: 90 },
              { name: "Color Grading", value: 90 },
              { name: "Sound Design", value: 80 },
              { name: "Motion Graphics", value: 85 },
            ].map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Software Icons */}
            <div className="flex gap-4 mt-8 flex-wrap">
              <div className="w-14 h-14 rounded-xl border border-orange-500 flex items-center justify-center bg-black">
                <Image
                  src="/pr.jpg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>

              <div className="w-14 h-14 rounded-xl border border-orange-500 flex items-center justify-center bg-black">
                <Image
                  src="/Adobeaftereffects.jpg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
              <div className="w-14 h-14 rounded-xl border border-orange-500 flex items-center justify-center bg-black">
                <Image
                  src="/adobe photoshop1.jpg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
              <div className="w-14 h-14 rounded-xl border border-orange-500 flex items-center justify-center bg-black">
                <Image
                  src="/DaVinciREsolve.jpg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
              <div className="w-14 h-14 rounded-xl border border-orange-500 flex items-center justify-center bg-black">
                <Image
                  src="/abodbe audition 1.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-[#111] border border-orange-500/10 rounded-2xl p-8">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              I'm a passionate video editor with 3+ years of experience turning
              ideas into visually stunning videos. I specialize in crafting
              engaging content that connects with audiences and delivers
              results.
            </p>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-black rounded-xl p-4 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Creative Storytelling
                  </h4>
                  <p className="text-sm text-gray-400">
                    Turning ideas into visual masterpieces.
                  </p>
                </div>

                <div className="bg-black rounded-xl p-4 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Attention To Detail
                  </h4>
                  <p className="text-sm text-gray-400">Every frame matters.</p>
                </div>

                <div className="bg-black rounded-xl p-4 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Fast Turnaround
                  </h4>
                  <p className="text-sm text-gray-400">On-time delivery.</p>
                </div>

                <div className="bg-black rounded-xl  p-4 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Client Satisfaction
                  </h4>
                  <p className="text-sm text-gray-400">
                    Focused on quality results.
                  </p>
                </div>
              </div>

              <Link
                href="/Misbah_Tahir_Professional_CV.pdf"
                download
                target="_blank"
                className="cursor-pointer w-[190px] bg-orange-500 hover:bg-orange-600 px-6 py-4  rounded-lg transition"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-[#111] border border-orange-500/10 rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image
                src="/m.jpg"
                alt="Video Editor"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-orange-500">
                  EditVerse
                </h3>

                <p className="text-gray-300">Professional Video Editor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
