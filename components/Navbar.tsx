"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/lib/CartContext";
import { useState, useEffect, useCallback, useRef } from "react";

const navItems = [
  { label: "home", href: "/" },
  { label: "shop", href: "/shop" },
  { label: "journal", href: "/journal" },
  { label: "join our team", href: "/join-our-team" },
  { label: "about", href: "/about" },
];

const PANEL_DURATION = 550;
const ITEM_STAGGER = 65;
const ITEM_DURATION = 500;
const OPEN_DELAY_BASE = 200;

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allItems = [
    ...navItems,
    { label: `bag${totalItems > 0 ? ` (${totalItems})` : ""}`, href: "/cart" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openMenu = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsVisible(false);
    const totalExitTime = allItems.length * ITEM_STAGGER + ITEM_DURATION + 150;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, totalExitTime);
  }, [allItems.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @keyframes daisyFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
      `}</style>

      {/* Desktop Navigation — Preserved Exactly */}
      <nav className="hidden md:block w-full pt-10 pb-8">
        <ul className="flex items-center justify-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-nav tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-purple-200"
                      : "text-purple-400 hover:text-purple-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/cart"
              className={`text-nav tracking-wide transition-colors duration-200 ${
                pathname === "/cart"
                  ? "text-purple-200"
                  : "text-purple-400 hover:text-purple-200"
              }`}
            >
              bag{totalItems > 0 ? ` (${totalItems})` : ""}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Top Bar — Daisy left, trigger right. Almost empty. */}
        <div className="w-full px-8 py-10 flex items-center justify-between">
          {/* Daisy */}
          <div
            className="relative"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Image
              src="/images/daisy_transparent.png"
              alt="sẹlo"
              width={32}
              height={32}
              className="object-contain"
              style={{
                animation: "daisyFloat 10s ease-in-out infinite",
              }}
              priority
            />
          </div>

          {/* Menu Trigger */}
          <button
            onClick={openMenu}
            aria-label="Open menu"
            className="text-purple-400 hover:text-purple-200 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              opacity: isOpen ? 0 : 1,
              pointerEvents: isOpen ? "none" : "auto",
            }}
          >
            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            >
              <line x1="0" y1="1" x2="36" y2="1" />
              <line x1="0" y1="11" x2="36" y2="11" />
            </svg>
          </button>
        </div>

        {/* Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-[#1a0a2e]/40 z-40"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity ${PANEL_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
              onClick={closeMenu}
            />

            {/* Panel — lighter muted purple, clearly distinct */}
            <div
              className="fixed top-0 right-0 h-full w-full z-50 bg-[#6b5a7d] flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(100%)",
                transition: `all ${PANEL_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="absolute top-10 right-8 text-4xl font-extralight text-purple-200/70 hover:text-purple-100"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(-10px)",
                  transition: `all 400ms cubic-bezier(0.22, 1, 0.36, 1)`,
                  transitionDelay: isVisible ? `${PANEL_DURATION - 150}ms` : "0ms",
                }}
              >
                ×
              </button>

              {/* Menu Items */}
              <div className="flex flex-col items-center justify-center h-full gap-10">
                {allItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  const total = allItems.length;
                  const delay = isVisible
                    ? index * ITEM_STAGGER + OPEN_DELAY_BASE
                    : (total - 1 - index) * ITEM_STAGGER;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`relative text-4xl font-extralight tracking-[0.12em] lowercase ${
                        isActive
                          ? "text-purple-100"
                          : "text-purple-200/60 hover:text-purple-100"
                      }`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0) scale(1)"
                          : "translateY(16px) scale(0.985)",
                        filter: isVisible ? "blur(0px)" : "blur(8px)",
                        transition: `all ${ITEM_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                        transitionDelay: `${delay}ms`,
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-px bg-purple-300/30" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}