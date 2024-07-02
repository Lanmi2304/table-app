import React, { ReactNode, forwardRef, useContext } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AsideCTX } from "@/context/table-ctx";

type PropsType = {
  children: ReactNode;
  label: string;
};

export const DialogContent = forwardRef<HTMLDivElement, PropsType>(
  ({ children, label, ...props }, forwardedRef) => {
    const { setActive } = useContext(AsideCTX);
    return (
      <div>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay
            className={cn(
              // "data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide w-screen bg-white z-30"
              "w-screen h-screen z-30 fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm bg-black/30"
            )}
          />

          <DialogPrimitive.Content
            {...props}
            ref={forwardedRef}
            onEscapeKeyDown={() => setActive(false)}
            onInteractOutside={() => setActive(false)}
            className={cn(
              "data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide z-40 fixed top-0 w-96 h-screen right-0 bg-main-bg border-l-2 border-gray-900 b rounded-md"
            )}
          >
            <DialogPrimitive.DialogTitle className="hidden">
              {label}
            </DialogPrimitive.DialogTitle>
            {children}
            <DialogPrimitive.Close
              aria-label="Close"
              onClick={() => setActive(false)}
              className={cn(
                "absolute top-2 size-4 left-2 z-60 text-white hover:text-gray-800"
              )}
            >
              <Cross1Icon className="size-9 font-bold" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </div>
    );
  }
);

DialogContent.displayName = "DialogContent";
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
