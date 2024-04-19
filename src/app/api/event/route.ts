import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const events = await prisma.event.findMany();
  return NextResponse.json(events);
}
