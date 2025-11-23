import React from "react";
import { Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 py-6">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Aura Marketer. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}