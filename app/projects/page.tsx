"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowRight, Layers, HeartPulse, Landmark, BrainCircuit, ShieldCheck, Truck,
  GraduationCap, LayoutGrid, Globe, Cloud, BarChart3, Search, PenTool, Code2,
  Cloud as CloudIcon, Sparkles, Activity,
} from "lucide-react";

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        seen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({ to, prefix = "", suffix = "", decimals = 0, duration = 1800 }: {
  to: number; prefix?: string; suffix?: string; decimals?: number; duration?: number;
}) {
  const [ref, seen] = useInView<HTMLSpanElement>();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

function Bars({ values }: { values: number[] }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="mt-2 flex h-12 items-end gap-1">
      {values.map((v, i) => (
        <span
          key={i}
          style={{ height: seen ? `${v}%` : "0%", transitionDelay: `${i * 80}ms` }}
          className="w-full rounded-sm bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-1000 ease-out"
        />
      ))}
    </div>
  );
}

function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/60 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(320px circle at var(--x) var(--y), rgba(59,130,246,0.14), transparent 60%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function SectionHeading({ tag, title, accent, sub }: { tag: string; title: string; accent?: string; sub?: string }) {
  return (
    <Reveal>
      <span className="inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 dark:bg-blue-500/15 dark:text-cyan-300">
        {tag}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}{" "}
        {accent && (
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">{accent}</span>
        )}
      </h2>
      {sub && <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">{sub}</p>}
    </Reveal>
  );
}

const btnPrimary =
  "relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 hover:shadow-blue-600/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";
const btnGhost =
  "inline-flex items-center gap-2 rounded-full border border-blue-300 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-white/30 dark:text-white dark:hover:bg-white/10";

type Tech = [string, string][];

const filters = [
  { label: "All Projects", icon: LayoutGrid },
  { label: "Web & Software", icon: Globe },
  { label: "Cloud", icon: Cloud },
  { label: "AI & Automation", icon: BrainCircuit },
  { label: "Cybersecurity", icon: ShieldCheck },
  { label: "Data & Analytics", icon: BarChart3 },
];

const projects: {
  slug: string; cat: string; tag: string; icon: typeof HeartPulse; title: string;
  text: string; tech: Tech; grad: string;
}[] = [
  {
    slug: "connected-care", cat: "Web & Software", tag: "Healthcare", icon: HeartPulse,
    title: "Connected Care Platform",
    text: "A modern telehealth and patient management system that connects patients, healthcare providers and hospitals for better outcomes.",
    tech: [["React", "bg-sky-500"], ["FastAPI", "bg-teal-600"], ["PostgreSQL", "bg-blue-700"]],
    grad: "from-sky-500 to-blue-700",
  },
  {
    slug: "secure-cloud-banking", cat: "Cloud", tag: "Finance & Cloud", icon: Landmark,
    title: "Secure Cloud Banking",
    text: "Scalable cloud infrastructure and secure banking platform designed for modern financial services.",
    tech: [["AWS", "bg-amber-500"], ["Python", "bg-yellow-500"], ["SQL", "bg-indigo-600"]],
    grad: "from-blue-700 to-indigo-900",
  },
  {
    slug: "workflow-engine", cat: "AI & Automation", tag: "AI & Automation", icon: BrainCircuit,
    title: "Intelligent Workflow Engine",
    text: "AI-powered automation that streamlines business processes and increases productivity.",
    tech: [["Python", "bg-yellow-500"], ["FastAPI", "bg-teal-600"], ["React", "bg-sky-500"]],
    grad: "from-violet-600 to-blue-900",
  },
  {
    slug: "threat-intelligence", cat: "Cybersecurity", tag: "Cybersecurity", icon: ShieldCheck,
    title: "Threat Intelligence Hub",
    text: "Real-time threat detection, analysis and response platform for stronger digital security.",
    tech: [["Python", "bg-yellow-500"], ["FastAPI", "bg-teal-600"], ["Elastic", "bg-cyan-600"]],
    grad: "from-slate-800 to-blue-800",
  },
  {
    slug: "fleet-intelligence", cat: "Data & Analytics", tag: "Logistics", icon: Truck,
    title: "Fleet Intelligence",
    text: "Real-time fleet tracking, route optimization and logistics management platform.",
    tech: [["React", "bg-sky-500"], ["Node.js", "bg-green-600"], ["MongoDB", "bg-emerald-600"]],
    grad: "from-cyan-600 to-blue-800",
  },
  {
    slug: "learning-ecosystem", cat: "Web & Software", tag: "Education", icon: GraduationCap,
    title: "Digital Learning Ecosystem",
    text: "Interactive learning platform for better access, engagement and results.",
    tech: [["React", "bg-sky-500"], ["Node.js", "bg-green-600"], ["PostgreSQL", "bg-blue-700"]],
    grad: "from-blue-500 to-cyan-600",
  },
];

const events = [
  { t: "Order Processed", s: "Completed", w: "2m ago" },
  { t: "System Backup", s: "Completed", w: "14m ago" },
  { t: "New User", s: "Active", w: "32m ago" },
  { t: "Report Generated", s: "Completed", w: "45m ago" },
  { t: "API Deployment", s: "Processing", w: "1h ago" },
  { t: "Data Sync", s: "Active", w: "2h ago" },
];

const statusColor: Record<string, string> = {
  Completed: "text-green-400",
  Processing: "text-amber-300",
  Active: "text-cyan-300",
};

const steps = [
  { icon: Search, title: "Discover", text: "Understand your goals, challenges and users." },
  { icon: PenTool, title: "Design", text: "Create intuitive, scalable and beautiful solutions." },
  { icon: Code2, title: "Engineer", text: "Build with modern tools, clean code and best practices." },
  { icon: CloudIcon, title: "Scale", text: "Launch, monitor and optimize for long-term growth." },
];

function Hero() {
  const badge =
    "absolute z-20 flex animate-float items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-lg dark:border-white/10 dark:bg-slate-800 dark:text-white";
  const card =
    "absolute z-10 animate-float rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-blue-500/15 dark:border-white/10 dark:bg-slate-900";
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36">
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 animate-blob rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-600/25" />
      <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 animate-blob rounded-full bg-cyan-300/30 blur-3xl [animation-delay:-5s] dark:bg-cyan-500/20" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 dark:bg-blue-500/15 dark:text-cyan-300">
              OUR PROJECTS
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Ideas Built Into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Digital Impact.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-lg text-lg text-slate-600 dark:text-slate-300">
              Explore how we turn complex business challenges into secure, scalable and intelligent digital products.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className={btnPrimary}>
              <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 animate-shimmer bg-white/30" />
              Explore Case Studies <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link href="/contact" className={btnGhost}>
              Start a Project <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto h-[400px] w-full max-w-lg">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-2 border-dashed border-blue-300/60 [animation-duration:30s] motion-reduce:animate-none dark:border-cyan-400/30" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="animate-float rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 p-8 text-white shadow-2xl shadow-blue-500/40">
                <Layers className="h-14 w-14" aria-hidden />
              </div>
            </div>

            <div className={`${badge} left-6 top-0`}>
              <Cloud className="h-4 w-4 text-blue-600 dark:text-cyan-300" aria-hidden /> Cloud Native
            </div>
            <div style={{ animationDelay: "-2s" }} className={`${badge} right-0 top-[44%]`}>
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-cyan-300" aria-hidden /> AI Powered
            </div>
            <div style={{ animationDelay: "-4s" }} className={`${badge} bottom-0 left-[38%]`}>
              <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-cyan-300" aria-hidden /> Secure by Design
            </div>

            <div className={`${card} left-0 top-12 w-40`}>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Cloud Analytics</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                <CountUp to={48230} prefix="$" />
              </p>
              <Bars values={[40, 65, 50, 85, 70, 95]} />
            </div>

            <div style={{ animationDelay: "-1s" }} className={`${card} right-4 top-0 w-32 !rounded-3xl`}>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">HealthCare</p>
              <div className="mt-2 flex items-center gap-2">
                <HeartPulse className="h-5 w-5 animate-pulse text-rose-500" aria-hidden />
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  <CountUp to={72} suffix=" bpm" />
                </p>
              </div>
              <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                Steps <span className="font-semibold text-slate-900 dark:text-white"><CountUp to={8432} /></span>
              </p>
            </div>

            <div style={{ animationDelay: "-3s" }} className={`${card} bottom-10 left-2 hidden w-40 sm:block`}>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Security Operations</p>
              <div className="mt-1 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-cyan-400 text-sm font-bold text-slate-900 dark:text-white">
                  <CountUp to={12} />
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Threats contained</span>
              </div>
            </div>

            <div style={{ animationDelay: "-5s" }} className={`${card} bottom-12 right-0 w-40`}>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Logistics &amp; Fleet</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  <CountUp to={12} /> active
                </p>
              </div>
              <Truck className="mt-2 h-5 w-5 text-blue-600 dark:text-cyan-300" aria-hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const [start, setStart] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStart((n) => (n + 1) % events.length), 3000);
    return () => clearInterval(id);
  }, []);
  const shown = [0, 1, 2].map((i) => events[(start + i) % events.length]);
  const C = 2 * Math.PI * 40;

  return (
    <section id="featured" className="scroll-mt-28 px-6 py-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 animate-blob rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-widest text-cyan-300">FEATURED PROJECT</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Smart Operations Platform</h2>
              <p className="mt-4 max-w-md text-blue-100">
                We helped a growing enterprise automate workflows, monitor performance and make faster, data-driven decisions with a unified digital platform.
              </p>
              <div className="mt-8 grid grid-cols-3 divide-x divide-white/20">
                {[
                  { n: 42, s: "%", l: "Faster Operations", d: 0 },
                  { n: 3, s: "x", l: "Better Visibility", d: 0 },
                  { n: 99.9, s: "%", l: "Uptime", d: 1 },
                ].map((x) => (
                  <div key={x.l} className="px-3 first:pl-0">
                    <p className="text-2xl font-bold text-cyan-300 sm:text-3xl">
                      <CountUp to={x.n} suffix={x.s} decimals={x.d} />
                    </p>
                    <p className="text-xs text-blue-100 sm:text-sm">{x.l}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
              >
                View Case Study <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div ref={ref} className="rounded-2xl border border-white/15 bg-slate-950/70 p-4 backdrop-blur">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <Activity className="h-4 w-4 text-cyan-300" aria-hidden /> Operations Overview
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { l: "Total Orders", n: 1248, d: "+12%" },
                  { l: "Active Users", n: 892, d: "+8%" },
                  { l: "System Uptime", n: 99.9, d: "+0.1%", s: "%", dec: 1 },
                ].map((k) => (
                  <div key={k.l} className="rounded-lg bg-white/10 p-2">
                    <p className="text-[10px] text-blue-200">{k.l}</p>
                    <p className="text-lg font-bold">
                      <CountUp to={k.n} suffix={k.s ?? ""} decimals={k.dec ?? 0} />
                    </p>
                    <p className="text-[10px] text-green-400">{k.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-[1.6fr_1fr] gap-3">
                <div className="rounded-lg bg-white/5 p-2">
                  <svg viewBox="0 0 200 80" className="w-full" aria-hidden>
                    <defs>
                      <linearGradient id="fa" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#22d3ee" stopOpacity="0.45" />
                        <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 65 C25 60 35 35 60 40 S100 15 125 30 S170 50 200 20 V80 H0 Z" fill="url(#fa)" />
                    <path
                      d="M0 65 C25 60 35 35 60 40 S100 15 125 30 S170 50 200 20"
                      fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"
                      pathLength={1} strokeDasharray={1} strokeDashoffset={seen ? 0 : 1}
                      style={{ transition: "stroke-dashoffset 2.4s ease-out" }}
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-white/5 p-2">
                  <svg viewBox="0 0 100 100" className="h-20 w-20 -rotate-90" aria-hidden>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="10" />
                    <circle
                      cx="50" cy="50" r="40" fill="none" stroke="#22d3ee" strokeWidth="10" strokeLinecap="round"
                      strokeDasharray={C} strokeDashoffset={seen ? C * 0.44 : C}
                      style={{ transition: "stroke-dashoffset 1.8s ease-out" }}
                    />
                    <text x="50" y="55" textAnchor="middle" className="rotate-90 fill-white text-[18px] font-bold" transform="rotate(90 50 50)">
                      56%
                    </text>
                  </svg>
                </div>
              </div>

              <div className="mt-3 rounded-lg bg-white/5 p-2 text-xs">
                <p className="mb-1 font-semibold">Recent Activity</p>
                {shown.map((e) => (
                  <div key={e.t} className="animate-word grid grid-cols-[1.4fr_1fr_0.8fr] gap-2 border-t border-white/10 py-1.5">
                    <span>{e.t}</span>
                    <span className={statusColor[e.s]}>{e.s}</span>
                    <span className="text-blue-200">{e.w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("All Projects");
  const list = filter === "All Projects" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="-mx-2 flex gap-3 overflow-x-auto px-2 pb-3" role="tablist" aria-label="Filter projects">
          {filters.map(({ label, icon: I }) => {
            const on = filter === label;
            return (
              <button
                key={label}
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(label)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  on
                    ? "scale-105 border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 dark:border-white/15 dark:bg-slate-900 dark:text-slate-200"
                }`}
              >
                <I className="h-4 w-4" aria-hidden /> {label}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold tracking-widest text-blue-700 dark:text-cyan-300">SELECTED PROJECTS</p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A selection of digital products engineered for real-world results.
          </h2>
        </div>

        <div key={filter} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => {
            const I = p.icon;
            return (
              <Reveal key={p.slug} delay={i * 100} className="h-full">
                <SpotlightCard className="h-full">
                  {/* Replace this banner with <Image src="/image/projects/..." fill className="object-cover" /> if you have photos */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.grad}`}>
                    <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="absolute -right-6 -top-6 h-32 w-32 animate-blob rounded-full bg-white/20 blur-2xl" />
                    <I className="absolute right-6 top-6 h-20 w-20 text-white/90 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" aria-hidden />
                    <span className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex h-[calc(100%-10rem)] flex-col p-5">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{p.text}</p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-3">
                        {p.tech.map(([name, color]) => (
                          <span key={name} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-200">
                            <span className={`flex h-5 w-5 items-center justify-center rounded text-[9px] font-bold text-white ${color}`}>
                              {name.slice(0, 2)}
                            </span>
                            {name}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/projects/${p.slug}`}
                        aria-label={`View ${p.title}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/15 dark:text-cyan-300"
                      >
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  const [ref, seen] = useInView<HTMLDivElement>(0.2);
  useEffect(() => {
    if (!seen) return;
    const id = setInterval(() => setActive((n) => (n + 1) % steps.length), 2200);
    return () => clearInterval(id);
  }, [seen]);

  return (
    <section className="px-6 py-14">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_2.6fr]">
        <SectionHeading tag="OUR PROCESS" title="From Challenge to Launch" sub="We follow a clear, collaborative process to turn your idea into a powerful digital solution." />
        <div ref={ref} className="relative">
          <div className="absolute left-6 right-6 top-6 hidden h-0.5 bg-slate-200 dark:bg-white/10 lg:block">
            {seen && <div className="animate-grow h-full bg-gradient-to-r from-blue-600 to-cyan-400" />}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: I, title, text }, i) => {
              const on = i === active;
              return (
                <Reveal key={title} delay={i * 120}>
                  <button type="button" onClick={() => setActive(i)} className="relative block w-full text-left">
                    <span
                      className={`relative mb-3 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-500 ${
                        on ? "scale-110 bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg shadow-blue-500/40" : "bg-blue-600/80"
                      }`}
                    >
                      {on && <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/40 motion-reduce:animate-none" />}
                      <I className="relative h-5 w-5" aria-hidden />
                    </span>
                    <h3 className={`font-semibold transition-colors ${on ? "text-blue-700 dark:text-cyan-300" : "text-slate-900 dark:text-white"}`}>
                      {i + 1}. {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{text}</p>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24 pt-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-white sm:p-14">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 animate-blob rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-cyan-300">HAVE AN IDEA?</p>
              <h2 className="mt-1 text-3xl font-bold sm:text-4xl">
                Let&apos;s Build <span className="text-cyan-300">What&apos;s Next.</span>
              </h2>
              <p className="mt-2 max-w-xl text-blue-100">
                Partner with SYNFLISE to create innovative, secure and scalable solutions that move your business forward.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 font-semibold text-blue-800 transition hover:scale-105"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 animate-shimmer bg-blue-200/60" />
                Start a Project <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <Hero />
      <Gallery />
      <Featured />
      <Process />
      <CTA />
    </main>
  );
}