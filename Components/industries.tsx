import Image from "next/image";

const industries = [
  {
    image: "/image/businesess.png",
    icon: "🏢",
    title: "Businesses",
    description:
      "Management systems, CRM, e-commerce & more.",
  },
  {
    image: "/image/education.png",
    icon: "🎓",
    title: "Education",
    description:
      "School systems, e-learning, student portals & more.",
  },
  {
    image: "/image/e-commerce.png",
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Online stores, payments, orders & inventory.",
  },
  {
    image: "/image/organization.png",
    icon: "👥",
    title: "Organizations",
    description:
      "Data management, reporting and communication.",
  },
];

export default function Industries() {
  return (
    <section
      id="solutions"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-blue-500">
              SOLUTIONS FOR DIFFERENT NEEDS
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
              Industries
              <span className="text-blue-600">
                {" "}We Serve
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Tailored solutions for businesses, institutions and
              organizations across different sectors.
            </p>

            <a
              href="/solutions"
              className="mt-7 inline-block rounded-full border-2 border-blue-500 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Explore All Solutions →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 flex h-11 w-11 items-center justify-center rounded-tr-xl bg-white shadow-md">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-lg">
                          {industry.icon}
                    </div>
                  </div>
                </div>

                  <div className="p-5">

                  <h3 className="font-bold text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {industry.description}
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