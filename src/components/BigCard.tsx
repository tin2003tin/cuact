"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import { Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";

const BigCard = ({
  data,
  isShowLike,
  isShowPaticipants,
  isShowTags,
}: {
  data: Event;
  isShowLike: Boolean;
  isShowPaticipants: Boolean;
  isShowTags: Boolean;
}) => {
  console.log(data);
  const [liked, setLiked] = useState(false);

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    // if (liked) {
    // do something
    // } else {
    //  dosomething
    // }
    setLiked((prev) => !prev);
  };

  return (
    <div className="flex rounded-2xl overflow-hidden bg-white gap-2 shadow-lg hover:shadow-xl max-w-[800px]">
      <div className="relative w-full">
        <Image src={data.image} fill alt="event-image" />
      </div>
      <div className="p-8 flex flex-col gap-2 text-white bg-black bg-opacity-90 w-full">
        <div className="font-bold text-red-400">
          {new Date(data.eventDate).toDateString()}
        </div>
        <div className="text-xl font-bold">{data.title}</div>
        <div className="text-sm">{/* {data.content} */}</div>
        {isShowPaticipants && (
          <div className="flex gap-2 items-center text-sm">
            <Icon icon="fluent:people-community-48-filled" width={30} />
            6969 คน
          </div>
        )}
        {isShowTags && (
          <div className="flex gap-2">
            #tag
            <div className="bg-green-400 px-4 rounded-full text-xs font-bold flex items-center">
              Tech
            </div>
          </div>
        )}
        <div className="flex gap-4 items-center mt-4">
          <Link href={"/events/:id"}>
            <Button
              className="bg-red-400 text-white font-bold text-md rounded-lg w-fit px-10  hover:bg-red-200"
              variant="contained"
            >
              view detail
            </Button>
          </Link>

          {isShowLike && (
            <button onClick={handleLike} className="hover:brightness-90">
              <Icon
                icon={`fa-${liked ? "solid" : "refular"}:heart`}
                className=" text-red-400 text-2xl pt-0.5"
              />
            </button>
          )}
        </div>
        <div className="flex justify-end">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
            <Image src={data.image} fill alt="event-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BigCard;
