"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div style={{ minHeight: "calc(100vh - 65px)", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 16px" }}>
      <div style={{ maxWidth: "480px", width: "100%", textAlign: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", boxShadow: "0 8px 24px rgb(16 185 129 / 0.2)" }}>
          <CheckCircle2 size={36} color="#15803d" />
        </div>

        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Payment Successful
        </h1>
        <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "32px" }}>
          Your payment has been processed and your intake is now in high-priority review. 
          The next step is to schedule your virtual consultation.
        </p>

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", marginBottom: "32px", textAlign: "left" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Calendar size={18} color="#2563eb" /> What's next?
          </h3>
          <ul style={{ padding: 0, margin: 0, listStyle: "none", fontSize: "14px", color: "#64748b", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#2563eb", fontWeight: 700 }}>•</span>
              Check your email for a booking link to choose your appointment time.
            </li>
            <li style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#2563eb", fontWeight: 700 }}>•</span>
              Complete your profile in the dashboard to speed up your visit.
            </li>
            <li style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#2563eb", fontWeight: 700 }}>•</span>
              A provider will review your medical history before your meeting.
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/dashboard" className="btn btn-primary btn-lg">
            Go to Dashboard <ArrowRight size={18} />
          </Link>
          <p style={{ fontSize: "13px", color: "#94a3b8" }}>
            Need help? Contact support@claritymd.com
          </p>
        </div>
      </div>
    </div>
  );
}
