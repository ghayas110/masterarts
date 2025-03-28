import { client } from '@/sanity/lib/client';

export async function fetchBlogPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    publishedAt
  }`;
  const posts = await client.fetch(query);
  return posts;
}
