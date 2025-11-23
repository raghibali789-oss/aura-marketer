import React from "react";
import SectionHeader from "../components/SectionHeader";

const faqs = [
  {
    q: "Which platforms do you work with?",
    a: "Primarily TikTok, Instagram, YouTube, and Shorts. We’ll prioritize where your buyers actually hang out.",
  },
  {
    q: "Do you work with any brand?",
    a: "We’re best for DTC brands with clear margins, solid product-market fit, and a willingness to do performance-based creator deals.",
  },
  {
    q: "How long until we see data?",
    a: "Most brands see statistically meaningful data after the first test sprint. From there we decide together how aggressively to scale.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="container pt-24 sm:pt-28">
      <div className="space-y-8">
        <SectionHeader
          kicker="FAQ"
          title="Answers to the most common questions."
          subtitle="Still unsure? Drop us a line and we’ll walk through your specific situation."
        />
        <dl className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="glass rounded-2xl p-4">
              <dt className="text-sm font-semibold text-slate-50">{item.q}</dt>
              <dd className="mt-2 text-xs text-slate-400">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}