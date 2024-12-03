'use client'

import React from 'react';
import BlogCard from './BlogCard';
import BlogCardSkeleton from '../common/BlogCardSkeleton';

const BlogGrid = ({ blogPosts, isLoading }) => {
  return (
    <div className='flex flex-col gap-6 py-10 md:py-20'>
      <h4 className='text-[--text-on-dark] text-3xl py-12'>Builtflat News &amp; Updates:</h4>
      <div className="blog-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {isLoading
          ? Array(20).fill().map((_, index) => <BlogCardSkeleton key={index} />)
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
  );
};

export default BlogGrid;
