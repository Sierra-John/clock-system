"use server";

import prisma from "@/lib/db";

export async function handleVIDLogin(formData: FormData) {
  const VID = formData.get("VID") as string;

  // Make sure VID is in correct format

  // Query the DB
  const response = await prisma.employee.findUnique({
    where: { VID: VID },
  });

  // If DNE
  if (!response) {
    console.log("There is no one with that VID");
  }

  // A good VID
}
