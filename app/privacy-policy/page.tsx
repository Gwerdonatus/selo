import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-10 lowercase">
          privacy policy
        </h1>
        <div className="space-y-8 text-purple-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including your name, email address, shipping address, phone number, and payment details. We also collect information about your browsing behavior on our website.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">How We Use Your Information</h2>
            <p>
              Your information is used to process orders, communicate with you about your purchases, improve our website and products, and send you updates about selo if you have opted in to receive them.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. Payment processing is handled by secure third-party providers. We do not store your full payment card details on our servers.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Third Parties</h2>
            <p>
              We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as shipping partners and payment processors.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@selo.com.
            </p>
          </section>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
