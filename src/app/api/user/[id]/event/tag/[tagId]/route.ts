import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(
  request: Request,
  { params }: { params: { id: string; tagId: string } }
) {
  try {
    const userWithTag = await prisma.profile.update({
      where: {
        id: Number(params.id),
      },
      data: {
        tag: {
          connect: {
            id: Number(params.tagId),
          },
        },
      },
      include: {
        tag: true,
      },
    });
    console.log(userWithTag);

    return NextResponse.json(userWithTag, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; tagId: string } }
) {
  try {
    const userWithTag = await prisma.profile.update({
      where: {
        id: Number(params.id),
      },
      data: {
        tag: {
          disconnect: { id: Number(params.tagId) },
        },
      },
      include: {
        tag: true,
      },
    });
    console.log(userWithTag);

    return NextResponse.json(userWithTag, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
