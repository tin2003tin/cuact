"use client";

import UpCommingCard from "@/app/components/UpCommingCard";
import { Data } from "@/app/types";
import BigCard from "@/components/BigCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Paper } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [data, setData ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/event').then(res => setData(res.data));
  }, [])

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
          {data.map((event) => (
            <BigCard data={event} isShowLike={false} isShowPaticipants={false} isShowTags={false} />
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
