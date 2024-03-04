'use client'

import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Link from 'next/link';
import BlogCard from '../components/blog/BlogCard';
import BlogCardSkeleton from '../components/common/BlogCardSkeleton';

const reqUrl = 'https://blog.builtflat.co.nz/wp-json/wp/v2/posts?_embed';

const BlogPost = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(reqUrl, {
        next: {
          revalidate: 60
        }
      });
      const data = await response.json();
      setBlogPosts(data);
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div className='bg-[--dark-background-color]'>
        <Navbar></Navbar>
        <div className='blog-wrapper py-40'>
        <div className='site-wrapper'>
          <div className="header-text flex flex-col">
              <h1 className="text-4xl text-white leading-tight font-bold md:text-7xl pb-4">Keep up to date with latest news from Builtflat, and other design &amp; development related content</h1>
          </div>
          <div className='flex flex-col gap-6 py-20'>
            <h4 className='text-[--text-on-dark] text-3xl py-12'>Builtflat News &amp; Updates:</h4>
            <div className="blog-section grid grid-cols-4 gap-8">
              {isLoading
                  ? Array(4).fill().map((_, index) => <BlogCardSkeleton key={index} />)
                  : blogPosts.map(post => (
                      <BlogCard 
                      key={post.id} 
                      title={post.title.rendered} 
                      thumbnail={post._embedded?.['wp:featuredmedia']?.[0]?.source_url} 
                      btnLabel='Learn More' 
                      href={`/blog/${post.slug}`}
                      />
                  ))
              }
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
