"use client";

import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";

export default function HeroCTA() {
  return (
    <section className="relative bg-slate-950 py-16 sm:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          {/* Scripture */}
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic leading-relaxed text-white/90">
            &ldquo;But many who are first will be last, and many who are last
            will be first.&rdquo;
          </blockquote>
          <cite className="mt-3 block text-sm font-semibold text-white/55 not-italic">
            &mdash; Matthew 19:30
          </cite>

          <div className="mx-auto mt-6 h-px w-16 bg-white/20" />

          <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white font-serif">
            Be Part of the Movement
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/65">
            Jesus&apos;s radical Kingdom perspective offers a revolutionary
            paradigm based on servanthood, rejection of domination, and
            self-sacrifice. Discover how these timeless principles can transform
            your leadership, your church, and your walk with God.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
            >
              Learn More <FiArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-800 px-7 py-3 text-sm font-extrabold text-white hover:brightness-110 transition"
            >
              <FiMail /> Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
