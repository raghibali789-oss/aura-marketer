import React from "react";
import { Mail, Phone } from "lucide-react";

// Social icons (SVG files you uploaded)
import instagram from "../Assets/instagram.svg";
import tiktok from "../Assets/tiktok.svg";
import snapchat from "../Assets/snapchat.svg";
import whatsapp from "../Assets/whatsapp.svg";

import logo from "../Assets/Logo.png";
export default function Footer() {


  return (
    <footer id="footer" className="mt-32 border-t border-slate-800/60 bg-slate-950/40 py-14 backdrop-blur-xl">
      <div className="container grid gap-12 md:grid-cols-3">
        
        {/* Left Section */}
        <div className="space-y-4">
          <img
            src={logo}
            alt="Aura Marketer"
            className="h-32 w-32 sm:h-20 object-cover opacity-80"
          />
          <h3 className="text-lg font-semibold text-slate-50">Aura Marketer</h3>
          <p className="max-w-xs text-sm text-slate-400">
            Connecting creators with UAE and GCC brands through culturally aligned influencer marketing.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-50">Get in Touch</h3>
          <p className="flex items-center gap-3 text-slate-300">
            <Mail className="h-5 w-5 text-slate-400" /> auramarketer@gmail.com
          </p>
          <p className="flex items-center gap-3 text-slate-300">
            <Phone className="h-5 w-5 text-slate-400" /> +971 50 849 4744
          </p>
        </div>

        {/* Social Section */}
        <div className="space-y-3">
  <h4 className="font-semibold text-slate-200">Follow Us</h4>

  <div className="flex items-center gap-4">
    {/* Instagram */}
    <a href="https://www.instagram.com/aura_marketer_" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="Instagram" className="h-6 w-6 opacity-80 hover:opacity-100 transition" />
    </a>

    {/* TikTok */}
    <a href="https://www.tiktok.com/@AuraMarketer" target="_blank" rel="noopener noreferrer">
      <img src={tiktok} alt="TikTok" className="h-6 w-6 opacity-80 hover:opacity-100 transition" />
    </a>

    {/* Snapchat */}
    <a href="https://www.snapchat.com/add/auramarketer" target="_blank" rel="noopener noreferrer">
      <img src={snapchat} alt="Snapchat" className="h-6 w-6 opacity-80 hover:opacity-100 transition" />
    </a>

    {/* WhatsApp */}
    <a href="https://wa.me/971508494744" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="WhatsApp" className="h-6 w-6 opacity-80 hover:opacity-100 transition" />
    </a>
  </div>
</div>


      </div>

      {/* Bottom */}
      <p className="mt-10 text-center text-xs text-slate-600">
        © 2025 Aura Marketer. All rights reserved.
      </p>
    </footer>
  );
}
