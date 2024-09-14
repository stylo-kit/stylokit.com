export type Author = {
  name: string;
  image: string;
  bio?: string;
}

export type Plan = {
  id: number;
  title: string;
  subtitle: string;
  variant: string;
  desc?: string;
  price: number;
  discountPrice: number;
  features: string[];
  purchaseLink: string;
  createdAt: string;
  updatedAt: string;
}

export type Category = {
  key: string;
  label: string;
}

export type TemplateGallery = {
  caption: string;
  imageUrl: string;
}

export type Template = {
  id: number;
  name: string;
  slug: string;
  category: string;
  desc: string;
  price: number;
  tags: string[];
  pages: string[];
  stats: string[];
  formats: string[];
  meta: Object;
  previewLink: string;
  purchaseLink: string;
  thumbImage: string;
  createdAt: string;
  updatedAt: string;
  body?: string;
  gallery?: TemplateGallery[];
}

export type Article = {
  id: string;
  title: string;
  slug: string;
  desc: string;
  status: string;
  author?: Author;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}