import React from "react";
import SectionHeader from "../components/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Deep-dive growth session",
    body: "We map your current acquisition, margins, and brand positioning to design an influencer offer that actually fits your economics.",
  },
  {
    step: "02",
    title: "Creator short-list & strategy",
    body: "Within days you get a curated list of creators, platform mix, and projections. You approve – we handle outreach and contracts.",
  },
  {
    step: "03",
    title: "Launch & scale sprint",
    body: "We roll out test waves, track revenue in real time, and double-down on the creators and angles that hit your KPIs.",
  },
];

export default function Process() {
  return (
    <section id="process" className="container pt-24 sm:pt-28">
      <div className="space-y-10">
        <SectionHeader
          kicker="Process"
          title="From zero to live influencer revenue in weeks."
          subtitle="A tight, transparent process designed to launch fast without sacrificing brand safety."
        />

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map(({ step, title, body }) => (
            <li
              key={step}
              className="glass relative flex flex-col gap-2 rounded-2xl p-5"
            >
              <div className="text-xs font-semibold text-indigo-300">
                Step {step}
              </div>
              <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
              <p className="text-xs text-slate-400">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}