"use client";
import { Event } from "@prisma/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import useEventQuery from "@/hook/useEventQuery";
import { useEffect, useState } from "react";
import EventDetails from "./EventDetails";
import sampleImage from "@/public/images/hackchula.png";

const eventDetailPage = () => {
  const param = useParams<{ id: string }>();
  const [eventInfo, setEventInfo] = useState<Event>();
  useEffect(() => {
    useEventQuery(param.id).then((data) => {
      setEventInfo(data);
    });
  }, [param.id]);
  return (
    <div className="w-full">
      {eventInfo === undefined ? (
        <div>Loading...</div>
      ) : (
        <EventDetails {...eventInfo} />
      )}
    </div>
  );
};

export default eventDetailPage;
