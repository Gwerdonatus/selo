"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/lib/CartContext";

const navItems = [
  { label: "home", href: "/" },
  { label: "shop", href: "/shop" },
  { label: "journal", href: "/journal" },
  { label: "join our team", href: "/join-our-team" },
  { label: "about", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <nav className="w-full pt-10 pb-8">
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
  );
}
