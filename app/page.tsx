import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const heroImages = [
  {
    src: "/images/hero.jpg",
    alt: "selo accessories collection",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "selo accessories collection",
  },
];

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="flex flex-col items-center pt-6 pb-10">
        <h1 className="text-3xl md:text-4xl tracking-[0.2em] text-purple-200 font-light lowercase">
          sẹlo
        </h1>
        <p className="text-xs tracking-[0.4em] text-purple-400 mt-2 uppercase">
          accessories
        </p>
      </div>
      <Hero images={heroImages} />
      <Footer links={footerLinks} />
    </main>
  );
}