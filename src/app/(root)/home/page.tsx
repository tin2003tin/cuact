"use client";

import UpCommingCard from "@/app/components/UpCommingCard";
import { Data } from "@/app/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const mockData: Data[] = [
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hack-chula.svg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hack-chula.svg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hack-chula.svg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hack-chula.svg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
];



const Home = () => {
  return (
    <div className="h-full max-w-5xl mx-auto py-8 text-lg">
      <div className="flex justify-between font-bold text-xl">
        <div>UPCOMING ACT...</div>
        <Link href={"/home"} className="flex items-center underline gap-2">
          view all
          <Icon icon="ep:right" />
        </Link>
      </div>

      <div className="bg-stone-900 p-8 absolute left-0 right-0 mt-4">
        <Carousel className="w-1/2 mx-auto" animation="slide">
          {mockData.map((data) => (
            <UpCommingCard data={data} />
          ))}
        </Carousel>

        {/* interest */}
        <div className="flex justify-between font-bold">
          <div>Your Interests</div>
          <Link href={"/home"} className="flex items-center underline gap-2">
            view all
            <Icon icon="ep:right" />
          </Link>
        </div>
        {/* list of card */}
      </div>
    </div>
  );
};

export default Home;
