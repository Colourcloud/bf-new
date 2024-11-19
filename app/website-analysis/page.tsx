'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import NavbarWhite from '../components/common/NavbarWhite'
import Link from 'next/link'
import LottieAnimation from '../components/common/LottieAnimation'
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import Header from '../components/website-analysis/Header'


interface FormData {
  name: string;
  email: string;
  business_name: string;
  website_url: string;
}

const MarketingUserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business_name: '',
    website_url: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getDomainFromEmail = (email: string) => {
    const parts = email.split('@');
    return parts.length === 2 ? parts[1] : null;
  };

  const getDomainFromUrl = (url: string) => {
    try {
      // Automatically add "https://" if the user didn't provide a protocol
      if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
      }
  
      const hostname = new URL(url).hostname;
  
      // Remove 'www.' if it exists for consistency
      return hostname.startsWith('www.') ? hostname.slice(4) : hostname;
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
  
    const emailDomain = getDomainFromEmail(formData.email);
    const urlDomain = getDomainFromUrl(formData.website_url);
  
    if (!agreedToTerms) {
      setErrorMessage("Please agree to the terms and conditions.");
      setIsSubmitting(false);
      return;
    }
  
    if (!emailDomain || !urlDomain || emailDomain !== urlDomain) {
      setErrorMessage("Please make sure the email address matches the website domain you provided.");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch('/api/submit-marketing-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        // Check if the error is due to the email already being submitted
        if (responseData.error === 'Email already submitted') {
          // Show error toast
          toast.error("This email address has already been submitted. Please use a different one.", {
            description: "If you believe this is a mistake, please contact support.",
          });
        } else {
          throw new Error(responseData.error || 'Failed to submit form');
        }
      }

      // Send email after successful form submission
      const emailResponse = await fetch('/api/website-analysis-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business_name: formData.business_name,
          website_url: formData.website_url,
          message: "User submitted the website analysis form.", // You can customize this message
        }),
      });

      const emailResponseData = await emailResponse.json();

      if (!emailResponse.ok) {
        throw new Error(emailResponseData.error || 'Failed to send email');
      }
  
      setSubmitStatus('success');
      setFormData({ name: '', email: '', business_name: '', website_url: '' });
      setAgreedToTerms(false);
  
      // Show success toast
      toast.success("Application was successful!", {
        description: "Thank you. We'll get back to you in 1-3 business days with the website analysis.",
        className: "bg-green-500 text-white",
      });
  
      // Wait 3 seconds before redirecting
      setTimeout(() => {
        window.location.href = "/website-analysis-offer"; // Redirect to the "thank you" page
      }, 3000); // 3000ms = 3 seconds
  
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage((error instanceof Error ? error.message : 'Unknown error occurred'));
  
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <head>
      <title>Builtflat - Free Website Analysis</title>
      <meta name="description" content="free basic website analysis valued at over $250 that checks your websites health and performance. Get in quick, limited time!" />
    </head>
      <Toaster />
      <NavbarWhite />
      <div className="min-h-screen bg-[#FCFCFC] text-foreground flex flex-col items-center justify-center py-12">
        <div className="site-wrapper">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <div className="w-2/3 lg:w-2/4 mx-auto">
            <LottieAnimation animationUrl="/common/seo-animation.json" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Free Website Analysis
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            We&apos;re giving away a free basic website analysis valued at over $250 that checks your websites health and performance. Get in quick, limited time!
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="business_name"
            placeholder="Business Name"
            value={formData.business_name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="website_url"
            placeholder="www.website.com"
            value={formData.website_url}
            onChange={handleChange}
            required
          />
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the terms and conditions
            </Label>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <Button type="submit" className="w-full" disabled={isSubmitting || !agreedToTerms}>
            {isSubmitting ? 'Submitting...' : 'Get Free Analysis'}
          </Button>
          <span className='text-sm text-gray-500 font-light italic block'>Website analysis can take up to 1-3 business days to complete</span>
        </form>
        <div className="text-left flex flex-col gap-3 font-light py-12 text-xs">
            <p>The website analysis provided by Builtflat Limited is intended for informational purposes only. While we strive to deliver accurate and insightful evaluations of your websites performance, usability, and SEO optimisation, the results of our analysis are not guaranteed to reflect your website&apos;s overall effectiveness or success.</p>
            <ul className='list-decimal px-4 flex flex-col gap-3'>
                <li>No Guarantees: The analysis results are based on automated tools and subjective assessments, and we cannot guarantee any specific outcomes or improvements based on these recommendations.</li>
                <li>Third-Party Tools: Our Analysis may utilise third-party tools and metrics. We do not endorse these tools, and their availability, accuracy, and reliability may vary. Any data or insights obtained from these tools are subject to change without notice.</li>
                <li>Personalised consultation: The free website analysis does not constitute professional advice. For personalised guidance tailored to your unique business needs, we recommend scheduling a consultation with one of our experts.</li>
                <li>Confidentiality: We respect your privacy. Any information you provide will be kept confidential and will only be used for the purpose of conducting the website analysis.</li>
                <li>Limitations: This website analysis will only cover up to 50 total pages on your site. The automation tool will focus on the main pages but may select pages at random. Due to this limit the analysis may miss issues on unanalysed pages. If you have more than 50 website pages and/or have an e-commerce website and want to analyse more web pages, contact us to arrange this.</li>
                <li>Contacting: By accepting these terms you give Builtflat Limited permission to contact you through the provided contact email or any other contact channels related to your business.</li>
                <li>We collect information such as your name, business name, email address, and website url to use for future marketing. You may opt out of this marketing at any time by contacting us.</li>
                <li>Acceptance of Terms: By requesting a free website analysis, you acknowledge and accept this disclaimer. If you do not agree with any part of this disclaimer, we kindly ask that you refrain from using our analysis services.</li>
            </ul>
            <p>If you have any questions or require further clarification regarding our services, please feel free to <Link href="/contact" className='text-[--primary-color]'>contact us.</Link></p>
        </div>
      </div>
      </div>
    </div>
    
    </>
    
  )
}
export default MarketingUserForm;