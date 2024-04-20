"use client";

import BigCard from "@/components/BigCard";
import EventCard from "@/components/EventCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Event } from "@prisma/client";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  const [data, setData] = useState<Event[] | null>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/event")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="h-full text-lg">
      <SearchBar />
      <Header text="UPCOMING ACT..." link="/home" />
      <div className="bg-stone-900 p-8 w-full mt-4">
        <Carousel className="w-1/2 mx-auto z-0" animation="slide">
          {data?.map((event, id) => (
            <BigCard
              data={event}
              isShowLike={false}
              isShowPaticipants={false}
              isShowTags={false}
              isShowActer={false}
              key={id}
            />
          ))}
        </Carousel>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* interest */}
        <Header text="Your Interests" link="/home" />
        <div className="overflow-auto flex gap-6  py-4">
          {data?.map((event, id) => (
            <EventCard data={event} hasButton={false} key={id} />
          ))}
        </div>
        {/* list of card */}
        <Header text="Recommended (From your interest topics)" link="/home" />
        <div className="overflow-auto flex gap-6 py-4">
          {data?.map((event, id) => (
            <EventCard data={event} hasButton={false} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

const Header = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="flex justify-between items-center text-xl max-w-5xl mx-auto my-8">
      <div>{text}</div>
      <Link href={link} className="flex items-center underline gap-2">
        view all
        <Icon icon="ep:right" />
      </Link>
    </div>
  );
};
