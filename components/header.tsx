import Link from "next/link";

export default function Header() {
  return (
    <header
      className="p-4 border-slate-800 border-b-[1px] fixed w-full top-0 z-20 bg-[#23091466] h-[70px] opacity-[var(--header-opacity)]"
      id="header"
    >
      <span className="flex items-center m-auto w-fit">
        <Link
          href={"#home"}
          className="text-3xl px-6 [text-shadow:_0_0_10px_#fff]"
        >
          Eric Xiao
        </Link>
        <span className="flex space-x-3 font-light text-xl">
          <Link href={"#about"}>About</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </span>
      </span>
    </header>
  );
}
