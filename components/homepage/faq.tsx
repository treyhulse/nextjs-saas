import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <Accordion type="single" collapsible className="w-full p-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>How long does it take to set up my print shop website?</AccordionTrigger>
                <AccordionContent>
                    Most print shops are up and running within a day. Our setup wizard helps you configure your products, pricing, and design options quickly.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Can customers design their own products?</AccordionTrigger>
                <AccordionContent>
                    Yes! Our product designer allows customers to upload artwork, add text, and preview their designs on your products. You control which design options are available.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Do you support custom domains?</AccordionTrigger>
                <AccordionContent>
                    Yes! While all plans include a free subdomain (yourshop.takeoutthreads.com), Professional and Enterprise plans support custom domain names.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
