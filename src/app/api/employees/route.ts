import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const bodyJson = await request.json();
    console.log(bodyJson);

    const data = await prisma.entry.findMany({
      where: {
        VID: bodyJson.VID,
        signOut: { lte: bodyJson.clockOut },
        signIn: { gte: bodyJson.clockIn },
      },
      orderBy: {
        id: "desc",
      },
      select: {
        signIn: true,
        signOut: true,
      },
    });

    console.log(data);

    return Response.json(data);
  } catch (error) {
    console.error("Error:", error); // Log any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
