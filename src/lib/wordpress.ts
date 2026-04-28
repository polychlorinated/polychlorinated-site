const WP_API_URL = import.meta.env.WP_API_URL ?? 'https://your-wordpress-site.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  status: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { sizes?: Record<string, { source_url: string }> };
    }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
    author?: Array<{ name: string; link: string; avatar_urls: Record<string, string> }>;
  };
}

async function wpFetch<T>(path: string, params: Record<string, string> = {}): Promise<T | null> {
  const url = new URL(`${WP_API_URL}${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  try {
    const res = await fetch(url.toString(), {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getPosts(options: {
  perPage?: number;
  page?: number;
  category?: number;
} = {}): Promise<WPPost[]> {
  const params: Record<string, string> = {
    _embed: '1',
    per_page: String(options.perPage ?? 12),
    page: String(options.page ?? 1),
    status: 'publish',
  };
  if (options.category) params.categories = String(options.category);

  return (await wpFetch<WPPost[]>('/posts', params)) ?? [];
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>('/posts', { slug, _embed: '1', status: 'publish' });
  return posts?.[0] ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await wpFetch<WPPost[]>('/posts', { per_page: '100', _fields: 'slug', status: 'publish' });
  return posts?.map((p) => p.slug) ?? [];
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getExcerpt(post: WPPost, maxLength = 160): string {
  const raw = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
  return raw.length > maxLength ? raw.slice(0, maxLength).trimEnd() + '…' : raw;
}

export function getFeaturedImage(post: WPPost): { src: string; alt: string } | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  if (!media) return null;
  const src =
    media.media_details?.sizes?.['large']?.source_url ??
    media.media_details?.sizes?.['medium_large']?.source_url ??
    media.source_url;
  return { src, alt: media.alt_text || post.title.rendered };
}
