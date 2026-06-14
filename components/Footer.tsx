"use client";

import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
}

export default function Footer({ links }: FooterProps) {
  return (
    <footer className="w-full py-10">
      <div className="flex items-center justify-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-footer text-purple-400 underline underline-offset-2 tracking-wide hover:text-purple-200 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
