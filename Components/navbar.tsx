"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/Components/themetoggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="group fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        <Link href="/" className="flex flex-col items-center gap-2">
          <Image
            src="/image/synflisess logo.png"
            alt="SYNFLISE Logo"
            width={180}
            height={60}
            priority
            className="h-auto w-[150px] object-contain"
          />
          <p className="mt-1 text-center text-[8px] leading-[11px] tracking-[0.08em] text-slate-700 dark:text-slate-300">
            Synchronized Future Logic &<br />
            Intelligent Software Engineering
          </p>

          <p className="mt-2 text-center text-[7px] tracking-[0.18em] text-[#0b1838] dark:text-slate-200">
            IDEAS TODAY A{" "}
            <span className="font-bold text-cyan-500">SMARTER</span>{" "}
            TOMORROW
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                isActive(link.href)
                  ? "border-b-2 border-blue-500 pb-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                  : "text-sm text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />

          <Link
            href="/#contact"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105"
          >
            Start a Project →
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-2xl text-slate-800 dark:text-slate-100"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={isActive(link.href) ? "font-semibold text-blue-600" : ""}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}