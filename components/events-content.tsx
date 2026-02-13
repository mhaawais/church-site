"use client";

import Link from "next/link";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiVideo,
  FiUsers,
} from "react-icons/fi";

const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM EST",
    location: "2671 Centerville Hwy SW, Snellville, GA",
    type: "In-Person & Online",
    description:
      "Join us for a spirit-filled worship experience, powerful preaching on intrinsic righteousness and holiness, and a community of believers committed to servant leadership and Kingdom-centered living.",
    recurring: true,
  },
  {
    title: "Midweek Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM EST",
    location: "Online via Zoom",
    type: "Online",
    description:
      "A deeper dive into Scripture, exploring themes of church unity, servant leadership, and the Kingdom vision of Jesus. Open to all believers seeking spiritual growth.",
    recurring: true,
  },
  {
    title: "Prayer & Intercession Night",
    date: "First Friday of Every Month",
    time: "8:00 PM EST",
    location: "2671 Centerville Hwy SW, Snellville, GA",
    type: "In-Person",
    description:
      "A night dedicated to corporate prayer, intercession, and seeking God's presence. Come and join us as we pray for the Church, our community, and the nations.",
    recurring: true,
  },
  {
    title: "Leadership & Unity Conference",
    date: "Coming Soon",
    time: "TBA",
    location: "TBA",
    type: "Special Event",
    description:
      "A special conference exploring the themes from the Grace Revelations series — servant leadership, church unity, and addressing leadership-driven divisions through Kingdom-centered vision.",
    recurring: false,
  },
];

const onlinePlatforms = [
  {
    icon: FiVideo,
    title: "YouTube Live",
    description: "Watch our services live and access past sermons anytime.",
    link: "https://youtube.com/@chapelleinternationale",
    label: "Watch on YouTube",
  },
  {
    icon: FiUsers,
    title: "Facebook Live",
    description:
      "Join our vibrant Facebook community and stream services live.",
    link: "https://www.facebook.com/share/1GYYFAFmX2/",
    label: "Follow on Facebook",
  },
  {
    icon: FiVideo,
    title: "Zoom Meetings",
    description:
      "Connect with us directly via Zoom for Bible studies and prayer meetings.",
    link: "https://us02web.zoom.us/j/2409941414?pwd=SHAzL1kwTmcyYm1PdkdzNVNLNUZ6dz09",
    label: "Join on Zoom",
  },
];

export default function EventsContent() {
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
            <FiCalendar className="text-sm" />
            Events & Gatherings
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif">
            Gather, Worship, Grow
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
            Join us for worship, Bible study, prayer gatherings, and special
            events. Whether in person or online, there&apos;s always a place for
            you in our community of spirit-filled believers.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative bg-slate-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-red-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Schedule
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-serif">
              Upcoming Events
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-700" />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-800/80 text-white">
                    <FiCalendar className="text-xl" />
                  </div>

                  {event.recurring && (
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      Recurring
                    </span>
                  )}

                  {!event.recurring && (
                    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Special
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {event.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {event.description}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <FiCalendar className="text-red-400" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <FiClock className="text-red-400" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <FiMapPin className="text-red-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                    <FiVideo className="text-xs" />
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Platforms */}
      <section className="relative bg-[#8b5f45] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <FiVideo className="text-lg" />
              Join Us Online
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-black font-serif">
              Worship From Anywhere
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-800" />

            <p className="mx-auto mt-4 max-w-2xl text-white/80 text-sm sm:text-base leading-relaxed">
              Can&apos;t join us in person? Connect with our community through
              our online platforms and never miss a service.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {onlinePlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-800/80 text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-white">
                    {platform.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                    {platform.description}
                  </p>

                  <div className="mt-4">
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition"
                    >
                      {platform.label} <FiArrowRight />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative bg-[#8E8E8E] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-800/80 text-white">
              <FiMapPin className="text-2xl" />
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Visit Us In Person
            </h2>

            <p className="mt-3 text-base text-white/75">
              2671 Centerville Hwy SW, Snellville, GA, United States, Georgia
            </p>

            <p className="mt-2 text-sm text-white/60">
              Sundays at 10:00 AM EST
            </p>

            <div className="mx-auto mt-6 h-px w-16 bg-white/20" />

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65">
              We welcome you to join our community of spirit-filled believers.
              Whether you are new to the faith or a seasoned believer, there is
              a place for you here. Come experience the presence of God and the
              warmth of fellowship.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
              >
                Get Directions <FiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-800 px-7 py-3 text-sm font-extrabold text-white hover:brightness-110 transition"
              >
                Contact Us <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
