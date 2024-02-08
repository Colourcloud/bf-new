import Navbar from '../../../app/components/common/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../components/blog/Sidebar';

const reqUrl = 'https://blog.builtflat.co.nz/wp-json/wp/v2'

const BlogPost = async ({ params }) => {

    const req = await fetch(`${reqUrl}/posts?_embed&slug=${params.slug}`, {
      next: {
        revalidate: 60 //seconds to cache
      }
    });
    const post = await req.json();
    const posts = post[0];

    const readableDate = new Date(posts.date).toLocaleDateString('en-US', {
      weekday: 'long', // long-form day of the week, e.g., "Thursday"
      day: '2-digit', // day of the month, e.g., "09"
      month: 'short', // abbreviated month, e.g., "Feb"
      year: 'numeric', // e.g., "2023"
    });

  return (
    <>
    <div className='bg-[--dark-background-color]'>
        <Navbar></Navbar>
        <div className='blog-container py-40'>
          <div className='site-wrapper flex flex-row'>
            {posts && <Sidebar content={posts.content.rendered} />}
            <div>
            <div className='blog-intro flex flex-col gap-6 w-[80%] m-auto'>
              <h1 className='text-white text-5xl font-bold'>{posts.title.rendered}</h1>
              <span className='text-[--text-on-dark] text-xl' dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}></span>
              <span className='text-[--text-on-dark] italic'>Post created on: {readableDate}</span>
              <div className=''>
                <Image src={posts._embedded?.['wp:featuredmedia']?.[0]?.source_url} alt="" width='1000' height='400' className='border border-[--border-colour-dark]'></Image>
              </div>
            </div>
            <div className='blog-body flex flex-col items-center mt-9'>
              <div className='text-white w-[80%] flex flex-col gap-6' dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></div>
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default BlogPost;