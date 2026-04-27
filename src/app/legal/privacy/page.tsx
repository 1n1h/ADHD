import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy – ClarityMD" };

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>Privacy Policy</h1>
      <p style={{ color: "#64748b", marginBottom: "40px" }}>Last updated: April 26, 2026</p>

      {[
        {
          title: "1. Information We Collect",
          body: `We collect the information you provide during registration and the intake assessment, including your name, email address, date of birth, state of residence, medical history, and responses to our clinical screening questions.`,
        },
        {
          title: "2. How We Use Your Information",
          body: `Your information is used to facilitate clinical review by licensed providers, to communicate with you about your care, and to process payments. We do not sell your personal health information.`,
        },
        {
          title: "3. HIPAA Compliance",
          body: `We treat your health information as Protected Health Information (PHI) under HIPAA guidelines. We implement administrative, physical, and technical safeguards to protect your PHI.`,
        },
        {
          title: "4. Data Security",
          body: `All data is encrypted in transit (TLS) and at rest. Access to PHI is restricted to authorized personnel and your assigned licensed provider.`,
        },
        {
          title: "5. Third-Party Services",
          body: `We use Stripe for payment processing. Stripe is PCI-DSS compliant and does not have access to your health information. We may use HIPAA-compliant third-party telehealth partners for provider matchmaking.`,
        },
        {
          title: "6. Data Retention",
          body: `We retain your health records in accordance with applicable state and federal law. You may request deletion of your account subject to legal retention requirements.`,
        },
        {
          title: "7. Your Rights",
          body: `You have the right to access, correct, or request deletion of your personal information. Contact us at privacy@claritymd.com to exercise these rights.`,
        },
      ].map((section) => (
        <div key={section.title} style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{section.title}</h2>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.8" }}>{section.body}</p>
        </div>
      ))}
    </div>
  );
}
