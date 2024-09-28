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
                <p className='text-xl font-light'>Below are some frequently asked questions we get about our UI/UX services. If you have any other questions, please feel free to <Link href="/contact" className='text-[--primary-color]'>contact us.</Link></p>
            </div>
            <div className="questions-container max-w-4xl mx-auto mt-12">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is the difference between UI &#40;User Interface&#41; and UX &#40;User Experience&#41; design?</AccordionTrigger>
                    <AccordionContent>
                    UI &#40;User Interface&#41; design focuses on the look and feel of the application, including the visual elements like buttons, icons, colours, and typography that users interact with. UX &#40;User Experience&#41; design is about how a user navigates and experiences a product, ensuring it is intuitive, efficient, and meets the user&apos;s needs. While UI is more about aesthetics, UX is about creating a seamless and meaningful journey for the user.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do you conduct user research for better UX design?</AccordionTrigger>
                    <AccordionContent>
                    User research involves understanding the needs, goals, and behaviours of your target audience through methods such as interviews, surveys, user personas, and usability testing. We also analyse existing user data, competitor research, and industry trends to gather insights. These findings help us create user flows, wireframes, and prototypes that prioritise a smooth and enjoyable user experience.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How important is prototyping and wireframing in the design process?</AccordionTrigger>
                    <AccordionContent>
                    Wireframing and prototyping are crucial steps in the design process. Wireframes provide a skeletal layout of the page structure, helping to map out the user&apos;s journey and key interactions before any visual design is applied. Prototypes take this further by creating interactive mockups that simulate how the final product will function. These tools allow us to test ideas early, make revisions quickly, and ensure alignment with your business goals before moving into development.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What design systems do you use to maintain consistency across the project?</AccordionTrigger>
                    <AccordionContent>
                    We create a design system that includes a set of reusable components &#40;buttons, forms, icons, typography, colour schemes&#41; governed by clear standards and guidelines. This system helps ensure that the design remains consistent across all pages and devices, providing a coherent and unified experience for the users. It also allows for easier scaling as new features or pages are added to your product.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>How do you ensure accessibility in your designs?</AccordionTrigger>
                    <AccordionContent>
                    Accessibility is at the forefront of our design approach. We follow guidelines from the Web Content Accessibility Guidelines &#40;WCAG&#41;, ensuring that elements such as colour contrast, font size, alt text for images, and screen reader compatibility are implemented. Our goal is to make sure the website or app is usable by all people, including those with disabilities, and we conduct regular accessibility audits to ensure compliance.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>How do you measure the success of a UI/UX design project?</AccordionTrigger>
                    <AccordionContent>
                    Success is measured by a combination of quantitative and qualitative metrics. Quantitative metrics include user engagement, task completion rates, conversion rates, and bounce rates, which indicate how well users interact with the interface. Qualitative metrics come from user feedback, usability testing, and customer satisfaction surveys. We also use A/B testing to compare different designs and improve based on actual user behaviour.
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