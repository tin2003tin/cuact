"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, Modal } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const tags = ["Tech", "Engineering", "Hackathon", "Knowledge"];

const Calendar = () => {
  return (
    <div className="flex">
      <SideBar />
      <Content />
    </div>
  );
};

const Content = () => {
  return (
    <section className="w-full p-8">
      <div className="flex justify-center">
        <Button className="w-full max-w-[1000px] p-4 text-white text-xl font-bold rounded-2xl bg-gradient-to-r from-red-400 to-red-300">
          New Act now +
        </Button>
      </div>
      <Header text={"YOUR UPCOMING ACT..."} />
      <div>{/* pao component */}</div>
      <Header text={"Your Act"} />
      <div>{/* list of card */}</div>
    </section>
  );
};

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-72 shadow-lg min-h-screen p-6 flex flex-col items-center gap-6">
      <Link href={"/home"} className="text-pink-400 font-bold text-4xl">
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
        <Button
          className="text-white bg-black hover:text-black flex gap-2 px-4 "
          onClick={() => setOpen(true)}
        >
          <Icon icon="humbleicons:refresh" className="text-white" width={15} />
          Switch creator
        </Button>
        <Button className="text-black bg-gray-300 flex items-center gap-2">
          <Icon icon="ep:back" />
          Back to attendee
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="bg-white rounded-2xl px-8 py-4 text-lg w-96 flex flex-col gap-4">
            <div className="flex justify-between items-center font-bold">
              Switch creator
              <Icon
                icon="material-symbols:close"
                onClick={() => setOpen(false)}
                width={30}
                className="cursor-pointer hover:bg-gray-200 rounded-full p-1 transistion transition-all"
              />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={"/thinc.svg"}
                width={50}
                height={50}
                alt="creator-img"
              />
              Thinc.
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={"/thinc.svg"}
                width={50}
                height={50}
                alt="creator-img"
              />
              Thinc.
            </div>
          </Box>
        </Modal>
      </div>
    </section>
  );
};

const Header = ({ text }: { text: String }) => {
  return (
    <div className="text-lg w-full font-semibold mt-8 uppercase">{text}</div>
  );
};

export default Calendar;
