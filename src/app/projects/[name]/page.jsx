
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Banner from '@/components/BannerTwo';
export async function generateStaticParams() {
  const query = `*[_type == "project"]{ "slug": slug.current }`;
  const projects = await client.fetch(query);
  return projects.map((project) => ({ name: project.name }));
}

async function getProjectData(name) {
  const query = `*[_type == "project" && name == $name][0]{
    name,
    description,
    "imageUrl": mainImage.asset->url
  }`;
  return await client.fetch(query, { name });
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectData(params.name);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
<Banner title={project.name}/>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      {project.imageUrl && (
        <div className="mb-4">
          <Image
            src={project.imageUrl}
            alt={project.name}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      )}
      <p className="text-lg">{project.description}</p>
    </div>
    </>
  );
}
