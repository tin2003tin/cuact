import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

const EventPage = async () => {
  const userId = 1;
  const events = await db.event.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={events} />
    </div>
  );
};

export default EventPage;
