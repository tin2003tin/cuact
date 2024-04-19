"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, dividerClasses } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const tags = ["Tech", "Engineering", "Hackathon", "Knowledge"];

const Calendar = () => {
  return (
    <div className="flex">
      <section className="max-w-72 shadow-lg min-h-screen p-6 flex flex-col items-center gap-6">
        <Link href={"/"} className="text-pink-400 font-bold text-4xl">
          CUact
        </Link>
        <Image src={"/thinc.svg"} width={120} height={120} alt="creator-logo" />
        <div className="max-w-52 text-center mb-8">
          Thailand Incubator Club Thinc. Make. Impact. 💡Chulalongkorn
          UniversitySince 2012
        </div>
        <div>
          <div className="text-center font-bold text-lg mb-2">
            Most related tag{" "}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="text-white bg-green-400 px-4 rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-14">
          <Button className="text-white bg-black hover:text-black flex gap-2 px-4 ">
            <Icon
              icon="humbleicons:refresh"
              className="text-white"
              width={15}
            />
            Switch creator
          </Button>
          <Button className="text-black bg-gray-300 flex items-center gap-2">
            <Icon icon="ep:back" />
            Back to attendee
          </Button>
        </div>
      </section>
      <section className="w-full p-8">
        <div className="flex justify-center80">
          <Button className="w-full max-w-[1000px] p-4 text-white text-xl font-bold rounded-2xl bg-gradient-to-r from-red-400 to-red-300">
            New Act now +
          </Button>
        </div>
        <Header text={"YOUR UPCOMING ACT..."} />
        <div>{/* pao component */}</div>
        <Header text={"Your Act"} />
        <div>{/* list of card */}</div>
      </section>
    </div>
  );
};

const Header = ({ text }: { text: String }) => {
  return (
    <div className="text-lg w-full font-semibold mt-8 uppercase">
      {text}
    </div>
  );
};

export default Calendar;
