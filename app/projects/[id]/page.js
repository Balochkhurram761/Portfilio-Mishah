"use client";

import { useParams } from "next/navigation";
import projects from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();

  const project = projects.find(
    (p) => p.id.toString() === params.id
  );

  if (!project) {
    return (
      <div className="text-white bg-black min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl ">

        {/* VIDEO WRAPPER */}
        <div className="relative rounded-2xl overflow-hidden border border-orange-500/30 shadow-2xl">

          <video
            className="w-full aspect-video  bg-black"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src={project.video} type="video/mp4" />
          </video>

        </div>

        {/* TEXT */}
        <div className="mt-6 text-center">

          <h1 className="text-white text-3xl font-bold">
            {project.title}
          </h1>

          <p className="text-gray-400 mt-2">
            {project.category}
          </p>

        </div>

      </div>
    </section>
  );
}