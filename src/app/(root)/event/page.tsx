"use client";
import { Event } from "@prisma/client";
import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import useEventsQuery from "@/hook/useEventsQuery";

const eventsPage = () => {
  const [events, setEvents] = useState<Event[] | null>([]);
  useEffect(() => {
    useEventsQuery().then((data) => {
      setEvents(data);
    });
  }, []);
  return (
    <div
      id="event-container"
      className="w-full max-3xl lg:max-4xl xl:max-w-5xl mx-auto"
    >
      <h1 className="text-black font-extrabold text-2xl py-4 flex justify-center">
        Events Page
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {events?.map((event: Event) => (
          <div className="col-span-1 flex justify-center">
            <EventCard key={event.id} data={event} hasButton={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default eventsPage;
