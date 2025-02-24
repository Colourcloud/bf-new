import Navbar from '../../../app/components/common/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Sidebar from '../../components/blog/Sidebar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from 'next';

interface WPPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls?: {
        [key: string]: string;
      };
    }>;
  };
  acf: {
    faq: Array<{
      question: string;
      answer: string;
    }>;
  };
}

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const reqUrl = 'https://blog.builtflat.co.nz/wp-json/wp/v2';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const req = await fetch(`${reqUrl}/posts?_embed&slug=${params.slug}`, {
    next: { 
      revalidate: 3600 // Cache for 1 hour
    },
    cache: 'no-store' // Disable browser caching
  });
  
  const post = await req.json();
  
  if (!post || post.length === 0) {
    notFound();
  }
  
  const posts = post[0] as WPPost;

  return {
    title: `Builtflat - ${posts.title.rendered}`,
    description: posts.excerpt.rendered.replace(/<[^>]+>/g, ''),
    openGraph: {
      title: `Builtflat - ${posts.title.rendered}`,
      description: posts.excerpt.rendered.replace(/<[^>]+>/g, ''),
      images: posts._embedded?.['wp:featuredmedia']?.[0]?.source_url ? [
        {
          url: posts._embedded?.['wp:featuredmedia']?.[0]?.source_url,
        }
      ] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const req = await fetch(`${reqUrl}/posts?_embed&slug=${params.slug}`, {
    next: { 
      revalidate: 3600 // Cache for 1 hour
    },
    cache: 'no-store' // Disable browser caching
  });
  
  const post = await req.json();
  
  if (!post || post.length === 0) {
    notFound();
  }
  
  const posts = post[0] as WPPost;
  const readableDate = new Date(posts.date).toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Get author information from _embedded data
  const author = posts._embedded?.['author']?.[0];

  return (
    <>
      <div className='bg-[--dark-background-color]'>
        <Navbar></Navbar>
        <div className='blog-container py-20 md:py-40'>
          <div className='site-wrapper flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {posts && <Sidebar content={posts.content.rendered} />}
            <div>
              <div className='blog-intro flex flex-col gap-6 w-full lg:w-[80%] m-auto'>
                <h1 className='text-white text-3xl lg:text-5xl font-bold'>{posts.title.rendered}</h1>
                <span className='text-[--text-on-dark] text-xl' dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}></span>
                
                {/* Author information */}
                {author && (
                  <div className="flex items-center gap-4 border-y border-[--border-colour-dark] py-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image 
                        src={author.avatar_urls?.['96'] || '/default-avatar.png'}
                        alt={`${author.name}'s profile picture`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-medium">Written by {author.name}</span>
                      <span className='text-[--text-on-dark] italic text-sm'>Posted on {readableDate}</span>
                    </div>
                  </div>
                )}

                <div className=''>
                  <Image 
                    src={posts._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-blog-image.jpg'} 
                    alt={`Featured image for ${posts.title.rendered}`}
                    width={1000} 
                    height={400} 
                    className='border border-[--border-colour-dark]'
                  />
                </div>
              </div>
              <div className='blog-body flex flex-col items-center mt-9'>
                <div className='text-white w-full lg:w-[80%] flex flex-col gap-6' dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></div>

                <div className='blog-faq w-full lg:w-4/5 mt-12'>
                  {Array.isArray(posts.acf.faq) && posts.acf.faq.some(faqItem => faqItem.question.trim() !== '' || faqItem.answer.trim() !== '') && (
                    <>
                      <div className="faq-container w-full mx-auto text-left flex flex-col gap-3 text-white">
                        <h2 className='text-4xl md:text-3xl font-bold'>Frequently Asked Questions</h2>
                        <p className='text-base font-light'>Below are some frequently asked questions relating to this blog post.</p>
                      </div>
                      <Accordion type="single" collapsible className='mt-12'>
                        {posts.acf.faq
                          .filter(faqItem => faqItem.question.trim() !== '' || faqItem.answer.trim() !== '')
                          .map((faqItem, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className='text-white'>{faqItem.question}</AccordionTrigger>
                              <AccordionContent className='text-white'>
                                {faqItem.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))
                        }
                      </Accordion>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 