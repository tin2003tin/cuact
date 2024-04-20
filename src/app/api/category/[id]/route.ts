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
    const categoryId = params.id;
    console.log(categoryId);
    const category = await prisma.category.findUnique({
      where: {
        id: Number(categoryId),
      },
    });
    if (!category) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 400 }
      );
    }
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
