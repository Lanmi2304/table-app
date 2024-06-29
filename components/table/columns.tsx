import { createColumnHelper } from "@tanstack/react-table";

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const columnHelper = createColumnHelper<Person>();

export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.firstName, {
    id: "firstName",
    header: "First Name",
    cell: (info) => <b>{info.getValue()}</b>,
  }),
  columnHelper.accessor("lastName", {
    // id: "lastName",
    // cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    // cell: (info) => info.renderValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    // footer: (info) => info.column.id,
  }),
];
