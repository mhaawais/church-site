"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiAward, FiBook, FiGlobe } from "react-icons/fi";

const highlights = [
  { icon: FiBook, label: "Published Author", detail: "4+ Books" },
  { icon: FiGlobe, label: "Global Ministry", detail: "Worldwide Impact" },
  { icon: FiAward, label: "Servant Leader", detail: "Decades of Service" },
];

const Hero2 = () => {
  return (
    <section
      id="about-author"
      aria-labelledby="hero2-heading"
      className="relative w-full overflow-hidden bg-[#8b5f45]"
    >
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60%_60%_at_0%_100%,rgba(0,0,0,0.4)_0%,transparent_60%),radial-gradient(50%_50%_at_100%_0%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* IMAGE CARD */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="bg-black p-4 sm:p-5 rounded-xl w-full max-w-[380px] shadow-2xl ring-1 ring-white/10">
              <Image
                src="/assets/images/author-image2.jpeg"
                alt="Apostle Victor Okonkwo"
                width={380}
                height={480}
                className="w-full h-auto rounded-lg object-cover"
                priority={false}
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-red-800/30 blur-xl" />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-800 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Author &amp; Minister
          </span>

          <h2
            id="hero2-heading"
            className="mt-4 text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl font-serif"
          >
            Transforming Lives Through{" "}
            <span className="text-white">God&apos;s Grace</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Apostle Victor Okonkwo is a devoted servant of God whose ministry is
            built on the proclamation of intrinsic righteousness, holiness, and
            the transformative power of divine grace. Through his writings and
            preaching, he calls the Church back to authentic, Christ-centered
            servant leadership — where greatness is measured not by domination,
            but by selfless service.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
            His acclaimed &ldquo;Grace Revelations&rdquo; series addresses the
            urgent need for Kingdom-centered unity, offering both theological
            depth and practical guidance for believers and church leaders alike.
          </p>

          {/* Highlight stats */}
          <div className="mt-6 flex flex-wrap gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-black/20 backdrop-blur-sm px-4 py-2.5 ring-1 ring-white/10"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-800/80 text-white">
                    <Icon className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{item.label}</p>
                    <p className="text-[10px] text-white/60">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-800 px-7 py-3.5 text-base md:text-lg font-extrabold font-sans tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:brightness-110 active:translate-y-0"
            >
              Discover His Story
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
