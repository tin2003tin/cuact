"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-4 items-center bg-white shadow-lg">
      <Link className="text-4xl font-bold text-pink-400" href={"/home"}>
        CUact
      </Link>
      <div className="flex gap-8">
        <Link href={"/calendar"}>
          <Icon icon="solar:calendar-bold" width={30} />
        </Link>
        <Link href={"/notification"}>
          <Icon icon="mdi:bell-ring" width={30} />
        </Link>
        <Icon icon="iconamoon:profile-circle-fill" width={30} />
      </div>
    </nav>
  );
};

export default Navbar;
