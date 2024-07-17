import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = await prisma.employee.findMany();
    return Response.json(data);
  } catch (error) {
    console.error("Error:", error); // Log any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
