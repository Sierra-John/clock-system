"use client";

import SheetActionMenu from "@/ui/dashboard/employees/SheetActionMenu";
import { ColumnDef } from "@tanstack/react-table";

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  VID: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "firstName",
    header: "First",
  },
  {
    accessorKey: "lastName",
    header: "Last",
  },
  {
    accessorKey: "VID",
    header: "VID",
  },
  {
    id: "actions",
    header: "Edit",
    cell: ({ row }) => {
      const empl = row.original;

      return (
        <SheetActionMenu
          firstName={empl.firstName}
          lastName={empl.lastName}
          VID={empl.VID}
          id={empl.id}
        />
      );
    },
  },
];
