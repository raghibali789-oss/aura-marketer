import React from "react";
import { Search, PenTool, ChartBar, Gauge } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const services = [
  {
    icon: Search,
    title: "Influencer scouting & vetting",
    desc: "We use data, not vibes, to shortlist creators who already convert for brands just like yours.",
    pill: "Discovery",
  },
  {
    icon: PenTool,
    title: "Offer & script architecture",
    desc: "Hooks, scripts, and offers engineered to feel native to each platform while driving direct response.",
    pill: "Creative",
  },
  {
    icon: ChartBar,
    title: "Tracking & revenue routing",
    desc: "Custom UTMs, unique landing pages, and attribution so you know exactly who printed revenue.",
    pill: "Attribution",
  },
  {
    icon: Gauge,
    title: "Always-on optimization",
    desc: "We treat influencer as a performance channel – scaling winners, cutting losers, and iterating weekly.",
    pill: "Optimization",
  },
];

export default function Services() {
  return (
    <section id="services" className="container scroll-mt-32 pt-24 sm:pt-28">
      <div className="grid gap-10 md:grid-cols-[1.2fr,2fr] md:items-start">
        <SectionHeader
          kicker="Services"
          title="Everything you need to turn influencers into a performance channel."
          subtitle="We plug into your existing stack as an elite creator acquisition team – without you having to hire, train, or manage a thing."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, pill }) => (
            <article
              key={title}
              className="glass flex flex-col gap-3 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/90 to-cyan-400/90 text-slate-950 shadow-lg shadow-indigo-500/35">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="badge-soft">{pill}</div>
              </div>
              <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
              <p className="text-xs text-slate-400">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}