import TableEntries from "@/ui/dashboard/entries/TableEntries";
import SideNavAdmin from "@/ui/dashboard/SideNavAdmin";

export default function page() {
  return (
    <div className="flex">
      <SideNavAdmin />
      <TableEntries />
    </div>
  );
}
