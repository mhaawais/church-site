"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white">
      {/* Premium Glow + Texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-myred/60 blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14">
        {/* Top content */}
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <Link
              href="/"
              className="flex flex-col items-center gap-4 lg:flex-row lg:items-center"
            >
              {/* Bigger logo */}
              <div className="relative h-20 w-20 overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <Image
                  src="/assets/logo/Author-logo.jpg"
                  alt="Author Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xl font-extrabold tracking-tight">
                  Apostle Victor Okonkwo
                </p>
                <p className="text-sm text-white/70">
                  Books • Events • Inspiration
                </p>
              </div>
            </Link>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/70 lg:mx-0">
              Discover books, events, and updates. A clean modern author website
              designed to look premium on every screen.
            </p>

            {/* Social (Only Facebook + Instagram) */}
            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              <SocialIcon
                href="https://www.facebook.com/altarofgracechurch"
                label="Facebook"
              >
                <FiFacebook />
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <FiInstagram />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-extrabold tracking-wide text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/books">Books</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>

            {/* Extra CTA strip */}
            <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur text-center lg:text-left">
              <p className="text-sm font-bold text-white">
                Want the latest updates?
              </p>
              <p className="mt-1 text-sm text-white/70">
                Follow on Instagram for releases & announcements.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-extrabold tracking-wide text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
                <div className="rounded-2xl bg-white/10 p-3">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:altarofgrace@yahoo.com"
                    className="hover:text-white transition"
                  >
                    altarofgrace@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
                <div className="rounded-2xl bg-white/10 p-3">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href="tel:+17708737456"
                    className="hover:text-white transition"
                  >
                    +1 770-873-7456
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
                <div className="rounded-2xl bg-white/10 p-3">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-white/70">
                    2671 Centerville Hwy SW, Snellville, GA, United States,
                    Georgia
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://www.amazon.com/stores/Apostle-Victor-Okonkwo/author/B0GD8D8GPL?ref=sr_ntt_srch_lnk_1&qid=1769721969&sr=1-1&shoppingPortalEnabled=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
                >
                  Get the Book <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/60 text-center sm:text-left">
              © {year} Apostle Victor Okonkwo. All rights reserved.
            </p>

            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/15 transition"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex justify-center lg:justify-start">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-myred/80 opacity-0 group-hover:opacity-100 transition" />
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/90 hover:bg-white/15 hover:text-white transition"
    >
      <span className="text-xl">{children}</span>
    </a>
  );
}
