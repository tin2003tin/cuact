"use client";

import { Icon } from "@iconify/react";
import { SearhTab } from "./search/Dropdown";
import { ProfileTab } from "./profile/Dropdown";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-4 items-center bg-white sticky z-50">
      <Link href="/home" className="text-4xl font-bold text-pink-400">
        CUact
      </Link>
      <div className="flex gap-8 items-center">
        <SearhTab />
        <Link href="/calendar">
          <Icon icon="solar:calendar-bold" width={30} />
        </Link>
        <Icon icon="mdi:bell-ring" width={30} />
        <ProfileTab />
      </div>
    </nav>
  );
};

export default Navbar;
