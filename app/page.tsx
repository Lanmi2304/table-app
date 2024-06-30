"use client";
import { DialogComponent } from "@/components/dialog/dialog";
import { Table } from "@/components/table/table";
import { AsideCTX } from "@/context/table-ctx";
import { cn } from "@/lib/utils";
import { useContext } from "react";

export default function Home() {
  const { showAside, selectedHost } = useContext(AsideCTX);
  // const x =
  //   "https://i2.imlmediahub.com/imagesrv/imp_getimage?is=IMLFOH&qu=77&wm=108x90&fn=0464/1602464/160246401689515231.jpg&cctrl=public,max-age%3d2592000".charAt(
  //     9
  //   );
  // console.log(x);
  return (
    <>
      <DialogComponent host={selectedHost} />
      <Table />
    </>
  );
}

// Missing host={selectedHost} ^^^^
