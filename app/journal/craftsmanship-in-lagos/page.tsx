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
        <p className="text-purple-500 text-xs tracking-wide mb-4">February 2024</p>
        <h1 className="text-3xl tracking-wide text-purple-200 font-light mb-8">
          Craftsmanship in Lagos
        </h1>
        <div className="space-y-6 text-purple-300 text-sm leading-relaxed">
          <p>
            Lagos is a city of energy, of movement, of relentless forward motion. Within this rhythm exists a quieter world of artisans who have spent decades perfecting the art of leatherwork. Their workshops are hidden behind corrugated gates, down narrow streets, above the noise of generators and traffic.
          </p>
          <p>
            We found our first master craftsperson in a workshop no larger than a single room. The walls were lined with tools accumulated over forty years. Each had been modified, reshaped, personalized to fit a specific hand. The workbench showed the wear of countless projects, the surface polished smooth by decades of use.
          </p>
          <p>
            What struck us was not merely the skill, but the philosophy. These artisans do not measure success in units produced. They measure it in the satisfaction of the wearer, in the longevity of the object, in the quiet pride of work done well.
          </p>
          <p>
            Our workshop in Lagos is an extension of this tradition. We have combined time-honored techniques with contemporary design sensibilities, creating a space where heritage and modernity coexist. The result is footwear that carries the DNA of Nigerian craftsmanship while speaking a universal language of refined simplicity.
          </p>
          <p>
            We believe that luxury is not about exclusivity or price. It is about the integrity of the making process, the quality of materials, and the dignity of the people who create the object. In Lagos, we have found partners who share this conviction.
          </p>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
