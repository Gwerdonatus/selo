"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/app/lib/CartContext";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  });

  const shipping = subtotal > 0 ? 5000 : 0;
  const total = subtotal + shipping;

  const formatPrice = (n: number) => {
    return "N" + n.toLocaleString("en-NG") + ".00";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <main className="min-h-screen bg-[#1a0a2e]">
        <Navbar />
        <div className="px-6 py-20 max-w-xl mx-auto text-center">
          <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-6 lowercase">
            thank you
          </h1>
          <p className="text-purple-300 mb-4">
            Your order has been received. We will send you a confirmation email shortly.
          </p>
          <p className="text-purple-400 text-sm mb-10">
            This is a portfolio demonstration. No payment was processed.
          </p>
          <Link
            href="/shop"
            className="bg-purple-600 text-purple-100 px-10 py-3 text-sm tracking-wide hover:bg-purple-700 transition-colors"
          >
            continue shopping
          </Link>
        </div>
        <Footer links={footerLinks} />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#1a0a2e]">
        <Navbar />
        <div className="px-6 py-20 max-w-xl mx-auto text-center">
          <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-6 lowercase">
            checkout
          </h1>
          <p className="text-purple-300 mb-6">Your bag is empty</p>
          <Link
            href="/shop"
            className="text-purple-400 underline underline-offset-2 hover:text-purple-200 transition-colors"
          >
            continue shopping
          </Link>
        </div>
        <Footer links={footerLinks} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-10 lowercase">
          checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Customer Details */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-detail-label text-purple-200 tracking-wide mb-4">
                  contact
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <h2 className="text-detail-label text-purple-200 tracking-wide mb-4">
                  shipping address
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-purple-600 bg-transparent text-purple-200 py-2.5 px-3 text-sm placeholder-purple-600 focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-detail-label text-purple-200 tracking-wide mb-4">
                  payment method
                </h2>
                <div className="space-y-3">
                  {["Debit Card", "Bank Transfer", "Apple Pay", "Google Pay", "Paystack"].map(
                    (method) => (
                      <label
                        key={method}
                        className="flex items-center gap-3 border border-purple-700 p-3 cursor-pointer hover:border-purple-500 transition-colors"
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method}
                          defaultChecked={method === "Debit Card"}
                          className="accent-purple-500"
                        />
                        <span className="text-purple-200 text-sm">{method}</span>
                      </label>
                    )
                  )}
                </div>
                <p className="text-purple-500 text-xs mt-4">
                  Portfolio demonstration. Payments are intentionally disabled.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-purple-100 py-3 text-sm tracking-wide hover:bg-purple-700 transition-colors"
              >
                place order
              </button>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-80">
            <h2 className="text-detail-label text-purple-200 tracking-wide mb-6">
              order summary
            </h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-16 bg-purple-950 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm lowercase">{item.name}</p>
                    <p className="text-purple-400 text-xs">
                      {item.colour} / {item.size}
                    </p>
                    <p className="text-purple-400 text-xs">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-purple-800 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-purple-400">Subtotal</span>
                <span className="text-purple-200">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-purple-400">Shipping</span>
                <span className="text-purple-200">{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-purple-800">
                <span className="text-purple-200">Total</span>
                <span className="text-purple-200">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
