"use client";

import { useState, FormEvent } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "altarofgrace@yahoo.com",
    href: "mailto:altarofgrace@yahoo.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+1 770-873-7456",
    href: "tel:+17708737456",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "2671 Centerville Hwy SW, Snellville, GA, United States, Georgia",
    href: null,
  },
];

const socials = [
  {
    icon: FiFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/altarofgracechurch",
  },
  {
    icon: FiYoutube,
    label: "Youtube",
    href: "https://www.youtube.com/@chapelleinternationale",
  },
];

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwzgkqp", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            <FiMail className="text-sm" />
            Get in Touch
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
            Have a question, prayer request, or want to connect with our
            ministry? We&apos;d love to hear from you. Reach out using the form
            below or through any of our contact channels.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative bg-slate-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-red-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <h2 className="text-2xl font-extrabold text-white font-serif">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Fill out the form and we&apos;ll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold text-white/80 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold text-white/80 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-white/80 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-white/80 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  >
                    <option value="" className="bg-slate-900">
                      Select a subject
                    </option>
                    <option value="General Inquiry" className="bg-slate-900">
                      General Inquiry
                    </option>
                    <option value="Prayer Request" className="bg-slate-900">
                      Prayer Request
                    </option>
                    <option value="Book Inquiry" className="bg-slate-900">
                      Book Inquiry
                    </option>
                    <option
                      value="Event Information"
                      className="bg-slate-900"
                    >
                      Event Information
                    </option>
                    <option
                      value="Partnership/Collaboration"
                      className="bg-slate-900"
                    >
                      Partnership / Collaboration
                    </option>
                    <option value="Other" className="bg-slate-900">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition resize-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-800 px-7 py-3.5 text-sm font-extrabold text-white transition-all duration-300 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-500/20 px-4 py-3 text-sm text-emerald-400">
                    <FiCheck className="text-lg flex-shrink-0" />
                    <span>
                      Message sent successfully! We&apos;ll get back to you
                      soon.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-400">
                    <FiAlertCircle className="text-lg flex-shrink-0" />
                    <span>
                      Something went wrong. Please try again or email us
                      directly.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-800/80 text-white">
                        <Icon className="text-xl" />
                      </div>

                      <div>
                        <h3 className="text-sm font-extrabold text-white">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-sm text-white/70 hover:text-white transition"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-white/70">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Social Links */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <h3 className="text-sm font-extrabold text-white">
                  Follow Us
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Stay connected on social media
                </p>

                <div className="mt-4 flex items-center gap-3">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/90 hover:bg-white/15 hover:text-white transition"
                      >
                        <Icon className="text-xl" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Service Times */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <h3 className="text-sm font-extrabold text-white">
                  Service Times
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Sunday Worship</span>
                    <span className="font-semibold text-white">
                      10:00 AM EST
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Wednesday Bible Study</span>
                    <span className="font-semibold text-white">
                      7:00 PM EST
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">
                      Monthly Prayer Night
                    </span>
                    <span className="font-semibold text-white">
                      1st Friday, 8 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / CTA */}
      <section className="relative bg-[#8b5f45] py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black font-serif">
            We&apos;d Love to Meet You
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
            Whether through worship, reading, or fellowship, discover how the
            Kingdom-centered vision of Jesus can transform your walk with God.
            Come as you are — there&apos;s a place for you here.
          </p>

          <div className="mt-6 text-sm text-white/70">
            <p className="flex items-center justify-center gap-2">
              <FiMapPin className="text-red-200" />
              2671 Centerville Hwy SW, Snellville, GA, United States
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
