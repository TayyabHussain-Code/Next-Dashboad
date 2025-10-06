// "use client";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     if (localStorage.theme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDark(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (dark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//       setDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//       setDark(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//     >
//       {dark ? "🌙 Dark" : "☀️ Light"}
//     </button>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", initial === "dark");
    setIsDark(initial === "dark");
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm dark:text-gray-100"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
