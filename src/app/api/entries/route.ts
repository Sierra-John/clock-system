import prisma from "@/lib/db";
import { clockInFormatString, clockOutFormatString } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const bodyJson = await request.json();

    const data = await prisma.entry.findMany({
      include: { employee: true },
      where: {
        signOut: { lte: clockOutFormatString(bodyJson.clockOut) },
        signIn: {
          lte: clockOutFormatString(bodyJson.clockOut),
          gte: clockInFormatString(bodyJson.clockIn),
        },
      },
    });
    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.error("Error:", error); // Log any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
