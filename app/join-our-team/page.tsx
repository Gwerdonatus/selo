"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const openings = [
  {
    title: "Production Artisan",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description:
      "We are seeking experienced leather craftspeople to join our workshop. You will work alongside master artisans, contributing to the creation of our footwear collection. Minimum five years of experience in leatherwork required.",
    responsibilities: [
      "Hand-cut and shape premium full-grain leather to precise specifications",
      "Execute traditional stitching techniques including saddle and lock-stitch",
      "Maintain rigorous quality standards at every stage of production",
      "Collaborate with design team on material selection and finish details",
    ],
  },
  {
    title: "Studio Assistant",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description:
      "A supporting role in our design studio, assisting with material sourcing, quality control, and day-to-day operations. Ideal for someone with an eye for detail and a genuine interest in craft.",
    responsibilities: [
      "Source and evaluate raw materials from local and international suppliers",
      "Conduct first-line quality inspections on incoming leather and hardware",
      "Maintain detailed inventory records and studio organization systems",
      "Support the design team with prototyping and sample preparation",
    ],
  },
  {
    title: "Digital Content Creator",
    location: "Remote / Lagos",
    type: "Full-time / Contract",
    description:
      "Responsible for capturing the selo story through photography and written content. You understand our aesthetic and can translate it into visuals and narratives that resonate with our audience.",
    responsibilities: [
      "Produce editorial photography that reflects the selo visual language",
      "Write long-form stories about craft, process, and the people behind the work",
      "Manage content calendar across all digital channels",
      "Collaborate with artisans to document techniques and workshop life",
    ],
  },
];

// ============================================
// RIBBON ONE
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
      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ overflow: "visible" }}>
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
          style={{ animation: "ribbonFloat1 32s ease-in-out infinite", transformOrigin: "200px 200px" }}
        />
      </svg>
    </div>
  );
}

// ============================================
// RIBBON TWO
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
      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ overflow: "visible" }}>
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
          style={{ animation: "ribbonFloat2 28s ease-in-out infinite", transformOrigin: "200px 200px" }}
        />
      </svg>
    </div>
  );
}

// ============================================
// HERO ART — abstract organic form, upper right
// ============================================
function HeroArt() {
  return (
    <div
      className="absolute pointer-events-none hidden lg:block"
      style={{
        top: "-60px",
        right: "-80px",
        width: "420px",
        height: "420px",
        opacity: 0.35,
      }}
    >
      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="heroArtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d2468" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#2a1848" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1a0f2e" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Primary organic mass */}
        <path
          d="M200,20 C280,40 340,100 360,180 C380,260 340,340 260,380 C180,420 80,380 40,300 C0,220 20,120 80,60 C140,0 120,0 200,20"
          fill="url(#heroArtGrad)"
          style={{ animation: "artFloat 24s ease-in-out infinite alternate" }}
        />
        {/* Secondary inner contour */}
        <path
          d="M210,60 C270,75 310,120 325,180 C340,240 310,300 250,330 C190,360 110,330 80,270 C50,210 65,140 105,95 C145,50 150,45 210,60"
          fill="none"
          stroke="rgba(160, 144, 184, 0.08)"
          strokeWidth="0.6"
          style={{ animation: "artFloat 24s ease-in-out infinite alternate 2s" }}
        />
        {/* Tertiary delicate contour */}
        <path
          d="M220,100 C260,110 285,145 295,185 C305,225 285,265 245,285 C205,305 145,285 120,245 C95,205 105,155 130,125 C155,95 180,90 220,100"
          fill="none"
          stroke="rgba(160, 144, 184, 0.05)"
          strokeWidth="0.4"
          style={{ animation: "artFloat 24s ease-in-out infinite alternate 4s" }}
        />
      </svg>
    </div>
  );
}

// ============================================
// SCULPTURAL FORM — between hero and listings
// ============================================
function SculpturalDivider() {
  return (
    <div className="flex justify-center py-16 md:py-20">
      <svg viewBox="0 0 200 120" className="w-48 md:w-64 h-auto" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="sculptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d2468" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#2a1848" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1a0f2e" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Left form */}
        <path
          d="M20,60 C30,30 60,20 80,40 C100,60 90,90 70,100 C50,110 30,90 20,60"
          fill="url(#sculptGrad)"
          stroke="rgba(160, 144, 184, 0.06)"
          strokeWidth="0.5"
          style={{ animation: "artFloat 20s ease-in-out infinite alternate" }}
        />
        {/* Right form */}
        <path
          d="M120,50 C140,30 170,35 180,60 C190,85 170,105 150,100 C130,95 115,70 120,50"
          fill="url(#sculptGrad)"
          stroke="rgba(160, 144, 184, 0.06)"
          strokeWidth="0.5"
          style={{ animation: "artFloat 20s ease-in-out infinite alternate 3s" }}
        />
        {/* Connecting line */}
        <path
          d="M80,70 Q100,55 120,65"
          fill="none"
          stroke="rgba(160, 144, 184, 0.04)"
          strokeWidth="0.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// ============================================
// DECORATIVE ACCENT — thin organic curves
// ============================================
function DecorativeAccent({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 140 260"
        className="w-full h-auto max-w-[140px]"
        style={{ transform: isLeft ? "none" : "scaleX(-1)" }}
      >
        <path
          d="M120,30 C50,55 25,105 70,145 C115,185 45,225 15,240"
          fill="none"
          stroke="rgba(160, 144, 184, 0.15)"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <path
          d="M125,70 C70,90 50,130 85,160 C120,190 65,220 40,235"
          fill="none"
          stroke="rgba(160, 144, 184, 0.10)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M130,110 C90,125 75,155 100,175 C125,195 85,215 65,230"
          fill="none"
          stroke="rgba(160, 144, 184, 0.07)"
          strokeWidth="0.4"
          strokeLinecap="round"
        />
        <circle cx="15" cy="240" r="2" fill="rgba(160, 144, 184, 0.18)" />
        <circle cx="40" cy="235" r="1.5" fill="rgba(160, 144, 184, 0.12)" />
        <circle cx="65" cy="230" r="1" fill="rgba(160, 144, 184, 0.09)" />
      </svg>
    </div>
  );
}

// ============================================
// CLOSING ART — abstract form behind closing text
// ============================================
function ClosingArt() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "400px",
        opacity: 0.12,
      }}
    >
      <svg viewBox="0 0 600 400" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="closingGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3d2468" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#2a1848" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1a0f2e" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="300" cy="200" rx="280" ry="180" fill="url(#closingGrad)" />
        <path
          d="M100,200 C150,120 250,100 300,150 C350,200 450,180 500,200"
          fill="none"
          stroke="rgba(160, 144, 184, 0.06)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M120,220 C170,160 270,140 320,180 C370,220 470,200 480,220"
          fill="none"
          stroke="rgba(160, 144, 184, 0.04)"
          strokeWidth="0.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// ============================================
// FADE IN
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
export default function JoinOurTeamPage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      <RibbonOne />
      <RibbonTwo />
      <div className="absolute inset-0 bg-[#1a0a2e] z-0" />

      <div className="relative z-10">
        <Navbar />

        <div className="px-6 pt-10 pb-12 max-w-5xl mx-auto">
          {/* === HERO === */}
          <section className="relative mb-4">
            <HeroArt />
            <h1
              className="font-extralight lowercase relative z-10"
              style={{
                fontSize: "clamp(64px, 10vw, 120px)",
                letterSpacing: "-0.06em",
                lineHeight: 0.85,
                color: "#d4c4e0",
                fontWeight: 200,
              }}
            >
              join us.
            </h1>
          </section>

          {/* === SUBHEADING === */}
          <FadeIn delay={100}>
            <p
              className="font-light"
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
                color: "#a090b8",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              We are always looking for people who care deeply about craft. Those who understand that excellence is the accumulation of small, deliberate choices.
            </p>
          </FadeIn>

          {/* === SCULPTURAL DIVIDER === */}
          <FadeIn delay={200}>
            <SculpturalDivider />
          </FadeIn>

          {/* === OPEN POSITIONS DIVIDER === */}
          <FadeIn delay={250}>
            <div className="flex items-center gap-6 mb-14">
              <div
                className="flex-1 h-px"
                style={{
                  background: "linear-gradient(90deg, rgba(160, 144, 184, 0.15), transparent)",
                }}
              />
              <span
                className="font-light flex-shrink-0"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "#8a7a9e",
                  textTransform: "lowercase",
                }}
              >
                open positions
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(160, 144, 184, 0.15))",
                }}
              />
            </div>
          </FadeIn>

          {/* === JOB LISTINGS === */}
          <div className="space-y-10 md:space-y-20">
            {openings.map((job, index) => {
              const isRight = index % 2 === 0;
              return (
                <FadeIn key={job.title} delay={400 + index * 150}>
                  <div
                    className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-10 ${
                      isRight ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Decorative accent */}
                    <div className="hidden md:flex md:w-[28%] items-center justify-center">
                      <DecorativeAccent side={isRight ? "left" : "right"} />
                    </div>

                    {/* Card */}
                    <article
                      className="group relative w-full md:w-[66%]"
                      style={{
                        borderRadius: "14px",
                        padding: "40px 36px 44px",
                        background: "rgba(255, 255, 255, 0.012)",
                        border: "1px solid rgba(160, 144, 184, 0.06)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "rgba(255, 255, 255, 0.022)";
                        el.style.borderColor = "rgba(160, 144, 184, 0.12)";
                        el.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "rgba(255, 255, 255, 0.012)";
                        el.style.borderColor = "rgba(160, 144, 184, 0.06)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Title + badge row */}
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <h2
                          className="font-extralight lowercase"
                          style={{
                            fontSize: "clamp(26px, 3.5vw, 34px)",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                            color: "#d4c4e0",
                            fontWeight: 200,
                            transition: "color 0.4s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#e8ddf0";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#d4c4e0";
                          }}
                        >
                          {job.title.toLowerCase()}.
                        </h2>
                        <span
                          className="font-light flex-shrink-0"
                          style={{
                            fontSize: "11px",
                            letterSpacing: "0.06em",
                            color: "#7a6a8e",
                            padding: "5px 12px",
                            borderRadius: "20px",
                            border: "1px solid rgba(160, 144, 184, 0.10)",
                            background: "rgba(160, 144, 184, 0.04)",
                            marginTop: "2px",
                          }}
                        >
                          {job.type}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-3 mt-4">
                        <p
                          className="font-light"
                          style={{
                            fontSize: "12px",
                            letterSpacing: "0.08em",
                            color: "#7a6a8e",
                            textTransform: "lowercase",
                          }}
                        >
                          {job.location.toLowerCase()}
                        </p>
                        <div
                          className="h-px flex-1"
                          style={{
                            background: "linear-gradient(90deg, rgba(160, 144, 184, 0.08), transparent)",
                          }}
                        />
                      </div>

                      {/* Description */}
                      <p
                        className="font-light"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.7,
                          color: "#9a8ab0",
                          maxWidth: "520px",
                          marginTop: "22px",
                          letterSpacing: "0.005em",
                        }}
                      >
                        {job.description}
                      </p>

                      {/* Responsibilities */}
                      <div style={{ marginTop: "28px" }}>
                        <p
                          className="font-light"
                          style={{
                            fontSize: "11px",
                            letterSpacing: "0.10em",
                            color: "#6a5a7e",
                            marginBottom: "14px",
                            textTransform: "lowercase",
                          }}
                        >
                          what you will do
                        </p>
                        <ul className="space-y-2.5">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className="flex-shrink-0 mt-[8px]"
                                style={{
                                  width: "4px",
                                  height: "1px",
                                  background: "rgba(160, 144, 184, 0.25)",
                                }}
                              />
                              <span
                                className="font-light"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: 1.6,
                                  color: "#8a7a9e",
                                  letterSpacing: "0.005em",
                                }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Apply link */}
                      <a
                        href="mailto:careers@selo.com"
                        className="inline-flex items-center gap-2 font-light relative group/link"
                        style={{
                          fontSize: "13px",
                          letterSpacing: "0.03em",
                          color: "#8a7a9e",
                          marginTop: "32px",
                          textDecoration: "none",
                          transition: "color 0.5s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#b8a8cc";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#8a7a9e";
                        }}
                      >
                        Apply
                        <span
                          className="inline-block"
                          style={{
                            transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateX(5px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateX(0)";
                          }}
                        >
                          →
                        </span>
                        <span
                          className="absolute bottom-[-3px] left-0 h-px"
                          style={{
                            width: "0%",
                            background: "linear-gradient(90deg, rgba(160, 144, 184, 0.40), rgba(200, 184, 220, 0.10))",
                            transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                          }}
                          ref={(el) => {
                            if (el) {
                              const parent = el.parentElement;
                              if (parent) {
                                parent.addEventListener("mouseenter", () => {
                                  el.style.width = "100%";
                                });
                                parent.addEventListener("mouseleave", () => {
                                  el.style.width = "0%";
                                });
                              }
                            }
                          }}
                        />
                      </a>
                    </article>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* === CLOSING SECTION === */}
          <FadeIn delay={900}>
            <div className="relative text-center" style={{ marginTop: "100px", paddingTop: "80px", paddingBottom: "80px" }}>
              <ClosingArt />
              <div className="relative z-10">
                <div
                  className="mx-auto mb-12"
                  style={{
                    width: "48px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(160, 144, 184, 0.18), transparent)",
                  }}
                />
                <h2
                  className="font-extralight lowercase mx-auto"
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.1,
                    color: "#c4b4d8",
                    fontWeight: 200,
                    maxWidth: "480px",
                  }}
                >
                  don&apos;t see yourself listed?
                </h2>
                <p
                  className="font-light mx-auto"
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "#8a7a9e",
                    maxWidth: "440px",
                    marginTop: "24px",
                    letterSpacing: "0.005em",
                  }}
                >
                  The best people rarely fit neatly inside predefined roles. Tell us what you do. Show us your work. Surprise us.
                </p>
                <a
                  href="mailto:careers@selo.com"
                  className="inline-flex items-center gap-2 font-light relative group/link mx-auto"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "0.03em",
                    color: "#9a8ab0",
                    marginTop: "36px",
                    textDecoration: "none",
                    transition: "color 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c4b4d8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#9a8ab0";
                  }}
                >
                  careers@selo.com
                  <span
                    className="inline-block"
                    style={{
                      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    →
                  </span>
                  <span
                    className="absolute bottom-[-3px] left-0 h-px"
                    style={{
                      width: "0%",
                      background: "linear-gradient(90deg, rgba(160, 144, 184, 0.40), rgba(200, 184, 220, 0.10))",
                      transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    ref={(el) => {
                      if (el) {
                        const parent = el.parentElement;
                        if (parent) {
                          parent.addEventListener("mouseenter", () => {
                            el.style.width = "100%";
                          });
                          parent.addEventListener("mouseleave", () => {
                            el.style.width = "0%";
                          });
                        }
                      }
                    }}
                  />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Keyframe styles */}
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
        @keyframes artFloat {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(6px, -8px) rotate(0.5deg);
          }
          100% {
            transform: translate(-4px, 5px) rotate(-0.3deg);
          }
        }
      `}</style>
    </main>
  );
}