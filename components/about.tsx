import { ReactNode, useEffect, useRef } from "react";
import Me from "@/public/me.webp";
import Image from "next/image";
import Page from "@/components/page";
import WordCloud from "@/components/wordCloud";
import Link from "next/link";

function HL({ children }: { children?: ReactNode }) {
  return <span className="font-bold glo">{children}</span>;
}

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
        <div className="bg-bg3 xl:p-20 md:p-10 p-6 font-light bg-opacity-80 text-xl space-y-4">
          <h2 className="text-6xl mb-5 font-black glo">About Me</h2>

          <div>
            Hi! I&rsquo;m Eric; I am a programmer from Canada currently focused
            on full-stack <HL>web development</HL>. I have been learning and
            working on coding and web development for many years and have built
            many projects. All of my projects are on Github and are public to
            see and contribute to.
          </div>

          <div>
            In addition to programming, I have also taken an interest in{" "}
            <HL>teaching coding</HL> to students, trying to learn different
            methods of teaching and explaining the knowledge I have obtained
            from self-learning programming. I have taught classes on C++, Java,
            Arduino, and hope to continue in the future.
          </div>

          <div>
            Apart from coding, I enjoy <HL>photography</HL> and learning various
            random skills, which I have <HL>built projects about</HL>{" "}
            <Link
              href="https://nycrat.github.io/doomsday-rule-practice"
              className="underline"
            >
              (prime example here)
            </Link>
            .
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
