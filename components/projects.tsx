import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import Photography from "../public/photo.webp";
import Tasker from "../public/tasker.webp";
import Doomsday from "../public/doomsday.webp";
import Fireworks from "../public/fireworks.webp";
import Image, { StaticImageData } from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

interface ProjectProps {
  name: string;
  link: string;
  imageSrc: StaticImageData;
}

const projects: ProjectProps[] = [
  {
    name: "Photography",
    link: "https://nycrat.github.io/photo-gallery/",
    imageSrc: Photography,
  },
  {
    name: "Student Tasker",
    link: "https://vancouver-shackers.github.io/student-tasker/",
    imageSrc: Tasker,
  },
  {
    name: "Doomsday Rule",
    link: "https://nycrat.github.io/doomsday-rule-practice/",
    imageSrc: Doomsday,
  },
  {
    name: "Personal Site",
    link: "https://nycrat.github.io/",
    imageSrc: Fireworks,
  },
];

function Project({ name, link, imageSrc }: ProjectProps) {
  return (
    <Link
      href={link}
      className="relative border-transparent bg-bg1"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        src={imageSrc}
        alt={"Project: " + name}
        className="min-w-full h-full object-cover"
      />
      <span className="absolute left-0 right-0 top-0 bottom-0 bg-[#0013] hover:bg-transparent z-20 transition-colors"></span>
      <span className="absolute left-0 right-0 top-0 bottom-0 bg-[#0001]"></span>
      <h2
        className={
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 \
           text-5xl font-medium text-center z-10 [text-shadow:_0_0_10px_#000] " +
          montserrat.className
        }
      >
        {name}
      </h2>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="h-[calc(100vh-70px)] grid grid-cols-2 grid-rows-2 relative"
    >
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-7xl z-50 pointer-events-none [text-shadow:_0_0_10px_#fffb]">
        Projects
      </h2>
      {projects.map((project, i) => (
        <Project {...project} key={i} />
      ))}
    </div>
  );
}
