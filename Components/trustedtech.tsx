import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";

const technologies = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
];

export default function TrustedTech() {
    
  const loop = [...technologies, ...technologies];

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 lg:px-8">
      <p className="text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400">
        TRUSTED TECHNOLOGIES
      </p>

      <div className="mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-12">
          {loop.map(({ name, Icon, color }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3"
            >
              <Icon
                size={28}
                color={color || undefined}
                className={color ? "" : "text-slate-900 dark:text-white"}
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}