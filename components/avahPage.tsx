import { ReactNode } from "react";

export default function AvahPage({
  children,
  className,
  id,
}: {
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={"min-h-[calc(100svh-70px)] " + className} id={id}>
      {children}
    </section>
  );
}
