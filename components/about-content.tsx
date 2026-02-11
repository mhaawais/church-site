"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiHeart, FiUsers, FiStar } from "react-icons/fi";

const values = [
  {
    icon: FiHeart,
    title: "Servant Leadership",
    description:
      "Grounded in Christ's example, leadership is not about power or domination but about self-giving service, humility, and sacrificial love (Mark 10:45).",
  },
  {
    icon: FiUsers,
    title: "Church Unity",
    description:
      "Jesus prayed for oneness among His followers (John 17:20-23). Unity is both a divine purpose and a leadership value rooted in Trinitarian fellowship.",
  },
  {
    icon: FiBookOpen,
    title: "Biblical Authority",
    description:
      "The Bible serves as the foundational, inspired, and authoritative Word of God, offering the principal guideline for interpreting Church unity and leadership.",
  },
  {
    icon: FiStar,
    title: "Kingdom-Centered Vision",
    description:
      "Jesus's teaching on the Kingdom of God provides a foundational and unifying framework for ecclesial leadership, prioritizing service over domination.",
  },
];

export default function AboutContent() {
  return (
    <div className="bg-black">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-black py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-700 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            About Me
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif">
            Apostle Victor Okonkwo
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
            Apostle for a non-denominational revolutionary church of
            spirit-filled believers. His mission is to preach the intrinsic
            righteousness and holiness as the basis for Christian living.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-slate-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-red-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Mission &amp; Vision
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-white font-serif">
                Restoring Unity Through Servant Leadership
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/75">
                At the heart of Apostle Victor&apos;s ministry is the conviction
                that Jesus&apos;s Kingdom-centered vision offers a foundational
                and unifying framework for Church leadership. This vision stands
                in critical dialogue with Old Testament models of kingship and
                Pauline perspectives on authority, offering a distinctive
                paradigm for understanding power, leadership, and unity.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/75">
                The ministry seeks to provide both theological insight and
                practical guidance for church leaders who desire to address
                leadership conflicts and overcome division. By realigning
                leadership practices with the Kingdom-centered example
                demonstrated by Christ, the work presents a pathway toward
                restoring unity, integrity, and faithfulness within the Church.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/75">
                Jesus consistently emphasized servant leadership, sacrificial
                love, humility, mutual respect, and submission as the foundation
                of Church harmony (Matt. 20:25-28; Mark 10:45; John 13:12-17).
                These teachings collectively call the Church to reflect
                Christ&apos;s servant leadership and unity, inviting believers to
                embody His love in a fragmented world.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-black p-4 sm:p-5 rounded-xl w-full max-w-[400px] shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/assets/images/author-image2.jpeg"
                    alt="Apostle Victor Okonkwo Ministry"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-red-700/30 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* About the Author */}
      <section className="relative bg-[#8b5f45] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white/30 p-4 sm:p-5 rounded-xl w-full max-w-[350px] shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/assets/images/church-image.jpg"
                    alt="Apostle Victor Okonkwo"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-lg object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl bg-red-800/30 blur-xl" />
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-800 px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                The Author
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-black font-serif">
                A Heart for the Church
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/90">
                Apostle Victor Okonkwo is a devoted servant of God whose life and
                ministry are centered on the proclamation of intrinsic
                righteousness, holiness, and the transformative power of God's
                grace. As an author, pastor, and spiritual leader, he has
                dedicated his life to building up the Body of Christ through
                biblical teaching, servant leadership, and a Kingdom-centered
                vision.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/90">
                His writings, including the acclaimed &ldquo;Grace
                Revelations&rdquo; series, address the pressing need for
                authentic, Christ-centered leadership that fosters unity rather
                than division, service rather than domination, and humility
                rather than pride.
              </p>

              <div className="mt-6">
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center rounded-xl bg-red-800 px-7 py-3.5 text-base font-extrabold tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:brightness-110 active:translate-y-0"
                >
                  Explore His Books <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative bg-[#8E8E8E] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-700 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <FiHeart className="text-lg" />
              Core Values
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              What We Stand For
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-700" />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-800/80 text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Theological Foundation Quote */}
      <section className="relative bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12">
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic leading-relaxed text-white/90">
              &ldquo;The Son of Man did not come to be served but to serve, and
              to give His life as a ransom for many.&rdquo;
            </blockquote>
            <cite className="mt-4 block text-sm font-semibold text-white/60 not-italic">
              &mdash; Mark 10:45
            </cite>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
              Jesus exhibits a unique type of Christ-centred leadership by
              showing that in God&apos;s Kingdom economy, authentic and compelling
              leadership is not based on power, privilege, fame, honor, or
              control, but on sacrificial and selfless service, as well as
              redemptive and self-emptying love.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#8b5f45] py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black font-serif">
            Join Us on This Journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
            Whether through reading, worship, or fellowship, discover how the
            Kingdom-centered vision of Jesus can transform your walk with God
            and your approach to leadership in the Church.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/books"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
            >
              Browse Books <FiArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-800 px-7 py-3 text-sm font-extrabold text-white hover:brightness-110 transition"
            >
              Get in Touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
