"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBookOpen,
  FiInfo,
  FiCalendar,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Books", href: "/books", icon: FiBookOpen },
  { label: "About", href: "/about", icon: FiInfo },
  { label: "Events", href: "/events", icon: FiCalendar },
  { label: "Contact", href: "/contact", icon: FiMail },
];

const AMAZON_STORE_URL =
  "https://www.amazon.com/stores/Apostle-Victor-Okonkwo/author/B0GD8D8GPL?ref=sr_ntt_srch_lnk_1&qid=1769721969&sr=1-1&shoppingPortalEnabled=true";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        isHome && !scrolled
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur border-b border-black/5 shadow-sm",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-black/10">
              <Image
                src="/assets/logo/Author-logo.jpg"
                alt="Author Logo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="leading-tight">
              <p
                className={[
                  "text-sm font-semibold tracking-wide",
                  isHome && !scrolled ? "text-white" : "text-slate-900",
                ].join(" ")}
              >
                Apostle Victor
              </p>
              <p
                className={[
                  "text-xs",
                  isHome && !scrolled ? "text-white/80" : "text-slate-500",
                ].join(" ")}
              >
                Official Website
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                    isHome && !scrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
                    active
                      ? isHome && !scrolled
                        ? "bg-white/15 text-white"
                        : "bg-slate-100 text-slate-900"
                      : "",
                  ].join(" ")}
                >
                  <Icon className="text-base opacity-90" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Use <a> for external links */}
            <a
              href={AMAZON_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
                isHome && !scrolled
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "bg-slate-900 text-white hover:bg-slate-800",
              ].join(" ")}
            >
              Get the Books <FiArrowRight />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className={[
                "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition",
                isHome && !scrolled
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200",
              ].join(" ")}
              aria-label="Toggle menu"
            >
              {open ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {open && (
        <div className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur"> */}
      {open && (
        <div className="lg:hidden fixed top-16 left-0 right-0 z-40 border-t border-black/5 bg-white/95">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200",
                    ].join(" ")}
                  >
                    <Icon className="text-lg" />
                    {item.label}
                  </Link>
                );
              })}

              <a
                href={AMAZON_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Get the Books <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
