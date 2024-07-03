'use client';
import { useQuery } from '@tanstack/react-query';
import {
  type PaginationState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import ky from 'ky';
import { useContext, useState } from 'react';

import { AsideCTX } from '@/context/table-ctx';
import { type User } from '@/hooks/use-fetch-peoples';

import { columns } from './columns';

function LoadingRow() {
  return (
    <tr>
      <td colSpan={columns.length} className="py-2 text-center">
        Loading...
      </td>
    </tr>
  );
}

export function Table() {
  const { setActive, setHost } = useContext(AsideCTX);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const fetchGroups = async (): Promise<User[]> => {
    const resData: { data: []; message: string; success: boolean } = await ky
      .get('https://cam-kitty.vercel.app/api/admin/hosts')
      .json();

    return resData.data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ['hosts'],
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
    <div className="mb-20 mt-60 rounded-2xl">
      <table className="staic mx-auto w-[70dvw] rounded-xl bg-table-data text-sm text-white">
        <thead className="sticky top-[180px] truncate rounded-2xl bg-table-h text-left text-table-h-text drop-shadow-3xl">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="rounded-2xl shadow-2xl">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="rounded-t-xl p-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
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
                  <td key={cell.id} className="p-2 text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
