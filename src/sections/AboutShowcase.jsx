import React from "react";
import Process from "./Process";
import CaseStudies from "./CaseStudies";
import SectionHeader from "../components/SectionHeader";

export default function AboutShowcase() {
  return (
    <section id="about-showcase" className="container space-y-20 pt-4 scroll-mt-28">
      
      {/* Unified Header */}
      <SectionHeader
        kicker="ABOUT"
        title="How we turn creators into revenue engines"
        subtitle="Our process + real campaigns merged into one powerful overview."
        align="center"
      />

      {/* Step-by-step process */}
      <Process />

      {/* Case studies */}
      <CaseStudies />

    </section>
  );
}