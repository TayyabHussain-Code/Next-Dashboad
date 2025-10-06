// "use client";
// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// export default function DashboardLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <Header setSidebarOpen={setSidebarOpen} />

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto p-6">{children}</main>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
