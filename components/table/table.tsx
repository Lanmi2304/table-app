"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext, useEffect, useState } from "react";
import { columns } from "./columns";
import { cn } from "@/lib/utils";
// import { useFetch } from "@/hooks/use-fetch-peoples";
import { type User } from "@/hooks/use-fetch-peoples";
import { AsideCTX } from "@/context/table-ctx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

const LoadingRow = () => (
  <tr>
    <td colSpan={columns.length} className="text-center py-2">
      Loading...
    </td>
  </tr>
);

export function Table() {
  const { setActive, setHost } = useContext(AsideCTX);

  const fetchGroups = (): Promise<User[]> =>
    axios
      .get("https://cam-kitty.vercel.app/api/admin/hosts")
      .then((response) => response.data.data);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["hosts"],
    queryFn: fetchGroups,
  });

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const hostPreviewHandler = (host: User) => {
    setActive(true);
    setHost(host);
  };

  return (
    <>
      <div className="h-10"></div>

      <table
        className={cn(
          "w-[50dvw] mx-auto mb-9 text-white bg-table-data text-sm rounded-xl overflow-hidden"
        )}
      >
        <thead
          className={cn(
            "sticky top-0 text-table-h-text bg-table-h truncate text-left"
          )}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {isFetching ? (
            <LoadingRow />
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} onClick={() => hostPreviewHandler(row.original)}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-left h-6 border-b-2 border-b-slate-800 p-2"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
