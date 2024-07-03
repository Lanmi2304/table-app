"use client";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode, useEffect, useState } from "react";
import AvatarDemo from "./avatar";
import { User } from "@/hooks/use-fetch-peoples";

type Props = {
  children: ReactNode;
  data: User;
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
};

const TooltipDemo = ({
  children,
  data,
  sideOffset = -30,
  side = "right",
  ...props
}: Props) => {
  const [isMd, setIsMd] = useState(false);
  const [currWid, setCurrWid] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { image, nickname, guestsCount } = data;

  useEffect(() => {
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
    window.addEventListener("resize", resizeFN);

    return () => window.removeEventListener("resize", resizeFN);
  }, [currWid, isMd]);

  // console.log(currWid);
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
              console.log("ok");
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
            className="data-[state=delayed-open]:data-[side=bottom]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=top]:animate-slideUpAndFade select-none rounded-[4px] bg-main-bg px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
          >
            <div className="h-6 max-w-96 bg-main-bg flex items-center gap-2">
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
};

export default TooltipDemo;
