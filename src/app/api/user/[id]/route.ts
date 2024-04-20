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
    const id = Number(params.id);
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "Event not found" }, { status: 400 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
