export interface Photo {
  /** Path under public/, e.g. '/images/dokumentasi/acara-1/01.jpg'. */
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

//const LOREM =
//  'lorem ipsum dolor sit amet consectetur adipiscing elit est occaecat tempor cumque voluptas aute omnis nobis quis ullamco magna distinctio aut';

export const ACARA: Acara[] = [
  { title: 'SMAN 15 Bandung', description: "Coming Soon", tagClass: 'bg-tag-blue', photos: [] },
  { title: 'SMA Puragabaya', description: "Coming Soon", tagClass: 'bg-tag-orange', photos: [] },
];
