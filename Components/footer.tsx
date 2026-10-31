"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type SyntheticEvent, type ReactNode } from "react";
import {
  ArrowRight, ArrowUp, Mail, Phone, MapPin, Send, Check, AlertCircle, Loader2, Code2,
} from "lucide-react";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Custom Software", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "AI & Automation", href: "/services" },
      { label: "Cybersecurity", href: "/services" },
      { label: "Data & Analytics", href: "/services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/industries" },
      { label: "Finance", href: "/industries" },
      { label: "Education", href: "/industries" },
      { label: "Retail & E-commerce", href: "/industries" },
      { label: "Manufacturing", href: "/industries" },
      { label: "Logistics", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

type IconProps = { size?: number };

const LinkedinIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const XIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const FacebookIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: XIcon, label: "X (Twitter)", href: "https://x.com" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
];

const contacts = [
  { icon: Mail, text: "hello@synflise.com", href: "mailto:hello@synflise.com" },
  { icon: Phone, text: "+254 708 881754", href: "tel:+25408881754" },
  { icon: MapPin, text: "Nairobi, Kenya", href: "https://maps.google.com/?q=123+Tech+Park+Innovation+City" },
];

function useInView<T extends HTMLElement>(threshold = 0.1) {
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
  const [ref, show] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}>
      {children}
    </div>
  );
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
        style={{ background: "radial-gradient(240px circle at var(--x) var(--y), rgba(56,189,248,0.22), transparent 65%)" }} />
      {children}
    </div>
  );
}

type Status = "idle" | "loading" | "success" | "error";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const finish = (s: Status, msg: string) => {
    setStatus(s);
    setMessage(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => { setStatus("idle"); setMessage(""); }, 5000);
  };

  const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      finish("error", "Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setEmail("");
      finish("success", "Thanks for subscribing!");
    } catch (err) {
      finish("error", err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <label htmlFor="ft-email" className="sr-only">Email address</label>
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur transition focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/30">
        <Mail size={16} className="ml-3 shrink-0 text-sky-300" />
        <input
          id="ft-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          disabled={status === "loading"}
          aria-invalid={status === "error"}
          className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-white placeholder:text-blue-200/70 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/30 [animation:ft-shimmer_2.8s_ease-in-out_infinite]" />
          <span className="relative flex items-center gap-1.5">
            {status === "loading" ? <Loader2 size={14} className="animate-spin" /> : status === "success" ? <Check size={14} /> : <Send size={14} />}
            {status === "loading" ? "Sending" : status === "success" ? "Subscribed" : "Subscribe"}
          </span>
        </button>
      </div>
      <p role="status" aria-live="polite"
        className={`mt-2 flex min-h-[1.25rem] items-center gap-1.5 pl-4 text-[11px] ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}>
        {message && (status === "error" ? <AlertCircle size={12} /> : <Check size={12} />)}
        {message}
      </p>
    </form>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-xl shadow-blue-500/40 ring-1 ring-white/20 transition duration-300 hover:-translate-y-1 hover:brightness-110 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft-root relative overflow-hidden bg-gradient-to-br from-[#031b4e] via-[#06307a] to-[#0a4fc4] text-white">
      <style>{`
        @keyframes ft-shimmer { 0% { transform: translateX(-120%) } 100% { transform: translateX(220%) } }
        @keyframes ft-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes ft-grid { to { background-position: 0 48px } }
        @media (prefers-reduced-motion: reduce) { .ft-root *, .ft-root *::before { animation: none !important; transition: none !important; } }
      `}</style>

      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(56,189,248,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.07)_1px,transparent_1px)] [background-size:48px_48px] [animation:ft-grid_8s_linear_infinite] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-extrabold">Stay in the loop with <span className="text-sky-400">Synflise</span></h3>
              <p className="mt-1 text-xs text-blue-100">Get product updates, insights and tech trends delivered to your inbox.</p>
            </div>
            <Newsletter />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <Reveal>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Synflise home">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 shadow-lg shadow-blue-900/50 [animation:ft-float_5s_ease-in-out_infinite]">
                <Code2 size={20} />
              </span>
              <span className="text-xl font-extrabold tracking-tight">Synflise</span>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-blue-100">
              We deliver innovative, scalable and secure software solutions that turn your ideas into powerful digital products.
            </p>

            <ul className="mt-5 space-y-2.5">
              {contacts.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-center gap-2.5 text-xs text-blue-100 transition hover:text-sky-300">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-sky-300 ring-1 ring-sky-400/30 transition group-hover:scale-110 group-hover:bg-sky-400/20"><Icon size={13} /></span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-sky-300 ring-1 ring-sky-400/30 transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:text-slate-950">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>

          {columns.map((col, i) => (
            <Reveal key={col.title} delay={(i + 1) * 100}>
              <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h4 className="relative text-sm font-bold">{col.title}</h4>
                <span className="relative mt-2 block h-0.5 w-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
                <ul className="relative mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="group/link inline-flex items-center gap-1.5 text-xs text-blue-100 transition hover:translate-x-1 hover:text-sky-300">
                        <ArrowRight size={11} className="-ml-4 opacity-0 transition-all group-hover/link:ml-0 group-hover/link:opacity-100" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-blue-200 md:flex-row">
            <p>&copy; {year} Synflise. All rights reserved.</p>
            <p className="font-serif text-sm italic text-sky-200">Your Vision, Our Code</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="transition hover:text-sky-300">Privacy</Link>
              <Link href="/terms" className="transition hover:text-sky-300">Terms</Link>
              <Link href="/contact" className="transition hover:text-sky-300">Support</Link>
            </div>
          </div>
        </Reveal>
      </div>

      <BackToTop />
    </footer>
  );
}