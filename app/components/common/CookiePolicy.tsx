'use client'

import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import Link from 'next/link';

const CookiePolicyPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    const isCookieAccepted = cookies.cookiePolicyAccepted === 'true';

    // Show cookie policy prompt if it has not been accepted
    if (!isCookieAccepted) {
      setShowPrompt(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(null, 'cookiePolicyAccepted', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    setShowPrompt(false);
  };

  const handleDecline = () => {
    // Perform action when "Decline" button is clicked
    setShowPrompt(false);
    // Additional action to handle decline
    // ...
  };

  return (
    <>
      {showPrompt && (
        <div className="cookie-policy-prompt w-full fixed bottom-0 p-8 z-50 bg-white">
          <div className="global-wrapper flex flex-col gap-5">
            <span className='text-2xl'>&#127850;</span>
            <p>
              Our website uses cookies to improve your experience and personalize your content. Cookies are small text files that are stored on your device when you access our website. We use both session cookies and persistent cookies to remember your preferences and provide you with relevant information. By using our website, you consent to our use of cookies in accordance with this policy. You can disable cookies in your browser settings, but some features of our website may not function properly.{' '}
              <Link href="/privacy-policy" className='text-sky-500'>Learn more</Link>
            </p>
            <div className="flex gap-3">
              <button className='primary-button' onClick={handleAccept}>Accept</button>
              <button className='secondary-button' onClick={handleDecline}>Decline</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePolicyPrompt;