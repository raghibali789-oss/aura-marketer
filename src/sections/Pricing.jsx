import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Check } from "lucide-react";

const bullets = [
  "We only profit when you do – aligned incentives.",
  "Minimum 3-month commitment to prove the channel.",
  "Everything from creator scouting to reporting included.",
];

export default function Pricing() {
  return (
    <section id="pricing" className="container pt-24 sm:pt-28">
      <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
        <SectionHeader
          kicker="Pricing"
          title="Simple: a base retainer + performance upside."
          subtitle="Every brand is different, but we like to keep the model clean. A modest base covers our team; the upside is tied to revenue we generate."
        />

        <div className="glass rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Standard engagement
          </p>
          <p className="mt-3 text-3xl font-semibold text-slate-50">
            $3,000/mo + performance
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Performance component is typically 10–20% of net new influencer
            revenue, structured around your margins.
          </p>

          <ul className="mt-4 space-y-2 text-xs text-slate-200">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-[2px] h-3.5 w-3.5 text-emerald-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="primary-btn mt-5 w-full justify-center">
            See if we’re a fit
          </a>
        </div>
      </div>
    </section>
  );
}