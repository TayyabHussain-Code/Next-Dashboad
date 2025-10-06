"use client";
import { logout } from "@/store/authSlice";
import { X, LogOut, Home, Users, BarChart3, Settings, Ban } from "lucide-react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/home" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: Ban, label: "Banned", path: "/bann" },
    { icon: BarChart3, label: "Details", path: "/users/detail" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <>
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:static inset-y-0 left-0 z-50 w-64
        bg-white text-gray-900
        dark:bg-gray-900 dark:text-white
        transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                aria-current={
                  router.pathname === item.path ? "page" : undefined
                }
                onClick={() => router.push(item.path)}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                  router.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                <item.icon size={20} />
                <span className="ml-3 font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 rounded-lg transition-colors text-red-600 hover:bg-red-100 dark:hover:bg-red-900 dark:text-red-400"
            >
              <LogOut size={20} />
              <span className="ml-3 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
