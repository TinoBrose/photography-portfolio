import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Nunito, MuseoModerno } from "next/font/google";
import bgImage from "../public/bg-img.avif";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});
const museoModerno = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-museoModerno",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${museoModerno.variable} h-full`}
    >
      {/* <body className="h-full bg-no-repeat	bg-top	bg-cover		 bg-[url('https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')]"> */}
      {/* <body className="h-full bg-gradient-to-t from-slate-900 overflow-auto"> */}
      {/* <body className="h-full overflow-auto bg-slate-900"> */}
      <body className="h-full overflow-auto ">
        <Image
          className="fixed left-0 top-0 w-full z-0"
          src={bgImage}
          alt="placeholder"
          placeholder="blur"
        />

        <div className="fixed left-0 top-0 w-full h-full from-stone-900	bg-gradient-to-t z-10"></div>

        <header className="fixed top-0 w-full flex justify-between items-center h-[90px] px-10 z-30 ">
          <div>
            <span className="font-semibold">mab.</span>
            <span className="font-thin font-mono">photography</span>
          </div>
          <Link
            href=""
            className="text-sm rounded-3xl bg-white text-stone-500 px-4 py-2 hover:bg-opacity-90 font-mono"
          >
            contact
          </Link>
        </header>
        {children}
        <footer className="relative h-[60px] flex justify-center items-center z-20">
          <div className="text-white">mab photography</div>
        </footer>
      </body>
      {/* <body >{children}</body> */}
    </html>
  );
}
