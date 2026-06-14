import Navbar from "@/components/Navbar";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import Footer from "@/components/Footer";
import { allProducts, getProductBySlug } from "@/app/lib/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#1a0a2e]">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <p className="text-purple-300">Product not found</p>
        </div>
        <Footer links={footerLinks} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[58%]">
            <ProductGallery images={product.images} productName={product.name} />
          </div>
          <div className="w-full lg:w-[42%]">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
