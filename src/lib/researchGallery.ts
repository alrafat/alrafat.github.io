import { getImage } from 'astro:assets';
import { researchPhotos } from '../data/researchPhotos';
import type { GalleryItem } from '../components/Gallery.astro';

// Turns the research photos into optimised WebP thumbnails (600px) and lightbox images (1600px).
export async function getResearchGallery(limit?: number): Promise<GalleryItem[]> {
  const list = limit ? researchPhotos.slice(0, limit) : researchPhotos;
  return Promise.all(
    list.map(async (p) => {
      const thumb = await getImage({ src: p.src, width: 640, format: 'webp', quality: 72 });
      const full = await getImage({ src: p.src, width: 1600, format: 'webp', quality: 80 });
      return {
        thumb: thumb.src,
        full: full.src,
        w: 640,
        h: Math.round((640 * p.src.height) / p.src.width),
        caption: p.caption,
      };
    }),
  );
}
