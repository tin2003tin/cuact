import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  let search = request.nextUrl.searchParams.get("search");
  const tags = request.nextUrl.searchParams.getAll("tag");
  if (!search) {
    search = "";
  }
  try {
    const events = await prisma.event.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      include: {
        Category: true,
      },
    });

    let filteredEvents = [];
    if (tags.length > 0) {
      for (let i = 0; i < events.length; i++) {
        let valid = true;
        let categories = [];
        for (let j = 0; j < events[i].Category.length; j++) {
          categories.push(events[i].Category[j].name);
        }
        for (var k = 0; k < tags.length; k++) {
          if (!categories.includes(tags[k])) {
            valid = false;
          }
        }
        if (valid) {
          filteredEvents.push(events[i]);
        }
      }
    } else {
      filteredEvents = events;
    }

    return NextResponse.json(filteredEvents);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
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
