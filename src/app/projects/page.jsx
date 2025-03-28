import Image from 'next/image';
import { fetchProjects } from '@/lib/fetchProjects';
import Banner from '@/components/BannerTwo';
import Link from 'next/link';

export default async function ProjectsPage() {
  const projects = await fetchProjects();
console.log(projects)
  return (
    <section className=" bg-white dark:bg-black text-center ">
        <Banner title="Projects"/>
        <div className="container mx-auto px-4 flex justify-center flex-col">

        
        

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-2" >
          {projects.map((project, index) => (
        <Link href={`/projects/${project.name}`}>
            <div
              key={project._id}
              className={`relative text-left transform transition-transform duration-500 p-7 ${
                index % 2 === 0 ? 'md:translate-y-0' : 'md:-translate-y-16'
              }`}
            >
              {project.imageUrl && (
                <div className="relative w-full h-64">
                  <Image
                    src={project.imageUrl}
                    alt={"Project " + index}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-black dark:text-white mt-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </Link>
          ))}
        </div>
      </div>
      <div className="mt-12">
    
      </div>
      </div>
    </section>
  );
}
