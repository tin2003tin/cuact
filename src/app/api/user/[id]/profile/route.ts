import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * userId
 * @params params { id: String } ;
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);
    const user = await prisma.profile.findUnique({
      where: {
        userId,
      },
      include: {
        interestingEvent: true,
        tag: true,
      },
    });
    if (!user) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 400 }
      );
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const {
      department,
      fullName,
      studentId,
      bio,
      phoneNumber,
      facebookContact,
      igContact,
      lineContact,
    } = await request.json();
    if (!department) {
      return NextResponse.json(
        { message: "department is Required" },
        { status: 401 }
      );
    }
    if (!fullName) {
      return NextResponse.json(
        { message: "fullName is Required" },
        { status: 401 }
      );
    }
    if (!studentId) {
      return NextResponse.json(
        { message: "studentId is Required" },
        { status: 401 }
      );
    }

    const event = await prisma.profile.create({
      data: {
        department,
        fullName,
        studentId,
        userId: Number(params.id),
        bio,
        phoneNumber,
        facebookContact,
        igContact,
        lineContact,
      },
    });
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const {
      department,
      fullName,
      studentId,
      bio,
      phoneNumber,
      facebookContact,
      igContact,
      lineContact,
    } = await request.json();
    if (!department) {
      return NextResponse.json(
        { message: "department is Required" },
        { status: 401 }
      );
    }
    if (!fullName) {
      return NextResponse.json(
        { message: "fullName is Required" },
        { status: 401 }
      );
    }
    if (!studentId) {
      return NextResponse.json(
        { message: "studentId is Required" },
        { status: 401 }
      );
    }

    const event = await prisma.profile.update({
      where: {
        userId: Number(params.id),
      },
      data: {
        department,
        fullName,
        studentId,
        bio,
        phoneNumber,
        facebookContact,
        igContact,
        lineContact,
      },
    });
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
