"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-10 w-20" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-10 w-20 shrink-0 overflow-hidden rounded-full shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-transform duration-300 hover:scale-105 active:scale-95 dark:ring-white/20"
    >
      <span
        className={`absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 transition-opacity duration-700 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-800 transition-opacity duration-700 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />

      <span
        className={`absolute inset-0 transition-all duration-700 ${
          isDark ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <span className="absolute left-[12px] top-[9px] h-[3px] w-[3px] animate-pulse rounded-full bg-white" />
        <span className="absolute left-[22px] top-[22px] h-[2px] w-[2px] rounded-full bg-white/80" />
        <span className="absolute left-[30px] top-[8px] h-[2px] w-[2px] animate-pulse rounded-full bg-white/90" />
        <span className="absolute left-[16px] top-[28px] h-[2px] w-[2px] rounded-full bg-white/70" />
        <span className="absolute left-[36px] top-[26px] h-[3px] w-[3px] rounded-full bg-white/90" />
      </span>

      <span
        className={`absolute inset-0 transition-all duration-700 ${
          isDark ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <span className="absolute -bottom-2 left-[34px] h-5 w-8 rounded-full bg-white/90" />
        <span className="absolute -bottom-3 left-[48px] h-6 w-9 rounded-full bg-white" />
        <span className="absolute -bottom-2 left-[62px] h-5 w-7 rounded-full bg-white/90" />
        <span className="absolute bottom-[10px] left-[44px] h-3 w-5 rounded-full bg-white/70" />
      </span>

      <span
        className={`absolute left-1 top-1 h-8 w-8 rounded-full transition-transform duration-700 ease-[cubic-bezier(0.68,-0.2,0.3,1.2)] ${
          isDark ? "translate-x-10" : "translate-x-0"
        }`}
      >

        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400 shadow-[0_0_0_4px_rgba(253,224,71,0.35),0_0_0_9px_rgba(253,224,71,0.18),0_0_18px_rgba(251,191,36,0.9)] transition-all duration-700 ${
            isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />

        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 shadow-[0_0_14px_rgba(226,232,240,0.7),inset_-3px_-3px_6px_rgba(100,116,139,0.45)] transition-all duration-700 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
          }`}
        >
          <span className="absolute left-[6px] top-[7px] h-[7px] w-[7px] rounded-full bg-slate-400/60 shadow-inner" />
          <span className="absolute bottom-[6px] left-[14px] h-[5px] w-[5px] rounded-full bg-slate-400/60 shadow-inner" />
          <span className="absolute right-[5px] top-[12px] h-[4px] w-[4px] rounded-full bg-slate-400/50 shadow-inner" />
        </span>
      </span>
    </button>
  );
}