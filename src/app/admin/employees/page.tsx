import SideNavAdmin from "@/ui/dashboard/SideNavAdmin";
import TableCRUDEmp from "@/ui/dashboard/employees/TableCRUDEmp";

export default function page() {
  return (
    <div className="flex">
      <SideNavAdmin />
      <TableCRUDEmp />
    </div>
  );
}
