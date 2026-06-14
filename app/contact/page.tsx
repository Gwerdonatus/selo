"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-2 lowercase">
          contact
        </h1>
        <p className="text-purple-400 text-sm mb-10">
          We would love to hear from you.
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <p className="text-purple-200 mb-2">Thank you for reaching out.</p>
            <p className="text-purple-400 text-sm">We will respond within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-purple-200 text-sm tracking-wide mb-2">
                name
              </label>
              <input
                type="text"
                required
                className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-purple-200 text-sm tracking-wide mb-2">
                email
              </label>
              <input
                type="email"
                required
                className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-purple-200 text-sm tracking-wide mb-2">
                subject
              </label>
              <input
                type="text"
                required
                className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-purple-200 text-sm tracking-wide mb-2">
                message
              </label>
              <textarea
                required
                rows={5}
                className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-purple-100 py-3 text-sm tracking-wide hover:bg-purple-700 transition-colors"
            >
              send message
            </button>
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-purple-900 space-y-4">
          <div>
            <p className="text-purple-200 text-sm mb-1">Email</p>
            <p className="text-purple-400 text-sm">hello@selo.com</p>
          </div>
          <div>
            <p className="text-purple-200 text-sm mb-1">Instagram</p>
            <p className="text-purple-400 text-sm">@selo.accessories</p>
          </div>
          <div>
            <p className="text-purple-200 text-sm mb-1">Workshop</p>
            <p className="text-purple-400 text-sm">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
