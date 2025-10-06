"use client";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-4 text-gray-600 dark:text-gray-200"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Dashboard
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
