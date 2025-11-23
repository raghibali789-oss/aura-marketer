import React, { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";

const testimonials = [
  {
    quote:
      "Aura Marketer helped us reach our target audience fast. Their understanding of the local market is unmatched.",
    name: "Ahmed Al-Rashid",
    role: "Marketing Director · Brand Partner",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Thanks to Aura Marketer, I've partnered with amazing brands that align with my values. Great support throughout!",
    name: "Layla Hassan",
    role: "Lifestyle Influencer · Content Creator",
    color: "bg-orange-400",
  },
  {
    quote:
      "The campaigns they created for us exceeded all expectations. Highly recommend their services!",
    name: "Ravi Kumar",
    role: "Digital Marketing Manager · E-commerce Brand",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Working with Aura Marketer transformed our social media presence. They understand the GCC market like no other agency.",
    name: "Fatima Al-Mahmoud",
    role: "CEO · Tech Startup",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Professional and supportive team. They connected me with amazing brands and handled everything smoothly.",
    name: "Arjun Menon",
    role: "Content Creator · Influencer Partner",
    color: "bg-orange-400",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Trigger fade-slide animation
  const triggerAnimation = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500); // must match CSS duration
  };

  // Auto Slide Every 5 Seconds
  useEffect(() => {
    const timer = setInterval(() => {
      triggerAnimation();
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    triggerAnimation();
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    triggerAnimation();
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section id="testimonials" className="container pt-24 sm:pt-28">
      <SectionHeader
        kicker="Social proof"
        title="What our partners say."
        subtitle="We keep our client list intentionally small so we can obsess over your numbers like they’re our own."
        align="center"
      />

      {/* Carousel Wrapper */}
      <div className="relative mt-14 flex items-center justify-center">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/40 hover:bg-slate-700 transition"
        >
          <span className="text-slate-300 text-lg">‹</span>
        </button>

        {/* Slide */}
        <div
          className={`
            glass w-full max-w-3xl rounded-3xl p-8 md:p-10 border border-slate-800/50 relative
            transition-all duration-500 ease-out
            ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}
          `}
        >
          {/* Quote Icon */}
          <div
            className={`
              absolute -top-6 left-6 h-12 w-12 rounded-xl text-white 
              flex items-center justify-center transition-all duration-500
              ${testimonials[index].color}
            `}
          >
            <span className="text-2xl font-bold">”</span>
          </div>

          {/* Stars */}
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Quote */}
          <p className="text-center text-slate-200 text-lg leading-relaxed">
            “{testimonials[index].quote}”
          </p>

          {/* Name + Role */}
          <div className="mt-6 text-center">
            <p className="text-slate-50 font-semibold text-lg">
              {testimonials[index].name}
            </p>
            <p className="text-slate-400 text-sm">{testimonials[index].role}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/40 hover:bg-slate-700 transition"
        >
          <span className="text-slate-300 text-lg">›</span>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-emerald-400" : "bg-slate-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}