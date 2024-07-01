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
const queryClient = new QueryClient();

export function Table() {
  const [initData, setInitData] = useState<User[]>([]);
  const { setActive, setHost } = useContext(AsideCTX);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["hosts"],
    queryFn: () => {
      axios.get("https://cam-kitty.vercel.app/api/admin/hosts").then((res) => {
        setInitData(res.data.data);
      });
    },
  });

  const table = useReactTable({
    data: initData,
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
      <div className="relative w-[80dvw] mx-auto">
        <table
          className={cn("absolute w-full text-white bg-table-data rounded-md ")}
        >
          <thead className={cn("sticky top-0 text-table-h-text bg-table-h")}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
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
          <tbody>
            {isFetching ? (
              <LoadingRow />
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => hostPreviewHandler(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={cn("text-center")}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
