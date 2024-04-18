"use client";

import eventImage from "@/public/images/hackchula.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

const EventCard = () => {
  return (
    <div className="bg-red-400">
      <div>
        <Image src={eventImage} alt="HEE" />
      </div>
      <div>
        <div>
          <div>Fri. 12 Apr 2024</div>
          <div>
            <Icon icon="jam:heart-f" />
          </div>
        </div>
        <div>Hack Chula</div>
        <div>ตึก3 ห้อง315 คณะวิศวกรรมศาสตร</div>
      </div>
    </div>
  );
};

export default EventCard;
