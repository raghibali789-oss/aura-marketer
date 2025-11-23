import React, { useState } from "react";
import { X } from "lucide-react";

export default function InfluencerForm({ open, onClose }) {
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
              Thank you! We will reach out shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-slate-900">Join as an Influencer</h2>
            <p className="text-slate-500 text-sm mt-1">
              Enter your creator details below.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">

              <div>
                <label className="text-sm text-slate-600">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 
                  focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Instagram / TikTok Username</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 
                  focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 
                  focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Follower Count</label>
                <input
                  type="number"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none border-slate-300 
                  focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl 
                bg-gradient-to-r from-cyan-400 to-emerald-300
                text-slate-900 font-semibold shadow-md hover:opacity-90 transition"
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