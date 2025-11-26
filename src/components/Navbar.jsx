import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../Assets/Logo.png";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about-showcase", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* DESKTOP + MOBILE NAV */}
      <nav
        className="
          w-full
          px-4 py-3

          /* DESKTOP GLASS (FULL WIDTH, NO ROUNDED CORNERS) */
          md:backdrop-blur-xl
          md:bg-slate-900/50
          md:border-b md:border-white/10

          /* Remove box styling */
          md:shadow-none
          md:rounded-none

          /* MOBILE SOLID */
          bg-slate-950
          flex items-center justify-between
        "
      >
        {/* LOGO */}
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

        {/* DESKTOP NAV */}
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
            href="#footer"
            className="px-5 py-2 rounded-full font-medium text-[13px]
                       bg-gradient-to-r from-sky-400 to-emerald-400
                       text-slate-900 shadow-md shadow-emerald-400/20"
          >
            Get in Touch
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex rounded-md border border-slate-700/50 bg-slate-800/90 p-2 text-slate-200"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
  <div 
    className="md:hidden w-full bg-slate-950 border-t border-slate-800 
               p-4 space-y-3 absolute left-0 top-full z-40"
  >
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
      href="#footer"
      onClick={() => setOpen(false)}
      className="block text-center w-full px-5 py-2 rounded-full text-sm font-semibold text-slate-900
                 bg-gradient-to-r from-cyan-400 to-emerald-300 shadow-md mt-2"
    >
      Get in Touch
    </a>
  </div>
)}
    </header>
  );
}