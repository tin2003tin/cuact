import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        attendedEvents: {
          include: {
            Category: true,
          },
        },
      },
    });

    const attendedEvents = user?.attendedEvents || [];
    return NextResponse.json(attendedEvents, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error || "Internal server error" },
      { status: 500 }
    );
  }
}
