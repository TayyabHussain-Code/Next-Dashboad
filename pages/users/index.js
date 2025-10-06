import DashboardLayout from "@/layouts/DashboardLayout";
import Table from "@/components/Table";
import { useEffect } from "react";
import { UserList } from "@/DAL/users/users";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "@/store/dataSlice";
import { Phone } from "lucide-react";

export default function UsersPage() {
  const dataapi = useSelector((state) => state.data.users);
  const dispatch = useDispatch();
  const columns = [
    { header: "RID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Role", accessor: "role" },
  ];
  const data = dataapi.map((e, i) => ({
    id: e.code,
    name: e.name,
    email: e.email,
    phone: e.phone,
    role: e.role,
  }));
  console.log(data, "datata");
  const handleUser = async () => {
    const page = 0;
    const rowsPerPage = 2500;
    const filters = "";
    const resp = await UserList(page + 1, rowsPerPage, filters);
    if (resp?.total > 1 || resp?.total > 1) {
      console.log(resp?.data, "resppppp");
      dispatch(setUsers(resp.data));
    }
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Users</h1>
      <Table columns={columns} data={data} />
    </DashboardLayout>
  );
}
