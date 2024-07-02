"use client";
import {
  PaginationState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
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
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

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
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const hostPreviewHandler = (host: User) => {
    setActive(true);
    setHost(host);
  };

  return (
    <>
      <div className="rounded-2xl mt-60 mb-20">
        <table
          className={cn(
            "w-[50dvw] mx-auto staic text-white bg-table-data text-sm rounded-xl"
          )}
        >
          <thead
            className={cn(
              "sticky top-[180px] text-table-h-text bg-table-h truncate text-left rounded-2xl drop-shadow-3xl"
            )}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="rounded-2xl shadow-2xl">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-2 rounded-t-xl">
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
                <tr
                  className="h-6 border-b border-b-table-border first:border-t first:border-t-table-border last:border-none"
                  key={row.id}
                  onClick={() => hostPreviewHandler(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="text-left p-2 ">
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

      <select
        className="mb-20"
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </>
  );
}
