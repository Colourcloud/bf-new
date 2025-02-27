import React from 'react'
import Image from 'next/image'
import AnimatedText from '../common/AnimateText';
import Link from 'next/link';

interface Location {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    acf: {
        location_name: string;
        maori_name?: string;
        location_description: string;
        location_image: number;
        more_information: {
            introduction_text: string;
            introduction_description: string;
            introduction_image: string;
        };
    };
}

interface LocationWithMedia extends Location {
    imageUrl: string;
}

async function getLocations(): Promise<Location[]> {
    const res = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/location?order=asc&orderby=date&per_page=100', {
        next: { revalidate: 1800 } // 30 minutes
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch locations');
    }
    
    const data = await res.json();
    console.log('Fetched locations data:', data); // Debug log
    return data;
}

async function getMediaUrl(mediaId: number) {
    const res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/media/${mediaId}`, {
        next: { revalidate: 1800 } // 30 minutes
    });
    
    if (!res.ok) {
        return null;
    }
    
    const media = await res.json();
    return media.source_url;
}

const LocationList = async () => {
    const locations = await getLocations();
    
    // Pre-fetch all media URLs
    const locationsWithMedia: LocationWithMedia[] = await Promise.all(
        locations.map(async (location) => {
            console.log('Processing location:', location); // Debug log
            return {
                ...location,
                imageUrl: location.acf?.location_image 
                    ? (await getMediaUrl(location.acf.location_image)) || '/locations/auckland.jpg'
                    : '/locations/auckland.jpg'
            };
        })
    );

    if (locationsWithMedia.length === 0) {
        return (
            <section className="py-12 lg:py-32 border-b border-[#222222]">
                <div className="site-wrapper">
                    <div className="flex flex-col gap-6 max-w-5xl">
                        <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>No locations found</h4>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 lg:py-32 border-b border-[#222222]">
            <div className="site-wrapper">
                <div className="flex flex-col gap-6 max-w-5xl">
                    <AnimatedText><h4 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>We help businesses all across New Zealand succeed in their online endevour</h4></AnimatedText>
                    <p className='text-[--text-on-dark] text-base md:text-lg'>Builtflat offers a complete range of web services to elevate your digital presence in New Zealand. From cutting-edge design to seamless development and strategic maintenance, we cover all your website needs.</p>
                </div>
            </div>
            <div className="flex flex-col mt-12 lg:mt-32">
                {locationsWithMedia.map((location) => {
                    console.log('Rendering location:', location); // Debug log
                    return (
                        <Link href={`/locations/${location.slug}`} key={location.id}>
                            <div className="location-card border-t border-[#222222] group hover:bg-[#111111] [transition:background-color_0.3s]">
                            <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto px-4 gap-8 lg:gap-24">
                                <div className="flex flex-col gap-4 w-full lg:w-1/2 py-12">
                                    <h6 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#888888] group-hover:text-white group-hover:scale-105 origin-left [transition:transform_0.5s,color_0.5s]'>
                                        {location.acf?.location_name || location.title.rendered}
                                        {location.acf?.maori_name && (
                                            <span className='text-base md:text-lg lg:text-xl text-[--text-on-dark]'> {location.acf.maori_name}</span>
                                        )}
                                    </h6>
                                    <div className="location-description overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 [transition:max-height_0.5s,opacity_0.5s] max-h-0 opacity-0">
                                        <p className='text-[--text-on-dark] text-base'>
                                            {location.acf?.location_description || 'No description available'}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="relative w-full h-[300px] lg:h-full overflow-hidden">
                                        <Image 
                                            src={location.imageUrl}
                                            alt={`${location.acf?.location_name || location.title.rendered}, New Zealand`}
                                            className='absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-[1.2] [transition:transform_0.5s,opacity_0.5s]'
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}

export default LocationList