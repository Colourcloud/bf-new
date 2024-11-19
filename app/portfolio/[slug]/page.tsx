import { Metadata } from 'next';
import Image from "next/image";
import NavbarWhite from '@/app/components/common/NavbarWhite';
import Button from '@/app/components/common/Button';

// Interfaces remain the same
interface WordPressPortfolio {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    title: string;
    logo: number;
    blurp: string;
    website_link: string;
    introduction_image: number;
    content: {
      text_content: string;
      portfolio_image: number[];
    }[];
  };
}

interface MediaItem {
  id: number;
  source_url: string;
}

// Helper functions with caching
async function getPortfolioBySlug(slug: string): Promise<WordPressPortfolio[]> {
  const res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/portfolio?slug=${slug}`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch portfolio data');
  }
  
  return res.json();
}

async function getMediaUrl(mediaId: number): Promise<string> {
  try {
    const res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/media/${mediaId}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch media');
    }
    
    const mediaData: MediaItem = await res.json();
    return mediaData.source_url;
  } catch (error) {
    console.error('Error fetching media:', error);
    return '';
  }
}

// Generate metadata function with caching
export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const portfolioData = await getPortfolioBySlug(slug);
  const project = portfolioData[0];

  if (project) {
    const mediaUrl = await getMediaUrl(project.featured_media);

    return {
      title: project.acf.title || project.title.rendered,
      description: project.acf.blurp,
      openGraph: {
        title: project.acf.title || project.title.rendered,
        description: project.acf.blurp,
        url: project.acf.website_link,
        images: [
          {
            url: mediaUrl,
            alt: `${project.acf.title || project.title.rendered} Banner`,
          },
        ],
      },
    };
  }

  return {
    title: 'Portfolio Project',
    description: 'Check out this portfolio project.',
  };
}

// Main page component with caching
async function PortfolioPage({ params: { slug } }: { params: { slug: string } }) {
  const portfolioData = await getPortfolioBySlug(slug);
  const project = portfolioData[0];

  if (!project) {
    return <div>Project not found</div>;
  }

  // Fetch logo and introduction image media with caching
  const logoUrl = project.acf.logo ? await getMediaUrl(project.acf.logo) : null;
  const introImageUrl = project.acf.introduction_image ? await getMediaUrl(project.acf.introduction_image) : null;

  // Create a map to store media URLs
  const mediaMap = new Map<number, string>();

  // Fetch all media items in parallel with caching
  if (project.acf.content) {
    const mediaPromises = project.acf.content
      .flatMap(section => section.portfolio_image || [])
      .filter((mediaId, index, self) => self.indexOf(mediaId) === index) // Remove duplicates
      .map(async mediaId => {
        const url = await getMediaUrl(mediaId);
        return { mediaId, url };
      });

    const mediaResults = await Promise.all(mediaPromises);
    mediaResults.forEach(({ mediaId, url }) => {
      mediaMap.set(mediaId, url);
    });
  }

  return (
    <>
      <NavbarWhite />
      <section className="">
        <div className="max-w-[1600px] m-auto pb-[100px] px-4 lg:px-0">
          {/* Header Section */}
          <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:max-w-[1600px] px-4">
            <div className="header-text flex flex-col lg:flex-row justify-between gap-6 md:gap-12">
              <div className="flex flex-col gap-4">
                {logoUrl && (
                  <Image
                    src={logoUrl}
                    alt={project.acf.title || project.title.rendered}
                    loading="lazy"
                    width={125}
                    height={200}
                  />
                )}
                <h1 className="text-4xl text-[#1b1b1b] leading-tight font-bold text-left md:text-5xl">
                  {project.acf.title || project.title.rendered}
                </h1>
              </div>
              <div className="w-full md:w-2/4 flex flex-col justify-start gap-4">
                <p className="text-xl font-light text-[#1b1b1b] text-left">
                  {project.acf.blurp}
                </p>
                {project.acf.website_link && (
                  <a
                    href={project.acf.website_link}
                    target="_blank"
                    className="text-left text-xl font-light text-[--primary-color]"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Introduction Image */}
          {introImageUrl && (
            <div className="content-photo w-full mt-6">
              <Image
                src={introImageUrl}
                alt={`${project.acf.title || project.title.rendered} Introduction`}
                loading="lazy"
                width={1600}
                height={800}
                className="object-cover"
              />
            </div>
          )}

          {/* Main Content Section */}
          <section className="content m-auto">
            {project.acf.content.map((section, index) => (
              <div key={index}>
                {/* Text Content */}
                {section.text_content && (
                  <div className="portfolio-text flex flex-col gap-4 w-full lg:w-2/4 m-auto spaced-m spaced-p"
                       dangerouslySetInnerHTML={{ __html: section.text_content }} 
                  />
                )}
                
                {/* Image Gallery */}
                {section.portfolio_image && section.portfolio_image.length > 0 && (
                  <div className={`content-photo w-full ${index > 0 ? 'mt-6' : ''}`}>
                    {section.portfolio_image.length >= 3 ? (
                      <>
                        {/* First image large */}
                        <Image
                          src={mediaMap.get(section.portfolio_image[0]) || ''}
                          alt={`${project.acf.title || project.title.rendered} - Image ${index + 1}`}
                          loading="lazy"
                          width={1600}
                          height={800}
                          className="object-cover mb-6"
                        />
                        {/* Remaining images in 2-column grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {section.portfolio_image.slice(1).map((mediaId, imgIndex) => (
                            <Image
                              key={imgIndex}
                              src={mediaMap.get(mediaId) || ''}
                              alt={`${project.acf.title || project.title.rendered} - Image ${index + 1}-${imgIndex + 2}`}
                              loading="lazy"
                              width={800}
                              height={800}
                              className="object-cover"
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      // Single image or two images
                      section.portfolio_image.map((mediaId, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={mediaMap.get(mediaId) || ''}
                          alt={`${project.acf.title || project.title.rendered} - Image ${index + 1}-${imgIndex + 1}`}
                          loading="lazy"
                          width={1600}
                          height={800}
                          className="object-cover"
                        />
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Call to Action Section */}
            <div className="portfolio_get-started flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center py-16 px-10 w-full lg:w-2/3 m-auto rounded-md bg-[--dark-background-color]">
              <div className="w-full lg:w-2/4 flex flex-col gap-4 text-center lg:text-left">
                <h4 className="text-4xl font-bold items-center text-white">
                  Have a project you want completed?
                </h4>
                <p className="text-lg font-light text-white">
                  If you have a project you&apos;d like to develop, feel free to
                  reach out to us. We&apos;re ready to look into it and see how
                  we can help make it a reality.
                </p>
              </div>
              <Button
                backgroundColor="--primary-color"
                textColor="white"
                className="background-purple"
                href="/contact"
              >
                Let&apos;s have a chat
              </Button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default PortfolioPage;