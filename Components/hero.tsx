"use client";

import { useEffect, useRef, useState } from "react";


export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-32">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute left-0 top-72 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold tracking-widest text-blue-600">
            INNOVATIVE SOFTWARE SOLUTIONS
          </div>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Building Smarter
            <br />
            Software for a
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Digital Future.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
            We design, develop and deploy intelligent software solutions that
            help businesses work smarter, grow faster and deliver better
            experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
            >
              Start a Project →
            </a>

            <a
              href="/services/page"
              className="rounded-full border-2 border-blue-500 px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="relative">
          <HeroDevices />
        </div>
      </div>
    </section>
  );
}


const NAV: string[] = ["Dashboard", "Projects", "Clients", "Analytics", "Settings"];
const CLICK_ORDER: number[] = [0, 1, 2];
const STAT_FOR: Record<number, number | null> = { 0: null, 1: 0, 2: 1 };

const STATS: ReadonlyArray<readonly [label: string, value: string]> = [
  ["Total Projects", "12"],
  ["Active Clients", "8"],
  ["Uptime", "99.9%"],
];

interface Badge {
  label: string;
  icon: string;
  position: string;
  solid?: boolean;
}

const BADGES: Badge[] = [
  {
    label: "Cloud Ready",
    icon: "M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18H7z",
    position: "left-0 top-[6%]",
    solid: true,
  },
  {
    label: "Clean Code",
    icon: "M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",
    position: "-left-[2%] top-[46%] [animation-delay:-1.2s]",
  },
  {
    label: "AI Powered",
    icon: "M12 3a4 4 0 00-4 4 3 3 0 00-2 5 3 3 0 002 5 4 4 0 008 0 3 3 0 002-5 3 3 0 00-2-5 4 4 0 00-4-4zM12 3v18",
    position: "right-0 top-[2%] [animation-delay:-2.4s]",
  },
  {
    label: "Secure",
    icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
    position: "-right-[2%] top-[52%] [animation-delay:-3.6s]",
  },
];

interface CursorPos {
  x: number;
  y: number;
}

function HeroDevices() {
  const [active, setActive] = useState<number>(0);
  const [clicking, setClicking] = useState<boolean>(false);
  const [pos, setPos] = useState<CursorPos>({ x: 90, y: 150 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let step = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number): void => {
      timers.push(setTimeout(fn, ms));
    };

    const run = (): void => {
      const idx = CLICK_ORDER[step % CLICK_ORDER.length];
      const el = itemRefs.current[idx];
      if (el) {

        setPos({
          x: el.offsetLeft + el.offsetWidth * 0.55,
          y: el.offsetTop + el.offsetHeight * 0.55,
        });

        later(() => {
          setClicking(true);
          setActive(idx);
        }, 900);
        later(() => setClicking(false), 1150);
      }
      step += 1;
      later(run, 2600);
    };

    later(run, 800);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative mx-auto aspect-[1.15/1] w-full max-w-[640px]">
     
      <style>{`
        @keyframes hd-float { 50% { transform: translateY(-10px); } }
        @keyframes hd-ripple {
          from { opacity: .9; transform: scale(.4); }
          to   { opacity: 0;  transform: scale(2.2); }
        }
      `}</style>

      <div className="absolute left-[4%] top-[12%] w-[78%] [filter:drop-shadow(0_30px_40px_rgba(10,30,90,.35))] [transform:perspective(1400px)_rotateY(-14deg)_rotateX(3deg)]">
        <div className="rounded-t-[14px] border border-[#2b2f38] bg-[#14161c] px-[2.2%] pb-[3%] pt-[2.2%]">
          <div className="grid aspect-[16/10] grid-cols-[24%_1fr] overflow-hidden rounded-md bg-[linear-gradient(160deg,#0d1b4d,#07102e)] font-sans text-white">

            <aside className="relative border-r border-white/10 bg-white/[.04] px-[6%] py-[8%]">
              <span className="mb-3.5 block text-[11px] font-extrabold tracking-[.06em]">
                SYNFLISE
              </span>

              {NAV.map((n, i) => (
                <div
                  key={n}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`flex items-center gap-1.5 rounded-[5px] px-1.5 py-[5px] text-[9px] transition-colors duration-200 ${
                    i === active ? "bg-[#1d4ed8] text-white" : "text-[#9fb4e8]"
                  }`}
                >
                  <i className="h-[7px] w-[7px] rounded-sm bg-current opacity-70" /> {n}
                </div>
              ))}

              <div
                className="pointer-events-none absolute left-0 top-0 z-10 transition-transform duration-[800ms] ease-[cubic-bezier(.4,0,.2,1)] [filter:drop-shadow(0_2px_3px_rgba(0,0,0,.5))]"
                style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
              >
                {clicking && (
                  <span className="pointer-events-none absolute -left-[9px] -top-[9px] h-[18px] w-[18px] animate-[hd-ripple_.5s_ease-out] rounded-full border-2 border-[#5cc8ff] opacity-0" />
                )}
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  aria-hidden="true"
                  className={`block origin-[2px_1px] transition-transform duration-100 ${
                    clicking ? "scale-[.82]" : "scale-100"
                  }`}
                >
                  <path
                    d="M2 1l13 11-6 1 3.5 7-3 1.5L6 14l-4 4z"
                    fill="#fff"
                    stroke="#0b0d12"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </aside>

            <main className="flex min-w-0 flex-col px-[5%] pb-[3%] pt-[5%]">
              <h3 className="mb-[6%] text-[clamp(12px,2.1vw,20px)] font-bold leading-[1.15]">
                Your Success,
                <br />
                Our Priority.
              </h3>

              <div className="grid grid-cols-3 gap-[4%]">
                {STATS.map(([label, value], i) => (
                  <div
                    key={label}
                    className={`rounded-lg px-[10%] py-[8%] transition-all duration-300 ${
                      STAT_FOR[active] === i
                        ? "-translate-y-0.5 bg-[#2a63e8] shadow-[0_0_0_2px_#5cc8ff,0_6px_16px_rgba(46,140,255,.45)]"
                        : "bg-[#1646c4]"
                    }`}
                  >
                    <small className="block text-[8px] opacity-80">{label}</small>
                    <b className="text-[clamp(11px,1.8vw,17px)]">{value}</b>
                  </div>
                ))}
              </div>

              <svg
                className="mt-[5%] min-h-0 w-full flex-1"
                viewBox="0 0 300 90"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="hdg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2d8cff" stopOpacity=".55" />
                    <stop offset="1" stopColor="#2d8cff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 70 C25 60 40 40 65 48 S105 78 135 55 S185 12 215 30 S265 40 300 14 V90 H0 Z"
                  fill="url(#hdg)"
                />
                <path
                  d="M0 70 C25 60 40 40 65 48 S105 78 135 55 S185 12 215 30 S265 40 300 14"
                  fill="none"
                  stroke="#4fb0ff"
                  strokeWidth="2.5"
                />
              </svg>
            </main>
          </div>
        </div>

        <div className="-ml-[5%] h-4 w-[110%] rounded-b-[20px] bg-[linear-gradient(#e3e6ec,#aeb3bd)] shadow-[inset_0_2px_0_#fff8]" />
      </div>

      <div className="absolute bottom-[8%] right-[6%] aspect-[9/18.5] w-1/4 rounded-[22px] border-2 border-[#2a2f3a] bg-[#0b0d12] p-[2.5%] shadow-[0_25px_40px_rgba(10,30,90,.4)] [transform:perspective(1200px)_rotateY(-10deg)_rotate(4deg)]">
        <div className="h-full rounded-[18px] bg-[linear-gradient(170deg,#1b3aa8,#07102e)] px-[10%] py-[14%] font-sans text-white">
          <span className="mb-[18px] block text-[9px] font-extrabold tracking-[.06em]">
            SYNFLISE
          </span>
          <h4 className="mb-2 text-[clamp(12px,2vw,18px)] font-bold leading-[1.15]">
            Build
            <br />
            Innovate
            <br />
            Grow
          </h4>
          <p className="mb-3.5 text-[8px] opacity-80">Smart software for the future.</p>
          <button
            type="button"
            className="rounded-full bg-[#1e8bff] px-3 py-1.5 text-[9px] font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      </div> 

      {BADGES.map((b) => (
        <div
          key={b.label}
          className={`absolute grid w-[70px] animate-[hd-float_5s_ease-in-out_infinite] justify-items-center gap-1 rounded-2xl px-1 pb-[7px] pt-[9px] text-[10px] font-semibold shadow-[0_14px_30px_rgba(20,60,160,.22)] motion-reduce:animate-none sm:w-[92px] sm:px-1.5 sm:pb-2.5 sm:pt-3.5 sm:text-xs ${b.position} ${
            b.solid
              ? "bg-[linear-gradient(160deg,#1fa2ff,#1565f0)] text-white"
              : "bg-white text-[#1d4ed8]"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-5 w-5 sm:h-[26px] sm:w-[26px]"
          >
            <path d={b.icon} />
          </svg>
          {b.label}
        </div>
      ))}
    </div>
  );
}