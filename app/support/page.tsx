"use client";

import { useState } from "react";
import { Mail, Clock, CheckCircle2 } from "lucide-react";
import LegalLayout from "@/Components/legallayout";

const faqs = [
  {
    q: "How do I get started with Synflise?",
    a: "Send us a message below describing your industry and goals. We will reply with next steps.",
  },
  {
    q: "How quickly will I hear back?",
    a: "We reply to support requests within one business day.",
  },
  {
    q: "How do I request my data be deleted?",
    a: "Email privacy@synflise.com from the address you used with us.",
  },
];

const field =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-white/20 dark:bg-slate-800 dark:text-white";

export default function SupportPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    setSent(true);
  }

  return (
    <LegalLayout title="Support" updated="October 10, 2026">
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 dark:border-white/15">
          <Mail className="mt-1 h-5 w-5 text-blue-700 dark:text-cyan-300" aria-hidden />
          <div>
            <p className="font-medium text-slate-900 dark:text-white">Email</p>
            <a href="mailto:support@synflise.com">support@synflise.com</a>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 dark:border-white/15">
          <Clock className="mt-1 h-5 w-5 text-blue-700 dark:text-cyan-300" aria-hidden />
          <div>
            <p className="font-medium text-slate-900 dark:text-white">Response time</p>
            <p>Within one business day</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Common questions</h2>
        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 dark:divide-white/15 dark:border-white/15">
          {faqs.map((f) => (
            <details key={f.q} className="p-4">
              <summary className="cursor-pointer font-medium text-slate-900 dark:text-white">
                {f.q}
              </summary>
              <p className="mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2>Contact us</h2>
        {sent ? (
          <p
            className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-500/20 dark:text-green-100"
            role="status"
          >
            <CheckCircle2 className="h-5 w-5" aria-hidden />
            Message sent. We will reply within one business day.
          </p>
        ) : (
          <div className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-900 dark:text-white">
                Email
              </span>
              <input type="email" className={field} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-900 dark:text-white">
                How can we help?
              </span>
              <textarea rows={5} className={field} />
            </label>
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-md bg-blue-700 px-5 py-2.5 font-medium text-white hover:bg-blue-800 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400"
            >
              Send message
            </button>
          </div>
        )}
      </section>
    </LegalLayout>
  );
}