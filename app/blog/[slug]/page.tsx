import Navbar from '../../../app/components/common/Navbar';
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

// Types moved to separate interfaces for better organization
interface FAQItem {
  question: string;
  answer: string;
}

interface WPAuthor {
  name: string;
  avatar_urls?: {
    [key: string]: string;
  };
}

interface WPFeaturedMedia {
  source_url: string;
}

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
    'wp:featuredmedia'?: WPFeaturedMedia[];
    author?: WPAuthor[];
  };
  acf: {
    faq: FAQItem[];
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

const WP_API_URL = 'https://blog.builtflat.co.nz/wp-json/wp/v2';

// Modify validateParams to properly await the params
async function validateParams(params: Promise<PageProps['params']> | PageProps['params']) {
  const resolvedParams = await params;
  if (!resolvedParams?.slug) {
    notFound();
  }
  return resolvedParams;
}

// Utility function to fetch post data
async function getPost(slug: string): Promise<WPPost> {
  const response = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }

  const posts = await response.json();
  
  if (!posts || posts.length === 0) {
    notFound();
  }

  return posts[0] as WPPost;
}

// Utility function to strip HTML tags
function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}

export async function generateMetadata({ params }: { params: Promise<PageProps['params']> }): Promise<Metadata> {
  const validatedParams = await validateParams(params);
  const post = await getPost(validatedParams.slug);
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return {
    title: `Builtflat - ${post.title.rendered}`,
    description: stripHtml(post.excerpt.rendered),
    openGraph: {
      title: `Builtflat - ${post.title.rendered}`,
      description: stripHtml(post.excerpt.rendered),
      images: featuredImage ? [{ url: featuredImage }] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

function AuthorSection({ author, date }: { author: WPAuthor, date: string }) {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
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
  );
}

function FAQSection({ faqItems }: { faqItems?: FAQItem[] }) {
  if (!faqItems) return null;
  
  const validFAQs = faqItems.filter(item => 
    item.question?.trim() !== '' && item.answer?.trim() !== ''
  );

  if (validFAQs.length === 0) return null;

  return (
    <div className='blog-faq w-full lg:w-4/5 mt-12'>
      <div className="faq-container w-full mx-auto text-left flex flex-col gap-3 text-white">
        <h2 className='text-4xl md:text-3xl font-bold'>Frequently Asked Questions</h2>
        <p className='text-base font-light'>Below are some frequently asked questions relating to this blog post.</p>
      </div>
      <Accordion type="single" collapsible className='mt-12'>
        {validFAQs.map((faqItem, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-white'>{faqItem.question}</AccordionTrigger>
            <AccordionContent className='text-white'>
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default async function BlogPost({ params }: { params: Promise<PageProps['params']> }) {
  const validatedParams = await validateParams(params);
  const post = await getPost(validatedParams.slug);
  const author = post._embedded?.['author']?.[0];
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className='bg-[--dark-background-color]'>
      <Navbar />
      <div className='blog-container py-20 md:py-40'>
        <div className='site-wrapper flex flex-col lg:flex-row gap-20 lg:gap-0'>
          <Sidebar content={post.content.rendered} />
          <div>
            <div className='blog-intro flex flex-col gap-6 w-full lg:w-[80%] m-auto'>
              <h1 className='text-white text-3xl lg:text-5xl font-bold'>{post.title.rendered}</h1>
              <span 
                className='text-[--text-on-dark] text-xl' 
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              
              {author && <AuthorSection author={author} date={post.date} />}

              <div>
                <Image 
                  src={featuredImage || '/default-blog-image.jpg'} 
                  alt={`Featured image for ${post.title.rendered}`}
                  width={1000} 
                  height={400} 
                  className='border border-[--border-colour-dark]'
                />
              </div>
            </div>

            <div className='blog-body flex flex-col items-center mt-9'>
              <div 
                className='text-white w-full lg:w-[80%] flex flex-col gap-6' 
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
              <FAQSection faqItems={post.acf?.faq} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 