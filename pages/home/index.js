import DashboardLayout from "@/layouts/DashboardLayout";
import { useSelector } from "react-redux";
import { Users, BarChart3, ShoppingCart } from "lucide-react";
export default function HomePage() {
  const data = useSelector((state) => console.log(state.auth, "gfsfdhg"));
  const stats = [
    { title: "Revenue", value: "$45,231", icon: ShoppingCart },
    { title: "Users", value: "2,345", icon: Users },
    { title: "Orders", value: "1,234", icon: BarChart3 },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Dashboard Overview
      </h1>

      {/* Example Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <stat.icon />
            <h3 className="text-gray-500 dark:text-gray-400">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
