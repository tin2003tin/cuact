import Image from "next/image";
import { Event } from "@prisma/client";
import BigCard from "@/components/BigCard";

const EventDetails = (eventInfo: Event) => {
  // const actDate: string = eventInfo.eventDate.toISOString()
  console.log(eventInfo.eventDate);
  const actDate = new Date(eventInfo.eventDate).toDateString();
  console.log(actDate);
  return (
    <div className="grid grid-cols-1">
      <div className="fixed blur -z-10">
        <Image
          src={eventInfo.image}
          width={960}
          height={540}
          style={{ objectFit: "fill" }}
          alt="eventImage"
        />
      </div>
      <div className="z-10 mb-16">
        <BigCard
          data={eventInfo}
          isShowLike={true}
          isShowPaticipants={true}
          isShowTags={true}
          isShowActer={true}
          isShowViewDetail={false}
          isShowJoinButton={true}
        />
      </div>

      <div className="bg-white rounded-2xl leading-loose  p-8 text-xl mx-auto">
        <h1 className="text-4xl font-bold ">{eventInfo.name}</h1>
        <p>{eventInfo.content}</p>
        <h1 className="text-3xl font-bold ">where : {eventInfo.location}</h1>
        <p>{actDate}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in
        cumque placeat sed enim quam repellat ullam! Quis, mollitia dolorem
        laborum, unde accusamus exercitationem doloremque pariatur natus
        voluptatibus dignissimos reprehenderit!
      </div>
    </div>
  );
};

export default EventDetails;
