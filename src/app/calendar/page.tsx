"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "next/image";

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
    <div className="h-full max-w-5xl mx-auto mt-8">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="bg-stone-200 rounded-lg mb-8" />
      </LocalizationProvider>
      <div className="flex flex-col items-center gap-4">
        {mockData.map((data) => (
          <div>
            <div className="mb-2 font-bold">{data.date}</div>
            <div className="flex rounded-lg overflow-hidden bg-white gap-2 shadow-lg sha">
              <Image
                src={data.imageUrl}
                width={150}
                height={150}
                alt="event-image"
              />
              <div className="p-2">
                <div>{data.date}</div>
                <div>{data.name}</div>
                <div>{data.location}</div>
                <div className="flex gap-2 items-center">
                  <Icon icon="fluent:people-community-48-filled" width={30} />
                  {data.joined} คน
                </div>
                <div className="flex gap-2">
                  #tag
                  {data.tags.map((tag) => (
                    <div className="bg-green-200 px-4 rounded-full text-xs font-bold flex items-center">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
