"use client";

import { Icon } from "@iconify/react";
import { SearhTab } from "./search/Dropdown";
import { ProfileTab } from "./profile/Dropdown";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-white z-50 py-4 shadow-lg  mb-8">
      <nav className="flex justify-between mx-auto max-w-[1000px] items-center ">
        <Link href={"/home"} className="text-4xl font-bold text-pink-400">
          CUact
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={'/calendar'}>
            <Icon icon="solar:calendar-bold" width={30} />
          </Link>
          <ProfileTab />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
