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

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = 1;
    const { id } = params;
    const values = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await prisma.event.update({
      where: {
        id: Number(id),
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
