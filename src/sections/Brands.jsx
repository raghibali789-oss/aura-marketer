import React from "react";

const logos = ["NovaSkin", "Base44", "FluxWear", "Glowline", "UrbanFuel"];

export default function Brands() {
  return (
    <section className="container pt-10">
      <div className="glass flex flex-col items-center gap-4 rounded-2xl px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs text-slate-400">
          Trusted by DTC brands that live and breathe creator culture
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500">
          {logos.map((name) => (
            <span
              key={name}
              className="font-semibold tracking-wide text-slate-400/90"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}