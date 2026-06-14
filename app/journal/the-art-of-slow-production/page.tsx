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
        <p className="text-purple-500 text-xs tracking-wide mb-4">March 2024</p>
        <h1 className="text-3xl tracking-wide text-purple-200 font-light mb-8">
          The Art of Slow Production
        </h1>
        <div className="space-y-6 text-purple-300 text-sm leading-relaxed">
          <p>
            In a world obsessed with speed, we choose patience. Every pair of selo shoes requires up to two weeks of careful handwork, a deliberate rejection of mass manufacturing. This is not inefficiency. It is a commitment to quality that cannot be rushed.
          </p>
          <p>
            The process begins with the selection of leather. We work with tanneries that share our values, sources that understand leather as a material with memory. Each hide is inspected by hand, assessed for grain consistency, tensile strength, and the subtle variations that make every piece unique.
          </p>
          <p>
            Pattern cutting follows, executed by master craftspeople who have spent years learning to read the material. The direction of the grain, the natural stretch of the hide, the placement of seams — these decisions determine how a shoe will feel after months of wear, not merely how it looks in a photograph.
          </p>
          <p>
            Stitching is performed on vintage machines that predate the digital age. These machines do not rush. They create seams with a tension and consistency that modern equipment, designed for volume, cannot replicate. The result is a bond between upper and sole that strengthens with time.
          </p>
          <p>
            We believe that the objects we surround ourselves with should improve with age. A selo shoe is not a disposable purchase. It is an investment in something that will develop character, that will record the path of its wearer, that will become more beautiful with every step.
          </p>
          <p>
            This philosophy extends beyond our workshop. It is a way of thinking about consumption, about the relationship between maker and owner, about the value of patience in a culture that increasingly demands instant gratification.
          </p>
          <p>
            Slow production is not nostalgia. It is a conscious choice to prioritize substance over speed, to create objects that endure, to honor the skill of the people who make them.
          </p>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
