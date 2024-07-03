import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ReactNode, forwardRef } from "react";

type ContentType = {
  children: ReactNode;
  className?: string;
};

type FAQsType = {
  title: string;
  answer: string;
};
type FAQs = {
  faqs: FAQsType[];
};

const AccordionFAQ = ({ faqs }: FAQs) => (
  <>
    <h1 className="text-slate-200 text-left px-2 font-bold text-3xl mb-4">
      Explore Our FAQs
    </h1>
    <Accordion.Root
      className="text-white w-full rounded-md shadow-[0_2px_10px] shadow-black/5 "
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {faqs.map((faq, key) => (
        <AccordionItem key={key} value={`item-${key + 1}`}>
          <AccordionTrigger>{faq.title}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion.Root>
  </>
);

const AccordionItem = forwardRef<
  HTMLDivElement,
  ContentType & { value: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={cn(
      "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

AccordionItem.displayName = "AcortionItem";

const AccordionTrigger = forwardRef<HTMLButtonElement, ContentType>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "bg-accordion-content-bg group flex h-[45px] flex-1 text-lg cursor-default items-center justify-between px-5 text-4 leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AcortionTrigger";

const AccordionContent = forwardRef<HTMLDivElement, ContentType>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "bg-accordion-content-bg text-slate-400 px-4 text-left data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-md",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-4 px-1">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AcordionContent";

export default AccordionFAQ;
