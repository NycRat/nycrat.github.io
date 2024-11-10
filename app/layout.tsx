import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Xiao - Developer | Teacher (NycRat)",
  description:
    "Eric Xiao's personal website, web development portfolio, projects, experience, teaching, programming.",
  authors: { name: "Eric Xiao", url: "https://github.com/NycRat" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
