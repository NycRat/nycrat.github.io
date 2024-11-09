import Link from "next/link";

function Links() {
  return (
    <>
      <Link href={"#about"}>About</Link>
      <Link href={"#projects"}>Projects</Link>
      <Link href={"#experience"}>Experience</Link>
      <Link href={"#contact"}>Contact</Link>
    </>
  );
}

// separate for mobile
function DropdownLinks() {
  return (
    <div className="border-slate-800 border-t">
      <div className="font-light text-2xl grid grid-cols-3 text-center px-12">
        <Links />
      </div>
    </div>
  );
}

// inline for desktop / tablet
function InlineLinks() {
  return (
    <span className="flex space-x-3 font-light text-2xl">
      <Links />
    </span>
  );
}

export default function Header() {
  return (
    <header
      className="border-slate-800 border-b fixed w-full top-0 z-50 bg-[#271b32cc] h-[80px] opacity-[var(--header-opacity)]"
      id="header"
    >
      <div className="flex items-center m-auto w-fit sm:h-full h-[50px]">
        <Link
          href={"#home"}
          className="text-3xl px-6 [text-shadow:_0_0_10px_#fff] whitespace-nowrap"
        >
          Eric Xiao
        </Link>

        <span className="hidden sm:flex">
          <InlineLinks />
        </span>
      </div>
      <div className="sm:hidden">
        <DropdownLinks />
      </div>
    </header>
  );
}
