import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function ReturnPage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-10 lowercase">
          return policy
        </h1>
        <div className="space-y-8 text-purple-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Our Commitment</h2>
            <p>
              We want you to be completely satisfied with your selo purchase. If for any reason you are not, we offer returns and exchanges under the conditions outlined below.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Return Window</h2>
            <p>
              Items may be returned within 14 days of delivery. The item must be unworn, in its original condition, and with all packaging intact. Made-to-order items are eligible for exchange or store credit only.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">How to Return</h2>
            <p>
              To initiate a return, please contact us at hello@selo.com with your order number and reason for return. We will provide you with a return authorization and shipping instructions. Returns sent without authorization may not be accepted.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Refunds</h2>
            <p>
              Once we receive and inspect your return, we will process your refund within 7 business days. Refunds are issued to the original payment method. Shipping costs are non-refundable unless the return is due to a defect or error on our part.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Exchanges</h2>
            <p>
              If you need a different size, we offer exchanges subject to availability. Please contact us within 7 days of delivery to arrange an exchange. The customer is responsible for return shipping; we cover the cost of shipping the replacement.
            </p>
          </section>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
