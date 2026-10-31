"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, Settings, Code2, Cloud, Smartphone, Bot, ShieldCheck, BarChart3,
  TrendingUp, Lightbulb, Users, Brain, Heart, Landmark, GraduationCap,
  ShoppingCart, Factory, Truck, Sparkles,
} from "lucide-react";

const solutions = [
  { icon: Code2, title: "Custom Software Development", text: "Tailored software solutions built to match your unique business goals and processes." },
  { icon: Cloud, title: "Cloud Solutions", text: "Secure, scalable and flexible cloud infrastructure for modern businesses." },
  { icon: Smartphone, title: "Mobile App Development", text: "High-performance mobile apps for Android and iOS that your users love." },
  { icon: Bot, title: "AI & Automation", text: "Streamline operations and boost productivity with intelligent automation." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Protect your data, systems and customers with advanced security solutions." },
  { icon: BarChart3, title: "Data & Analytics", text: "Turn your data into valuable insights for better decisions and growth." },
];

const features = [
  { icon: TrendingUp, title: "Scalable", text: "Solutions that grow with your business." },
  { icon: ShieldCheck, title: "Secure", text: "Your data and privacy are our priority." },
  { icon: Lightbulb, title: "Innovative", text: "We bring fresh ideas and modern technology." },
  { icon: Users, title: "Expert Team", text: "Skilled professionals with real-world experience." },
];

const industries = [
  { icon: Heart, title: "Healthcare", text: "Better patient care through smart technology.", img: "healthcare" },
  { icon: Landmark, title: "Finance", text: "Secure, reliable and efficient financial systems.", img: "finance" },
  { icon: GraduationCap, title: "Education", text: "Modern learning for a brighter future.", img: "education" },
  { icon: ShoppingCart, title: "Retail & E-commerce", text: "Seamless shopping experiences, online and offline.", img: "retail" },
  { icon: Factory, title: "Manufacturing", text: "Smarter operations for higher productivity.", img: "manufacturing" },
  { icon: Truck, title: "Logistics & Transportation", text: "Track, manage and deliver with confidence.", img: "logistics" },
];

const floating = [
  { icon: Settings, label: "Automate Processes", pos: "left-0 top-6 sm:left-2", delay: "0s" },
  { icon: Code2, label: "Build Smarter", pos: "left-0 bottom-12 sm:-left-2", delay: "1.2s" },
  { icon: Cloud, label: "Scale with Cloud", pos: "right-0 top-24", delay: "0.6s" },
  { icon: TrendingUp, label: "Grow Faster", pos: "right-2 bottom-6", delay: "1.8s" },
];

const stats = [
  { n: 120, s: "+", label: "Projects Delivered" },
  { n: 60, s: "+", label: "Happy Clients" },
  { n: 8, s: "+", label: "Years of Experience" },
  { n: 99, s: "%", label: "Client Satisfaction" },
];

const typedWords = ["Cloud Platforms", "AI Systems", "Mobile Apps", "Secure Software", "Data Pipelines"];

function useInView<T extends HTMLElement>(threshold = 0) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, show] = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}>
      {children}
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1600, 1);
      setN(Math.round(to * (1 - (1 - p) ** 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const full = !del && txt === w;
    const empty = del && txt === "";
    const t = setTimeout(() => {
      if (full) setDel(true);
      else if (empty) { setDel(false); setI((v) => v + 1); }
      else setTxt(w.slice(0, txt.length + (del ? -1 : 1)));
    }, full ? 1400 : empty ? 300 : del ? 35 : 80);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return (
    <span className="text-blue-600 dark:text-sky-400">
      {txt}<span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-current [animation:sf-blink_1s_steps(1)_infinite]" />
    </span>
  );
}

function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    type P = { x: number; y: number; vx: number; vy: number };
    let w = 0, h = 0, raf = 0, pts: P[] = [];
    const mouse = { x: -999, y: -999 };
    const rand = () => (Math.random() - 0.5) * 0.4;

    const line = (x1: number, y1: number, x2: number, y2: number, color: string, width: number) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    };

    const resize = () => {
      const r = c.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(80, Math.floor((w * h) / 14000));
      pts = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: rand(), vy: rand() }));
    };
    const onMove = (e: MouseEvent) => {
      const r = c.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      pts.forEach((a, i) => {
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.85)"; ctx.fill();
        for (const b of pts.slice(i + 1)) {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) line(a.x, a.y, b.x, b.y, `rgba(59,130,246,${(1 - d / 130) * 0.35})`, 1);
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) line(a.x, a.y, mouse.x, mouse.y, `rgba(56,189,248,${(1 - dm / 170) * 0.7})`, 1.2);
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_65%,transparent)]" />;
}

function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={onMove} className={`group relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(280px circle at var(--x) var(--y), rgba(56,189,248,0.22), transparent 65%)" }} />
      {children}
    </div>
  );
}

const Eyebrow = ({ children, pill = false }: { children: ReactNode; pill?: boolean }) => (
  <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 ${pill ? "rounded-full border border-blue-200 bg-blue-50 px-3 py-1 dark:border-sky-400/30 dark:bg-sky-400/10" : ""}`}>
    {pill && <Sparkles size={12} />}{children}
  </span>
);

const Accent = ({ children }: { children: ReactNode }) => (
  <span className="text-blue-600 dark:text-sky-400">{children}</span>
);

const OutlineBtn = ({ children, to = "#" }: { children: ReactNode; to?: string }) => (
  <Link href={to} className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-sky-400/60 dark:text-sky-300 dark:hover:bg-sky-400/10">
    {children}
  </Link>
);

const ShimmerLink = ({ href, className, arrow, children }: { href: string; className: string; arrow: number; children: ReactNode }) => (
  <Link href={href} className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r font-semibold ${className}`}>
    <span className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/30 [animation:sf-shimmer_2.8s_ease-in-out_infinite]" />
    <span className="relative">{children}</span>
    <ArrowRight size={arrow} className="relative transition group-hover:translate-x-1" />
  </Link>
);

const heading = "text-3xl font-extrabold text-blue-950 dark:text-white";
const muted = "text-sm text-slate-600 dark:text-slate-400";
const card = "group h-full overflow-hidden border border-blue-100 bg-white shadow-sm transition duration-300 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-sky-400/40";

export default function Solutions() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sf-root relative overflow-x-hidden bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-300">
      <style>{`
        @keyframes sf-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
        @keyframes sf-spin { to { transform: rotate(360deg) } }
        @keyframes sf-shimmer { 0% { transform: translateX(-120%) } 100% { transform: translateX(220%) } }
        @keyframes sf-pulse { 0%,100% { opacity:.6; transform: scale(1) } 50% { opacity:1; transform: scale(1.05) } }
        @keyframes sf-blink { 50% { opacity: 0 } }
        @keyframes sf-scan { 0% { top: 8% } 100% { top: 92% } }
        @keyframes sf-grid { to { background-position: 0 48px } }
        @media (prefers-reduced-motion: reduce) { .sf-root *, .sf-root *::before { animation: none !important; transition: none !important; } }
      `}</style>

      <div className="fixed left-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-blue-600 to-sky-400" style={{ width: `${progress}%` }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] [background-image:linear-gradient(rgba(59,130,246,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.10)_1px,transparent_1px)] [background-size:48px_48px] [animation:sf-grid_6s_linear_infinite] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/15" />

      <div className="relative z-10">
        <section className="relative">
          <NetworkCanvas />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-2">
            <Reveal>
              <Eyebrow pill>Our Solutions</Eyebrow>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] text-blue-950 dark:text-white md:text-6xl">
                Smart Solutions<br />for a Digital<br />
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Tomorrow.</span>
              </h1>
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 font-mono text-xs backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] [animation:sf-pulse_2s_ease-in-out_infinite]" />
                <span className="text-slate-500 dark:text-slate-400">&gt; we build</span>
                <Typewriter words={typedWords} />
              </div>
              <p className={`mt-5 max-w-md leading-relaxed ${muted}`}>
                We deliver innovative, scalable and secure software solutions that solve real business
                challenges. From automation to cloud, we turn your ideas into powerful digital products.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ShimmerLink href="/solutions" arrow={16} className="from-blue-600 to-sky-500 px-6 py-3 text-sm text-white shadow-lg shadow-blue-500/30">
                  Explore Our Solutions
                </ShimmerLink>
                <OutlineBtn to="/contact">Talk to Our Experts</OutlineBtn>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mx-auto h-[430px] w-full max-w-[560px]">
                <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-blue-200 via-sky-100 to-blue-300/60 blur-2xl dark:from-blue-700/40 dark:via-sky-500/20 dark:to-blue-900/40" />

                <div className="absolute left-1/2 top-2 h-72 w-72 -translate-x-1/2 rounded-full border border-dashed border-sky-400/50 [animation:sf-spin_30s_linear_infinite]">
                  <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_14px_4px_rgba(56,189,248,0.8)]" />
                </div>
                <div className="absolute left-1/2 top-9 h-[230px] w-[230px] -translate-x-1/2 rounded-full border border-blue-400/40 [animation:sf-spin_20s_linear_infinite_reverse]">
                  <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.8)]" />
                </div>

                <div className="absolute left-1/2 top-12 grid h-52 w-52 -translate-x-1/2 place-items-center overflow-hidden rounded-full border-4 border-sky-300/60 bg-gradient-to-b from-sky-200 to-blue-500/80 shadow-[0_0_80px_20px_rgba(56,189,248,0.5)] [animation:sf-pulse_4s_ease-in-out_infinite] dark:from-sky-400/60 dark:to-blue-700">
                  <Brain size={100} strokeWidth={1.2} className="text-white drop-shadow-[0_0_14px_#fff]" />
                  <span className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] [animation:sf-scan_3s_ease-in-out_infinite_alternate]" />
                </div>

                {[0, 1, 2].map((i) => (
                  <div key={i} className="absolute left-1/2 h-14 -translate-x-1/2 rounded-[2rem] border border-sky-300/70 bg-gradient-to-r from-blue-600 to-sky-400 shadow-xl shadow-blue-500/40"
                    style={{ bottom: 50 + i * 26, width: 360 - i * 50, opacity: 1 - i * 0.12 }} />
                ))}

                {floating.map(({ icon: Icon, label, pos, delay }) => (
                  <div key={label} style={{ animationDelay: delay }}
                    className={`absolute ${pos} w-28 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl shadow-blue-200/70 backdrop-blur [animation:sf-float_6s_ease-in-out_infinite] dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/40`}>
                    <Icon size={24} className="text-blue-600 dark:text-sky-400" />
                    <p className="mt-2 text-xs font-semibold leading-tight text-slate-800 dark:text-slate-100">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-blue-100/60 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-4xl font-extrabold text-transparent"><Counter to={s.n} suffix={s.s} /></div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Our Solutions</Eyebrow>
              <h2 className={`mt-2 ${heading}`}>Solutions for <Accent>Every Business Need</Accent></h2>
              <p className={`mt-2 max-w-md ${muted}`}>
                We offer a wide range of technology solutions designed to help you work smarter,
                operate efficiently and achieve sustainable growth.
              </p>
            </div>
            <OutlineBtn to="/services">View All Solutions <ArrowRight size={14} /></OutlineBtn>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <SpotlightCard className={`${card} rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-200/60 dark:hover:shadow-sky-500/10`}>
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-100/70 transition duration-500 group-hover:scale-150 dark:bg-sky-400/10" />
                  <span className="absolute right-4 top-3 font-mono text-[11px] text-blue-400/70 dark:text-sky-400/50">0{i + 1}</span>
                  <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/40 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={28} />
                  </div>
                  <h3 className="relative mt-4 font-bold text-blue-950 dark:text-white">{title}</h3>
                  <p className="relative mt-2 text-sm text-slate-500 dark:text-slate-400">{text}</p>
                  <div className="relative mt-4 flex items-center justify-between">
                    <Link href="#" className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-sky-400">Learn More <ArrowRight size={12} /></Link>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-sky-400/15 dark:text-sky-300 dark:group-hover:bg-sky-400 dark:group-hover:text-slate-950"><ArrowRight size={14} /></span>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto my-6 max-w-[1400px] px-4">
          <Reveal>
            <div className="relative grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#031b4e] via-[#06307a] to-[#0a4fc4] p-8 text-white shadow-2xl shadow-blue-900/30 ring-1 ring-white/10 lg:grid-cols-[1fr_1.6fr_1fr]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="relative">
                <Eyebrow>Why choose Synflise?</Eyebrow>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight">Technology That<br /><span className="text-sky-400">Works for You.</span></h2>
                <p className="mt-3 text-xs text-blue-100">We combine innovation, expertise and a customer-first approach to deliver solutions that make a real impact.</p>
                <Link href="/about" className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-400 px-5 py-2 text-xs font-semibold text-sky-300 transition hover:bg-sky-400 hover:text-slate-950">Our Process <ArrowRight size={14} /></Link>
              </div>
              <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
                {features.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="group text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/10 text-sky-300 ring-1 ring-sky-400/30 transition duration-300 group-hover:scale-110 group-hover:bg-sky-400/20"><Icon size={26} /></div>
                    <h4 className="mt-3 text-sm font-bold">{title}</h4>
                    <p className="mt-1 text-[11px] text-blue-200">{text}</p>
                  </div>
                ))}
              </div>
              <div className="relative hidden h-48 lg:block">
                <div className="absolute inset-0 -skew-y-6 rounded-2xl border border-sky-400/40 bg-gradient-to-br from-sky-400/30 to-blue-900/60 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                  <Cloud size={70} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-300 [animation:sf-float_5s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_3fr]">
          <Reveal>
            <Eyebrow>Real-World Impact</Eyebrow>
            <h2 className={`mt-2 ${heading}`}>Solutions Across <Accent>Industries</Accent></h2>
            <p className={`mt-3 ${muted}`}>From startups to enterprises, we build solutions that empower businesses across various sectors.</p>
            <div className="mt-5"><OutlineBtn to="/industries">Explore Industries <ArrowRight size={14} /></OutlineBtn></div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, text, img }, i) => (
              <Reveal key={title} delay={i * 70}>
                <article className={`${card} rounded-xl hover:-translate-y-1 hover:shadow-xl`}>
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-blue-200 to-sky-100 dark:from-blue-900 dark:to-slate-800">
                    <img
                      src={`/image/industries/${img}.jpg`}
                      alt={title}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                  </div>
                  <div className="relative p-3 pt-6">
                    <span className="absolute -top-5 left-3 grid h-9 w-9 place-items-center rounded-lg bg-white text-blue-600 shadow-md dark:bg-slate-800 dark:text-sky-400"><Icon size={18} /></span>
                    <h4 className="text-xs font-bold text-blue-950 dark:text-white">{title}</h4>
                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-16 mt-6 max-w-[1400px] px-4">
          <Reveal>
            <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#031b4e] to-[#0a4fc4] p-8 text-white ring-1 ring-white/10 md:flex-row md:items-center">
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="relative">
                <Eyebrow>Turn your ideas into solutions</Eyebrow>
                <h2 className="mt-1 text-3xl font-extrabold">Ready to Build <span className="text-sky-400">Your Solution?</span></h2>
                <p className="mt-2 max-w-md text-xs text-blue-100">Let&apos;s bring your vision to life with innovative and reliable software solutions tailored to your needs.</p>
              </div>
              <div className="relative flex items-center gap-3">
                <ShimmerLink href="/contact" arrow={14} className="from-sky-500 to-blue-500 px-5 py-2.5 text-xs">Start a Project</ShimmerLink>
                <Link href="/contact" className="rounded-full border border-sky-400 px-5 py-2.5 text-xs font-semibold transition hover:bg-sky-400/15">Talk to Us</Link>
              </div>
              <p className="relative hidden -rotate-6 font-serif text-xl italic text-sky-200 lg:block">Your Vision,<br />Our Code</p>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}