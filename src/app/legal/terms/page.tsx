import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use – ClarityMD" };

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>Terms of Use</h1>
      <p style={{ color: "#64748b", marginBottom: "40px" }}>Last updated: April 26, 2026</p>

      {[
        {
          title: "1. Acceptance of Terms",
          body: `By accessing or using ClarityMD ("the Service"), you agree to be bound by these Terms of Use. If you do not agree, do not use the Service.`,
        },
        {
          title: "2. Not a Medical Provider",
          body: `ClarityMD is a technology platform that facilitates connections between patients and independent licensed medical providers. ClarityMD does not practice medicine, does not employ physicians, and does not provide medical advice, diagnoses, or prescriptions directly.`,
        },
        {
          title: "3. No Guaranteed Treatment",
          body: `Completing an assessment on this platform does not guarantee a diagnosis, medication, controlled substance prescription, or any specific treatment. All clinical decisions are made solely at the discretion of your assigned licensed provider following a complete clinical evaluation.`,
        },
        {
          title: "4. Controlled Substances",
          body: `ClarityMD does not guarantee, promise, or imply that controlled substances will be prescribed. Prescribing decisions for Schedule II controlled substances (including stimulant medications) are made exclusively by licensed physicians in compliance with applicable state and federal law.`,
        },
        {
          title: "5. User Responsibilities",
          body: `You agree to provide accurate, truthful information in your intake assessment. Providing false information may result in account termination and may pose a risk to your safety.`,
        },
        {
          title: "6. Subscription & Payments",
          body: `ClarityMD membership plans are billed monthly via Stripe. You may cancel at any time. Refund eligibility is governed by our refund policy, available upon request.`,
        },
        {
          title: "7. Limitation of Liability",
          body: `To the maximum extent permitted by law, ClarityMD and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.`,
        },
        {
          title: "8. Changes to Terms",
          body: `We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance.`,
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
