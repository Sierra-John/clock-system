"use client";

import {
  extractTime,
  formatDate,
  formatDay,
  getTimeDifference,
} from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export type Entry = {
  signIn: string;
  signOut: string;
};

export const columns: ColumnDef<Entry>[] = [
  {
    accessorKey: "signIn",
    header: "Date",
    cell: ({ row }) => {
      const dateTime = formatDate(new Date(row.getValue("signIn")));
      return <div>{dateTime}</div>;
    },
  },
  {
    accessorKey: "signIn",
    header: "Day",
    cell: ({ row }) => {
      const dateTime = formatDay(new Date(row.getValue("signIn")));
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
];
