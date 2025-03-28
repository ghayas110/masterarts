import { client } from '@/sanity/lib/client';

export async function fetchProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    description,
    "imageUrl": mainImage.asset->url
  }`;
  const projects = await client.fetch(query);
  return projects;
}
