import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import React, { type ReactNode, forwardRef, useContext } from 'react';

import { AsideCTX } from '@/context/table-ctx';
import { cn } from '@/lib/utils';

interface PropsType {
  children: ReactNode;
  label: string;
}

export const DialogContent = forwardRef<HTMLDivElement, PropsType>(
  ({ children, label, ...props }, forwardedRef) => {
    const { setActive } = useContext(AsideCTX);
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-30 h-screen w-screen bg-black/30 backdrop-blur-sm',
          )}
        />

        <DialogPrimitive.Content
          {...props}
          ref={forwardedRef}
          onEscapeKeyDown={() => setActive(false)}
          onInteractOutside={() => setActive(false)}
          className={cn(
            'b fixed right-0 top-0 z-40 h-screen w-96 rounded-md border-l-2 border-gray-900 bg-main-bg data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow',
          )}
        >
          <DialogPrimitive.DialogTitle className="hidden">
            {label}
          </DialogPrimitive.DialogTitle>
          {children}
          <DialogPrimitive.Close
            aria-label="Close"
            onClick={() => setActive(false)}
            className="z-60 absolute left-2 top-2 size-4 text-white hover:text-gray-800"
          >
            <Cross1Icon className="size-9 font-bold" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);

DialogContent.displayName = 'DialogContent';
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
