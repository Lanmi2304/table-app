import { FAQs } from "@/FAQ/faqs";
import AccordionFAQ from "@/components/faq/faq";

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
