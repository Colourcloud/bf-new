// lib/api.ts
export async function getPortfolioItems() {
  const res = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/portfolio', {
    next: {
      revalidate: 3600 // Cache for 1 hour
    }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch portfolio items');
  }
  
  return res.json();
}

export async function getMediaItem(id: number) {
  const res = await fetch(`https://blog.builtflat.co.nz/wp-json/wp/v2/media/${id}`, {
    next: {
      revalidate: 3600 // Cache for 1 hour
    }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch media item');
  }
  
  return res.json();
}