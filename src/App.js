import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Brands from "./sections/Brands";
import Services from "./sections/Services";
import Process from "./sections/Process";
import CaseStudies from "./sections/CaseStudies";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.65),_transparent_55%)]" />
      <Navbar />
      <main className="space-y-24 pb-24 sm:space-y-32 sm:pb-32">
        <Hero />
        <Brands />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;