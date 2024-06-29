"use client";
import {
  RowSelectionState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
// import mainData from "@/data/data1.json";
import { columns } from "./columns";
import { cn } from "@/lib/utils";
import { useFetch } from "@/hooks/use-fetch-peoples";
import { type Users } from "@/hooks/use-fetch-peoples";

export function Table() {
  const [data, setData] = useState<Users[]>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const { newData } = useFetch();
  console.log(newData);

  useEffect(() => {
    setData(newData);
  }, [newData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection, //hoist up the row selection state to your own scope
    state: {
      rowSelection, //pass the row selection state back to the table instance
    },
  });
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
                  onClick={() => console.log(row.original)} // <---
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
