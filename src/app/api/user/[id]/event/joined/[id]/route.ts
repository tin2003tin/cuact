import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(
  request: Request,
  { params }: { params: { id: string; joinedId: string } }
) {
  try {
    const interestingEvent = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: {
        attendedEvents: {
          connect: { id: Number(params.joinedId) },
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
  { params }: { params: { id: string; joinedId: string } }
) {
  try {
    const interestingEvent = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: {
        attendedEvents: {
          disconnect: { id: Number(params.joinedId) },
        },
      },
    });

    return NextResponse.json(interestingEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
