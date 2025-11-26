import React from "react";

export default function BrandInfluencerModal({
  open,
  onClose,
  type, // "brand" or "influencer"
}) {
  if (!open) return null;

  const title =
    type === "brand" ? "Let's Grow Your Brand" : "Join Our Creator Network";

  const subtitle =
    type === "brand"
      ? "Tell us about your campaign goals and we'll create a custom strategy for you."
      : "Share your profile and we'll connect you with exciting brand opportunities.";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const message = `
${title}

Name: ${formData.get("name")}
Email: ${formData.get("email")}
WhatsApp: ${formData.get("whatsapp")}
Message: ${formData.get("details")}
    `;

    // ---- EMAIL ----
    window.location.href = `mailto:YOU@YOURMAIL.com?subject=${title}&body=${encodeURIComponent(
      message
    )}`;

    // ---- WHATSAPP ----
    window.open(
      'https://wa.me/YOURNUMBER?text=${encodeURIComponent(message)}',
      "_blank"
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-xl relative">
        <button
          className="absolute right-4 top-3 text-slate-500 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border rounded-lg p-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg p-2"
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="+971 XX XXX XXXX"
            required
            className="w-full border rounded-lg p-2"
          />

          <textarea
            name="details"
            placeholder={
              type === "brand"
                ? "Tell us about your campaign"
                : "Tell us about yourself"
            }
            className="w-full border rounded-lg p-2"
            rows="4"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-yellow-400 text-white font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}