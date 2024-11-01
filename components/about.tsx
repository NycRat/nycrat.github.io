import { useEffect, useRef } from "react";
import Me from "../public/me.webp";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Word {
  text: string;
  x: number;
  y: number;
  width: number;
  font: string;
  speed: number;
}

const WordCloud = () => {
  useEffect(() => {
    const words_string =
      "Next.js React.js Tailwind AWS SEO Typescript C++ Rust Javascript Python HTML CSS Redux Rocket.rs Node.js Express MongoDB MySql Lightsail Docker REST Gatsby.js JWT UI/UX Solid.js Wordpress";
    const words: Word[] = [];
    string_handle(words_string);

    const canvas = document.getElementById("words") as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }

    let w = 0;
    let h = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      w = canvas.width;
      h = canvas.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (canvas.getContext) {
      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      for (let i = 0; i < words.length; i++) {
        words[i].x = Math.random() * w;
        words[i].y = Math.random() * h;
      }

      const update = () => {
        context.strokeStyle = "black";
        context.fillStyle = "#fff";
        context.lineWidth = 2;

        for (let i = 0; i < words.length; i++) {
          context.font = words[i].font;
          context.fillText(words[i].text, words[i].x, words[i].y);
          words[i].width = context.measureText(words[i].text).width;
          context.stroke();
        }

        for (let i = 0; i < words.length; i++) {
          if (words[i].x > w) {
            words[i].x = -words[i].width;
            words[i].y = Math.random() * h;
          } else {
            words[i].x += words[i].speed;
          }
        }
      };

      const interval = setInterval(() => {
        context.clearRect(0, 0, w, h);
        update();
      }, 15);
      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", resizeCanvas);
      };
    }

    function string_handle(str: string) {
      const split_str = str.split(" ");
      for (let i = 0; i < split_str.length; i++) {
        words.push({
          text: split_str[i],
          x: 0,
          y: 0,
          width: 0,
          font:
            (Math.random() * 50 + 15).toString() +
            "px " +
            montserrat.style.fontFamily,
          speed: (Math.random() * 2) / 3 + 1,
        });
      }
    }
  }, []);

  return <canvas id="words" className="max-h-full w-full"></canvas>;
};

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
    <div
      id="about"
      className="min-h-[calc(100svh-70px)] lg:grid grid-cols-5 gap-2 relative 
                 bg-gradient-to-r from-bg3 to-bg2 flex flex-col"
    >
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <WordCloud />
      </div>

      <div className="z-10 overflow-visible col-span-2">
        <div className="bg-bg3 xl:p-20 md:p-10 p-6 lg:shadow-[0_0_40px_50px_#110a19] font-light bg-opacity-80 lg:bg-opacity-100">
          <h2 className="text-6xl mb-5 font-semibold">About Me</h2>
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
      <div className="col-span-3 z-40 lg:p-14 lg:pl-4 mx-4 h-full p-2">
        <div className="w-full h-full overflow-hidden rounded-md">
          <Image
            src={Me}
            alt="Me, Eric Xiao"
            className="object-cover w-full h-full rounded-md"
            ref={parallaxImg}
          />
        </div>
      </div>
    </div>
  );
}
