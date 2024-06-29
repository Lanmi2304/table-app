import { createColumnHelper } from "@tanstack/react-table";
import { type Users } from "@/hooks/use-fetch-peoples";

// type Person = {
//   id: string;
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   status: string;
//   progress: number;
// };

const columnHelper = createColumnHelper<Users>();

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
    cell: (info) => info.getValue(),

    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("isToyOnline", {
    header: "Toy Online",
    cell: (info) => info.renderValue(),

    // footer: (info) => info.column.id,
  }),
];
