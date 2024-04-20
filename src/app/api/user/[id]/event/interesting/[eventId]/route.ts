import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { EventEmitter } from "stream";

const prisma = new PrismaClient();

export async function PATCH(
  request: Request,
  { params }: { params: { id: string; eventId: string } }
) {
  try {
    const interestingEvent = await prisma.profile.update({
      where: {
        userId: Number(params.id),
      },
      data: {
        interestingEvent: {
          connect: { id: Number(params.eventId) },
        },
      },
    });

    return NextResponse.json(interestingEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; eventId: string } }
) {
  try {
    const interestingEvent = await prisma.profile.update({
      where: {
        userId: Number(params.id),
      },
      data: {
        interestingEvent: {
          disconnect: { id: Number(params.eventId) },
        },
      },
    });

    return NextResponse.json(interestingEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
