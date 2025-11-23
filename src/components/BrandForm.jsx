import React, { useState } from "react";
import { X } from "lucide-react";

export default function BrandForm({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Success Message */}
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold text-slate-900">Submitted 🎉</h2>
            <p className="text-slate-600 mt-2">
              Thank you! We'll connect with you shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-slate-900">Let’s Grow Your Brand</h2>
            <p className="text-slate-500 text-sm mt-1">
              Tell us about your campaign goals.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">

              <div>
                <label className="text-sm text-slate-600">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Tell us about your campaign</label>
                <textarea
                  rows="3"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-emerald-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-300 text-slate-900 font-semibold shadow-md hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}