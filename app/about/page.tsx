"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

// ============================================
// FOUNDER SIGNATURE — Eunice Gwer
// One continuous ink stroke. Starts with a dot.
// Tall cursive, long underline, trailing flourish.
// ============================================
function FounderSignature({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Hand-composed path:
  // Dot → tall E → unice → G → wer → long underline → trailing flourish.
  const signaturePath =
    "M18,48 C20,46 22,46 24,48 C26,50 26,52 24,54 C22,56 20,56 18,54 C16,52 16,50 18,48 M28,82 C28,62 34,42 48,36 C62,30 78,36 84,48 C90,60 84,74 72,80 C60,86 48,82 42,72 C40,68 38,69 38,72 C38,78 44,84 54,86 C64,88 74,84 82,78 C90,72 96,62 96,52 C96,42 90,36 82,38 C74,40 72,48 74,56 C76,64 82,70 90,72 C98,74 106,70 112,64 C118,58 122,48 122,38 C122,28 116,22 108,24 C100,26 98,34 100,42 C102,50 108,56 116,58 C124,60 132,56 138,50 C144,44 148,34 148,24 C148,14 142,8 134,10 C126,12 124,20 126,28 C128,36 134,42 142,44 C150,46 158,42 164,36 C170,30 174,20 174,10 C174,0 168,-6 160,-4 C152,-2 150,6 152,14 C154,22 160,28 168,30 C176,32 184,28 190,22 C196,16 200,6 200,-4 C200,-14 194,-20 186,-18 C178,-16 176,-8 178,0 C180,8 186,14 194,16 C202,18 210,14 216,8 C222,2 226,-8 226,-18 M22,96 C48,92 108,88 168,86 C228,84 288,86 348,92 C378,95 398,102 408,114 C418,126 414,142 400,150 C386,158 368,156 358,144 C348,132 352,116 366,108 C380,100 398,104 408,118 C418,132 416,150 404,160 C392,170 376,170 366,160 C356,150 358,134 370,124 C382,114 400,116 410,128";

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition:
          "opacity 1.2s cubic-bezier(0.25, 0.1, 0.25, 1), transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <svg
        viewBox="0 0 460 160"
        className="w-80 md:w-[28rem] h-auto"
        style={{ overflow: "visible" }}
      >
        <path
          d={signaturePath}
          fill="none"
          stroke="#c4b5d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isVisible ? 0.32 : 0,
            strokeDasharray: 920,
            strokeDashoffset: isVisible ? 0 : 920,
            transition: isVisible
              ? "stroke-dashoffset 2.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s, opacity 0.8s ease-out 0.2s"
              : "none",
          }}
        />
      </svg>

      {/* Caption — elegant typography, not handwritten */}
      <div
        className="mt-10 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(6px)",
          transition:
            "opacity 1.2s ease-out 1.2s, transform 1.2s ease-out 1.2s",
        }}
      >
        <p className="text-purple-200 text-sm tracking-[0.15em] font-light">
          Eunice Gwer
        </p>
        <p className="text-purple-400 text-xs tracking-[0.25em] font-light mt-3">
          Founder · selo
        </p>
      </div>
    </div>
  );
}

// ============================================
// RIBBON ONE — upper-right, partially off-screen
// ============================================
function RibbonOne() {
  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        top: "-15%",
        right: "-25%",
        width: "70vw",
        height: "70vw",
        maxWidth: "900px",
        maxHeight: "900px",
      }}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="ribbon1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d1b4e" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#1f1239" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#150c28" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M-40,120 C40,80 120,60 200,80 C280,100 340,160 360,240 C380,320 340,400 280,440 C220,480 140,460 80,400 C20,340 -20,260 -40,200"
          fill="url(#ribbon1Grad)"
          style={{
            animation: "ribbonFloat1 32s ease-in-out infinite",
            transformOrigin: "200px 200px",
          }}
        />
      </svg>
    </div>
  );
}

// ============================================
// RIBBON TWO — lower-left, partially off-screen
// ============================================
function RibbonTwo() {
  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        bottom: "-20%",
        left: "-30%",
        width: "65vw",
        height: "65vw",
        maxWidth: "800px",
        maxHeight: "800px",
      }}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="ribbon2Grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a0f2e" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#251545" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0d0618" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M440,320 C380,360 320,380 260,360 C200,340 160,280 140,200 C120,120 160,40 220,0 C280,-40 360,-20 420,40"
          fill="url(#ribbon2Grad)"
          style={{
            animation: "ribbonFloat2 28s ease-in-out infinite",
            transformOrigin: "200px 200px",
          }}
        />
      </svg>
    </div>
  );
}

// ============================================
// FADE IN — refined timing, buttery
// ============================================
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 1000ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms, transform 1000ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      {/* Ribbons — sculptural, quiet, partially off-screen */}
      <RibbonOne />
      <RibbonTwo />

      {/* Base layer */}
      <div className="absolute inset-0 bg-[#1a0a2e] z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="px-6 py-12 max-w-5xl mx-auto">
          {/* Giant stacked typography */}
          <div className="mb-12">
            <h1 className="text-[8rem] md:text-[12rem] leading-[0.85] tracking-tight text-purple-100 font-bold lowercase transition-colors duration-[400ms] ease-out hover:text-purple-50">
              about
            </h1>
            <div className="flex items-end gap-4">
              <h1 className="text-[8rem] md:text-[12rem] leading-[0.85] tracking-tight text-purple-100 font-bold lowercase transition-colors duration-[400ms] ease-out hover:text-purple-50">
                me.
              </h1>
              <div className="relative w-32 h-20 md:w-48 md:h-28 bg-purple-950 rounded-2xl overflow-hidden flex-shrink-0 mb-2 group">
                <Image
                  src="/images/eye.jpg"
                  alt="About selo"
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.012]"
                  style={{ willChange: "transform" }}
                />
              </div>
            </div>
          </div>

          {/* Subheading */}
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl text-purple-100 font-bold mb-6">
              nice to meet you!
            </h2>
          </FadeIn>

          {/* Body copy */}
          <div className="max-w-2xl space-y-6">
            <FadeIn delay={200}>
              <p className="text-purple-300 text-base leading-relaxed">
                selo is a Lagos-based accessories brand founded on the belief that luxury should be rooted in integrity. We design and produce footwear that honors the skill of Nigerian artisans while speaking a language of contemporary minimalism.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-purple-300 text-base leading-relaxed">
                Every piece in our collection is handmade in small batches. We do not follow trends. We do not mass produce. We create objects that are meant to last — in quality, in relevance, in the quiet satisfaction of owning something well made.
              </p>
            </FadeIn>

            {/* Founder signature — editorial composition between paragraphs */}
            <div className="py-24 md:py-32">
              <FounderSignature />
            </div>

            <FadeIn delay={500}>
              <p className="text-purple-300 text-base leading-relaxed">
                Our materials are sourced with care. We work exclusively with full-grain leather, vegetable-tanned using traditional methods that respect both the material and the environment. Our hardware is solid, our stitching is reinforced, our soles are built to endure.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-purple-300 text-base leading-relaxed">
                The workshop where selo products are made is a space of concentration and craft. Master artisans, many with decades of experience, execute each step with precision and pride. We believe that the dignity of the maker is inseparable from the quality of the object.
              </p>
            </FadeIn>

            <FadeIn delay={700}>
              <p className="text-purple-300 text-base leading-relaxed">
                Our design philosophy is simple: reduce to the essential, then refine. We study proportion, silhouette, and material behavior. We test prototypes extensively. We release only what meets our standards, which are uncompromising.
              </p>
            </FadeIn>

            <FadeIn delay={800}>
              <p className="text-purple-300 text-base leading-relaxed">
                selo is not a fashion brand. It is a commitment to making things properly, in a place we love, by people we respect, for customers who understand the difference.
              </p>
            </FadeIn>
          </div>
        </div>

        <Footer links={footerLinks} />
      </div>

      {/* Keyframe styles for ribbon floating */}
      <style jsx global>{`
        @keyframes ribbonFloat1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(8px, -12px) rotate(0.8deg);
          }
          66% {
            transform: translate(-6px, 6px) rotate(-0.5deg);
          }
        }
        @keyframes ribbonFloat2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-10px, 8px) rotate(-0.6deg);
          }
          66% {
            transform: translate(6px, -10px) rotate(0.4deg);
          }
        }
      `}</style>
    </main>
  );
}