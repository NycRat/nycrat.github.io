import { ReactNode } from "react";

export default function Page({
  children,
  className,
  id,
}: {
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={"md:min-h-[calc(100svh-80px)] " + className} id={id}>
      {children}
    </section>
  );
}
