import type { ImageMetadata } from 'astro';

export interface Photo {
  src: string;
  alt: string;
}

export interface Acara {
  title: string;
  description: string;
  tagClass: string;
  /** Up to 6 photos fill the layout; empty slots render as placeholders. */
  photos: Photo[];
}

// Processed by Astro's image pipeline; `src` becomes the build-optimized URL.
const IMAGES: Record<string, ImageMetadata> = {
  ...import.meta.glob('/src/assets/dokumentasi/**/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('/src/assets/dokumentasi/**/*.jpg', { eager: true, import: 'default' }),
};

function sortEntries(entries: [string, ImageMetadata][]) {
  return entries.sort(([a], [b]) => a.localeCompare(b));
}

function findPhotos(prefix: string): ImageMetadata[] {
  return sortEntries(
    Object.entries(IMAGES).filter(([path]) => path.startsWith(`/src/assets/dokumentasi/${prefix}/`)),
  ).map(([, img]) => img);
}

function toPhotos(altPrefix: string, images: ImageMetadata[]): Photo[] {
  return images.map((img, i) => ({ src: img.src, alt: `${altPrefix} (${i + 1}/${images.length})` }));
}

const SMAN_15_PHOTOS = toPhotos('Dokumentasi Rise Camp di SMAN 15 Bandung', findPhotos('sman-15'));
const PURAGABAYA_PHOTOS = toPhotos('Dokumentasi Rise Camp di SMA Puragabaya', findPhotos('puragabaya'));

export const ACARA: Acara[] = [
  { title: 'SMAN 15 Bandung', description: 'Coming Soon', tagClass: 'bg-tag-blue', photos: SMAN_15_PHOTOS },
  { title: 'SMA Puragabaya', description: 'Coming Soon', tagClass: 'bg-tag-orange', photos: PURAGABAYA_PHOTOS },
];
