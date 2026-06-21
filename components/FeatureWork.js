"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import projects from "../data/projects";
import { useRouter } from "next/navigation";

function FeaturedWork() {
  const [durations, setDurations] = useState({});
 const router=useRouter()
  // format seconds → 00:00
  const formatDuration = (seconds) => {
    if (!seconds || isNaN(seconds)) return "00:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <section className="py-20 bg-black">
      <div className=" px-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-white">
            Featured <span className="text-orange-500">Work</span>
          </h2>

          <button
            onClick={() => router.push("/projects")}
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            View All Projects
            
          </button>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* VIDEO THUMBNAIL */}
              <div className="relative overflow-hidden rounded-xl border border-orange-500/20">
                <video
                  src={project.video}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                  onLoadedMetadata={(e) => {
                    const video = e.target;

                    if (!video) return;

                    setDurations((prev) => ({
                      ...prev,
                      [project.id]: formatDuration(video.duration),
                    }));

                    // move to 1 sec frame for thumbnail look
                    video.currentTime = 1;
                  }}
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <FaPlay className="text-white ml-1" />
                  </div>
                </div>

                {/* duration */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {durations[project.id] || "00:00"}
                </div>
              </div>

              {/* text */}
              <div className="mt-4">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
