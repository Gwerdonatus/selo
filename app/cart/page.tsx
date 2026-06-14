"use client";

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

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  const formatPrice = (n: number) => {
    return "N" + n.toLocaleString("en-NG") + ".00";
  };

  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-10 lowercase">
          your bag
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-purple-300 mb-6">Your bag is empty</p>
            <Link
              href="/shop"
              className="text-purple-400 underline underline-offset-2 hover:text-purple-200 transition-colors"
            >
              continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-8 mb-12">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 pb-8 border-b border-purple-800"
                >
                  <div className="relative w-24 h-24 bg-purple-950 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Link
                        href={`/shop/${item.slug}`}
                        className="text-purple-200 tracking-wide lowercase hover:text-purple-100 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-purple-500 text-xs hover:text-purple-300 transition-colors"
                      >
                        remove
                      </button>
                    </div>
                    <p className="text-purple-400 text-sm mb-1">
                      {item.colour} / {item.size}
                    </p>
                    <p className="text-purple-300 text-sm mb-3">
                      {item.priceFormatted}
                    </p>
                    <div className="flex items-center border border-purple-700 w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-purple-200 hover:bg-purple-900 transition-colors"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-purple-200 text-sm min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-purple-200 hover:bg-purple-900 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-8">
              <button
                onClick={clearCart}
                className="text-purple-500 text-sm hover:text-purple-300 transition-colors"
              >
                clear bag
              </button>
              <div className="text-right">
                <p className="text-purple-400 text-sm mb-1">subtotal</p>
                <p className="text-xl text-purple-200 tracking-wide">
                  {formatPrice(subtotal)}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <p className="text-purple-400 text-xs">
                Shipping calculated at checkout
              </p>
              <Link
                href="/checkout"
                className="bg-purple-600 text-purple-100 px-12 py-3 text-sm tracking-wide hover:bg-purple-700 transition-colors"
              >
                checkout
              </Link>
              <Link
                href="/shop"
                className="text-purple-400 text-sm underline underline-offset-2 hover:text-purple-200 transition-colors"
              >
                continue shopping
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
