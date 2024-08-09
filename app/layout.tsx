import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SectionHeader from "./sectionheader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arlow's Portfolio",
  description: "A portfolio website made to showcase Arlow's works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className + " h-screen w-full landscape:flex"}>
        <SectionHeader/>
        <div className="block h-3/5 landscape:w-3/5 landscape:h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
