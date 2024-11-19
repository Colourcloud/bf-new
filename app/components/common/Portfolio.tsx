import Link from 'next/link';
import Image from 'next/image';
import { getPortfolioItems, getMediaItem } from '@/lib/getPortfolioData';

interface WordPressPortfolio {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  acf: {
    title: string;
  };
}

interface MediaData {
  id: number;
  source_url: string;
}

async function Portfolio() {
    // Fetch only 5 most recent portfolio items
    const portfolioItems: WordPressPortfolio[] = await getPortfolioItems(5);
    
    // Fetch all media items in parallel
    const mediaIds = portfolioItems
        .map(item => item.featured_media)
        .filter(id => id !== 0);
    
    const mediaItems = await Promise.all(
        mediaIds.map(id => getMediaItem(id))
    );
    
    // Create media map
    const mediaMap: Record<number, string> = {};
    mediaItems.forEach((media: MediaData) => {
        mediaMap[media.id] = media.source_url;
    });

    return (
        <>
        <section className="builtflat-section pt-16 pb-40 h-full bg-[--dark-background-color]">
            <div className="site-wrapper">
                <div className="section-text flex flex-col gap-8 w-full xl:w-3/5 md:mx-auto text-left md:text-center items-start md:items-center spaced-p">
                    <h4 className='text-4xl md:text-5xl font-semibold purple-gradient'>We&apos;re trusted by lots of amazing brands, want to find out why?</h4>
                    <p className='text-xl font-light text-white'>We&apos;ve helped heaps of companies from service based, to corporate, retail, and more reach their goals on a range of projects and loved every moment! Check out our latest web projects below.</p>
                    <Link href="/portfolio" className='text-purple font-medium'>View all our case studies</Link>       
                </div>
            </div>
            <div className="recent-work_cards-layout max-w-[1600px] px-4 flex flex-row flex-wrap justify-center gap-6 m-auto">
                {portfolioItems.map((item) => (
                    <div key={item.id} className="recent-work_card h-80 w-full md:w-72 bg-white rounded-md overflow-hidden">
                        <Link href={`/portfolio/${encodeURIComponent(item.slug)}`}>
                            {mediaMap[item.featured_media] && (
                                <Image 
                                    src={mediaMap[item.featured_media]}
                                    alt={item.acf.title || item.title.rendered}
                                    height={600}
                                    width={600}
                                    className='h-full object-cover transition hover:scale-105'
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                                />
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Portfolio;