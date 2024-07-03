'use client';
import Image from 'next/image';
import { useContext } from 'react';

import { AsideCTX } from '@/context/table-ctx';
import { type User } from '@/hooks/use-fetch-peoples';
import { cn } from '@/lib/utils';

import { Dialog, DialogContent, DialogTrigger } from './dialog-content';

export function DialogComponent({ host }: { host: User | undefined }) {
  const { showAside } = useContext(AsideCTX);
  if (!host) return;

  const { nickname, image, rating, roomId, roomPrice, status } = host;

  return (
    <Dialog open={showAside}>
      <DialogTrigger className="hidden">Dialog trigger</DialogTrigger>
      <DialogContent label="About host">
        <div className="h-screen">
          <Image src={image} alt="host-picture" width={600} height={200} />
          <div className="items-left flex flex-col gap-4 pl-4 pt-10 text-pink-300">
            <p>
              Nickname: <span className="text-white">{nickname}</span>
            </p>
            <p>
              Rating: <span className="text-white">{rating}</span>
            </p>
            <p>
              Room ID: <span className="text-white">{roomId}</span>
            </p>
            <p>
              Room Price: <span className="text-white">$ {roomPrice}</span>
            </p>
            <p>
              Status:
              <span
                className={cn(
                  status === 'ONLINE' ? 'text-green-500' : 'text-red-500',
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
}
