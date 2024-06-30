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
    const { setActive, showAside } = useContext(AsideCTX);
    return (
      <div>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay
            className={cn(
              "data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide"
            )}
          />

          <DialogPrimitive.Content
            {...props}
            ref={forwardedRef}
            onEscapeKeyDown={() => setActive(false)}
            onInteractOutside={() => setActive(false)}
            className={cn(
              "data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide fixed top-[10%] w-96 right-4 bg-info-host rounded-md"
            )}
          >
            <DialogPrimitive.DialogTitle className="text-center text-white hidden">
              {label}
            </DialogPrimitive.DialogTitle>
            {children}
            <DialogPrimitive.Close
              aria-label="Close"
              onClick={() => setActive(false)}
              className="absolute top-2 size-4 left-2 z-40 text-white hover:text-gray-800"
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
