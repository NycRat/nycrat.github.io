import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import AboutSection from "../components/about";
import ProjectsSection from "../components/projects";
import ContactSection from "../components/contact";
import Fireworks from "../public/fireworks.webp";

export default function Home() {
  return (
    <main className="relative bg-bg1">
      <Header />
      <div id="home" className="relative h-screen">
        <div className="w-1/4 text-right absolute right-0 m-14 top-1/4 text-lg">
          {/* <h1 className="text-2xl"></h1> */}
          {/* TODO - REWRITE THIS THINGY */}
          My name is Eric; I am currently a student that has been programming
          for 5 years. I have about 2 years of experience teaching programming
          and also have experience doing full-stack web development on personal
          projects for 2 years.
        </div>
        <Image
          src={Fireworks}
          alt="fireworks"
          className="min-w-full h-screen -z-10 object-cover"
          draggable="false"
        />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
