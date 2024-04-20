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
        <Carousel className="w-1/2 mx-auto" animation="slide">
          {data?.map((event) => (
            <BigCard
              data={event}
              isShowLike={false}
              isShowPaticipants={false}
              isShowTags={false}
              isShowActer={false}
            />
          ))}
        </Carousel>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* interest */}
        <Header text="Your Interests" link="/home" />
        {data?.map((event) => (
          <EventCard
            id={event.id.toString()}
            date={new Date(event.eventDate).toDateString()}
            eventName={event.name}
            location={"ตึก 100 ปี ชั้น 3...."}
            isLiked={Math.random() * 100 > 50}
            hasButton
            isJoined={false}
          />
        ))}
        {/* list of card */}
        <Header text="Recommended (From your interest topics)" link="/home" />
        {data?.map((event) => (
          <EventCard
            id={event.id.toString()}
            date={new Date(event.eventDate).toDateString()}
            eventName={event.name}
            location={"ตึก 100 ปี ชั้น 3...."}
            isLiked={Math.random() * 100 > 50}
            hasButton
            isJoined={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

const Header = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="flex justify-between items-center text-xl max-w-5xl mx-auto mt-8">
      <div>{text}</div>
      <Link href={link} className="flex items-center underline gap-2">
        view all
        <Icon icon="ep:right" />
      </Link>
    </div>
  );
};
