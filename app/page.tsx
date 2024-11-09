"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutSection from "../components/about";
import ProjectsSection from "../components/projects";
import { useEffect } from "react";
import IntroSection from "@/components/intro";
import ExperienceSection from "@/components/experience";

export default function Home() {
  useEffect(() => {
    let header = document.getElementById("header");

    function update() {
      if (header) {
        if (window.innerWidth < 768) {
          header.style.setProperty("--header-opacity", "1");
          return;
        }
        if (window.scrollY >= window.outerHeight) {
          header.style.setProperty("--header-opacity", "1");
        } else {
          header.style.setProperty(
            "--header-opacity",
            (
              window.scrollY /
              (window.outerHeight - header.offsetHeight)
            ).toString(),
          );
        }
      }
    }

    update();

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main className="relative bg-bg1">
      <Header />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
