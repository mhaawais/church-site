"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiBookOpen,
  FiArrowRight,
  FiArrowUpRight,
  FiStar,
  FiHeart,
  FiUsers,
} from "react-icons/fi";

const books = [
  {
    src: "/assets/images/Book-01.jpeg",
    title: "Grace Revelations Vol. 1",
    description:
      "An introduction to the foundational truths of God's grace, exploring how intrinsic righteousness and holiness form the basis for authentic Christian living and servant leadership.",
    buyLink:
      "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0F6G61MR3/ref=sr_1_4?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769721969&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-4",
  },
  {
    src: "/assets/images/Book-02.jpeg",
    title: "Grace Revelations Vol. 2",
    description:
      "A deeper exploration of Kingdom-centered unity, offering theological depth and practical guidance for believers and church leaders seeking authentic, Christ-centered servant leadership.",
    buyLink:
      "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0G3GQB3SJ/ref=sr_1_3?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769721969&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-3",
  },
  {
    src: "/assets/images/Book-03.jpeg",
    title: "Grace Revelations Vol. 3",
    description:
      "Confronting leadership-driven divisions with courage and biblical fidelity, this volume presents a compelling case for restoring unity through humility, sacrificial love, and servanthood.",
    buyLink:
      "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0G3GF7Z5R/ref=sr_1_2?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769721969&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-2",
  },
  {
    src: "/assets/images/Book-04.jpeg",
    title: "Grace Revelations Vol. 4",
    description:
      "The culmination of the series, bridging biblical exegesis, theological reflection, and practical application for transforming your walk with God and your approach to leadership.",
    buyLink:
      "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0G3G276GT/ref=sr_1_1?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769716092&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-1",
  },
];

const testimonials = [
  {
    quote:
      "A theologically rich and pastorally sensitive exploration of leadership and unity grounded in the Kingdom vision of Jesus.",
    author: "Dr. Samuel K. Mensah",
    role: "Professor of New Testament Theology",
  },
  {
    quote:
      "This book skillfully bridges biblical exegesis, theological reflection, and practical application.",
    author: "Rev. Jonathan P. Clarke, PhD",
    role: "Seminary Lecturer",
  },
  {
    quote:
      "A thoughtful and timely study that confronts leadership-driven divisions with courage, depth, and biblical fidelity.",
    author: "Dr. Elizabeth A. Carter",
    role: "Ecclesiology Researcher",
  },
];

const themes = [
  {
    icon: FiHeart,
    title: "Servant Leadership",
    text: "Jesus redefined greatness through selfless service, not domination or control (Mark 10:45).",
  },
  {
    icon: FiUsers,
    title: "Church Unity",
    text: "Jesus prayed for oneness among His followers, grounding unity in Trinitarian fellowship (John 17:21).",
  },
  {
    icon: FiStar,
    title: "Kingdom Vision",
    text: "A foundational framework for leadership that prioritizes service, humility, and sacrificial love.",
  },
];

const AMAZON_STORE_URL =
  "https://www.amazon.com/stores/Apostle-Victor-Okonkwo/author/B0GD8D8GPL?ref=sr_ntt_srch_lnk_1&qid=1769721969&sr=1-1&shoppingPortalEnabled=true";

export default function BooksContent() {
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
            <FiBookOpen className="text-sm" />
            Published Works
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif">
            The Grace Revelations Series
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
            A powerful collection exploring servant leadership, church unity,
            and the Kingdom-centered vision of Jesus. These books offer both
            theological insight and practical guidance for believers and church
            leaders alike.
          </p>

          <div className="mt-8">
            <a
              href={AMAZON_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
            >
              Visit Amazon Store <FiArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="relative bg-[#8E8E8E] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-700 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <FiBookOpen className="text-lg" />
              Featured Collection
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
              All Books
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-700" />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Cover */}
                  <div className="relative aspect-[3/4] w-full sm:w-44 flex-shrink-0 overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10">
                    <Image
                      src={book.src}
                      alt={book.title}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 90vw, 176px"
                      priority={index === 0}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-white">
                        {book.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {book.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={book.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-red-700 px-6 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-red-800 hover:scale-[1.03] hover:ring-1 hover:ring-white/60"
                      >
                        Buy Now <FiArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="relative bg-slate-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-red-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Central Themes
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-serif">
              What These Books Explore
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-700" />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {themes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-800/80 text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-white">
                    {theme.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {theme.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-[#8b5f45] py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <FiStar className="text-lg" />
              Praise for the Series
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-black font-serif">
              What Scholars Are Saying
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-800" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="mb-4 text-4xl font-serif text-red-400/60 leading-none">
                  &ldquo;
                </div>

                <p className="flex-1 text-sm leading-relaxed text-white/85 italic">
                  {item.quote}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-extrabold text-white">
                    {item.author}
                  </p>
                  <p className="text-xs text-white/60">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Book */}
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
              The Grace Revelations series examines how Jesus&apos;s
              Kingdom-centered vision provides a foundational and unifying
              framework for ecclesial leadership, offering a distinctive
              paradigm for understanding power, leadership, and unity within the
              Church.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={AMAZON_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
              >
                Get the Books <FiArrowRight />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-800 px-7 py-3 text-sm font-extrabold text-white hover:brightness-110 transition"
              >
                Contact the Author <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
