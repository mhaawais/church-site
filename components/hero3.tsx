"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

const Hero3 = () => {
  const books = [
    {
      src: "/assets/images/book-01.jpeg",
      link: "/allbooks/book1",
      buyLink: "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0F6G61MR3/ref=sr_1_4?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769721969&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-4",
    },
    {
      src: "/assets/images/book-02.jpeg",
      link: "/allbooks/book2",
      buyLink: "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0G3GQB3SJ/ref=sr_1_3?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769721969&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-3",
    },
    {
      src: "/assets/images/book-03.jpeg",
      link: "/allbooks/book3",
      buyLink: "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0G3GF7Z5R/ref=sr_1_2?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769721969&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-2",
    },
    {
      src: "/assets/images/book-04.jpeg",
      link: "/allbooks/book4",
      buyLink: "https://www.amazon.com/Grace-Revelations-Apostle-Victor-Okonkwo/dp/B0G3G276GT/ref=sr_1_1?crid=2HRD6VPF0U180&dib=eyJ2IjoiMSJ9.L1Rf1gaZ4IcAzbufjt9_u0W6hHnURzyVIhV79bMBZZzm6PglhpmLJRDNSG_44iTOInaOOjK2KTPLAuU0Z_jggaHjnGe34lpkpE77SDoQbpAOahL-9HUu2ekkFMi7RrRFikhI8YUwgxboldfLZVQkKilmya6lTHONIcU0qIGU6sYJsxDUGYz8XWLEUaz4cePX3VZnWseyqTXfgMgGv68wx3dlcIZXgeHwcvV6qnIspaQ.mBWhwqhZXqfCyA0Y18SgkjVnk5LCMYizZMS5G3Zzcok&dib_tag=se&keywords=the+grace+revelations&qid=1769716092&s=digital-text&sprefix=%2Cdigital-text%2C628&sr=1-1",
    },
  ];

  return (
    <section className="relative bg-[#8E8E8E] py-14 px-4 sm:px-6">
      {/* subtle modern background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-myred blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            <FiBookOpen className="text-lg" />
            Featured Collection
          </p>

          <h2 className="mt-4 text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Books You’ll Love
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-myred" />

          <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed">
            Explore the latest releases and bestselling titles. Tap a cover to
            view details, or hit Read more.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
            >
              {/* Cover Frame */}
              <Link href={book.link} className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10">
                  {/* Using object-contain fixes zoom/crop */}
                  <Image
                    src={book.src}
                    alt={`Book ${index + 1}`}
                    fill
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
                    priority={index === 0}
                  />

                  {/* Soft shine overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-white/10 blur-xl" />
                  </div>
                </div>
              </Link>

              {/* Actions */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <Link
                  href={book.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition"
                >
                  View Details <FiArrowRight />
                </Link>

                <Link
                  href={book.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center justify-center rounded-full bg-myred px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-[#b32d37] hover:bg-red-800 hover:scale-[1.03] hover:ring-1 hover:ring-white/60">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/90 transition"
          >
            Browse All Books <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
