"use client";
import Button from "@/components/ui/buttons/button";
import { Toaster, toast } from "sonner";

type PromiseReturn = {
  name: string;
};

export default function Users() {
  const promise = (): Promise<PromiseReturn> =>
    new Promise<PromiseReturn>((resolve) =>
      setTimeout(() => resolve({ name: "Sent" }), 2000)
    );
  return (
    <div className="flex gap-8 mt-[40%]">
      <Button onClick={() => toast.success("Success")} className="text-white">
        Success
      </Button>
      <Button
        onClick={() =>
          toast.promise(promise, {
            loading: "Sending...",
            success: (data) => {
              return `${data.name} successfully`;
            },
            error: "Error",
          })
        }
        className="text-white"
      >
        Send
      </Button>
      {/* <Button
        onClick={() =>
          toast(<div className="text-white">Sisaj karu</div>, {
            classNames: {
              toast: "bg-orange-400",
              title: "text-red-400 text-2xl",
              description: "text-red-400",
            },
          })
        }
      >
        Custom
      </Button> */}
    </div>
  );
}
