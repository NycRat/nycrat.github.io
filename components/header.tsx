import Link from "next/link";

function DropdownMenu() {
  return (
    <div className="w-full border-slate-800 border-t-[1px]">
      <div className="font-light md:text-xl text-2xl w-full grid grid-cols-3 text-center px-10">
        <Link href={"#about"}>About</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header
      className="border-slate-800 border-b-[1px] fixed w-full top-0 z-50 bg-[#23091480] sm:h-[60px] h-[80px] opacity-[var(--header-opacity)]"
      id="header"
    >
      <div className="flex items-center m-auto w-fit sm:h-full h-[50px]">
        <Link
          href={"#home"}
          className="text-3xl px-6 [text-shadow:_0_0_10px_#fff] whitespace-nowrap"
        >
          Eric Xiao
        </Link>
        <span className="space-x-3 font-light md:text-xl text-2xl hidden sm:flex ">
          <Link href={"#about"}>About</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </span>
      </div>
      <div className="sm:hidden">
        <DropdownMenu />
      </div>
    </header>
  );
}
