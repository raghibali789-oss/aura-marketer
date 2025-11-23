import React, { useState } from "react";
import Hero from "../sections/Hero";
import BrandForm from "./BrandForm";
import InfluencerForm from "./InfluencerForm"; // ✅ Make sure this file exists

export default function HeroWrapper() {
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [showInfluencerForm, setShowInfluencerForm] = useState(false);

  return (
    <>
      <Hero
        onOpenBrandForm={() => setShowBrandForm(true)}
        onOpenInfluencerForm={() => setShowInfluencerForm(true)}
      />

      {/* BRAND FORM MODAL */}
      <BrandForm
        open={showBrandForm}
        onClose={() => setShowBrandForm(false)}
      />

      {/* INFLUENCER FORM MODAL */}
      <InfluencerForm
        open={showInfluencerForm}
        onClose={() => setShowInfluencerForm(false)}
      />
    </>
  );
}