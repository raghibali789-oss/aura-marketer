import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LineChart, Rocket, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <section id="top" className="container pt-12 sm:pt-16 md:pt-20">
      <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">

        {/* LEFT SIDE */}
        <motion.div
          className="space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* NEW LABEL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pill w-fit bg-slate-900/80"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-[10px] font-bold text-slate-950">
              NEW
            </span>
            <span>Dark-futuristic influencer growth engine</span>
          </motion.div>

          {/* TITLE & SUBTITLE */}
          <motion.div
            className="space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Turn creator influence into{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                predictable revenue
              </span>
              .
            </h1>

            <p className="max-w-xl text-sm text-slate-400 sm:text-base">
              Aura Marketer is your plug-and-play influencer performance team.
              From creator scouting to offer scripting and tracking – we handle
              the full funnel so you only pay for real outcomes.
            </p>
          </motion.div>

          {/* BRAND / INFLUENCER BUTTONS */}
          <motion.div
            className="flex gap-4 pt-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-300 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">
              I’m a Brand
            </button>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-300 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">
              I’m an Influencer
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div
            className="flex flex-wrap gap-6 pt-4 text-xs text-slate-400"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Stat icon={LineChart} label="Average ROAS" value="4.7x" tone="indigo" />
            <Stat icon={Users} label="Creators in our private network" value="1.2k+" tone="cyan" />
            <Stat icon={Rocket} label="Launch-ready in" value="21 days" tone="emerald" />
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            className="w-full flex justify-end mt-6 md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <a href="#contact" className="primary-btn flex items-center gap-2">
              Book a free strategy call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="secondary-btn ml-4">
              View campaigns
              </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE VISUAL */}
        <motion.div
          className="glass relative rounded-3xl p-5 shadow-[0_0_120px_rgba(30,64,175,0.45)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute -top-10 -right-6 h-32 w-32 rounded-full bg-indigo-500/25 blur-3xl" />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Last 30 days</p>
              <p className="mt-1 text-2xl font-semibold text-slate-50">
                +312% sales from creators
              </p>
            </div>

            <span className="badge-soft hidden sm:inline-flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Verified performance partner
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
            <Metric label="Influencer revenue" value="$184,930" trend="+62%" />
            <Metric label="Creator CTR" value="4.9%" trend="+31%" />
            <Metric label="Average CAC" value="$18.40" trend="-27%" />
          </div>

          {/* TESTIMONIAL */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-xs text-slate-300">
            “Aura Marketer turned our creator chaos into a structured
            acquisition channel that beats paid social on CAC.”

            <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-400">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
              <div>
                <p className="font-medium text-slate-200">
                  DR. Joseph Siaw, CEO @ Zoomlion
                </p>
                <p>China's Leading Heavy Equipment company</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value, tone }) {
  const toneClasses =
    tone === "indigo"
      ? "bg-indigo-500/15 text-indigo-200"
      : tone === "cyan"
      ? "bg-cyan-500/15 text-cyan-200"
      : "bg-emerald-500/15 text-emerald-200";

  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${toneClasses}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[11px] text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-slate-50">{value}</p>
      </div>
    </div>
  );
}

function Metric({ label, value, trend }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
      <p className="text-[11px] text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-50">{value}</p>
      <p className="mt-1 text-[11px] text-emerald-400">{trend} vs last month</p>
    </div>
  );
}