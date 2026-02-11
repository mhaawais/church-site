"use client";

import { FiMessageCircle } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "A theologically rich and pastorally sensitive exploration of leadership and unity grounded in the Kingdom vision of Jesus. This work offers a compelling biblical framework that speaks powerfully to contemporary ecclesial challenges. A significant contribution to global church leadership studies.",
    author: "Dr. Samuel K. Mensah",
    role: "Professor of New Testament Theology",
  },
  {
    quote:
      "This book skillfully bridges biblical exegesis, theological reflection, and practical application. A persuasive case that servant leadership, modeled by Christ, remains the only sustainable path toward authentic unity in the Church.",
    author: "Rev. Jonathan P. Clarke, PhD",
    role: "Seminary Lecturer",
  },
  {
    quote:
      "A thoughtful and timely study that confronts leadership-driven divisions with courage, depth, and biblical fidelity. Pastors, scholars, and church leaders will find in these pages both conviction and hope.",
    author: "Dr. Elizabeth A. Carter",
    role: "Ecclesiology Researcher",
  },
];

export default function HeroTestimonials() {
  return (
    <section className="relative bg-[#8b5f45] py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            <FiMessageCircle className="text-lg" />
            What Leaders Are Saying
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black font-serif">
            Voices of Endorsement
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-800" />

          <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed">
            Scholars and church leaders affirm the impact and biblical depth
            of this ministry&apos;s contribution to global church leadership.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Quote mark */}
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
  );
}
