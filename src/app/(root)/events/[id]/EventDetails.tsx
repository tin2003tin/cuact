import Image from "next/image";
import { Event } from "@prisma/client";
import BigCard from "@/components/BigCard";

const EventDetails = (eventInfo: Event) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute blur -z-10">
          <Image
            src={eventInfo.image}
            width={960}
            height={540}
            style={{ objectFit: "fill" }}
            alt="eventImage"
          />
        </div>
        <div className="absolute z-10 top-0 left-0 right-0">
          <BigCard
            data={eventInfo}
            isShowLike={true}
            isShowPaticipants={true}
            isShowTags={true}
            isShowActer={true}
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default EventDetails;
