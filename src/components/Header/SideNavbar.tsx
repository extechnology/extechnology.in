"use client";
import Link from "next/link";
import { FaMoon, FaSun, FaHandsHelping } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function SideNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed z-10 right-0 top-[8.33%] h-screen hidden md:flex justify-center">
      <div className="flex flex-col content-between">
        <div>
          <Link href="/">
            <Image
              src="/EX_TECHNOLOGY_LOGO-01.png"
              alt="Logo"
              height={100}
              width={100}
              className="relative right-5"
            />
          </Link>
        </div>
        <div className="relative top-30 right-2 dark:bg-white/10 bg-gray-800/10 backdrop-blur-lg border dark:border-white/20 border-gray-800/20 rounded-full py-7 w-3/4">
          <ul className="flex flex-col gap-6 justify-center items-center">
            <li>
              <IoHomeOutline className="text-xl text-zinc-600 dark:text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2 text-center" />
            </li>
            <li>
              <FaCircleInfo className="text-xl text-zinc-600 dark:text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2" />
            </li>
            <li>
              <FaHandsHelping className="text-xl text-zinc-600 dark:text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2" />
            </li>
            <li>
              <IoIosContact className="text-xl text-zinc-600 dark:text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2" />
            </li>
            <li>
              {!mounted ? null : (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-xl text-zinc-600 dark:text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === "dark" ? (
                    <FaSun size={25} />
                  ) : (
                    <FaMoon size={25} />
                  )}
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
