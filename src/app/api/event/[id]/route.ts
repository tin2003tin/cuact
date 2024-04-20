import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * eventId
 * @params params { id: String } ;
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const eventId = Number(params.id);
    const event = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });
    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 400 });
    }
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
