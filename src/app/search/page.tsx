import EventCard from "../components/EventCard";

const search = () => {
  return (
    <div>
      <EventCard
        id={"???"}
        date={"Fri. 12 Apr 2024"}
        eventName={"Hack Chula"}
        location={"ตึก3 ห้อง315 คณะวิศวกรรมศาสตร์"}
        isLiked={true}
        hasButton={true}
        isJoined={false}
      />
    </div>
  );
};

export default search;
