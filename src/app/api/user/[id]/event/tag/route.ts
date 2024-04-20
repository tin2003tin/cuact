import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
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
            tag: {
              include: {
                events: {
                  include: {
                    Category: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const event_tags = user?.profile?.tag || [];
    const events = Array.from(
      new Map(
        event_tags.flatMap((tag) =>
          tag.events.map((event) => [event.id, event])
        )
      ).values()
    );
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
