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

  const { nickname, image, rating, roomId, roomPrice, status } = host;
  // Set open to showSide
  return (
    <Dialog open={false}>
      <DialogTrigger className={cn("hidden")}>Dialog trigger</DialogTrigger>
      <DialogContent label="About host">
        <div className="h-screen">
          <Image src={image} alt="host-picture" width={600} height={200} />
          <div className="flex flex-col pl-4 items-left gap-4 text-pink-300 pt-10">
            <p>
              Nickname: <span className="text-white">{nickname}</span>
            </p>
            <p>
              Rating: <span className="text-white">{rating}</span>{" "}
            </p>
            <p>
              Room ID: <span className="text-white">{roomId}</span>
            </p>

            <p>
              Room Price: <span className="text-white">$ {roomPrice}</span>
            </p>
            <p>
              Status: {""}
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
