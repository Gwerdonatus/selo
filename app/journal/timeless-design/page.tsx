import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <Link
          href="/journal"
          className="text-purple-400 text-xs underline underline-offset-2 hover:text-purple-200 transition-colors mb-8 inline-block"
        >
          ← back to journal
        </Link>
        <p className="text-purple-500 text-xs tracking-wide mb-4">December 2023</p>
        <h1 className="text-3xl tracking-wide text-purple-200 font-light mb-8">
          Timeless Design
        </h1>
        <div className="space-y-6 text-purple-300 text-sm leading-relaxed">
          <p>
            Trends expire. Silhouettes endure. Our design philosophy begins with a single question: will this still feel relevant in ten years? If the answer is uncertain, we return to the drawing board.
          </p>
          <p>
            Timeless design is not about avoiding change. It is about identifying the elements that transcend fashion cycles. The curve of a toe box. The proportion of a heel. The relationship between upper and sole. These are not arbitrary decisions. They are the result of studying what has worked for decades, understanding why it worked, and applying that knowledge with restraint.
          </p>
          <p>
            We draw inspiration from architecture, from sculpture, from the natural world. A shell, a bone, a river stone — these forms have remained unchanged for millennia because they are inherently balanced. Our designs seek a similar equilibrium, creating silhouettes that feel inevitable rather than invented.
          </p>
          <p>
            Color is approached with equal discipline. Our palette is deliberately restrained, built around neutrals that complement rather than compete. Black, brown, beige, white — these are not safe choices. They are confident ones. They allow the form to speak without distraction.
          </p>
          <p>
            The goal is not to create something that will never go out of style. That is impossible. The goal is to create something that will remain beautiful regardless of what is currently in fashion. An object that earns its place in your life through merit, not novelty.
          </p>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
