"use client";

import { Home, Info, HandHelping, User,Moon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { id: 1, label: "Home", icon: <Home size={24} />, href: "/" },
  { id: 2, label: "About", icon: <Info size={24} />, href: "/search" },
  { id: 3, label: "Services", icon: <HandHelping size={24} />, href: "/cart" },
  { id: 4, label: "Contact", icon: <User size={24} />, href: "/profile" },
  { id: 5, label: "Theme", icon: <Moon size={24} />, href: "/profile" },
];

export default function BottomNavbar() {
  const [active, setActive] = useState(1);

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-4 flex justify-between items-center shadow-lg">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="relative flex flex-col items-center text-gray-300 hover:text-white transition-all"
          onClick={() => setActive(item.id)}
        >
          <motion.div
            animate={
              active === item.id ? { y: -5, scale: 1.2 } : { y: 0, scale: 1 }
            }
            className="p-1"
          >
            {item.icon}
          </motion.div>
          {/* <motion.span
            animate={{
              opacity: active === item.id ? 1 : 0,
              y: active === item.id ? 0 : 5,
            }}
            className="text-xs mt-1 transition-all"
          >
            {item.label}
          </motion.span> */}
        </Link>
      ))}
    </div>
  );
}
