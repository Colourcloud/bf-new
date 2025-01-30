'use client'

import Link from 'next/link'
import Image from 'next/image';
import Button from '../common/Button';
import AnimateOnScroll from '../common/AnimateOnScroll';
import AnimatedText from '../common/AnimateText';
import React, { useState, useEffect, FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const loadingIndicator = <span>Loading...</span>;


const ContactForm = () => {
    const maxLength = 1000;
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [charsLeft, setCharsLeft] = useState(maxLength);
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // New state for loading indication
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

    useEffect(() => {
        setCharsLeft(maxLength - text.length);
    }, [text]);

    useEffect(() => {
        if (text !== '' && text.length <= maxLength && name && email && recaptchaValue) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [text, name, email, recaptchaValue]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!recaptchaValue) {
            setError('Please complete the reCAPTCHA verification');
            return;
        }
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    phoneNumber, 
                    websiteLink, 
                    message: text,
                    recaptchaToken: recaptchaValue 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setText('');
                setName('');
                setEmail('');
                setPhoneNumber('');
                setWebsiteLink('');
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            } else {
                setError(data.error || 'Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className='flex flex-row gap-10 justify-center lg:justify-start'>
            <div className="contact-left">
                
            </div>
            <div className="contact-form p-6 md:p-0 max-w-xl md:ml-24 flex flex-col gap-6 justify-center">
                    <div className="logo"></div>
                    <div>
                        <h1 className="text-4xl text-white leading-tight font-bold md:text-6xl pb-4">Let us know how we can help you</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-fields flex flex-col gap-6">
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Name:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' 
                                    id="login" 
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Email:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' 
                                    id="email" 
                                    placeholder='johndoe@email.co.nz'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Phone Number:</label>
                                <input 
                                    type="tel" 
                                    name="number" 
                                    className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white'
                                    id="number" 
                                    placeholder='Please enter your contact number'
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                <label className='text-white'>Website Link: <span className='text-xs italic'>Not Required</span></label>
                                <input 
                                    type="text" 
                                    name="link" 
                                    className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' 
                                    id="link" 
                                    placeholder='www.yourwebsite.co.nz'
                                    value={websiteLink}
                                    onChange={e => setWebsiteLink(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className='flex flex-col gap-1 relative'>
                                <label className='text-white'>Tell us about your project:</label>
                                <textarea 
                                    required
                                    name="message" 
                                    className='py-3 px-4 rounded-md border-2 bg-transparent border-[#343434] text-white' 
                                    id="message" 
                                    rows={6} 
                                    maxLength={maxLength}
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    placeholder="Tell us about your project and we'll get right back to you!"
                                />
                                <span className="absolute text-xs text-white bottom-2 right-3">{charsLeft} characters left</span>
                            </fieldset>
                            <fieldset className='flex flex-col gap-1'>
                                {error && <div className="text-red-500 mb-4">{error}</div>}
                                {success && <div className="text-green-500 mb-4">Message sent successfully! Redirecting...</div>}
                                <div className="mb-4">
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                                        onChange={(value) => setRecaptchaValue(value)}
                                        theme="dark"
                                    />
                                </div>
                                <input 
                                    type="submit" 
                                    value={isLoading ? "Sending..." : (isValid ? "Let's get to work" : "Please fill out the rest of the form")} 
                                    disabled={!isValid || isLoading}
                                    className={`p-3 text-sm mt-6 submit-button text-white rounded-md ${isValid && !isLoading ? 'bg-[#7A4AFF] cursor-pointer' : 'bg-gray-500 opacity-50'}`}
                                />
                                {isLoading && <div className="loading-indicator">{loadingIndicator}</div>} {/* Show loading indicator when isLoading is true */}
                            </fieldset>
                        </div>
                    </form>
                </div>
        </div>
            
    );
};
export default ContactForm;