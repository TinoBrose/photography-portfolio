import Link from "next/link";
import "./globals.css";
import { Nunito, MuseoModerno } from "next/font/google";
import Navbar from "./components/Navbar";

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
  title: "mab.photography",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${museoModerno.variable} h-full `}
    >
      <body className="h-full overflow-auto bg-stone-900">
        <Navbar />
        <main className="relative pt-[110px] z-20">{children}</main>
        <footer className="relative h-[60px] flex justify-center items-center z-20 gap-4 font-thin	">
          <div className="text-white">© Matthias Brose</div>
          <div className="text-white">|</div>
          <Link href={"/impressum"} className="text-white">
            Impressum
          </Link>
        </footer>
      </body>
    </html>
  );
}
