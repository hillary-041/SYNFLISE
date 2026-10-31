import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string; 
};

export default function ServiceCard({
  icon,
  title,
  description,
  gradient = "from-sky-500/30 to-indigo-600/30",
}: Props) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-white/20
      bg-gradient-to-br ${gradient} p-7 backdrop-blur-xl
      shadow-[0_8px_30px_rgba(56,189,248,0.15),inset_0_1px_0_rgba(255,255,255,0.35)]
      transition-all duration-500 ease-out cursor-pointer
      hover:-translate-y-2 hover:scale-[1.03]
      hover:shadow-[0_20px_50px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.5)]`}
    >

      <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl transition-transform duration-700 group-hover:scale-150" />
      <span className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl transition-transform duration-700 group-hover:translate-x-6 group-hover:-translate-y-4" />
      <span className="pointer-events-none absolute right-10 bottom-14 h-3 w-3 rounded-full bg-white/40 animate-pulse" />
      <span className="pointer-events-none absolute right-20 bottom-24 h-2 w-2 rounded-full bg-white/30 animate-ping" />

      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[2rem] bg-gradient-to-b from-white/15 to-transparent" />

      <div
        className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full
        bg-gradient-to-br from-white/40 to-white/10 text-white
        shadow-[0_6px_20px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.6)]
        ring-1 ring-white/40 transition-transform duration-500
        group-hover:rotate-6 group-hover:scale-110"
      >
        {icon}
        <span className="absolute left-3 top-2 h-3 w-3 rounded-full bg-white/70 blur-[1px]" />
      </div>

      <h3 className="relative text-xl font-bold text-white drop-shadow">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-white/80">{description}</p>

      <div
        className="relative mt-6 flex h-10 w-10 items-center justify-center rounded-full
        bg-white/20 text-white ring-1 ring-white/30 backdrop-blur
        transition-all duration-300 group-hover:translate-x-2 group-hover:bg-white group-hover:text-indigo-600"
      >
        <ArrowRight size={18} />
      </div>
    </div>
  );
}