import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = { title: "Controlled Substances Disclaimer – ClarityMD" };

export default function ControlledSubstancesPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <AlertTriangle size={20} color="#b45309" />
        <span style={{ fontSize: "14px", fontWeight: 700, color: "#b45309" }}>
          Important Compliance Notice
        </span>
      </div>
      <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>
        Controlled Substances Disclaimer
      </h1>
      <p style={{ color: "#64748b", marginBottom: "40px" }}>Last updated: April 26, 2026</p>

      <div
        className="disclaimer disclaimer-warning"
        style={{ marginBottom: "36px", fontSize: "15px" }}
      >
        <strong>ClarityMD does not guarantee, promise, or imply that any controlled substance will
        be prescribed.</strong> All prescribing decisions are made exclusively by licensed physicians
        after a complete clinical evaluation, in compliance with state and federal law.
      </div>

      {[
        {
          title: "Our Policy on Controlled Substances",
          body: `ClarityMD is a technology platform, not a prescriber. We do not make any prescribing decisions. If a licensed provider, after a thorough clinical evaluation, determines that a controlled substance is medically appropriate for a patient, that decision is made independently by the physician in accordance with their professional judgment and applicable law.`,
        },
        {
          title: "Ryan Haight Act Compliance",
          body: `ClarityMD and its affiliated provider partners are committed to full compliance with the Ryan Haight Online Pharmacy Consumer Protection Act and DEA regulations governing the prescribing of controlled substances via telemedicine.`,
        },
        {
          title: "State Law Compliance",
          body: `Prescribing practices vary by state. Providers available through ClarityMD are licensed in the states where they practice and comply with applicable state medical board regulations.`,
        },
        {
          title: "No Guarantee of Stimulant Prescriptions",
          body: `Completing this assessment does not entitle you to receive stimulant medications (such as Adderall, Ritalin, Vyvanse, or similar). Such medications are Schedule II controlled substances and are subject to the strictest prescribing standards. A provider may recommend non-stimulant alternatives or in-person evaluation instead.`,
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
