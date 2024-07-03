import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { type ReactNode, forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface ContentType {
  children: ReactNode;
  className?: string;
}

interface FAQsType {
  title: string;
  answer: string;
}
interface FAQs {
  faqs: FAQsType[];
}

function AccordionFAQ({ faqs }: FAQs) {
  return (
    <>
      <h1 className="mb-4 px-2 text-left text-3xl font-bold text-slate-200">
        Explore Our FAQs
      </h1>
      <Accordion.Root
        className="w-full rounded-md text-white shadow-[0_2px_10px] shadow-black/5"
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
}

const AccordionItem = forwardRef<
  HTMLDivElement,
  ContentType & { value: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={cn(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

AccordionItem.displayName = 'AcortionItem';

const AccordionTrigger = forwardRef<HTMLButtonElement, ContentType>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          'text-4 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-accordion-content-bg px-5 text-lg leading-none outline-none',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-white transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);
AccordionTrigger.displayName = 'AcortionTrigger';

const AccordionContent = forwardRef<HTMLDivElement, ContentType>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        'text-md overflow-hidden bg-accordion-content-bg px-4 text-left text-slate-400 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-1 py-4">{children}</div>
    </Accordion.Content>
  ),
);

AccordionContent.displayName = 'AcordionContent';

export default AccordionFAQ;
