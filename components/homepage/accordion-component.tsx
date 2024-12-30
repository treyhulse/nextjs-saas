import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TITLE_TAILWIND_CLASS } from "@/utils/constants"

const faqItems = [
  {
    question: "Can I use my own domain name?",
    answer: "Yes! While all plans come with a free subdomain (yourshop.takeoutthreads.com), Professional and Enterprise plans support custom domain names."
  },
  {
    question: "How does the product designer work?",
    answer: "Our product designer allows your customers to upload artwork, add text, and customize products. You can set up products with multiple print locations and pricing rules."
  },
  {
    question: "Can I customize the quote form?",
    answer: "Professional and Enterprise plans allow you to add custom fields to the quote form to gather specific information needed for your print jobs."
  },
  // ... add more relevant FAQs ...
]

export function AccordionComponent() {
    return (
        <div className="flex flex-col w-[70%] lg:w-[50%]">
            <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold text-center tracking-tight dark:text-white text-gray-900`}>
                Frequently Asked Questions (FAQs)
            </h2>
            <Accordion type="single" collapsible className="w-full mt-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <span className="font-medium">What's included in my print shop website?</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Your website includes everything needed to run your print shop online: a customizable homepage, 
                           product designer for customer artwork, quote request forms, image gallery, shopping cart, 
                           and a complete admin dashboard to manage your business.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
