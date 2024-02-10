import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import Image from "next/image";
import Fireworks from "../public/fireworks.webp";
import Link from "next/link";
export default function IntroSection() {
  return (
    <div id="home" className="relative h-screen z-20">
      <span className={montserrat.className}>
        <h1 className="text-9xl absolute bottom-12 left-12 mix-blend-difference font-bold">
          Web Developer
        </h1>
      </span>
      {/* <h1 className="text-9xl absolute top-1/2 left-1/2 font-bold text-[#fff8]">wha</h1> */}
      <div className="text-right absolute right-14 top-24 text-lg">
        <h1 className="text-6xl [text-shadow:_0_0_10px_#fff] font-semibold">
          Eric Xiao
        </h1>
        <span className="inline-block h-[1px] w-full bg-white"></span>
        <span className="flex space-x-3 font-light text-3xl flex-col mt-6">
          <Link
            className="ml-auto hover:[text-shadow:_0_0_10px_#fff] transition-[text-shadow]"
            href={"#about"}
          >
            About
          </Link>
          <Link
            className="ml-auto hover:[text-shadow:_0_0_10px_#fff] transition-[text-shadow]"
            href={"#projects"}
          >
            Projects
          </Link>
          <Link
            className="ml-auto hover:[text-shadow:_0_0_10px_#fff] transition-[text-shadow]"
            href={"#contact"}
          >
            Contact
          </Link>
        </span>
      </div>
      <Image
        src={Fireworks}
        alt="fireworks"
        className="min-w-full h-screen -z-10 object-cover"
        draggable="false"
      />
    </div>
  );
}
