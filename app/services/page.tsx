"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import {
  Code2, Globe, Smartphone, BrainCircuit, PenTool, Cloud, Zap, ShieldCheck,
  TrendingUp, Users, Lightbulb, Headphones, ArrowRight, Search, ClipboardList,
  Palette, Terminal, Rocket, LifeBuoy, Gauge, BarChart3, Layers,
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

function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span key={i} className="animate-word inline-block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
      {words[i]}.
    </span>
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
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(320px circle at var(--x) var(--y), rgba(59,130,246,0.16), transparent 60%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function SectionHeading({ tag, title, accent, sub, center = false }: {
  tag: string; title: string; accent?: string; sub?: string; center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 dark:bg-blue-500/15 dark:text-cyan-300">
        {tag}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}{" "}
        {accent && <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">{accent}</span>}
      </h2>
      {sub && <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300 ${center ? 'mx-auto' : ''}">{sub}</p>}
    </Reveal>
  );
}

const btnPrimary =
  "relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 hover:shadow-blue-600/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";
const btnGhost =
  "inline-flex items-center gap-2 rounded-full border border-blue-300 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-white/30 dark:text-white dark:hover:bg-white/10";

const services = [
  { icon: Code2, title: "Software Development", text: "Custom software, enterprise systems and database solutions built for your business goals." },
  { icon: Globe, title: "Web Development", text: "Modern, responsive websites and web applications that deliver exceptional user experiences." },
  { icon: Smartphone, title: "Mobile App Development", text: "Android and iOS apps with excellent performance, beautiful design and seamless experience." },
  { icon: BrainCircuit, title: "AI & Automation", text: "Intelligent systems that automate and optimize your processes, saving time and resources." },
  { icon: PenTool, title: "UI/UX Design", text: "Beautiful and intuitive designs that users love." },
  { icon: Cloud, title: "Cloud Solutions", text: "Secure, scalable and reliable cloud infrastructure and deployment." },
];

const why = [
  { icon: Zap, title: "Fast & Efficient", text: "We build solutions with speed and precision." },
  { icon: ShieldCheck, title: "Secure by Design", text: "Your data and privacy are our priority." },
  { icon: TrendingUp, title: "Scalable Architecture", text: "Built to grow with your business." },
  { icon: Users, title: "Client Focused", text: "Your goals are our priority." },
  { icon: Lightbulb, title: "Innovative Technology", text: "We use modern tools and best practices." },
  { icon: Headphones, title: "Reliable Support", text: "We're here whenever you need us." },
];

const steps = [
  { icon: Search, title: "Discover", text: "We learn about your business, goals and challenges." },
  { icon: ClipboardList, title: "Plan", text: "We define the scope, roadmap and tech stack." },
  { icon: Palette, title: "Design", text: "We create intuitive and beautiful user experiences." },
  { icon: Terminal, title: "Develop", text: "We turn designs into clean, scalable code." },
  { icon: Rocket, title: "Test & Launch", text: "We ensure quality, security and smooth deployment." },
  { icon: LifeBuoy, title: "Support & Scale", text: "We provide ongoing support and help you grow." },
];

const tech = [
  ["React", "bg-sky-500"], ["Next.js", "bg-slate-800"], ["Node.js", "bg-green-600"],
  ["Python", "bg-yellow-500"], ["Flutter", "bg-cyan-500"], ["PostgreSQL", "bg-blue-700"],
  ["MySQL", "bg-orange-500"], ["MongoDB", "bg-emerald-600"], ["Docker", "bg-blue-500"], ["AWS", "bg-amber-500"],
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36">
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 animate-blob rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-600/25" />
      <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 animate-blob rounded-full bg-cyan-300/30 blur-3xl [animation-delay:-5s] dark:bg-cyan-500/20" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 dark:bg-blue-500/15 dark:text-cyan-300">
              OUR SERVICES
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Powerful Software Solutions, Built for Your <RotatingWord words={["Business", "Startup", "Enterprise", "Vision"]} />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-lg text-lg text-slate-600 dark:text-slate-300">
              From custom software to cloud solutions, we build scalable, secure and innovative technology that helps your business grow, operate efficiently and stay ahead.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className={btnPrimary}>
              <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 animate-shimmer bg-white/30" />
              Start a Project <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/contact" className={btnGhost}>Talk to Us</Link>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md">
          <div className="animate-float rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-500/20 dark:border-white/10 dark:bg-slate-900">
            <p className="text-xs text-slate-500 dark:text-slate-400">Total revenue</p>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              <CountUp to={24780} prefix="$" />
            </p>
            <svg viewBox="0 0 300 100" className="mt-3 w-full" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#2563eb" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <path
                d="M0 85 C30 80 40 55 70 60 S120 30 150 40 S210 70 240 35 S280 15 300 10"
                fill="none" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"
                pathLength={1} strokeDasharray={1} strokeDashoffset={1} className="animate-draw"
              />
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { l: "Active users", n: 1248, s: "", d: 0 },
                { l: "Projects", n: 32, s: "", d: 0 },
                { l: "Uptime", n: 99.9, s: "%", d: 1 },
              ].map((x) => (
                <div key={x.l} className="rounded-lg bg-slate-50 p-2 dark:bg-white/5">
                  <p className="text-lg font-bold text-blue-700 dark:text-cyan-300">
                    <CountUp to={x.n} suffix={x.s} decimals={x.d} />
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{x.l}</p>
                </div>
              ))}
            </div>
          </div>

          {[
            { icon: ShieldCheck, label: "Secure", pos: "-left-4 top-2", delay: "0s" },
            { icon: Cloud, label: "Scalable", pos: "-right-3 -top-4", delay: "-2s" },
            { icon: BrainCircuit, label: "AI Powered", pos: "-right-4 bottom-8", delay: "-4s" },
          ].map(({ icon: I, label, pos, delay }) => (
            <div
              key={label}
              style={{ animationDelay: delay }}
              className={`absolute ${pos} flex animate-float items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-lg dark:border-white/10 dark:bg-slate-800 dark:text-white`}
            >
              <I className="h-4 w-4 text-blue-600 dark:text-cyan-300" aria-hidden /> {label}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const perks = [
    { icon: Gauge, t: "Better Performance" },
    { icon: BarChart3, t: "Higher Efficiency" },
    { icon: TrendingUp, t: "Long-Term Growth" },
  ];
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading tag="WHAT WE DO" title="Comprehensive Technology Services for" accent="Modern Businesses." />
          <Reveal delay={150}>
            <p className="mt-4 max-w-lg text-slate-600 dark:text-slate-300">
              We offer end-to-end software engineering services, from discovery and design to development, deployment and support. Our solutions are tailored to meet your unique business needs and drive real results.
            </p>
            <a href="#services" className={`${btnGhost} mt-6`}>
              Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </Reveal>
        </div>
        <div className="relative flex items-center justify-center py-8">
          <div className="absolute h-64 w-64 animate-spin rounded-full border-2 border-dashed border-blue-300/60 [animation-duration:30s] motion-reduce:animate-none dark:border-cyan-400/30" />
          <div className="animate-float rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 p-10 text-white shadow-2xl shadow-blue-500/40">
            <Layers className="h-16 w-16" aria-hidden />
          </div>
          <div className="absolute right-0 top-0 flex flex-col gap-3">
            {perks.map(({ icon: I, t }, i) => (
              <Reveal key={t} delay={i * 150}>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-md dark:border-white/10 dark:bg-slate-800 dark:text-white">
                  <I className="h-4 w-4 text-blue-600 dark:text-cyan-300" aria-hidden /> {t}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section id="services" className="scroll-mt-28 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="OUR SERVICES" title="Our Core Services" sub="Everything you need to build, scale and succeed in the digital world." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: I, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 120} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-500/15 dark:text-cyan-300">
                  <I className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
                <ArrowRight className="mt-4 h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-2 dark:text-cyan-300" aria-hidden />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-blue-50/70 p-8 dark:bg-white/5 lg:grid-cols-[1fr_1.6fr] lg:p-12">
        <div>
          <SectionHeading tag="WHY CHOOSE OUR SERVICES" title="Why Choose" accent="SYNFLISE?" />
          <Reveal delay={150}>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We go beyond code. Our team combines technical expertise, creativity and a client-first mindset to deliver solutions that create real value and long-term success.
            </p>
            <Link href="/contact" className={`${btnPrimary} mt-6`}>
              Start a Project <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {why.map(({ icon: I, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group">
                <span className="relative inline-flex rounded-xl bg-white p-3 text-blue-700 shadow dark:bg-slate-800 dark:text-cyan-300">
                  <span className="absolute inset-0 animate-ping rounded-xl bg-blue-400/20 [animation-duration:3s] motion-reduce:animate-none" />
                  <I className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-125" aria-hidden />
                </span>
                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            </Reveal>
          ))}
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
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="OUR PROCESS" title="From Idea to Impact" sub="A simple, transparent process to turn your vision into a powerful digital solution." />
        <div ref={ref} className="relative mt-12">
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-slate-200 dark:bg-white/10 lg:block">
            {seen && <div className="animate-grow h-full bg-gradient-to-r from-blue-600 to-cyan-400" />}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map(({ icon: I, title, text }, i) => {
              const on = i === active;
              return (
                <Reveal key={title} delay={i * 120}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`relative w-full rounded-2xl border p-4 text-left transition-all duration-500 ${
                      on
                        ? "-translate-y-2 border-blue-400 bg-white shadow-xl shadow-blue-500/20 dark:border-cyan-400 dark:bg-slate-800"
                        : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900"
                    }`}
                  >
                    <span
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-500 ${
                        on ? "scale-110 bg-gradient-to-br from-blue-600 to-cyan-400" : "bg-blue-600/80"
                      }`}
                    >
                      <I className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {i + 1}. {title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{text}</p>
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

function TechStack() {
  const row = [...tech, ...tech];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading tag="OUR TECHNOLOGY STACK" title="Modern Technologies." accent="Real Results." sub="We use the latest and most reliable technologies to build high-performance, scalable and future-ready solutions." />
      </div>
      <div className="group mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {row.map(([name, color], i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-800 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:text-white"
            >
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white ${color}`}>
                {name.slice(0, 2)}
              </span>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24 pt-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 p-10 text-white sm:p-14">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 animate-blob rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Let&apos;s Build Something Great <span className="text-cyan-300">Together.</span>
              </h2>
              <p className="mt-2 max-w-xl text-blue-100">
                Ready to bring your idea to life? Get in touch with our team and let&apos;s discuss how we can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 font-semibold text-blue-800 transition hover:scale-105">
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

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <Hero />
      <WhatWeDo />
      <CoreServices />
      <WhyChoose />
      <Process />
      <TechStack />
      <CTA />
    </main>
  );
}