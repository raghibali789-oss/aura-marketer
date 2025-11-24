import React from "react";
import Navbar from "./components/Navbar";
import HeroWrapper from "./components/HeroWrapper"; 
import Brands from "./sections/Brands";
import Services from "./sections/Services";
import Process from "./sections/Process";
import CaseStudies from "./sections/CaseStudies";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

/* ✅ IMPORT WATERMARK IMAGES CORRECTLY */
import bg1 from "./Assets/bg-marketing-1.png";
import bg2 from "./Assets/bg-marketing-2.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">

      {/* 🔥 TRUE TOP ANCHOR */}
      <div id="top"></div>

      {/* 🌌 ORIGINAL BACKDROP */}
      <div className="pointer-events-none fixed inset-0 -z-20 
        bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_55%),
        radial-gradient(circle_at_bottom,_rgba(8,47,73,0.65),_transparent_55%)]
      " />

    {/* 🖼 WATERMARK IMAGES */}
<div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
  
  {/* IMAGE 1 */}
  <div
    className="absolute inset-0 bg-cover bg-center mix-blend-soft-light"
    style={{ backgroundImage: 'url(${bg1})' }}
  ></div>

  {/* IMAGE 2 */}
  <div
    className="absolute inset-0 bg-cover bg-center mix-blend-soft-light"
    style={{ backgroundImage: 'url(${bg2})' }}
  ></div>

</div>

      <Navbar />

      <main className="space-y-24 pb-24 sm:space-y-32 sm:pb-32">
        <HeroWrapper />
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