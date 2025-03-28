import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

async function getBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    publishedAt,
    body
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params?.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="h-1/3 mx-auto px-4">
      <article className="prose lg:prose-xl">
 
        {post.mainImage && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            width={800}
            height={200}
            className="w-full h-82 object-cover"
          />
        )}
        <h1 className="text-4xl font-bold my-8">{post.title}</h1>
        <p className="text-gray-500 text-md">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <PortableText value={post.body} className="text-gray-600" />
      </article>
    </div>
  );
}
