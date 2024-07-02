import { createColumnHelper } from "@tanstack/react-table";
import { type User } from "@/hooks/use-fetch-peoples";
import { cn } from "@/lib/utils";
import Image from "next/image";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("id", {
    header: "User ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.nickname, {
    id: "nickname",
    header: "Nickname",
    // cell: (info) => <div>{info.getValue()}</div>,
    cell: (info) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={info.row.original.image}
          alt="host_img"
          width={20}
          height={18}
          className="rounded-[50%] mr-2"
        />
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("rating", {
    header: "Rating",

    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("guestsCount", {
    header: "Guests",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("roomId", {
    header: "Room Id",
    cell: (info) => <span># {info.getValue()}</span>,
  }),
  columnHelper.accessor("roomPrice", {
    header: "Room Price",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span
        className={cn(
          info.getValue() === "ONLINE"
            ? "text-green-600 p-1 bg-green-900 rounded-md border-2 border-green-800"
            : "text-blue-600 p-1 bg-blue-900 rounded-md border-2 border-blue-800"
        )}
      >
        {info.getValue().slice(0, 1).toUpperCase() +
          info.getValue().slice(1).toLowerCase()}
      </span>
    ),
  }),
];
