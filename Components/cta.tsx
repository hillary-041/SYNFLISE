export default function CTA() {
  return (
    <section
      id="contact"
      className="px-4 py-8"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 px-6 py-12 shadow-2xl sm:px-10 lg:px-14">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
              HAVE AN IDEA?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Let's Build It
              <span className="text-cyan-400">
                {" "}Together.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Whether you need a website, mobile application,
              business system or a completely new digital product,
              we're ready to help turn your idea into reality.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <a
              href="mailto:hello@synflise.com"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Start a Project →
            </a>

            <a
              href="mailto:hello@synflise.com"
              className="rounded-full border border-blue-300 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Us
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}