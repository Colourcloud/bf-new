import React from 'react'
import Link from 'next/link'
import NavbarWhite from '../components/common/NavbarWhite'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Builtflat - Privacy Policy",
    description: "Builtflat's privacy policy is designed to help you understand how we collect, use, and protect your personal information.",
}

const page = () => {
  return (
    <>
    <NavbarWhite />

    <div className='py-16 lg:py-32'>
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                <div className='flex flex-col gap-3'>
                    <h1 className='text-4xl lg:text-5xl font-bold'>Privacy Policy</h1>
                    <p className='text-lg font-light'>Builtflat&apos;s privacy policy is designed to help you understand how we collect, use, and protect your personal information.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>What data is collected?</h6>
                    <p className='text-lg font-light'>The following private data is collected:</p>
                    <ul className='list-disc ml-6 font-light'>
                        <li>The IP address, user agent, and requested url of all clients accessing the site, used for logging and tracking of actions on the site.</li>
                        <li>A person&apos;s email address and username, used for user account authentication and identification on the site.</li>
                        <li>Contact and social media information, freely given by the user during updates to their public user profile, and not necessary for the function of the site nor their user account.</li>
                        <li>A person&apos;s name and contact number, freely given during the contact form.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>How is this data collected?</h6>
                    <p className='text-lg font-light'>You directly provide Builtflat data by using our contact form. We also collect data via 3rd party platforms, such as Google, Facebook, and Cloudflare.</p>
                    <ul className='list-disc ml-6 font-light'>
                        <li>Contact form collects data such as your name, email address, phone number, and location.</li>
                        <li>Google collects data on what pages you visit on builtflat, your IP address, your geo location, and time spent on Builtflat.</li>
                        <li>Cloudflare collects data on what pages you visit on builtflat, your IP address, your geo location, and time spent on Builtflat.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>How will your data be used?</h6>
                    <p className='text-lg font-light'>Builtflat collects your data for the following purposes:</p>
                    <ul className='list-disc ml-6 font-light'>
                        <li>To help us optimise our website to improve user experience.</li>
                        <li>To process your requests in cooperation with site features.</li>
                        <li>To provide Builtflat information to better improve our marketing.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>How is your data stored?</h6>
                    <p className='text-lg font-light'>Builtflat stores this data using 3rd party platforms such as Google, Facebook and Cloudflare. This data is stored on their platforms using their secure servers. Information given to us through our contact form is not stored on any database hosted by us, and is only used for our email services.</p>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>What are your data protection rights?</h6>
                    <p className='text-lg font-light'>Builtflat would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <ul className='list-disc ml-6 font-light'>
                        <li>The right to access - You have the right to request Builtflat for copies of your personal data.</li>
                        <li>The right to rectification - You have the right to request that Builtflat correct any information you believe is inaccurate. You also have the right to request Builtflat to complete the information you believe is incomplete.</li>
                        <li>The right to restrict processing - You have the right to request that Builtflat restrict the processing of your personal data, under certain conditions.</li>
                        <li>The right to data portability - You have the right to request that Builtflat transfer the data that we have collected to another organisation, or directly to you, under certain conditions.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>What are cookies?</h6>
                    <p className='text-lg font-light'>Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit the site, some information from you may be collected automatically through cookies or similar technology.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>How are cookies used?</h6>
                    <p className='text-lg font-light'>Builtflat uses cookies for the following purposes:</p>
                    <ul className='list-disc ml-6 font-light'>
                        <li>To record cookie preferences for the site.</li>
                        <li>To store information through Google, Facebook, and Cloudflare.</li>
                        <li>To store user preferences throughout the site.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>What types of cookies are used?</h6>
                    <p className='text-lg font-light'>Builtflat uses functional cookies so that the site will recognize you and remember your previously selected preferences. All important cookies are first-party cookies, any and all third-party cookies may be allowed as desired.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>How to manage your cookies.</h6>
                    <p className='text-lg font-light'>You can set your browser not to accept cookies, and the website <a href="https://allaboutcookies.org" className='text-[--primary-color]' target='_blank'>allaboutcookies.org</a> tells you how to remove cookies from your browser. However, some of the site features may not function as a result.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-2xl font-bold'>Changes to the privacy notice.</h6>
                    <p className='text-lg font-light'>If you have any questions about this privacy notice, the data held on you, or you would like to exercise one of your data protection rights, please do not hesitate to get in <Link href="/contact" target='_blank' className='text-[--primary-color]'>contact.</Link></p>
                </div>

            </div>
        </div>
    </div>
    </>
    
    
  )
}

export default page