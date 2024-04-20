import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const UpCommingCard = ({ data }: { data: Data }) => {
    return (
      <div className="flex bg-black rounded-lg">
        <Image
          src={data.imageUrl}
          width={100}
          height={100}
          alt="event-image"
          className="w-1/2"
        />
        <div className="text-white font-bold p-4 m-auto  flex flex-col gap-2">
          <div className="text-red-400">{data.date}</div>
          <div className="text-lg">{data.name}</div>
          <div className="text-sm">{data.location}</div>
          <Link href={"/events/:id"}>
            <Button
              className="bg-red-400 text-white font-bold text-md rounded-lg w-fit px-10 mt-4 hover:bg-red-200 hover:text-red-400"
              variant="contained"
            >
              เข้าร่วมเลย !
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  export default UpCommingCard;