"use client"

import { Icon } from "@iconify/react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-4 items-center bg-white">
      <span className="text-4xl font-bold text-pink-400">CUact</span>
      <div className="flex gap-8 text-black">
        <Link href="/calendar">
          <Icon icon="solar:calendar-bold" width={30}/>
        </Link>
        <Link href="/notifications">
          <Icon icon="mdi:bell-ring" width={30}/>
        </Link>
        <Link href="/profile">
          <Icon icon="iconamoon:profile-circle-fill" width={30}/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
