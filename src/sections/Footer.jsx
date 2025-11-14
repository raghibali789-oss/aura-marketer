import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  const handleSocialClick = (platform, url) => {
    console.log({
      event: "social_link_clicked",
      platform: platform,
      timestamp: new Date().toISOString(),
      url: url,
    });

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "social_link_clicked",
        platform: platform,
        timestamp: new Date().toISOString(),
      });
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:auramarketer@gmail.com",
      ariaLabel: "Send us an email",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "TikTok",
      icon: "tiktok",
      url: "https://www.tiktok.com/@AuraMarketer",
      ariaLabel: "Open our TikTok profile",
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "X",
      icon: "x",
      url: "https://x.com/AuraMarketer",
      ariaLabel: "Follow us on X (Twitter)",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/influenzo_099",
      ariaLabel: "Open Aura Marketer Instagram profile",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Snapchat",
      icon: "snapchat",
      url: "https://www.snapchat.com/add/auramarketer",
      ariaLabel: "Add us on Snapchat",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "WhatsApp",
      icon: "whatsapp",
      url: "https://wa.me/971508494744?text=Hello%20Aura%20Marketer",
      ariaLabel: "Message us on WhatsApp",
      color: "from-green-500 to-green-600",
    },
  ];

  const renderIcon = (iconType, className) => {
    if (typeof iconType !== "string") {
      const IconComponent = iconType;
      return <IconComponent className={className} />;
    }

    switch (iconType) {
      case "tiktok":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        );
      case "x":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "snapchat":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821..."/>
          </svg>
        );
      case "whatsapp":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867..."/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690656b061b756469e8d07cd/bbeba992c_Gemini_Generated_Image_za5kp2za5kp2za5k-removebg-preview.png"
                alt="Aura Marketer"
                className="w-16 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                Aura Marketer
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting creators with UAE and GCC brands through culturally
              aligned influencer marketing.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:auramarketer@gmail.com"
                onClick={() =>
                  handleSocialClick("Email", "mailto:auramarketer@gmail.com")
                }
                className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="w-5 h-5" />
                <span>auramarketer@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  onClick={() => handleSocialClick(social.name, social.url)}
                  aria-label={social.ariaLabel}
                  className={`group w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:${social.color} transition-all duration-300 border border-gray-800`}
                  title={social.ariaLabel}
                >
                  {renderIcon(social.icon, "w-5 h-5")}
                </a>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Click any icon to connect with us
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Aura Marketer. Based in Dubai, UAE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
