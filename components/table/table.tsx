"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext, useEffect, useState } from "react";
import { columns } from "./columns";
import { cn } from "@/lib/utils";
import { useFetch } from "@/hooks/use-fetch-peoples";
import { type User } from "@/hooks/use-fetch-peoples";
import { AsideCTX } from "@/context/table-ctx";

const LoadingRow = () => (
  <tr>
    <td colSpan={columns.length} className="text-center py-2">
      Loading...
    </td>
  </tr>
);

export function Table() {
  const [data, setData] = useState<User[]>([]);
  const { setActive, setHost } = useContext(AsideCTX);
  const { newData, loading } = useFetch();

  useEffect(() => {
    setData(newData);
  }, [newData]);

  const table = useReactTable({
    data,
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
            {loading ? (
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
