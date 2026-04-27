import type { Metadata } from "next";

export const metadata: Metadata = { title: "HIPAA Notice – ClarityMD" };

export default function HipaaPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px" }}>
      <div className="badge badge-blue" style={{ marginBottom: "20px" }}>Placeholder Document</div>
      <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>HIPAA Notice of Privacy Practices</h1>
      <p style={{ color: "#64748b", marginBottom: "40px" }}>Last updated: April 26, 2026</p>
      <div className="disclaimer" style={{ marginBottom: "32px" }}>
        This is a placeholder for ClarityMD's HIPAA Notice of Privacy Practices. This document will be
        reviewed and finalized by a licensed healthcare attorney prior to launch.
      </div>
      <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.8", marginBottom: "20px" }}>
        ClarityMD is committed to protecting your health information. As a covered entity or business
        associate under the Health Insurance Portability and Accountability Act of 1996 (HIPAA), we are
        required to provide you with this Notice of Privacy Practices.
      </p>
      <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.8" }}>
        This notice describes how medical information about you may be used and disclosed and how you can
        get access to this information. Please review it carefully.
      </p>
      <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.8", marginTop: "20px" }}>
        For questions about this notice, contact: <strong>privacy@claritymd.com</strong>
      </p>
    </div>
  );
}
