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
                <p className='text-xl font-light'>Below are some frequently asked questions we get about our Template Design services. If you have any other questions, please feel free to <Link href="/contact" className='text-[--primary-color]'>contact us.</Link></p>
            </div>
            <div className="questions-container max-w-4xl mx-auto mt-12">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are the benefits of using template-driven design for website development?</AccordionTrigger>
                    <AccordionContent>
                    Template-driven design allows for faster development since pre-built designs and components are used as a foundation. It&apos;s more cost-effective than custom development and ensures a quicker time-to-market. Templates also come with built-in responsiveness, meaning they adapt well to different screen sizes and devices. However, customisation is somewhat limited compared to custom-built websites, making them ideal for smaller projects or businesses with tight budgets.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I still customise a template-based website to match my brand?</AccordionTrigger>
                    <AccordionContent>
                    Yes, while templates come with predefined layouts they can still be customised to reflect your brand&apos;s identity. We adjust the colour schemes, typography, images, and content to match your brand guidelines. Although template-based websites are less flexible in terms of layout changes, we ensure the site looks unique and professional to fit your business needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How do you ensure that a template-based website performs well?</AccordionTrigger>
                    <AccordionContent>
                    Even with a template, we optimise the website for speed, responsiveness, and SEO. This includes using clean, lightweight code, image optimisation, minimising unnecessary plugins, and ensuring the template meets modern web standards. We also test the site across various devices and browsers to guarantee it performs smoothly for all users.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Can I integrate third-party tools and services with a template-based website?</AccordionTrigger>
                    <AccordionContent>
                    Absolutely! Many templates support integration with popular third-party services like payment processors, CRM systems, email marketing tools, and analytics platforms. We ensure that these integrations are set up correctly and work seamlessly with your chosen template, enabling you to automate workflows and provide a better user experience.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What type of businesses are best suited for a template-driven website?</AccordionTrigger>
                    <AccordionContent>
                    Template-driven websites are ideal for small businesses or startups that need an online presence quickly and affordably. They work well for industries like personal blogs, small e-commerce shops, portfolio sites, and service-based businesses where a fully custom solution may not be necessary at the initial stage. We&apos;ve written a blog that outlines the difference between template-driven and custom-built websites. <Link href="/blog/custom-vs-template-based-website-design-which-is-right-for-your-business" className='text-[--primary-color] font-medium'>Read it here</Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Are template-driven websites scalable?</AccordionTrigger>
                    <AccordionContent>
                    While templates can limit flexibility compared to custom-built solutions, they can still accommodate growth to some extent. You can add more content, pages, and even plugins as your business expands. However, for highly complex features or significant future scaling, transitioning to a custom-built website might be a better long-term solution.
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