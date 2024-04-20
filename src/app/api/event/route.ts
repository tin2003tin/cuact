import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const events = await prisma.event.findMany();
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  try {
    const { title, eventDate, image, formId, name, location, userId } =
      await request.json();
    const event = await prisma.event.create({
      data: {
        location,
        name,
        title,
        eventDate,
        image,
        formId,
        userId,
      },
    });
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
