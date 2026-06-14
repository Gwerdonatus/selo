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
        <p className="text-purple-500 text-xs tracking-wide mb-4">November 2023</p>
        <h1 className="text-3xl tracking-wide text-purple-200 font-light mb-8">
          African Identity, Modern Form
        </h1>
        <div className="space-y-6 text-purple-300 text-sm leading-relaxed">
          <p>
            We do not borrow from elsewhere. Our aesthetic emerges from the textures, palettes, and proportions of contemporary African life, translated into objects of quiet luxury.
          </p>
          <p>
            African design has long been misunderstood by the global market. It is too often reduced to patterns, to bright colors, to decorative motifs that satisfy an outsider's expectation of what the continent should look like. We reject this reduction. Our identity is deeper, more nuanced, more modern.
          </p>
          <p>
            The Lagos we inhabit is a city of concrete and glass, of traffic and technology, of ambition and creativity. It is also a city of texture — the roughness of unfinished walls, the patina of weathered metal, the warmth of earth tones under relentless sun. These are the elements that inform our design language.
          </p>
          <p>
            Our color palette draws from the landscape: the deep browns of laterite soil, the warm beiges of dried grass, the muted greys of harmattan haze. Our forms echo the architecture of modern African cities — clean lines, generous proportions, a confidence that does not need to shout.
          </p>
          <p>
            We are not trying to represent Africa. We are trying to represent ourselves — a generation of designers who grew up on this continent, educated in its schools, inspired by its complexity, and committed to creating objects that reflect our actual experience rather than someone else's fantasy.
          </p>
          <p>
            Modern African luxury is not a contradiction. It is an inevitability.
          </p>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
