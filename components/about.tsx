import { useEffect } from "react";
import { Montserrat } from "next/font/google";

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
    const marketing =
      "Next.js React.js Tailwind AWS SEO Typescript C++ Rust Javascript Python HTML CSS Redux Rocket.rs Node.js Express MongoDB MySql Lightsail Docker REST Gatsby.js JWT UI/UX Solid.js Wordpress";
    const words_attr: Word[] = [];
    string_handle(marketing);

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

      for (let i = 0; i < words_attr.length; i++) {
        words_attr[i].x = Math.random() * w;
        words_attr[i].y = Math.random() * h;
      }

      const update = () => {
        context.strokeStyle = "black";
        context.fillStyle = "#fff";
        context.lineWidth = 2;

        for (let i = 0; i < words_attr.length; i++) {
          context.font = words_attr[i].font;
          context.fillText(
            words_attr[i].text,
            words_attr[i].x,
            words_attr[i].y,
          );
          words_attr[i].width = context.measureText(words_attr[i].text).width;
          context.stroke();
        }

        for (let i = 0; i < words_attr.length; i++) {
          if (words_attr[i].x > w) {
            words_attr[i].x = -words_attr[i].width;
            words_attr[i].y = Math.random() * h;
          } else {
            words_attr[i].x += words_attr[i].speed;
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
        words_attr.push({
          text: split_str[i],
          x: 0,
          y: 0,
          width: 0,
          font: (Math.random() * 50 + 15).toString() + "px Arial",
          speed: (Math.random() * 2) / 3 + 1,
        });
      }
    }
  }, []);

  return <canvas id="words" className="max-h-full w-full"></canvas>;
};

export default function AboutSection() {
  return (
    <div
      id="about"
      className="h-[calc(100vh-70px)] grid grid-cols-3 grid-rows-1 gap-4 relative 
                 bg-gradient-to-r from-bg3 to-bg2"
    >
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <WordCloud />
      </div>

      <div className="z-10 overflow-visible">
        <div className="bg-bg3 m-14 shadow-[0_0_40px_50px_#110a19]">
          <h2 className="text-4xl mb-5 font-semibold">About Me</h2>
          <div>
            Hi! I&rsquo;m Eric; I am a programmer from Canada currently focused
            on full-stack web development. I have been learning and working on
            coding and web development for many years and have built many
            projects. All of my projects are on Github and are public to see and
            contribute to.
          </div>
          <div className="mt-2">
            Apart from coding, I enjoy photography and sports such as table
            tennis and golf. I am interested in not only programming but also
            teaching, I have taught classes on C++ and hope to continue in the
            future on various different topics.
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-[#0009] z-40 m-14">
        probably image here later
      </div>
    </div>
  );
}
