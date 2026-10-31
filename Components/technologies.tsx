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
              href="#services"
              className="rounded-full border-2 border-blue-500 px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Explore Our Services
            </a>
          </div>
        </div>
        
        <div className="relative">
          <TechDiagram />
        </div>
      </div>
    </section>
  );
}

interface Tech {
  label: string;
  icon: string;
  angle: number;
}

interface Ring {
  inset: string; 
  spin: string; 
  counter: string;
  nodes: Tech[];
}

const RINGS: Ring[] = [
  {
    inset: "inset-[5%]",
    spin: "animate-[hd-spin_40s_linear_infinite]",
    counter: "animate-[hd-spin_40s_linear_infinite_reverse]",
    nodes: [
      { label: "React", icon: "⚛️", angle: -90 },
      { label: "Next.js", icon: "▲", angle: -30 },
      { label: "Node.js", icon: "🟢", angle: 30 },
      { label: "Docker", icon: "🐳", angle: 90 },
      { label: "Python", icon: "🐍", angle: 150 },
      { label: "Flutter", icon: "🦋", angle: 210 },
    ],
  },
  {
    inset: "inset-[27%]",
    spin: "animate-[hd-spin_28s_linear_infinite_reverse]",
    counter: "animate-[hd-spin_28s_linear_infinite]",
    nodes: [
      { label: "AI", icon: "🧠", angle: -90 },
      { label: "Cloud", icon: "☁️", angle: 30 },
      { label: "Database", icon: "🗄️", angle: 150 },
    ],
  },
];

function polar(angleDeg: number, radius = 50) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(a), y: 50 + radius * Math.sin(a) };
}

const BAR_DELAYS = ["0s", "-.4s", "-.9s", "-.2s", "-.7s"];

function TechDiagram() {
  return (
    <div className="group relative mx-auto aspect-square w-full max-w-[560px]">

      <style>{`
        @keyframes hd-spin  { to { transform: rotate(360deg); } }
        @keyframes hd-dash  { to { stroke-dashoffset: -5; } }
        @keyframes hd-pulse { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(1.9); opacity: 0; } }
        @keyframes hd-float { 50% { transform: translateY(-10px); } }
        @keyframes hd-bar   { 0%, 100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[hd-"] { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-[15%] rounded-full bg-blue-200/40 blur-3xl" />

      {RINGS.map((ring, ri) => (
        <div
          key={ri}
          className={`absolute ${ring.inset} ${ring.spin} group-hover:[animation-play-state:paused]`}
        >

          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
            <circle
              cx="50"
              cy="50"
              r="50"
              fill="none"
              stroke="#93c5fd"
              strokeWidth=".35"
              strokeDasharray="1 2"
            />
            {ring.nodes.map((n) => {
              const p = polar(n.angle);
              return (
                <line
                  key={n.label}
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke="#38bdf8"
                  strokeWidth=".45"
                  strokeLinecap="round"
                  strokeDasharray="1.5 3.5"
                  className="animate-[hd-dash_1s_linear_infinite]"
                />
              );
            })}
          </svg>

          {ring.nodes.map((n) => {
            const p = polar(n.angle);
            return (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div
                  className={`grid justify-items-center gap-0.5 ${ring.counter} group-hover:[animation-play-state:paused]`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-xl shadow-lg shadow-blue-500/15 sm:h-12 sm:w-12">
                    {n.icon}
                  </div>
                  <span className="rounded-full bg-white/80 px-1.5 text-[10px] font-bold text-slate-600">
                    {n.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 sm:h-28 sm:w-28">
        <span className="absolute inset-0 animate-[hd-pulse_2.4s_ease-out_infinite] rounded-full border-2 border-blue-400/60" />
        <span className="absolute inset-0 animate-[hd-pulse_2.4s_ease-out_infinite] rounded-full border-2 border-cyan-400/60 [animation-delay:-1.2s]" />
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 text-white shadow-2xl shadow-blue-500/40">
          <span className="text-3xl font-black leading-none">S</span>
          <span className="mt-1 text-[9px] font-bold tracking-widest">SYNFLISE</span>
        </div>
      </div>

      <div className="absolute left-0 top-[16%] z-20 animate-[hd-float_5s_ease-in-out_infinite] rounded-2xl border border-blue-100 bg-white p-3 shadow-xl">
        <div className="text-2xl">☁️</div>
        <p className="mt-1 text-xs font-bold text-slate-700">Cloud Ready</p>
      </div>

      <div className="absolute right-0 top-[30%] z-20 animate-[hd-float_5s_ease-in-out_infinite] rounded-2xl border border-blue-100 bg-white p-3 shadow-xl [animation-delay:-1.7s]">
        <div className="text-2xl">🧠</div>
        <p className="mt-1 text-xs font-bold text-slate-700">AI Powered</p>
      </div>

      <div className="absolute bottom-[6%] left-[8%] z-20 animate-[hd-float_5s_ease-in-out_infinite] rounded-2xl border border-blue-100 bg-white p-3 shadow-xl [animation-delay:-3.2s]">
        <div className="text-2xl">{"</>"}</div>
        <p className="mt-1 text-xs font-bold text-slate-700">Clean Code</p>
      </div>

      <div className="absolute right-[14%] top-[2%] z-20 flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 shadow-lg">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        <span className="text-xs font-bold text-slate-700">Live · 99.9% Uptime</span>
      </div>

      <div className="absolute bottom-[10%] right-0 z-20 animate-[hd-float_5s_ease-in-out_infinite] rounded-2xl border border-blue-100 bg-white p-3 shadow-xl [animation-delay:-2.4s]">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Live Traffic
        </p>
        <div className="mt-2 flex h-8 items-end gap-1">
          {BAR_DELAYS.map((delay, i) => (
            <span
              key={i}
              className="h-full w-2 origin-bottom animate-[hd-bar_1.6s_ease-in-out_infinite] rounded-t bg-gradient-to-t from-cyan-500 to-blue-500"
              style={{ animationDelay: delay }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}