import * as HoverCard from '@radix-ui/react-hover-card';
import Image from 'next/image';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  link?: string;
  image: string;
}

function HoverCardComponent({ children, image }: Props) {
  return <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <a
        className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-[7px]">
          <Image
            className="block rounded-full"
            src={image}
            alt="Radix UI"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                Radix
              </div>
              <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                @radix_ui
              </div>
            </div>
            <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
              Components, icons, colors, and templates for building
              high-quality, accessible UI. Free and open-source.
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[5px]">
                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  0
                </div>{' '}
                <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  Following
                </div>
              </div>
              <div className="flex gap-[5px]">
                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  2,900
                </div>{' '}
                <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  Followers
                </div>
              </div>
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
}

export default HoverCardComponent;
