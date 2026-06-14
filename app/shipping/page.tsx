import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-10 lowercase">
          shipping
        </h1>
        <div className="space-y-8 text-purple-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Production Time</h2>
            <p>
              Every selo product is made to order. Please allow up to 2 weeks for production before your order is shipped. During peak periods, this may extend slightly. We will notify you if there are any delays.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Domestic Shipping (Nigeria)</h2>
            <p>
              Standard delivery within Nigeria takes 3–5 business days after production. Express delivery is available for an additional fee. All domestic orders are shipped via trusted courier partners with tracking provided.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">International Shipping</h2>
            <p>
              We ship worldwide. International delivery typically takes 7–14 business days after production, depending on destination. Customs duties and import taxes are the responsibility of the recipient and vary by country.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Shipping Costs</h2>
            <p>
              Shipping costs are calculated at checkout based on your location and selected delivery method. Free shipping is available on orders over N300,000 within Nigeria.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Tracking</h2>
            <p>
              Once your order ships, you will receive an email with tracking information. You can use this to monitor the progress of your delivery.
            </p>
          </section>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
