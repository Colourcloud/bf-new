import Navbar from '../../../app/components/common/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../components/blog/Sidebar';

const reqUrl = 'https://blog.builtflat.co.nz/wp-json/wp/v2'

export async function generateMetadata({ params }) {
  const req = await fetch(`${reqUrl}/posts?_embed&slug=${params.slug}`, {
    next: {
      revalidate: 60 //seconds to cache
    }
  });
  const post = await req.json();
  const posts = post[0];

  return {
    title: posts.title.rendered,
    description: posts.excerpt.rendered.replace(/<[^>]+>/g, ''),
    openGraph: {
      title: posts.title.rendered,
      description: posts.excerpt.rendered.replace(/<[^>]+>/g, ''),
      images: [posts._embedded?.['wp:featuredmedia']?.[0]?.source_url],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogPost({ params }) {
  const req = await fetch(`${reqUrl}/posts?_embed&slug=${params.slug}`, {
    next: {
      revalidate: 60 //seconds to cache
    }
  });
  const post = await req.json();
  const posts = post[0];
  const readableDate = new Date(posts.date).toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <>
      <div className='bg-[--dark-background-color]'>
        <Navbar></Navbar>
        <div className='blog-container py-20 md:py-40'>
          <div className='site-wrapper flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {posts && <Sidebar content={posts.content.rendered} />}
            <div>
              <div className='blog-intro flex flex-col gap-6 w-full lg:w-[80%] m-auto'>
                <h1 className='text-white text-5xl font-bold'>{posts.title.rendered}</h1>
                <span className='text-[--text-on-dark] text-xl' dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}></span>
                <span className='text-[--text-on-dark] italic'>Post created on: {readableDate}</span>
                <div className=''>
                  <Image src={posts._embedded?.['wp:featuredmedia']?.[0]?.source_url} alt="" width='1000' height='400' className='border border-[--border-colour-dark]'></Image>
                </div>
              </div>
              <div className='blog-body flex flex-col items-center mt-9'>
                <div className='text-white w-full lg:w-[80%] flex flex-col gap-6' dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}