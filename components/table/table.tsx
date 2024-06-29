"use client";
import {
  RowSelectionState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext, useEffect, useState } from "react";
// import mainData from "@/data/data1.json";
import { columns } from "./columns";
import { cn } from "@/lib/utils";
import { useFetch } from "@/hooks/use-fetch-peoples";
import { type User } from "@/hooks/use-fetch-peoples";
import { AsideCTX } from "@/context/table-ctx";

export function Table() {
  const [data, setData] = useState<User[]>([]);
  const { setActive, setHost } = useContext(AsideCTX);
  const { newData } = useFetch();

  useEffect(() => {
    setData(newData);
  }, [newData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const hostPreviewHandler = (host: User) => {
    setActive();
    setHost(host);
  };
  // console.log(rowSelection);
  return (
    <>
      {data && (
        <div className="p-2">
          <table className={cn("w-[98vw] text-white bg-gray-800 rounded-md ")}>
            <thead className={cn("text-table-h-text bg-table-h")}>
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
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => hostPreviewHandler(row.original)} // <---
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
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="h-4" />
        </div>
      )}
    </>
  );
}
