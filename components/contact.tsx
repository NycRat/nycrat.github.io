import Link from "next/link";

export default function ContactSection() {
  return (
    <div id="contact" className="p-10">
      <div className="w-fit">
        <h2 className="text-4xl inline font-semibold">Contact Me, </h2>
        <span className="text-2xl font-light">
          for a{" "}
          <span className="[text-shadow:_0_0_10px_#fff] font-medium">
            website
          </span>
          , to{" "}
          <span className="[text-shadow:_0_0_10px_#fff] font-medium">
            learn
          </span>
          , or for whatever other reason{" "}
          <span className="[text-shadow:_0_0_10px_#fff] font-medium">:P</span>
        </span>
        <span className="h-[1px] bg-white block"></span>
      </div>

      <div className="mt-5 pl-10 text-lg">
        <Link
          href="mailto:ericxiao0000@gmail.com"
          className="transition-all hover:[text-shadow:_0_0_4px_#fff] hover:pl-5"
        >
          &rarr; Email:{" "}
          <span className="underline font-semibold">
            ericxiao0000@gmail.com
          </span>
        </Link>
        <br />
        <Link
          href="https://github.com/NycRat"
          className="transition-all hover:[text-shadow:_0_0_4px_#fff] hover:pl-5"
        >
          &rarr; Github: <span className="underline font-semibold">NycRat</span>
        </Link>
      </div>
    </div>
  );
}
