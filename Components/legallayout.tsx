import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalLayout({ title, updated, children }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-16 pt-36 sm:px-6">
      <div className="rounded-2xl bg-white p-6 text-slate-700 shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-white/10 sm:p-10">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Synflise
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated {updated}</p>
        <div className="mt-10 space-y-8 text-base leading-7 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_a]:text-blue-700 [&_a]:underline dark:[&_a]:text-cyan-300">
          {children}
        </div>
      </div>
    </main>
  );
}