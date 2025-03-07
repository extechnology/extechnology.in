"use client";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Image from "next/image";

function SideNavbar() {
  return (
    <div className="fixed  z-10 right-0 top-1/12 h-screen hidden md:flex justify-center">
      <div className="flex flex-col content-between ">
        <div>
          <Link href={"/"}>
            <Image src="/EX_TECHNOLOGY_LOGO-01.png" alt="" height={100} width={100} className="relative right-5"/>
          </Link>
        </div>
        <div className="relative top-30 right-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full py-7 w-3/4">
          <ul className="flex flex-col gap-6 justify-center items-center">
            <li>
              <IoHomeOutline className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2 text-center" />
            </li>
            <li>
              <FaCircleInfo className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2" />
            </li>
            <li>
              <FaHandsHelping className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2" />
            </li>
            <li>
              <IoIosContact className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2" />
            </li>
            <li>
              <FaMoon className="text-xl text-zinc-200 shadow-lg backdrop-blur-2xl rounded-full w-10 h-10 hover:scale-110 hover:-translate-x-2 duration-300 p-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideNavbar;
