import Link from "next/link";
import { Brain, Shield, Lock, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#94a3b8",
        paddingTop: "64px",
        paddingBottom: "40px",
        marginTop: "auto",
      }}
    >
      <div className="container">
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid #1e293b",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Brain size={18} color="#fff" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc" }}>ClarityMD</span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.7", maxWidth: "280px" }}>
              ADHD care built around you. Connecting patients with licensed providers
              for personalized, responsible mental healthcare.
            </p>
            <div
              style={{
                marginTop: "20px",
                padding: "12px 16px",
                background: "#1e293b",
                borderRadius: "10px",
                fontSize: "12px",
                lineHeight: "1.6",
                color: "#64748b",
              }}
            >
              <strong style={{ color: "#94a3b8" }}>Medical Disclaimer:</strong> ClarityMD is not a
              pharmacy and does not prescribe medications. Treatment decisions are made solely by
              licensed medical providers after clinical evaluation.
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
              Company
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "How it Works", href: "/#how-it-works" },
                { label: "FAQ", href: "/#faq" },
                { label: "Dashboard", href: "/dashboard" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "#94a3b8", fontSize: "14px", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
              Legal
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Terms of Use", href: "/legal/terms" },
                { label: "Privacy Policy", href: "/legal/privacy" },
                { label: "HIPAA Notice", href: "/legal/hipaa" },
                { label: "Telehealth Consent", href: "/legal/telehealth-consent" },
                { label: "Controlled Substances", href: "/legal/controlled-substances" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "#94a3b8", fontSize: "14px", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div>
            <h4 style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
              Trust &amp; Safety
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: <Shield size={14} />, text: "HIPAA-Conscious" },
                { icon: <Lock size={14} />, text: "Encrypted Data" },
                { icon: <FileText size={14} />, text: "Licensed Providers" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                  <span style={{ color: "#3b82f6" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px" }}>
            © {new Date().getFullYear()} ClarityMD. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", maxWidth: "560px", textAlign: "right", lineHeight: "1.6" }}>
            Completing this assessment does not guarantee a diagnosis, medication, or prescription.
            Treatment decisions are made only by licensed medical providers after clinical evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
}
