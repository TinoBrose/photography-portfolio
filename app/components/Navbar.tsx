"use client";

import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import { Nunito, MuseoModerno } from "next/font/google";
import bgImage from "../public/bg-img.avif";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const styles = {
  navlink:
    "text-sm text-stone-500 hover:bg-opacity-90 font-sans uppercase hover:text-white p-2",
  navlinkMobile:
    "text-sm text-stone-500 hover:bg-opacity-90 font-sans uppercase hover:text-white p-6",
  active: "text-white",
};

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 w-full ${
        mobileMenuOpen ? "h-full" : "h-[90px]"
      }  px-10 z-30 text-white bg-stone-900  transition duration-500 drop-shadow-md ${
        navbarVisible ? "translate-y-0" : "md:-translate-y-full"
      }`}
    >
      <nav>
        <div className="flex justify-between items-center h-[90px]">
          <Link href="/" className="flex-1">
            <span className="font-semibold">mab.</span>
            <span className="font-thin font-mono">photography</span>
          </Link>

          {/* DESKTOP */}
          <div
            className={`hidden md:flex md:flex-1 w-full items-center justify-end py-2 gap-4`}
          >
            <Link
              href="/"
              className={`${styles.navlink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              work
            </Link>
            <Link
              href="/about"
              className={`${styles.navlink} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              about
            </Link>
            <Link
              href="/contact"
              className={`${styles.navlink} ${
                pathname === "/contact" ? styles.active : ""
              }`}
            >
              contact
            </Link>
            <span className="text-2xl font-thin mb-1">|</span>
            <Link
              href="https://www.instagram.com/brose.matthias/"
              target="_blank"
              className="flex justify-center items-center"
            >
              <FaInstagram className="text-xl" />
            </Link>
          </div>

          {/* MOBILE */}
          <div
            className={`${
              mobileMenuOpen ? "h-full" : ""
            }   md:hidden flex justify-center items-center`}
          >
            <button
              className=" rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <HiOutlineX size={30} />
              ) : (
                <HiOutlineMenu size={30} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`
            md:hidden ${mobileMenuOpen ? "" : "hidden"} flex h-full `}
        >
          <div
            className={`
            md:hidden flex flex-col md:flex-1 w-full items-center justify-between py-2 gap-4 `}
          >
            <div
              className={`
            flex flex-col items-center`}
            >
              <Link
                href="/"
                className={`${styles.navlinkMobile} ${
                  pathname === "/" ? styles.active : ""
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                work
              </Link>
              <Link
                href="/about"
                className={`${styles.navlinkMobile} ${
                  pathname === "/about" ? styles.active : ""
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                about
              </Link>
              <Link
                href="/contact"
                className={`${styles.navlinkMobile} ${
                  pathname === "/contact" ? styles.active : ""
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                contact
              </Link>
            </div>
            <div className="mt-5">
              <Link
                href="https://www.instagram.com/brose.matthias/"
                target="_blank"
                className="flex justify-center items-center p-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <FaInstagram className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
