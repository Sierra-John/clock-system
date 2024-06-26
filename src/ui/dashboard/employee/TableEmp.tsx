"use client";

import { DatePickerWithRange } from "@/components/daterangepicker";
import { subDays } from "date-fns";
import React, { Suspense, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { DataTableEmp } from "./data-table";
import { Entry, columns } from "@/app/(auth)/[VID]/summary/columns";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { getEndOfDay, getStartOfDay } from "@/lib/utils";

export default function TableEmp() {
  const [dates, setDates] = React.useState<DateRange | undefined>({
    from: subDays(getStartOfDay(), 14),
    to: getEndOfDay(),
  });
  const [data, setData] = useState<
    { signIn: string; signOut: string }[] | undefined
  >([]);
  const [clicked, setClicks] = useState(0);

  const VID = usePathname().replace("/summary", "").replace("/", "");

  useEffect(() => {
    try {
      fetch("http://localhost:3000/api/employees", {
        method: "POST",
        body: JSON.stringify({
          VID: VID,
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
    <div className="flex flex-col grow justify-center items-center">
      <div className="flex justify-center items-center">
        <DatePickerWithRange date={dates} setDate={setDates} />
        <BiSearch
          onClick={() => {
            setClicks(clicked + 1);
          }}
        />
      </div>
      <Suspense>
        <DataTableEmp columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
