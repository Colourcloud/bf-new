import React from 'react'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <>
    <section className='spaced-p spaced-m'>
        <div className="site-wrapper">
            <div className="faq-container w-full md:w-3/4 lg:w-3/5 mx-auto text-center flex flex-col gap-3">
                <h2 className='text-4xl md:text-4xl font-bold'>Frequently Asked Questions</h2>
                <p className='text-xl font-light'>Below are some frequently asked questions we get about our Application Development services. If you have any other questions, please feel free to <Link href="/contact" className='text-[--primary-color]'>contact us.</Link></p>
            </div>
            <div className="questions-container max-w-4xl mx-auto mt-6">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Faq