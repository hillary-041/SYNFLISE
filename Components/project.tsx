import Image from "next/image";

const projects = [
  {
    image: "/image/school.jpg",
    title: "School Management System",
    category: "Web",
    technologies: "React • Node.js • PostgreSQL",
    icon: "🎓",
  },
  {
    image: "/image/laundry.jpg",
    title: "Laundry Management System",
    category: "Web • Mobile",
    technologies: "Flutter • Firebase • MySQL",
    icon: "🧺",
  },
  {
    image: "/image/e-comm.jpg",
    title: "E-Commerce Platform",
    category: "Web • E-Commerce",
    technologies: "React • Node.js • MongoDB",
    icon: "🛒",
  },
  {
    image: "/image/buszna.jpg",
    title: "Business Dashboard",
    category: "Web • Analytics",
    technologies: "React • Node.js • PostgreSQL",
    icon: "📊",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-blue-500">
              FEATURED PROJECTS
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900">
              Ideas We've Turned{" "}
              <span className="text-blue-600">
                Into Reality
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Explore some of the digital products and solutions
              we've built for our clients and partners.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block rounded-full border-2 border-blue-500 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
            >
              View All Projects →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center rounded-tr-xl bg-white shadow-md">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-lg">
                      {project.icon}
                    </div>
                  </div>
                </div>

                <div className="p-5">

                  <div className="text-xs font-semibold text-blue-500">
                    {project.category}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500">
                    {project.technologies}
                  </p>

                  <div className="mt-4 text-right font-bold text-blue-600">
                    →
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}