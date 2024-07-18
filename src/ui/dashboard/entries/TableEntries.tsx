"use client";

import { DatePickerWithRange } from "@/components/daterangepicker";
import { getEndOfDay, getStartOfDay } from "@/lib/utils";
import { Entry, Employee } from "@prisma/client";
import { subDays } from "date-fns";
import { Suspense, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { BiSearch } from "react-icons/bi";
import { EntryTable } from "./data-table";
import { columns } from "@/app/admin/timesheet/columns";

type Entries = [
  {
    id: number;
    VID: string;
    signIn: Date;
    signOut: Date;
    employee: Employee;
  }
];

export default function TableEntries() {
  const [data, setData] = useState<Entries | undefined>([]);
  const [dates, setDates] = useState<DateRange | undefined>({
    from: subDays(getStartOfDay(), 14),
    to: getEndOfDay(),
  });

  const [clicked, setClicks] = useState(0);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/api/entries", {
        method: "POST",
        body: JSON.stringify({
          clockIn: dates?.from,
          clockOut: dates?.to,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [clicked]);

  return (
    <div className="flex flex-col grow justify-center items-center ">
      <div className="flex w-[1000px] justify-between items-center py-4">
        <DatePickerWithRange date={dates} setDate={setDates} />
        <button
          className="flex justify-center items-center rounded-md border border-input py-[8px] px-4 text-sm hover:bg-accent hover:text-accent-foreground"
          onClick={() => {
            setClicks(clicked + 1);
          }}
        >
          <BiSearch className="mr-2 h-[16px] w-[16px]" />
          <h1>Search</h1>
        </button>
      </div>
      <Suspense>
        <EntryTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
