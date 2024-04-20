"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import ProfilePopUp from "./profile/ProfilePopUp";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [tags, setTags] = useState<{id: number, name:string}[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/2/profile`)
      .then((res) => setTags((res.data as any)?.tag));
  }, []);

  return (
    <div className="w-full bg-white z-50 py-4 shadow-lg  mb-8">
      <nav className="flex justify-between mx-auto max-w-[1000px] items-center ">
        <Link href={"/home"} className="text-4xl font-bold text-pink-400">
          CUact
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={"/calendar"}>
            <Icon icon="solar:calendar-bold" width={30} />
          </Link>
          {/* <ProfileTab /> */}
          <ProfilePopUp tags={tags} setTags={setTags}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
