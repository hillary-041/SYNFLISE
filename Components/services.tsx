const services = [
  {
    icon: "</>",
    title: "Software Development",
    description: "Custom software, enterprise systems and database solutions.",
    card: "from-violet-100 to-fuchsia-100 dark:from-violet-500/20 dark:to-fuchsia-500/20 hover:shadow-violet-400/40",
    bubble: "from-violet-400 to-fuchsia-500",
    blob: "bg-fuchsia-300/50",
  },
  {
    icon: "◎",
    title: "Web Development",
    description: "Modern, responsive websites and powerful web applications.",
    card: "from-sky-100 to-cyan-100 dark:from-sky-500/20 dark:to-cyan-500/20 hover:shadow-sky-400/40",
    bubble: "from-sky-400 to-cyan-500",
    blob: "bg-cyan-300/50",
  },
  {
    icon: "▯",
    title: "Mobile App Development",
    description: "Android & iOS apps with excellent performance and UX.",
    card: "from-blue-100 to-indigo-100 dark:from-blue-500/20 dark:to-indigo-500/20 hover:shadow-blue-400/40",
    bubble: "from-blue-500 to-indigo-600",
    blob: "bg-indigo-300/50",
  },
  {
    icon: "🧠",
    title: "AI & Automation",
    description: "Intelligent systems that automate and optimize your processes.",
    card: "from-emerald-100 to-teal-100 dark:from-emerald-500/20 dark:to-teal-500/20 hover:shadow-emerald-400/40",
    bubble: "from-emerald-400 to-teal-500",
    blob: "bg-teal-300/50",
  },
  {
    icon: "✎",
    title: "UI/UX Design",
    description: "Beautiful and intuitive designs that users love.",
    card: "from-pink-100 to-rose-100 dark:from-pink-500/20 dark:to-rose-500/20 hover:shadow-pink-400/40",
    bubble: "from-pink-400 to-rose-500",
    blob: "bg-rose-300/50",
  },
  {
    icon: "☁",
    title: "Cloud Solutions",
    description: "Secure, scalable and reliable cloud infrastructure.",
    card: "from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 hover:shadow-amber-400/40",
    bubble: "from-amber-400 to-orange-500",
    blob: "bg-orange-300/50",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-blue-500">
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Comprehensive Software Solutions
            <span className="text-blue-600"> for Every Need</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-500 dark:text-slate-400">
            From custom software to AI-powered systems, we build
            solutions that make a real difference.
          </p>

          <a
            href="/services"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1"
          >
            Our Services →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br ${service.card} p-7 shadow-lg shadow-slate-200/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl dark:border-white/10 dark:shadow-none`}
            >
              <span
                className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full ${service.blob} blur-2xl transition-transform duration-700 group-hover:scale-150`}
              />
              <span
                className={`pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full ${service.blob} blur-2xl transition-transform duration-700 group-hover:translate-x-8 group-hover:-translate-y-4`}
              />
              <span className="pointer-events-none absolute bottom-16 right-12 h-3 w-3 animate-pulse rounded-full bg-white/80" />
              <span className="pointer-events-none absolute bottom-24 right-24 h-2 w-2 animate-ping rounded-full bg-white/70" />

              <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[2rem] bg-gradient-to-b from-white/50 to-transparent dark:from-white/10" />

              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${service.bubble} text-xl font-bold text-white shadow-lg ring-4 ring-white/60 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 dark:ring-white/10`}
              >
                {service.icon}
                <span className="absolute left-3 top-2 h-3 w-3 rounded-full bg-white/70 blur-[1px]" />
              </div>

              <h3 className="relative mt-5 text-lg font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <div className="relative ml-auto mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-blue-600 shadow-md transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}