"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Event } from '@prisma/client';

const ViewAll = ({ topic }: { topic: string }) => {
  const [data, setData] = useState<Event[] | null>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/event`)
      .then((res) => setData(res.data));
  }, [topic]);

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <div className="text-2xl font-bold mb-6">{topic}</div>
      <div className="flex gap-4 mb-6">
        <button className="flex gap-2 items-center border border-black rounded-full px-2">
          ล่าสุด
          <Icon icon="teenyicons:down-outline" />
        </button>
        <button className="flex gap-2 items-center border border-black rounded-full px-2">
          จบลงเเล้ว
          <Icon icon="mdi:eye-off" />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        {data?.map((event) => (
          <EventCard data={event} hasButton={true} />
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
