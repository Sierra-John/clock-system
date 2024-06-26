import React from "react";
import SideNavEmp from "@/ui/dashboard/employee/SideNavEmp";
import TableEmp from "@/ui/dashboard/employee/TableEmp";

export default function Page(VID: string) {
  return (
    <div className="flex">
      <SideNavEmp />
      <TableEmp />
    </div>
  );
}
