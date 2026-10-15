import type { ImageMetadata } from 'astro';
import elcLogo from '../assets/sponsors/elc.jpeg';
import iomGpcLogo from '../assets/sponsors/iom_gpc.jpeg';

export interface Sponsor {
  name: string;
  logo: ImageMetadata;
  /**
   * Public profile URL. Left undefined while no link has been shared — sponsors
   * without one render as plain images rather than dead links.
   */
  href?: string;
}

// TODO: add `href` once each sponsor shares a public profile to link to.
export const SPONSORS: Sponsor[] = [
  { name: 'Excelsis Learning Center', logo: elcLogo },
  { name: 'Ganesha Parents Community STEI', logo: iomGpcLogo },
];
