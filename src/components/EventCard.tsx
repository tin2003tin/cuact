"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Event } from "@prisma/client";

const EventCard = ({
  data,
  hasButton,
}: {
  data: Event;
  hasButton: Boolean;
}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    // if (liked) {
    // do something
    // } else {
    //  dosomething
    // }
    setLiked((prev) => !prev);
  };

  return (
      <div
        className={`bg-white w-60 rounded-2xl border shadow-md hover:shadow-lg transition-all ${
          hasButton ? "h-[370px]" : "h-[320px]"
        }`}
      >
        <div className="flex items-center justify-center w-60 h-60 relative">
          <Image
            fill
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="px-2 py-2">
          <div className="flex flex-fow justify-between h-5">
            <div className="text-red-400 text-sm font-semibold">
              {new Date(data.eventDate).toDateString()}
            </div>
            <div>
              {liked ? (
                <button
                  onClick={handleLike}
                  className="hover:brightness-90"
                >
                  <Icon
                    icon="fa-solid:heart"
                    className=" text-red-300 text-lg pt-0.5"
                  />
                </button>
              ) : (
                <button
                  onClick={handleLike}
                  className="hover:brightness-90"
                >
                  <Icon
                    icon="fa-regular:heart"
                    className=" text-red-300 text-lg pt-0.5"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="text-black text-sm font-semibold">{data.name}</div>
          <div className="text-black text-xs font-semibold">
            {data.location}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          {hasButton && (
            <Link href={`/event/${data.id}`}>
              <Button
                className="bg-red-400 text-white font-bold text-md rounded-lg w-fit px-10  hover:bg-red-200"
                variant="contained"
              >
                เข้าร่วมเลย
              </Button>
            </Link>
          )}
        </div>
      </div>
  );
};

export default EventCard;
