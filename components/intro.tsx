// TODO fix this abomiination
import Image from "next/image";
import Fireworks from "../public/fireworks.webp";
import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";

function SpecialAvahText({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span className="font-bold whitespace-nowrap">
      <h1
        className={"md:text-dyn-4xl mix-blend-difference absolute " + className}
      >
        {children}
      </h1>
      <h1 className={"md:text-dyn-4xl text-[#fffff19a] absolute " + className}>
        {children}
      </h1>
    </span>
  );
}

export default function IntroSection() {
  const parallaxImg = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxImg.current) {
        // @ts-ignore
        parallaxImg.current.style.transform = `translateY(${scrolled * 0.6}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="relative h-screen z-20 overflow-hidden">
      <span>
        <SpecialAvahText className="bottom-8 left-16 hidden md:block">
          Web Developer
        </SpecialAvahText>
        <h1 className="absolute bottom-2 left-2">
          <span className="mix-blend-difference font-bold md:hidden intro-text -rotate-90 [transform-origin:_bottom_left] translate-x-52 whitespace-nowrap flex flex-col h-52">
            Eric Xiao
          </span>
          <span className="mix-blend-difference font-bold md:hidden intro-text whitespace-nowrap flex flex-col pl-2">
            Web <br />
            Developer
          </span>
        </h1>
        <h1 className="absolute bottom-2 left-2">
          <span className="text-[#ffcc] font-bold md:hidden intro-text -rotate-90 [transform-origin:_bottom_left] translate-x-52 whitespace-nowrap flex flex-col h-52">
            Eric Xiao
          </span>
          <span className="text-[#fffc] font-bold md:hidden intro-text whitespace-nowrap flex flex-col pl-2">
            Web <br />
            Developer
          </span>
        </h1>
      </span>
      <div className="text-right absolute right-14 top-24 text-lg hidden md:block">
        <h1 className="text-7xl [text-shadow:_0_0_10px_#fff] font-semibold">
          Eric Xiao
        </h1>
        <span className="inline-block h-[1px] w-full bg-white"></span>
        <span className="flex space-x-3 font-light text-4xl flex-col mt-6">
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
            href={"#experience"}
          >
            Experience
          </Link>
          <Link
            className="ml-auto hover:[text-shadow:_0_0_10px_#fff] transition-[text-shadow]"
            href={"#contact"}
          >
            Contact
          </Link>
        </span>
      </div>
      <div className="relative -z-10">
        <Image
          src={Fireworks}
          alt="fireworks"
          className="min-w-full h-screen object-cover will-change-transform"
          draggable="false"
          ref={parallaxImg}
        />
      </div>
    </div>
  );
}
