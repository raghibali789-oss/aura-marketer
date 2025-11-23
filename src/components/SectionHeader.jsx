import React from "react";

export default function SectionHeader({
  id,
  kicker,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <div
      id={id}
      className={`flex flex-col gap-3 scroll-mt-32 
        ${align === "center" ? "items-center text-center" : "items-start"}
      `}
    >
      {kicker && (
        <p className="text-sm tracking-wider font-semibold text-emerald-300 uppercase">
          {kicker}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}