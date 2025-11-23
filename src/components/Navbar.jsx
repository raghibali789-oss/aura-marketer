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
    <header className="sticky top-0 z-50 w-full">
      {/* Navbar Container */}
      <nav
        className="
          w-full 
          flex items-center justify-between
          px-4 py-3
          md:max-w-7xl md:mx-auto md:mt-4 md:rounded-2xl
          
          /* Desktop Glass */
          md:bg-slate-900/60 md:border md:border-white/10 md:backdrop-blur-xl
          md:shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]

          /* Mobile Solid */
          bg-slate-950
        "
      >
        {/* LOGO */}
        <a href="#top" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Aura Marketer Logo"
            className="h-16 w-16 sm:h-20 object-cover drop-shadow-lg"
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

        {/* Desktop Nav */}
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

          <a
            href="#contact"
            className="px-5 py-2 rounded-full font-medium text-[13px]
                       bg-gradient-to-r from-sky-400 to-emerald-400
                       text-slate-900 shadow-lg shadow-emerald-400/20"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex rounded-md border border-slate-700/50 bg-slate-800/90 p-2 text-slate-200"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-slate-950 border-t border-slate-800 p-4 space-y-3">
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
            className="block text-center w-full px-5 py-2 rounded-full text-sm font-semibold text-slate-900
                       bg-gradient-to-r from-cyan-400 to-emerald-300
                       shadow-md mt-2"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}