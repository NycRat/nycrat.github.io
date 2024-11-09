import { useEffect } from "react";
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

export default function WordCloud() {
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
}
