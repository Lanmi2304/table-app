import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

  type?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  position = "bottom-right",
  className,
  type,
  ...props
}: ButtonProps) {
  return (
    <>
      {/* <Toaster richColors theme="dark" position={position} /> */}
      <button
        className={cn(
          "border border-slate-400 text-white px-4 py-2 rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </button>
      ;
    </>
  );
}
