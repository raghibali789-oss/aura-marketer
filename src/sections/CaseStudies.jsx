import React from "react";
import SectionHeader from "../components/SectionHeader";

const cases = [
  {
    tag: "Beauty · TikTok + IG",
    title: "Base44: turned UGC chaos into a structured 5-figure/month channel.",
    stat: "6.2x",
    statLabel: "Blended ROAS from influencer traffic",
  },
  {
    tag: "Supplements · YouTube",
    title: "UrbanFuel: long-form creator reviews that beat paid search CAC.",
    stat: "-32%",
    statLabel: "Lower CAC vs. other paid channels",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="container pt-24 sm:pt-28">
      <div className="space-y-10">
        <SectionHeader
          kicker="Case Studies"
          title="Campaigns that didn’t just go viral — they moved P&L."
          subtitle="Here’s a snapshot of how we’ve partnered with brands to turn creator attention into measurable revenue."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((cs) => (
            <article
              key={cs.title}
              className="glass flex flex-col justify-between rounded-2xl p-5"
            >
              <p className="badge-soft mb-3">{cs.tag}</p>
              <h3 className="mb-3 text-sm font-semibold text-slate-50">
                {cs.title}
              </h3>
              <p className="text-xs text-slate-400">{cs.statLabel}</p>
              <p className="mt-3 text-3xl font-semibold text-emerald-300">
                {cs.stat}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}