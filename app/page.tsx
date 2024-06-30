"use client";
import { DialogComponent } from "@/components/dialog/dialog";
import { Table } from "@/components/table/table";
import { AsideCTX } from "@/context/table-ctx";

import { useContext } from "react";

export default function Home() {
  const { selectedHost } = useContext(AsideCTX);

  return (
    <>
      <DialogComponent host={selectedHost} />
      <Table />
    </>
  );
}
