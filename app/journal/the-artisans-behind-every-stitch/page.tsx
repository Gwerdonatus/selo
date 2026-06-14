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
        <p className="text-purple-500 text-xs tracking-wide mb-4">October 2023</p>
        <h1 className="text-3xl tracking-wide text-purple-200 font-light mb-8">
          The Artisans Behind Every Stitch
        </h1>
        <div className="space-y-6 text-purple-300 text-sm leading-relaxed">
          <p>
            Each pair passes through the hands of at least three master craftspeople. Their names do not appear on the box, but their expertise lives in every curve and seam.
          </p>
          <p>
            There is the cutter, who reads the leather like a map, identifying the best sections for each component. This requires an understanding of grain direction, of natural stretch, of how the material will behave after months of wear. A miscalculation at this stage cannot be corrected later.
          </p>
          <p>
            There is the stitcher, who operates machines that require a physical relationship between hand and material. The speed must be controlled, the tension adjusted, the alignment maintained across hundreds of stitches. This is not automation. It is a conversation between human and machine.
          </p>
          <p>
            There is the finisher, who performs the final assembly, attaching sole to upper, inspecting every millimeter for imperfection. This person has the authority to reject a shoe that does not meet our standards, regardless of the time already invested. Quality is the only metric that matters.
          </p>
          <p>
            These individuals have trained for years to reach this level of skill. They have learned from mentors who learned from mentors, a chain of knowledge stretching back generations. We honor this lineage by paying fair wages, providing safe working conditions, and treating their craft with the respect it deserves.
          </p>
          <p>
            When you wear a selo shoe, you are wearing the accumulated expertise of many hands. This is the true meaning of luxury — not a logo, not a price tag, but the invisible presence of people who cared enough to do the work properly.
          </p>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
