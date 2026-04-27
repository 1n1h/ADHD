import type { Metadata } from "next";

export const metadata: Metadata = { title: "Telehealth Consent – ClarityMD" };

export default function TelehealthConsentPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px" }}>
      <div className="badge badge-blue" style={{ marginBottom: "20px" }}>Placeholder Document</div>
      <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>Consent to Telehealth Services</h1>
      <p style={{ color: "#64748b", marginBottom: "40px" }}>Last updated: April 26, 2026</p>
      <div className="disclaimer" style={{ marginBottom: "32px" }}>
        This is a placeholder Telehealth Consent document. It will be finalized with legal counsel prior to launch.
      </div>
      {[
        {
          title: "What is Telehealth?",
          body: `Telehealth involves the use of electronic communications to enable healthcare providers to share patient information for the purpose of improving patient care. Telehealth may include interactive audio, video, and/or data communications.`,
        },
        {
          title: "Benefits & Risks",
          body: `Benefits include improved access to care and convenience. Risks include potential technical failures, limitations in physical examination, and the possibility that the provider may determine that telehealth is not appropriate for your specific situation.`,
        },
        {
          title: "Your Rights",
          body: `You have the right to withhold or withdraw consent to the use of telehealth services at any time without affecting your right to future care. You may request an in-person appointment at any time.`,
        },
        {
          title: "Confidentiality",
          body: `The laws that protect confidentiality of your medical information also apply to telehealth. No information obtained in the use of telehealth, which identifies you, will be disclosed to researchers or other entities without your consent.`,
        },
      ].map((s) => (
        <div key={s.title} style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{s.title}</h2>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.8" }}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
