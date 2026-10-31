import Link from "next/link";

const expertise = [
  {
    icon: "⚡",
    title: "Fast & Efficient",
    description: "We build solutions with performance in mind.",
    tile: "from-amber-300 to-orange-400 shadow-orange-400/40",
    glow: "bg-amber-300/40",
    line: "from-amber-400 to-orange-400",
  },
  {
    icon: "🛡️",
    title: "Secure",
    description: "Your data and privacy are our priority.",
    tile: "from-emerald-300 to-teal-500 shadow-teal-400/40",
    glow: "bg-emerald-300/40",
    line: "from-emerald-400 to-teal-500",
  },
  {
    icon: "📈",
    title: "Scalable",
    description: "Built to grow with your business.",
    tile: "from-sky-300 to-blue-500 shadow-blue-400/40",
    glow: "bg-sky-300/40",
    line: "from-sky-400 to-blue-500",
  },
  {
    icon: "👥",
    title: "Client Focused",
    description: "You're involved at every step of the journey.",
    tile: "from-pink-300 to-rose-500 shadow-rose-400/40",
    glow: "bg-pink-300/40",
    line: "from-pink-400 to-rose-500",
  },
  {
    icon: "💡",
    title: "Innovative",
    description: "Modern technology for real-world problems.",
    tile: "from-violet-300 to-fuchsia-500 shadow-fuchsia-400/40",
    glow: "bg-violet-300/40",
    line: "from-violet-400 to-fuchsia-500",
  },
];

export default function Vision() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-blue-50/70 py-24 dark:bg-slate-900/60"
    >
      <span className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/10" />
      <span className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-blue-500">
            WHY SYNFLISE?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Your Vision.
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Our Expertise.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-slate-500 dark:text-slate-400">
            We combine innovation, technical excellence and a client-first
            approach to deliver software solutions that exceed expectations.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
          >
            Learn More →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-3xl bg-gradient-to-br from-blue-200/80 via-white to-cyan-200/80 p-[1px] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_-16px_rgba(37,99,235,0.45)] dark:from-blue-400/30 dark:via-slate-800 dark:to-cyan-400/30"
            >
              <div className="relative h-full overflow-hidden rounded-[23px] bg-white/95 p-6 backdrop-blur dark:bg-slate-900/95">

                <span
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${item.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <span className="absolute right-5 top-4 text-sm font-semibold tracking-widest text-slate-300 transition-colors duration-500 group-hover:text-slate-400 dark:text-slate-700 dark:group-hover:text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.tile} text-2xl shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                >
                  <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/40 to-transparent" />
                  <span className="relative">{item.icon}</span>
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>

                <span
                  className={`mt-5 block h-[3px] w-8 rounded-full bg-gradient-to-r ${item.line} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            </div>
          ))}

          <div className="relative hidden items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-8 shadow-xl shadow-blue-500/30 sm:flex">
            <span className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
            <span className="pointer-events-none absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-cyan-200/30 blur-2xl" />

            <div className="relative text-center text-white">
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />
                <span className="absolute inset-0 rounded-full border border-white/40" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/15 text-4xl font-extrabold shadow-xl backdrop-blur">
                  S
                </div>
              </div>

              <p className="mt-5 font-bold tracking-[0.2em]">SYNFLISE</p>

              <p className="mt-1 text-xs text-blue-100">
                Future-ready software
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}