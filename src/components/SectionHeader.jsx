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
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}