"use server";

import prisma from "@/lib/db";
import { validateVID } from "@/utils/dataValidation";
import { redirect } from "next/navigation";

export async function handleVIDLogin(formData: FormData) {
  const VID = formData.get("VID") as string;

  // Make sure VID is in correct format
  if (!validateVID(VID)) {
    console.log(`${VID} is not valid`);
    return;
  }

  // Query the DB
  const response = await prisma.employee.findUnique({
    where: { VID: VID },
  });

  // If Employee DNE
  if (!response) {
    console.log("There is no one with that VID");
    return;
  }

  redirect(`/${VID}`);
}

// Returns true if clock in is required
export async function checkEmployeeStatus(VID: string) {
  const entry = await prisma.entry.findFirst({
    where: { VID },
    orderBy: { id: "desc" },
    include: {
      employee: true,
    },
  });

  console.log(entry);

  // entry DNE OR latest entry is complete
  if (!entry || entry.signIn < entry.signOut) {
    // if entry DNE it's employees first time signing in...
    if (!entry) {
      // Query the DB for Employee name
      const empl = await prisma.employee.findFirst({
        where: { VID },
      });

      // Employee DNE
      if (!empl) {
        redirect("/");
      }
      return { firstName: empl.firstName, VID: empl.VID, signIn: true };
    }
    console.log("Need to sign in", entry);
    return {
      firstName: entry.employee.firstName,
      VID: entry.VID,
      signIn: true,
    };
  }

  console.log("Need to sign out");
  return {
    firstName: entry.employee.firstName,
    VID: entry.VID,
    signIn: false,
  };
}
