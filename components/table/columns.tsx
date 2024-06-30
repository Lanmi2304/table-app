import { createColumnHelper } from "@tanstack/react-table";
import { type User } from "@/hooks/use-fetch-peoples";
import { cn } from "@/lib/utils";

// type Person = {
//   id: string;
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   status: string;
//   progress: number;
// };

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("id", {
    header: "User ID",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.nickname, {
    id: "nickname",
    header: "Nickname",
    cell: (info) => <b>{info.getValue()}</b>,
  }),
  columnHelper.accessor("rating", {
    header: "Rating",
    // id: "lastName",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("guestsCount", {
    header: "Guests",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("roomId", {
    header: "Room Id",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("roomPrice", {
    header: "Room Price",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span
        className={cn(
          info.getValue() === "ONLINE" ? "text-green-500" : "text-red-400"
        )}
      >
        {info.getValue()}
      </span>
    ),

    // footer: (info) => info.column.id,
  }),
];
