"use client";

import { FiTarget, FiHeart, FiUsers, FiBookOpen } from "react-icons/fi";

const pillars = [
  {
    icon: FiTarget,
    title: "Kingdom-Centered Vision",
    description:
      "Jesus's teaching on the Kingdom of God provides a foundational and unifying framework for leadership — prioritizing service over domination, humility over privilege.",
  },
  {
    icon: FiHeart,
    title: "Servant Leadership",
    description:
      "The Son of Man did not come to be served but to serve. Authentic leadership is not based on power or control, but on sacrificial, selfless service and redemptive love.",
  },
  {
    icon: FiUsers,
    title: "Church Unity",
    description:
      "Jesus prayed that all believers may be one (John 17:21). Unity is both a divine purpose and a leadership value, rooted in Trinitarian fellowship and mutual love.",
  },
  {
    icon: FiBookOpen,
    title: "Biblical Authority",
    description:
      "Scripture serves as the foundational, inspired, and authoritative Word of God — offering the principal guideline for interpreting Church leadership and unity.",
  },
];

export default function HeroMission() {
  return (
    <section className="relative bg-slate-950 py-16 sm:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-700 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Our Foundation
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
            Pillars of Our Ministry
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-700" />

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/65">
            Grounded in the teachings of Jesus and the apostolic tradition, our
            ministry is built on principles that transcend cultural, regional,
            and historical boundaries.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-800/80 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
