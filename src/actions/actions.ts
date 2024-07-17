"use server";

import prisma from "@/lib/db";
import { validateVID } from "@/utils/dataValidation";
import { redirect } from "next/navigation";
import { DateRange } from "react-day-picker";

export async function handleVIDLogin(prevState: any, formData: FormData) {
  const VID = formData.get("VID") as string;

  // Make sure VID is in correct format
  if (!validateVID(VID)) {
    console.log(`${VID} is not valid`);
    return { message: "Please enter a valid VID." };
  }

  // Query the DB
  const response = await prisma.employee.findUnique({
    where: { VID: VID },
  });

  // If Employee DNE
  if (!response) {
    console.log("There is no one with that VID");
    return { message: "Employee VID does not exist." };
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

export async function loginEmployee(VID: string) {
  const signOutVal = new Date(0);

  const entryRes = await prisma.entry.create({
    data: {
      signOut: signOutVal,
      employee: {
        connect: {
          VID: VID,
        },
      },
    },
    include: {
      employee: true,
    },
  });

  redirect("/");
}

export async function logoutEmployee(VID: string) {
  const signOutVal = new Date(0);

  const entry = await prisma.entry.findFirst({
    where: { VID },
    orderBy: { id: "desc" },
    include: {
      employee: true,
    },
  });

  const signOut = await prisma.entry.update({
    where: { id: entry?.id },
    data: {
      signOut: new Date(),
    },
  });

  console.log(signOut);
  redirect("/");
}

export async function loginAdmin(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const val = await prisma.admin.findUnique({
    where: {
      username: username,
      password: password,
    },
  });

  if (!val) {
    return { message: "Invalid Credentials." };
  }

  redirect("/admin/timesheet");
}

export async function addEmply(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const VID = formData.get("VID") as string;

  // Make sure VID is in correct format
  if (!validateVID(VID)) {
    console.log(`${VID} is not valid`);
    return { message: "Please enter a valid VID." };
  }

  // Make sure user we're creating DNE
  const result = await prisma.employee.findUnique({
    where: {
      VID: VID,
    },
  });

  if (result) {
    return { message: "Employee VID exists." };
  }

  // Create user
  const newUser = await prisma.employee.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      VID: VID,
    },
  });

  return { message: "user created" };
}

export async function editEmplData(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const VID = formData.get("VID") as string;
  const id = prevState.id;
  console.log(prevState);
  console.log(formData);

  // Make sure VID is in correct format
  if (!validateVID(VID)) {
    console.log(`${VID} is not valid`);
    prevState["message"] = "Please enter a valid VID.";
    return prevState;
  }

  // If no changes have been made return error message
  if (
    prevState.firstName == firstName &&
    prevState.lastName == lastName &&
    prevState.VID == VID
  ) {
    prevState["message"] = "No changes have been made";
    return prevState;
  }

  // Make sure new VID isn't already being used
  const checkVIDEmpl = await prisma.employee.findUnique({
    where: {
      VID: VID,
    },
  });

  if (checkVIDEmpl && checkVIDEmpl.id != id) {
    prevState["message"] = "VID is taken by another employee.";
    return prevState;
  }

  const updated = await prisma.employee.update({
    where: {
      id: id,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      VID: VID,
    },
  });

  return {
    firstName: firstName,
    lastName: lastName,
    VID: VID,
    message: "User updated",
  };
}

export async function deleteEmpl(prevState: any, formData: FormData) {
  const id = prevState.id;

  const deleted = await prisma.employee.delete({
    where: {
      id: id,
    },
  });

  return {
    firstName: "",
    lastName: "",
    VID: "",
    message: "User deleted",
  };
}
