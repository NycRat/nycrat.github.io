import Link from "next/link";
import React from "react";
import Photography from "../public/photo.webp";
import Tasker from "../public/tasker.webp";
import Doomsday from "../public/doomsday.webp";
import Fireworks from "../public/fireworks.webp";
import Image, { StaticImageData } from "next/image";
import Page from "./page";

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
      className="relative bg-bg1"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        src={imageSrc}
        alt={"Project: " + name}
        className="min-w-full h-full object-cover"
      />
      <span className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-20 hover:bg-opacity-5 z-20 transition-colors"></span>
      <h2
        className={
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 \
           text-5xl font-bold text-center z-10 [text-shadow:_0_0_30px_#000]"
        }
      >
        {name}
      </h2>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <Page
      id="projects"
      className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 relative"
    >
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-8xl z-50 pointer-events-none glo">
        Projects
      </h2>
      {projects.map((project, i) => (
        <Project key={i} {...project} />
      ))}
    </Page>
  );
}
