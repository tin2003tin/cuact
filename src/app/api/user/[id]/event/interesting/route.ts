import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        profile: {
          select: {
            interestingEvent: {
              include: {
                Category: true,
              },
            },
          },
        },
      },
    });

    const interestingEvent = user?.profile?.interestingEvent || [];
    console.log(interestingEvent);

    return NextResponse.json(interestingEvent);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
