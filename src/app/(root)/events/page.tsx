import axios from "axios";
import { Event } from "@prisma/client";
import EventCard from "@/components/eventCard/EventCard";

const eventsPage = async () => {
  const events = await axios.get("http://localhost:3000/api/event");
  return (
    <div
      id="event-container"
      className="w-full max-3xl lg:max-4xl xl:max-w-5xl mx-auto"
    >
      <h1 className="text-black font-extrabold text-2xl py-4 flex justify-center">
        Events Page
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {events.data.map((event: Event) => (
          <div className="col-span-1 flex justify-center">
            <EventCard
              key={event.id}
              id={event.id}
              date="12-02-2020"
              eventName={event.name}
              image={event.image}
              location={event.location}
              isLiked={true}
              hasButton={true}
              isJoined={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default eventsPage;
