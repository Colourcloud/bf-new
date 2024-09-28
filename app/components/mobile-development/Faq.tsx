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
    <section className='py-16 lg:py-32 bg-white'>
        <div className="site-wrapper">
            <div className="faq-container w-full md:w-3/4 lg:w-3/5 mx-auto text-center flex flex-col gap-3">
                <h2 className='text-4xl md:text-4xl font-bold'>Frequently Asked Questions</h2>
                <p className='text-xl font-light'>Below are some frequently asked questions we get about our Mobile Development services. If you have any other questions, please feel free to <Link href="/contact" className='text-[--primary-color]'>contact us.</Link></p>
            </div>
            <div className="questions-container max-w-4xl mx-auto mt-12">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is the difference between native app development and cross-platform development with React Native?</AccordionTrigger>
                    <AccordionContent>
                    Native app development involves creating separate applications for iOS and Android platforms using their respective programming languages &#40;Swift/Objective-C for iOS and Kotlin/Java for Android&#41;. This approach offers the best performance and allows full access to device features but requires more time and resources. Cross-platform development with React Native allows you to create a single codebase that works on both platforms, reducing development time and cost. While performance may slightly lag behind native apps, React Native apps are still highly efficient and cost-effective for most use cases.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do you ensure a smooth user experience across both iOS and Android?</AccordionTrigger>
                    <AccordionContent>
                    We follow platform-specific design guidelines &#40;Human Interface Guidelines for iOS and Material Design for Android&#41; to ensure that the app feels natural to users on both platforms. We also conduct rigorous testing on various devices to ensure compatibility and consistency across screen sizes, operating systems, and devices. For React Native apps, we ensure that any platform-specific code is optimised and behaves as expected on each operating system.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How long does it take to develop a mobile app?</AccordionTrigger>
                    <AccordionContent>
                    The time to develop a mobile app depends on the complexity of the features and design. A simple app with basic functionality can take 6-12 weeks, while more complex apps that include features like in-app purchases, custom animations, or backend integration may take 4-6 months. The timeline includes stages such as concept development, wireframing, UI/UX design, coding, testing, and deployment to the app stores.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What is your approach to mobile app security?</AccordionTrigger>
                    <AccordionContent>
                    We prioritise security in mobile app development by implementing measures such as data encryption, secure authentication, and adherence to best practices like using secure APIs. Additionally, we follow platform-specific security protocols and ensure that the app complies with app store policies and any relevant industry regulations
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>How will my app be updated and maintained post-launch?</AccordionTrigger>
                    <AccordionContent>
                    After the app is launched, it will need regular updates to fix bugs, improve features, and ensure compatibility with the latest versions of iOS and Android. We offer ongoing maintenance and support packages to handle these updates, as well as performance monitoring, user feedback analysis, and security patches. This ensures your app remains functional and up-to-date as mobile technologies evolve.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Can you help with app store submission for iOS and Android?</AccordionTrigger>
                    <AccordionContent>
                    Yes, we manage the entire app store submission process, ensuring that your app meets the requirements of both the Apple App Store and Google Play Store. This includes adhering to their guidelines, providing appropriate metadata &#40;app descriptions, icons, screenshots&#41;, and managing updates or changes based on app store reviews. We also optimise the app’s listing to improve visibility and download potential.
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