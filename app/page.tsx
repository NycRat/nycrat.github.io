import Image from "next/image";
import Header from "./components/header";
import Fireworks from "../public/fireworks.jpg";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative bg-bg1">
      <Header />
      <div id="about" className="relative h-screen">
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
          className="w-full max-h-screen -z-10 object-cover"
          draggable="false"
        />
      </div>
      {/* TODO - FIX THE ANCHOR OFFSET */}
      <div id="projects" className="h-screen">
        <h2 className="text-4xl">Projects</h2>
        ha
      </div>
      <div id="contact" className="">
        <h2 className="text-4xl">Contact</h2>
        <br />
      </div>
      <Footer />
    </main>
  );
}
