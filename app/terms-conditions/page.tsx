import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-10 lowercase">
          terms & conditions
        </h1>
        <div className="space-y-8 text-purple-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Orders</h2>
            <p>
              All orders are subject to availability and confirmation of the order price. Items in your shopping bag are not reserved until checkout is completed. We reserve the right to refuse any order without giving reason.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Pricing</h2>
            <p>
              All prices are listed in Nigerian Naira (NGN) and include applicable taxes. Shipping costs are calculated at checkout based on destination. We reserve the right to change prices at any time without prior notice.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Payment</h2>
            <p>
              We accept payment via debit card, bank transfer, Apple Pay, Google Pay, and Paystack. Payment must be received in full before production begins. All transactions are processed securely.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including designs, images, text, and logos, is the property of selo and is protected by copyright and trademark laws. Unauthorized use is strictly prohibited.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Limitation of Liability</h2>
            <p>
              selo shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability shall not exceed the purchase price of the product in question.
            </p>
          </section>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
