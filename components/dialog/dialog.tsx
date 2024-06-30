"use client";
import { useContext } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./dialog-content";
import { AsideCTX } from "@/context/table-ctx";
import { User } from "@/hooks/use-fetch-peoples";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const DialogComponent = ({ host }: { host: User | undefined }) => {
  const { showAside } = useContext(AsideCTX);
  if (!host) return;

  const { id, nickname, image, rating, roomId, roomPrice, status } = host;

  return (
    <Dialog open={showAside}>
      <DialogTrigger className={cn("hidden")}>Dialog trigger</DialogTrigger>
      <DialogContent label="About host">
        <div>
          <Image src={image} alt="host-picture" width={600} height={200} />
          <div className="flex items-center justify-center gap-4 text-white pt-10">
            <p>{nickname}</p>
            <p>Rating: {rating} </p>
            <p>Room ID: {roomId}</p>
          </div>
          <div className="flex items-center justify-center text-white gap-4 pb-28">
            <p>Room Price: ${roomPrice}</p>
            <p>
              Status:{" "}
              <span
                className={cn(
                  status === "ONLINE" ? "text-green-500" : "text-red-500"
                )}
              >
                {status}
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
