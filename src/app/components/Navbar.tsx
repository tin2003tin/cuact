"use client";

import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-4 items-center bg-white">
      <span className="text-4xl font-bold text-pink-400">CUact</span>
      <div className="flex gap-8">
        <Icon icon="solar:calendar-bold" width={30} />
        <Icon icon="mdi:bell-ring" width={30} />
        <Icon icon="iconamoon:profile-circle-fill" width={30} />
      </div>
    </nav>
  );
};

export default Navbar;
