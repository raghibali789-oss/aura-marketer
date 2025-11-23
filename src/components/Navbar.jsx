import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../Assets/Logo.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-4 z-50 flex justify-center w-full px-4">
      <nav
        className="
        w-full max-w-7xl
        flex items-center justify-between 
        px-6 py-3 md:px-10 md:py-4
        rounded-2xl
        bg-slate-900/60 
        border border-white/10 
        backdrop-blur-xl 
        shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]
      "
      >
        {/* LOGO SECTION (UNCHANGED SIZE) */}
        <a href="#top" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Aura Marketer Logo"
            className="h-32 w-32 sm:h-20 object-cover drop-shadow-lg"
          />
          <div className="flex flex-col -mt-1">
            <span className="text-base font-semibold tracking-wide">
              Aura Marketer
            </span>
            <span className="text-[12px] text-slate-400">
              Influencer Performance Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-white hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* GET IN TOUCH BUTTON – Aura Gradient */}
          <a
  href="#contact"
  className="px-5 py-2 rounded-full font-medium text-[13px]
             bg-gradient-to-r from-sky-400 to-emerald-400
             text-slate-900 shadow-lg shadow-emerald-400/20"
>
  Get in Touch
</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex rounded-full border border-slate-700/90 bg-slate-900/80 p-2 text-slate-200"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full max-w-7xl bg-slate-900/95 border border-slate-800/70 rounded-xl mt-2 p-4 space-y-3 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-slate-200 py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              block text-center w-full px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-green-400 via-lime-300 to-yellow-400
              shadow-md shadow-yellow-400/30 mt-2
            "
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}