"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutSection from "../components/about";
import ProjectsSection from "../components/projects";
import ContactSection from "../components/contact";
import { useEffect } from "react";
import IntroSection from "@/components/intro";

export default function Home() {
  useEffect(() => {
    let header = document.getElementById("header");

    function update() {
      if (header) {
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
  }, []);

  return (
    <main className="relative bg-bg1">
      <Header />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
