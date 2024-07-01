"use client";
import { DialogComponent } from "@/components/dialog/dialog";
import { Table } from "@/components/table/table";
import { AsideCTX } from "@/context/table-ctx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useContext } from "react";

const queryClient = new QueryClient();
export default function Home() {
  const { selectedHost } = useContext(AsideCTX);

  return (
    <>
      <DialogComponent host={selectedHost} />
      <QueryClientProvider client={queryClient}>
        <Table />
      </QueryClientProvider>
    </>
  );
}
