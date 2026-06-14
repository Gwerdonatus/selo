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
        <p className="text-purple-500 text-xs tracking-wide mb-4">January 2024</p>
        <h1 className="text-3xl tracking-wide text-purple-200 font-light mb-8">
          The Language of Leather
        </h1>
        <div className="space-y-6 text-purple-300 text-sm leading-relaxed">
          <p>
            Leather is not merely a material. It is a living surface that records time, developing character with every step. We source only full-grain hides, selected by hand, inspected for the subtle imperfections that indicate authenticity.
          </p>
          <p>
            The language of leather is spoken in texture, in grain, in the way light moves across its surface. A finished hide tells the story of the animal it came from, the environment it lived in, the care with which it was tanned. Synthetic materials can imitate appearance, but they cannot replicate this depth of character.
          </p>
          <p>
            We work exclusively with vegetable-tanned leather, a process that uses natural tannins from tree bark rather than harsh chemicals. This method is slower, more expensive, and more demanding, but it produces leather that ages beautifully. Over months and years, the color deepens, the surface develops a patina unique to its owner, and the material becomes softer without losing structural integrity.
          </p>
          <p>
            Understanding leather requires patience. It cannot be rushed. The tanning process alone takes weeks. The conditioning, the cutting, the shaping — each step must respect the material's natural properties. Force it, and it will resist. Work with it, and it will reward you with decades of service.
          </p>
          <p>
            When you choose a selo product, you are choosing an object that will evolve. The leather will darken in the creases where your foot flexes. It will soften where it meets your skin. It will become unmistakably yours.
          </p>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
