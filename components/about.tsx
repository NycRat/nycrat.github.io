import { useEffect, useRef } from "react";
import Me from "@/public/me.webp";
import Image from "next/image";
import Page from "@/components/page";
import WordCloud from "@/components/wordCloud";

export default function AboutSection() {
  const parallaxImg = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY - window.innerHeight;
      if (parallaxImg.current) {
        // @ts-ignore
        parallaxImg.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Page
      id="about"
      className="lg:grid grid-cols-5 relative bg-gradient-to-r from-bg3 to-bg2 flex flex-col"
    >
      {/* TODO fix the flex col mobile view */}
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <WordCloud />
      </div>

      <div className="z-10 col-span-2">
        <div className="bg-bg3 xl:p-20 md:p-10 p-6 font-light bg-opacity-80">
          <h2 className="text-6xl mb-5 font-black glo">About Me</h2>
          <div className="text-xl">
            Hi! I&rsquo;m Eric; I am a programmer from Canada currently focused
            on full-stack web development. I have been learning and working on
            coding and web development for many years and have built many
            projects. All of my projects are on Github and are public to see and
            contribute to.
          </div>
          <div className="mt-2 text-xl">
            Apart from coding, I enjoy photography and learning various random
            skills. I am interested in not only learning programming but also
            teaching, I have taught classes on C++ and hope to continue in the
            future on various different topics.
          </div>
        </div>
      </div>
      <div className="col-span-3 z-40 overflow-hidden">
        <Image
          src={Me}
          alt="Me, Eric Xiao"
          className="object-cover w-full h-full"
          ref={parallaxImg}
        />
      </div>
    </Page>
  );
}
