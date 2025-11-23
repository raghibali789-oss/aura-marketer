import React from "react";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="container pt-24 sm:pt-28">
      <div className="glass grid gap-10 rounded-3xl p-6 sm:p-8 md:grid-cols-[1.3fr,1fr]">
        <div className="space-y-4">
          <SectionHeader
            title="Ready to explore if Aura Marketer fits your growth roadmap?"
            subtitle="Share a few details and we’ll respond with a quick loom audit + potential influencer strategy – no strings attached."
          />
        </div>

        <form
          className="space-y-4 text-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Name">
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-indigo-500/40 focus:ring-2"
                placeholder="Lina Morales"
              />
            </Field>
            <Field label="Work email">
              <input
                type="email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-indigo-500/40 focus:ring-2"
                placeholder="you@brand.com"
              />
            </Field>
          </div>

          <Field label="Brand & website">
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-indigo-500/40 focus:ring-2"
              placeholder="Base44 – base44.com"
            />
          </Field>

          <Field label="What’s your monthly ad spend?">
            <select className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-indigo-500/40 focus:ring-2">
              <option>Below $20k</option>
              <option>$20k – $50k</option>
              <option>$50k – $150k</option>
              <option>$150k+</option>
            </select>
          </Field>

          <Field label="What are you hoping an influencer channel could do for you?">
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-indigo-500/40 focus:ring-2"
              placeholder="Share a bit of context so we can prep properly…"
            />
          </Field>

          <button type="submit" className="primary-btn w-full justify-center">
            Submit inquiry
          </button>

          <p className="text-[11px] text-slate-500">
            We’ll review and get back to you via email. No spam, no pressure
            pitch – just honest feedback on whether we can help.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-slate-300">
      <span>{label}</span>
      {children}
    </label>
  );
}