import { FAQs } from "@/FAQ/faqs";
import AccordionFAQ from "@/components/faq/faq";
import HoverCardTool from "@/components/ui/tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  return (
    <>
      <h1 className="text-white">Home Page</h1>
      <div className="mt-72 w-[96dvw] sm:w-[50dvw]">
        <AccordionFAQ faqs={FAQs} />
      </div>
    </>
  );
}
