import { projectDocs } from "@/lib/projectData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export function generateStaticParams() {
  return Object.keys(projectDocs).map((slug) => ({
    slug,
  }));
}

export default async function ProjectDocumentation({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectDocs[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="mb-16">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 font-medium"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>
        
        <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle gradient glow inside the header card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider text-blue-300 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              {project.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
              {project.title}
            </h1>
            
            <p className="text-zinc-200 text-lg md:text-xl max-w-3xl leading-relaxed mb-8 drop-shadow-sm">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24 mt-16">
        {project.images.map((image, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Image Side */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <div className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl">
                  <div className="aspect-video relative overflow-hidden bg-black/20">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              {/* Text Side */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'} bg-gray-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-xl hover:border-white/20 transition-colors`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {image.title}
                </h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
