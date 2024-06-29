"use client";
import Aside from "@/components/aside";
import { Table } from "@/components/table/table";
import { AsideCTX } from "@/context/table-ctx";
import { useContext } from "react";

export default function Home() {
  const { showAside, selectedHost } = useContext(AsideCTX);
  return (
    <>
      <Table />
      {showAside && <Aside host={selectedHost} />}
    </>
  );
}
