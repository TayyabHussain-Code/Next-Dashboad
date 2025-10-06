"use client";
import { useState } from "react";

export default function Table({ columns, data, rowsPerPage = 20 }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="w-full bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="w-full mb-4 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
      />

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="border p-2 text-left dark:text-white"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr
              key={i}
              className="border-b hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="border p-2 dark:text-gray-300"
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
          {paginatedData.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center p-4">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="dark:text-white">
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages || totalPages === 0}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
