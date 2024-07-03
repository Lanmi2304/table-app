"use client";
import {
  PaginationState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext, useState } from "react";
import { columns } from "./columns";
import { cn } from "@/lib/utils";
import { type User } from "@/hooks/use-fetch-peoples";
import { AsideCTX } from "@/context/table-ctx";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import ky from "ky";

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

  const fetchGroups = async (): Promise<User[]> => {
    const resData: { data: []; message: string; success: boolean } = await ky
      .get("https://cam-kitty.vercel.app/api/admin/hosts")
      .json();

    return resData.data;
  };

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
            "w-[70dvw] mx-auto staic text-white bg-table-data text-sm rounded-xl"
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
                    <td key={cell.id} className="text-left p-2">
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
