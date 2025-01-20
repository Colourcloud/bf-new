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
    <section className='py-12 lg:py-32 border border-t'>
        <div className="site-wrapper">
            <div className="faq-container w-full md:w-3/4 lg:w-3/5 mx-auto text-center flex flex-col gap-3">
                <h2 className='text-4xl md:text-4xl font-bold'>Frequently Asked Questions</h2>
                <p className='text-xl font-light'>Below are some frequently asked questions we get about our Application Development services. If you have any other questions, please feel free to <Link href="/contact" className='text-[--primary-color]'>contact us.</Link></p>
            </div>
            <div className="questions-container max-w-4xl mx-auto mt-12">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is the difference between a custom-built website and a template-based website?</AccordionTrigger>
                    <AccordionContent>
                    A custom-built website is designed and developed from scratch based on your unique business needs and goals. This process involves creating a unique user interface &#40;UI&#41;, developing custom functionalities, and integrating bespoke features tailored to your audience. Custom websites offer greater flexibility and scalability but can be more time-consuming and costly. A template-based website, on the other hand, utilizes pre-made designs and structures, which can be quicker and more cost-effective to set up but may have limitations in customization and uniqueness.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How long does it typically take to build a custom website?</AccordionTrigger>
                    <AccordionContent>
                    The timeline for building a custom website varies depending on the complexity of the project, the number of features required, and the overall design and functionality. A basic informational website may take 4-8 weeks, while a more complex site with e-commerce or custom integrations can take 2-4 months. We start by defining the scope of work, followed by wireframing, designing, development, testing, and finally, deployment.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Will my website be SEO-friendly from the start?</AccordionTrigger>
                    <AccordionContent>
                    Yes, we follow best practices for SEO during the development process, ensuring that your website is optimized for search engines from day one. This includes implementing clean code, fast loading times, responsive design, meta tags, alt text for images, structured data, and other technical SEO measures. However, content strategy, keyword optimization, and link-building would require ongoing work to improve rankings.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What is responsive web design, and why is it important?</AccordionTrigger>
                    <AccordionContent>
                    Responsive web design ensures that your website adapts to different screen sizes and devices, providing an optimal viewing experience whether it&apos;s accessed on a desktop, tablet, or mobile phone. This is important because over half of web traffic comes from mobile devices, and search engines like Google prioritize mobile-friendly websites in search rankings. Without a responsive design, users may have difficulty navigating or viewing your site, which could negatively impact user experience and SEO.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Can you integrate third-party services like payment gateways or CRM systems?</AccordionTrigger>
                    <AccordionContent>
                    Yes, we can integrate a wide variety of third-party services into your website, including payment gateways &#40;e.g., Stripe, PayPal&#41;, Customer Relationship Management &#40;CRM&#41; systems &#40;e.g., HubSpot, Salesforce&#41;, email marketing platforms, and analytics tools. We ensure seamless integration so that your website can efficiently interact with these systems and help automate key business processes.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>What ongoing maintenance will my website require?</AccordionTrigger>
                    <AccordionContent>
                    Websites need regular maintenance to ensure optimal performance, security, and user experience. Maintenance tasks may include software updates &#40;CMS, plugins&#41;, security patches, content updates, backups, and performance optimization. Depending on your needs, we can offer different maintenance packages to ensure your site remains secure, fast, and up-to-date over time.
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