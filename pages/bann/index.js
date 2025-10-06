import DashboardLayout from "@/layouts/DashboardLayout";
import Table from "@/components/Table";
import { useSelector } from "react-redux";

export default function Gift() {
  const dataapi = useSelector((state) => state.data.users);
  const columns = [
    { header: "RID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Role", accessor: "role" },
  ];
  const data = dataapi
    .filter((e) => e.banned === true)
    .map((e) => ({
      id: e.code,
      name: e.name,
      email: e.email,
      phone: e.phone,
      role: e.role,
    }));

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Gifts</h1>
      <Table columns={columns} data={data} />
    </DashboardLayout>
  );
}
