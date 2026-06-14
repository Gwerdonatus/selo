import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { allProducts } from "@/app/lib/products";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function ShopPage() {
  const products = allProducts.map((p) => ({
    id: p.slug,
    slug: p.slug,
    name: p.name,
    price: p.price,
    image: p.image,
  }));

  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="pt-4 pb-16">
        <ProductGrid products={products} />
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
