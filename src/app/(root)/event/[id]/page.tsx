"use client";
import { Event } from "@prisma/client";
import { useParams } from "next/navigation";
import useEventQuery from "@/hook/useEventQuery";
import { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

const eventDetailPage = () => {
  const param = useParams<{ id: string }>();
  const [eventInfo, setEventInfo] = useState<Event>();
  useEffect(() => {
    useEventQuery(param.id).then((data) => {
      setEventInfo(data);
    });
  }, [param.id]);
  return (
    <div className="w-full max-w-5xl mx-auto">
      {eventInfo === undefined ? (
        <div>Loading...</div>
      ) : (
        <EventDetails {...eventInfo} />
      )}
    </div>
  );
};

export default eventDetailPage;
