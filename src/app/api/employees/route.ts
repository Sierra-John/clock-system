import prisma from "@/lib/db";
import { clockInFormatString, clockOutFormatString } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const bodyJson = await request.json();
    {
      /* console.log("API Dates Input:\n");
    console.log(bodyJson);*/
    }

    const data = await prisma.entry.findMany({
      where: {
        VID: bodyJson.VID,
        signOut: { lte: clockOutFormatString(bodyJson.clockOut) },
        signIn: {
          lte: clockOutFormatString(bodyJson.clockOut),
          gte: clockInFormatString(bodyJson.clockIn),
        },
      },
      orderBy: {
        id: "desc",
      },
      select: {
        signIn: true,
        signOut: true,
      },
    });

    {
      /*console.log("API Dates Data:\n");
    console.log(data);*/
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error:", error); // Log any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
