// components/portfolio/PortfolioGrid.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItems, getMediaItem } from '@/lib/getPortfolioData';

// Keep your existing interfaces
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

async function PortfolioGrid() {
  // Fetch portfolio items
  const portfolioItems: WordPressPortfolio[] = await getPortfolioItems();
  
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
    <section className='portfolio-page bg-[--dark-background-color] spaced-p'>
      <div className="max-w-[1600px] m-auto px-4">
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className='flex flex-col gap-4 portfolio-card-container'>
              <Link href={`/portfolio/${encodeURIComponent(item.slug)}`}>
                <div className="portfolio-card rounded-md relative overflow-hidden">
                  {mediaMap[item.featured_media] && (
                    <Image
                      src={mediaMap[item.featured_media]}
                      alt={item.acf.title || item.title.rendered}
                      width={1200}
                      height={560}
                      className='portfolio-card-image'
                      placeholder='blur'
                      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    />
                  )}
                </div>
              </Link>
              <h4 className='text-white text-xl font-medium portfolio-title'>
                {item.acf.title || item.title.rendered}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGrid;