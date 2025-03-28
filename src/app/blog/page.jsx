import { fetchBlogPosts } from '../../lib/fetchBlogPosts';
import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/components/BannerTwo';


export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <>
        <Banner title="Blog"/>
    <div className="container mx-auto px-4">
     
      <h1 className="text-4xl font-bold my-8">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="border rounded-lg overflow-hidden">
            {post.mainImage && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-semibold">
                <Link href={`/blog/${post.slug.current}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <p className="text-gray-500 text-sm">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
