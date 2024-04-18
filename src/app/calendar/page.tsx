"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "next/image";
import Link from "next/link";



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

const Calendar = () => {
  return (
    <div className="h-full max-w-[800px] mx-auto my-8">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="bg-stone-200 rounded-lg mb-8" />
      </LocalizationProvider>
      {/* list of card */}
      <div className="flex flex-col items-center gap-4 w-full">
        {mockData.map((data) => (
          <div className="w-full">
            <div className="mb-2 font-bold">{data.date}</div>
            {/* card */}
            <div className="flex rounded-lg overflow-hidden bg-white gap-2 shadow-lg hover:shadow-xl border">
              <Image
                src={data.imageUrl}
                width={200}
                height={200}
                alt="event-image"
                className="w-fit"
              />
              <div className="p-4 flex flex-col gap-2">
                <div className="font-bold text-red-400">{data.date}</div>
                <div className="text-lg font-bold">{data.name}</div>
                <div>{data.location}</div>
                <div className="flex gap-2 items-center">
                  <Icon icon="fluent:people-community-48-filled" width={30} />
                  {data.joined} คน
                </div>
                <div className="flex gap-2">
                  #tag
                  {data.tags.map((tag) => (
                    <div className="bg-green-200 px-4 rounded-full text-xs font-bold flex items-center">
                      {tag}
                    </div>
                  ))}
                </div>
                <Link href={"/events/:id"}>
                  <Button className="bg-red-400 text-white font-bold text-md rounded-lg w-fit px-10 mt-4 ">
                    view detail
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Calendar;
