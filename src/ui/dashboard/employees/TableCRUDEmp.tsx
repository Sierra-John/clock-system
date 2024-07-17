"use client";

import { Employee } from "@prisma/client";
import { Suspense, useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "@/app/admin/employees/columns";

export default function TableCRUDEmp() {
  const [data, setData] = useState<Employee | undefined>([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/api/empCRUD", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col grow justify-center items-center ">
      <Suspense>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
