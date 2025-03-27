import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '@/app/components/common/AnimateText'
import Button from '@/app/components/common/Button'

// Define Blog Post type
type BlogPost = {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  slug: string
  featured_media: number
  link: string
  mediaUrl?: string
}

// Function to get the category ID for a location slug
async function getLocationCategoryId(locationSlug: string, locationName: string): Promise<number | null> {
  try {
    // Temporary solution: map known location slugs directly to their category IDs
    const knownLocations: Record<string, number> = {
      'website-design-tauranga': 26,
      'tauranga': 26,
      // Add more mappings as needed
    }
    
    // Check if we have a direct mapping for this slug
    if (knownLocations[locationSlug]) {
      return knownLocations[locationSlug]
    }
    
    // Extract the actual location name from the slug by removing common prefixes
    let cleanSlug = locationSlug
    const commonPrefixes = ['website-design-', 'web-design-', 'web-development-']
    
    for (const prefix of commonPrefixes) {
      if (locationSlug.startsWith(prefix)) {
        cleanSlug = locationSlug.substring(prefix.length)
        break
      }
    }
    
    // First try: exact match with the cleaned location slug
    let res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/categories?slug=${cleanSlug}`, {
      next: { revalidate: 3600 }
    })
    
    if (!res.ok) {
      return null
    }
    
    let categories = await res.json()
    
    // If we found a category with the exact slug, return its ID
    if (categories && categories.length > 0) {
      return categories[0].id
    }
    
    // Second try: using the location name provided as prop
    if (locationName) {
      res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/categories?slug=${locationName.toLowerCase()}`, {
        next: { revalidate: 3600 }
      })
      
      if (res.ok) {
        categories = await res.json()
        
        if (categories && categories.length > 0) {
          return categories[0].id
        }
      }
    }
    
    // Third try: get all location categories and look for a case-insensitive match
    res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/categories?parent=23`, {
      next: { revalidate: 3600 }
    })
    
    if (!res.ok) {
      return null
    }
    
    categories = await res.json()
    
    // Look for a category with a matching name or slug (case insensitive)
    const locationNameLower = locationName.toLowerCase() 
    const cleanSlugLower = cleanSlug.toLowerCase()
    
    const matchingCategory = categories.find((cat: any) => 
      cat.name.toLowerCase() === locationNameLower || 
      cat.slug.toLowerCase() === locationNameLower ||
      cat.name.toLowerCase() === cleanSlugLower ||
      cat.slug.toLowerCase() === cleanSlugLower
    )
    
    if (matchingCategory) {
      return matchingCategory.id
    }
    
    return null
  } catch (error) {
    return null
  }
}

// Function to fetch blog posts by category ID
async function getBlogPostsByCategory(categoryId: number): Promise<BlogPost[]> {
  try {
    if (!categoryId) return []
    
    const res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/posts?categories=${categoryId}&per_page=3`, {
      next: { revalidate: 3600 }
    })
    
    if (!res.ok) {
      return []
    }
    
    const posts = await res.json()
    
    // Fetch media details for all featured images in one call
    const mediaIds = posts.map((post: BlogPost) => post.featured_media).filter(Boolean)
    
    if (mediaIds.length > 0) {
      const mediaRes = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/media?include=${mediaIds.join(',')}`, {
        next: { revalidate: 3600 }
      })
      
      if (mediaRes.ok) {
        const mediaData = await mediaRes.json()
        
        // Create a map of media URLs by ID
        const mediaMap: Record<number, string> = {}
        mediaData.forEach((media: any) => {
          mediaMap[media.id] = media.source_url
        })
        
        // Add media URLs to the posts
        posts.forEach((post: BlogPost) => {
          if (post.featured_media && mediaMap[post.featured_media]) {
            post.mediaUrl = mediaMap[post.featured_media]
          }
        })
      }
    }
    
    return posts
  } catch (error) {
    return []
  }
}

// Format date for blog post
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

// Create an excerpt from HTML content
function createExcerpt(html: string, maxLength: number = 120): string {
  // Remove HTML tags
  const text = html.replace(/<\/?[^>]+(>|$)/g, "")
  
  // Trim and add ellipsis if needed
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'
  }
  
  return text
}

interface LocationBlogPostsProps {
  locationSlug: string
  locationName: string
}

export default async function LocationBlogPosts({ locationSlug, locationName }: LocationBlogPostsProps) {
  // Get category ID for the location
  const categoryId = await getLocationCategoryId(locationSlug, locationName)
  
  // Get blog posts for this location
  const blogPosts = categoryId ? await getBlogPostsByCategory(categoryId) : []

  // If no blog posts, don't render the section
  if (blogPosts.length === 0) {
    return null
  }

  return (
    <section className="py-12 lg:py-32 bg-[--dark-background-color] border-b border-[#222222]">
      <div className="site-wrapper">
        <div className="flex flex-col gap-6 text-center mb-12">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Latest Articles</h2>
          </AnimatedText>
          <p className="text-[--text-on-dark] text-base md:text-lg mx-auto max-w-2xl">
            Check out our latest insights, tips and guides related to {locationName}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`} 
              className="block bg-[#111111] border border-[--border-colour-dark] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {post.mediaUrl ? (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.mediaUrl}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={340}
                  />
                </div>
              ) : (
                <div className="bg-gray-800 aspect-video flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </h3>
                <div 
                  className="text-[--text-on-dark] text-sm mb-4"
                  dangerouslySetInnerHTML={{ 
                    __html: createExcerpt(post.excerpt.rendered) 
                  }}
                />
                <span 
                  className="inline-block text-purple-500 hover:text-purple-400 font-medium transition-colors"
                >
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 