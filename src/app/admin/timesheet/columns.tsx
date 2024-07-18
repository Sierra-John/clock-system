"use client";

import { extractTime, formatDate, getTimeDifference } from "@/lib/utils";
import { Employee } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Entries = {
  id: number;
  VID: string;
  signIn: Date;
  signOut: Date;
  employee: Employee;
};

export const columns: ColumnDef<Entries>[] = [
  { accessorKey: "employee.firstName", id: "firstName", header: "First Name" },
  { accessorKey: "employee.lastName", id: "lastName", header: "Last Name" },
  {
    accessorKey: "signIn",
    header: "Date",
    id: "Date",
    cell: ({ row }) => {
      const dateTime = formatDate(new Date(row.getValue("signIn")));
      return <div>{dateTime}</div>;
    },
  },
  {
    accessorKey: "signIn",
    header: "Clock-In",
    cell: ({ row }) => {
      const time = extractTime(new Date(row.getValue("signIn")));
      return <div>{time}</div>;
    },
  },
  {
    accessorKey: "signOut",
    header: "Clock-Out",
    cell: ({ row }) => {
      let time = "";

      if (row.getValue("signOut") != "1970-01-01T00:00:00.000Z") {
        time = extractTime(new Date(row.getValue("signOut")));
      } else {
        time = "Clocked-in";
      }
      return <div>{time}</div>;
    },
  },
  {
    accessorKey: "signIn",
    header: "*Time Worked",
    id: "*Time Worked",
    cell: ({ row }) => {
      if (row.getValue("signOut") != "1970-01-01T00:00:00.000Z") {
        const dateTime = getTimeDifference(
          new Date(row.getValue("signIn")),
          new Date(row.getValue("signOut"))
        );
        return <div>{dateTime}</div>;
      } else {
        return <div>Counting...</div>;
      }
    },
  },
  {
    accessorKey: "VID",
    header: "VID",
  },
];
