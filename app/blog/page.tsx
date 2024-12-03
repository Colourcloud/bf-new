import React from 'react';
import Navbar from '../components/common/Navbar';
import BlogGrid from '../components/blog/BlogGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builtflat - News & Updates',
  description: "Stay up to date with our latest news, updates and announcements. We don't promise anything, but we do promise to keep you up to date with the latest news and updates from Builtflat.",
};

const reqUrl = 'https://blog.builtflat.co.nz/wp-json/wp/v2/posts?_embed&per_page=100';

async function getBlogPosts() {
  const response = await fetch(reqUrl, {
    next: {
      revalidate: 60
    }
  });
  return response.json();
}

const BlogPost = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <div className='bg-[--dark-background-color]'>
        <Navbar></Navbar>
        <div className='blog-wrapper py-20 md:py-40'>
          <div className='site-wrapper'>
            <div className="header-text flex flex-col">
              <h1 className="text-4xl text-white leading-tight font-bold md:text-7xl pb-4">Keep up to date with latest news from Builtflat, and other design &amp; development related content</h1>
            </div>
            <BlogGrid blogPosts={blogPosts} isLoading={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
