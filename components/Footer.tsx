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
    <footer className="w-full py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-8">
        {/* Subtle top divider */}
        <div className="w-full h-px bg-purple-800/30 mb-16" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand mark */}
          <div className="text-purple-500/60 text-sm tracking-[0.15em] font-light">
            sẹlo
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-purple-400/70 tracking-wide font-light 
                           hover:text-purple-200 transition-colors duration-500 ease-out"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Year */}
          <div className="text-purple-500/40 text-xs tracking-[0.2em] font-light">
            MMXXVI
          </div>
        </div>
      </div>
    </footer>
  );
}