"use client";

import eventImage from "@/public/images/hackchula.png";
import eventImage2 from "@/public/images/hackchula2.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

type EventCardProps = {
  id: string;
  date: string;
  eventName: string;
  location: string;
  isLiked: boolean;
  hasButton: boolean;
  isJoined: boolean;
};

const EventCard = ({
  id,
  date,
  eventName,
  location,
  isLiked,
  hasButton,
  isJoined,
}: EventCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [joinedState, setJoinedState] = useState(isJoined);

  const handleJoin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setJoinedState((prev) => !prev);
  };

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    // if (liked) {
    // do something
    // } else {
    //  dosomething
    // }
    setLiked((prev) => !prev);
  };

  return (
    <div
      className={`bg-white w-60 rounded-2xl ${
        hasButton ? "h-[370px]" : "h-[320px]"
      }`}
    >
      <div className="flex items-center justify-center w-60 h-60 relative">
        <Image
          fill
          src={eventImage2}
          alt={eventName}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="px-2 py-2">
        <div className="flex flex-fow justify-between h-5">
          <div className="text-red-400 text-sm font-semibold">{date}</div>
          <div>
            {liked ? (
              <button onClick={handleLike} className="hover:brightness-90">
                <Icon
                  icon="fa-solid:heart"
                  className=" text-red-300 text-lg pt-0.5"
                />
              </button>
            ) : (
              <button onClick={handleLike} className="hover:brightness-90">
                <Icon
                  icon="fa-regular:heart"
                  className=" text-red-300 text-lg pt-0.5"
                />
              </button>
            )}
          </div>
        </div>
        <div className="text-black text-sm font-semibold">{eventName}</div>
        <div className="text-black text-xs font-semibold">{location}</div>
      </div>
      {hasButton ? (
        <div className="flex justify-center">
          <button
            onClick={handleJoin}
            className={`rounded-md w-52 h-11 shadow-xl ${
              joinedState ? "bg-zinc-400" : "bg-red-400"
            }`}
          >
            <div className="text-xl font-semibold	text-white">
              {joinedState ? "เข้าร่วมแล้ว" : "เข้าร่วมเลย !"}
            </div>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EventCard;
