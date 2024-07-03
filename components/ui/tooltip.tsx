'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import { type ReactNode, useEffect, useState } from 'react';

import { type User } from '@/hooks/use-fetch-peoples';

import AvatarDemo from './avatar';

interface Props {
  children: ReactNode;
  data: User;
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

function TooltipDemo({
  children,
  data,
  sideOffset = -30,
  side = 'right',
}: Props) {
  const [isMd, setIsMd] = useState(false);
  const [currWid, setCurrWid] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { image, nickname, guestsCount } = data;

  useEffect(() => {
    if (currWid < 640) setIsMd(true);
    const resizeFN = () => {
      setCurrWid(window.innerWidth);
      if (currWid < 640) {
        setIsMd(true);
      } else {
        setIsMd(false);
        // setCurrWid(window.innerWidth);
      }
      console.log(currWid, isMd);
    };
    window.addEventListener('resize', resizeFN);

    return () => window.removeEventListener('resize', resizeFN);
  }, [currWid, isMd]);

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root onOpenChange={setIsOpen} open={isOpen}>
        <Tooltip.Trigger
          asChild
          onClick={(e) => {
            if (!isMd) {
              e.preventDefault();
            } else {
              setIsOpen(true);
              console.log('ok');
            }
          }}
          className="z-70"
        >
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            sideOffset={sideOffset}
            className="select-none rounded-[4px] bg-main-bg px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideUpAndFade"
          >
            <div className="flex h-6 max-w-96 items-center gap-2 bg-main-bg">
              <AvatarDemo image={image} />
              <h4 className="text-slate-300">{nickname}</h4>
              <h4 className="text-slate-300">{guestsCount}</h4>
            </div>
            <Tooltip.Arrow className="fill-main-bg" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default TooltipDemo;
