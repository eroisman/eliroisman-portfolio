export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  image: string;
  description?: string;
  technologies?: string[];
  highlights?: string[];
  context?: string;
  role?: string;
  challenge?: string;
  outcome?: string;
  links?: ProjectLink[];
  sections?: ProjectSection[];
  featured?: boolean;
  order?: number;
  tags?: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectSection {
  title: string;
  // New ordered blocks allow interleaving paragraphs and images with captions
  blocks?: ProjectBlock[];
  // Back-compat: keep old fields but prefer `blocks`.
  paragraphs?: string[];
  bullets?: string[];
  images?: string[];
}

export interface ProjectBlock {
  type: 'paragraph' | 'image' | 'bullets';
  // for paragraph
  text?: string;
  // for image
  src?: string;
  caption?: string;
  // for bullets
  items?: string[];
}
