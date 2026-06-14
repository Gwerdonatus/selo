import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping", href: "/shipping" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Report abuse", href: "/report-abuse" },
];

export default function ReportAbusePage() {
  return (
    <main className="min-h-screen bg-[#1a0a2e]">
      <Navbar />
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-2xl tracking-wide text-purple-200 font-light mb-10 lowercase">
          report abuse
        </h1>
        <div className="space-y-8 text-purple-300 text-sm leading-relaxed">
          <p>
            selo is committed to maintaining a safe and respectful environment for all our customers, partners, and team members. If you have encountered behavior, content, or activity that violates our standards, we encourage you to report it.
          </p>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">What to Report</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Fraudulent activity or scams</li>
              <li>Counterfeit products claiming to be selo</li>
              <li>Harassment or abusive behavior by representatives</li>
              <li>Unauthorized use of our intellectual property</li>
              <li>Any other concern about our business practices</li>
            </ul>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">How to Report</h2>
            <p>
              Please send a detailed description of the incident to abuse@selo.com. Include any relevant evidence, such as screenshots, order numbers, or correspondence. We treat all reports confidentially and will respond within 48 hours.
            </p>
          </section>
          <section>
            <h2 className="text-purple-200 tracking-wide mb-3">Our Response</h2>
            <p>
              Every report is taken seriously and investigated thoroughly. We will take appropriate action based on our findings, which may include account suspension, legal action, or policy changes. We will inform you of the outcome where possible.
            </p>
          </section>
        </div>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
}
