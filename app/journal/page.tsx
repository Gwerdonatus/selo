import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const articles = [
  {
    slug: "the-art-of-slow-production",
    title: "The Art of Slow Production",
    excerpt: "In a world obsessed with speed, we choose patience. Every pair of selo shoes requires up to two weeks of careful handwork, a deliberate rejection of mass manufacturing.",
    date: "March 2024",
  },
  {
    slug: "craftsmanship-in-lagos",
    title: "Craftsmanship in Lagos",
    excerpt: "Lagos is a city of energy, of movement, of relentless forward motion. Within this rhythm exists a quieter world of artisans who have spent decades perfecting the art of leatherwork.",
    date: "February 2024",
  },
  {
    slug: "the-language-of-leather",
    title: "The Language of Leather",
    excerpt: "Leather is not merely a material. It is a living surface that records time, developing character with every step. We source only full-grain hides, selected by hand.",
    date: "January 2024",
  },
  {
    slug: "timeless-design",
    title: "Timeless Design",
    excerpt: "Trends expire. Silhouettes endure. Our design philosophy begins with a single question: will this still feel relevant in ten years? If the answer is uncertain, we return to the drawing board.",
    date: "December 2023",
  },
  {
    slug: "african-identity-modern-form",
    title: "African Identity, Modern Form",
    excerpt: "We do not borrow from elsewhere. Our aesthetic emerges from the textures, palettes, and proportions of contemporary African life, translated into objects of quiet luxury.",
    date: "November 2023",
  },
  {
    slug: "the-artisans-behind-every-stitch",
    title: "The Artisans Behind Every Stitch",
    excerpt: "Each pair passes through the hands of at least three master craftspeople. Their names do not appear on the box, but their expertise lives in every curve and seam.",
    date: "October 2023",
  },
];

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-2 lowercase">
          journal
        </h1>
        <p className="text-purple-400 text-sm mb-12">
          Thoughts on craft, design, and the slow pursuit of quality.
        </p>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.slug} className="border-b border-purple-900 pb-10">
              <p className="text-purple-500 text-xs tracking-wide mb-3">{article.date}</p>
              <h2 className="text-lg text-purple-200 tracking-wide mb-3">
                <Link
                  href={`/journal/${article.slug}`}
                  className="hover:text-purple-100 transition-colors"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-purple-300 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <Link
                href={`/journal/${article.slug}`}
                className="text-purple-400 text-xs underline underline-offset-2 hover:text-purple-200 transition-colors"
              >
                read more
              </Link>
            </article>
          ))}
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
