"use client";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

function SideNavbar() {
  return (
    <div className="fixed z-10 right-0 top-1/12 h-screen hidden md:block">
      <div className="flex flex-col content-between pr-8 ">
        <div>
          <Link href={"/"}>
            <img src="/EX_TECHNOLOGY_LOGO-01.png" alt="" className="w-24" />
          </Link>
        </div>
        <div className="relative top-30 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full py-8">
          <ul className="flex flex-col gap-6 justify-center items-center">
            <li>
              <IoHomeOutline className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-12 h-12 hover:scale-110 hover:-translate-x-7 duration-300 p-2 text-center" />
            </li>
            <li>
              <FaCircleInfo className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-12 h-12 hover:scale-110 hover:-translate-x-7 duration-300 p-2" />
            </li>
            <li>
              <FaHandsHelping className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-12 h-12 hover:scale-110 hover:-translate-x-7 duration-300 p-2" />
            </li>
            <li>
              <IoIosContact className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-12 h-12 hover:scale-110 hover:-translate-x-7 duration-300 p-2" />
            </li>
            <li>
              <FaMoon className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-12 h-12 hover:scale-110 hover:-translate-x-7 duration-300 p-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideNavbar;
