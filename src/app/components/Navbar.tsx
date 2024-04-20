"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4 bg-white shadow-lg">
      <div className="w-full max-w-[1000px] mx-auto flex justify-between">
        <Link className="text-4xl font-bold text-pink-400" href={"/home"}>
          CUact
        </Link>
        <div className="flex gap-8">
          <Link href={"/calendar"}>
            <Icon icon="solar:calendar-bold" width={30} />
          </Link>
          <Icon icon="iconamoon:profile-circle-fill" width={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
