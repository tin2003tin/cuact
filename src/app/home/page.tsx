"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const mockData = [
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hackChula.jpg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hackChula.jpg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hackChula.jpg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
  {
    date: "fri. 12 Apr 2024",
    name: "Hack Chula",
    location: "ตึก... คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    joined: 6969,
    imageUrl: "/hackChula.jpg",
    tags: ["Tech", "Competition", "Hackathon"],
  },
];

const Home = () => {
  return (
    <div className="h-full max-w-5xl mx-auto py-8">
      <div className="flex justify-between font-bold">
        <div>UPCOMING ACT...</div>
        <Link href={"/home"} className="flex items-center underline gap-2">
          view all
          <Icon icon="ep:right" />
        </Link>
      </div>
      <div className="bg-stone-900 p-8 absolute left-0 right-0 mt-4">
        <Carousel className="w-1/2 mx-auto" animation="slide">
          {mockData.map((data) => (
            <div className="flex bg-black rounded-lg">
              <Image
                src={"/hackChula.jpg"}
                width={100}
                height={100}
                alt="event-image"
                className="w-1/2"
              />
              <div className="text-white font-bold p-4 m-auto  flex flex-col gap-2">
                <div className="text-red-400">{data.date}</div>
                <div className="text-lg">{data.name}</div>
                <div className="text-sm">{data.location}</div>
                <Link href={"/events/:id"}>
                  <Button
                    className="bg-red-400 text-white font-bold text-md rounded-lg w-fit px-10 mt-4 hover:bg-red-200 hover:text-red-400"
                    variant="contained"
                  >
                    เข้าร่วมเลย !
                  </Button>
                </Link>
              </div>
            </div>
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
