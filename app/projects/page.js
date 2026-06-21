"use client";

import projects from "@/data/projects";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-black min-h-screen">
      <div className=" px-6">

        <h1 className="text-4xl text-white font-bold mb-10">
          All <span className="text-orange-500">Projects</span>
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl border border-orange-500/20">

                <video
                  src={project.video}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition"
                  onLoadedMetadata={(e) => {
                    e.target.currentTime = 1;
                  }}
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <FaPlay className="text-white ml-1" />
                  </div>
                </div>

              </div>

              <h3 className="text-white mt-3 font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.category}
              </p>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}