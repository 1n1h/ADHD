"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  Phone,
} from "lucide-react";

function EligibilityContent() {
  const params = useSearchParams();
  const status = params.get("status") || "submitted";
  const submitted = status === "submitted";

  return (
    <div
      style={{
        minHeight: "calc(100vh - 65px)",
        background: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 16px",
      }}
    >
      <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
        {/* Icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: submitted
              ? "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)"
              : "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            boxShadow: submitted
              ? "0 8px 24px rgb(16 185 129 / 0.2)"
              : "0 8px 24px rgb(245 158 11 / 0.2)",
          }}
        >
          {submitted ? (
            <CheckCircle2 size={36} color="#15803d" />
          ) : (
            <AlertTriangle size={36} color="#b45309" />
          )}
        </div>

        {submitted ? (
          <>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Your intake has been submitted
            </h1>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "28px" }}>
              Thank you for completing your assessment. Your information has been submitted
              for clinical review by a licensed provider. You will be contacted within
              1–3 business days.
            </p>

            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "12px",
                padding: "16px 20px",
                marginBottom: "32px",
                textAlign: "left",
                fontSize: "14px",
                color: "#1e40af",
                lineHeight: "1.7",
              }}
            >
              <strong>Important:</strong> Your intake submission does not guarantee a diagnosis,
              medication, or prescription. All clinical decisions are made solely by your
              assigned licensed medical provider.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button 
                onClick={async () => {
                  try {
                    const res = await fetch("/api/checkout", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ userId: "mock-user-123" }),
                    });
                    const data = await res.json();
                    if (data.url) {
                      window.location.href = data.url;
                    } else {
                      alert("Error creating checkout session");
                    }
                  } catch (err) {
                    console.error(err);
                    alert("Checkout failed");
                  }
                }}
                className="btn btn-primary btn-lg" 
                id="proceed-to-checkout"
              >
                <ArrowRight size={18} /> Proceed to Consultation Booking ($149)
              </button>
              <Link href="/dashboard" className="btn btn-ghost" id="goto-dashboard">
                <ClipboardList size={18} /> View My Assessment Status
              </Link>
            </div>

            {/* Steps preview */}
            <div style={{ marginTop: "40px", textAlign: "left" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "16px" }}>
                What happens next
              </p>
              {[
                "A licensed provider reviews your submitted intake information.",
                "You will receive a notification with next steps.",
                "If online care is appropriate, a personalized care plan is created.",
                "Ongoing check-ins and messaging support through your dashboard.",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>{text}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 34px)",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Online care may not be the right fit
            </h1>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "28px" }}>
              Based on your answers, telehealth ADHD care may not be the safest option for
              your current situation. This does not mean care is unavailable — it means we
              want to make sure you get the right level of support.
            </p>

            <div
              style={{
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "12px",
                padding: "16px 20px",
                marginBottom: "32px",
                textAlign: "left",
                fontSize: "14px",
                color: "#92400e",
                lineHeight: "1.7",
              }}
            >
              We recommend seeking <strong>in-person evaluation</strong> with a local
              mental health professional or your primary care physician.
            </div>

            {/* Emergency notice */}
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "12px",
                padding: "16px 20px",
                marginBottom: "32px",
                textAlign: "left",
                fontSize: "14px",
                color: "#991b1b",
              }}
            >
              <strong>If you are in crisis:</strong> Please call or text <strong>988</strong> (Suicide
              &amp; Crisis Lifeline) or go to your nearest emergency room immediately.
              <div style={{ marginTop: "10px" }}>
                <a href="tel:988" className="btn btn-sm" style={{ background: "#b91c1c", color: "#fff", gap: "6px" }}>
                  <Phone size={13} /> Call 988
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/" className="btn btn-secondary" id="go-home-ineligible">
                Return to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function EligibilityPage() {
  return (
    <Suspense fallback={<div style={{ padding: "80px", textAlign: "center" }}>Loading…</div>}>
      <EligibilityContent />
    </Suspense>
  );
}
