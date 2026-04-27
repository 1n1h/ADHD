import Link from "next/link";
import {
  ClipboardList,
  UserCheck,
  HeartPulse,
  RefreshCcw,
  Star,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const steps = [
  {
    icon: <ClipboardList size={22} />,
    title: "Free Assessment",
    desc: "Complete our comprehensive intake questionnaire — private, secure, and takes about 10 minutes.",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Provider Review",
    desc: "A licensed medical provider carefully reviews your responses and clinical history.",
  },
  {
    icon: <HeartPulse size={22} />,
    title: "Personalized Care Plan",
    desc: "If clinically appropriate, you receive a tailored ADHD care plan from your provider.",
  },
  {
    icon: <RefreshCcw size={22} />,
    title: "Ongoing Support",
    desc: "Stay connected with your care team through follow-ups, messages, and check-ins.",
  },
];

const features = [
  { icon: <Shield size={18} />, text: "HIPAA-conscious design" },
  { icon: <UserCheck size={18} />, text: "Licensed providers only" },
  { icon: <Clock size={18} />, text: "Fast, convenient access" },
  { icon: <Star size={18} />, text: "No diagnosis without evaluation" },
];

const faqs = [
  {
    q: "Will I be guaranteed a prescription?",
    a: "No. ClarityMD does not guarantee any prescription or medication. All treatment decisions, including whether any medication is appropriate, are made exclusively by a licensed medical provider after a thorough clinical evaluation of your intake information.",
  },
  {
    q: "Is my information kept private?",
    a: "Yes. Your health information is stored securely and handled in accordance with HIPAA guidelines. We use encryption in transit and at rest, and we never sell your personal health data.",
  },
  {
    q: "What states do you currently support?",
    a: "We are actively expanding our network. Supported states are verified during the intake process. If telehealth care is not available in your state, we will direct you to appropriate in-person resources.",
  },
  {
    q: "How long does the provider review take?",
    a: "Most patients receive a response from their assigned provider within 1–3 business days of submitting their completed intake.",
  },
  {
    q: "What if I'm flagged as ineligible for online care?",
    a: "Some health histories require in-person evaluation for safety reasons. If that applies to you, we will inform you clearly and provide guidance on finding local or in-person care.",
  },
  {
    q: "Do you offer controlled substance prescriptions automatically?",
    a: "Absolutely not. Controlled substances, if ever clinically warranted, are prescribed solely at the discretion of a licensed physician following a complete clinical evaluation. ClarityMD never automatically recommends controlled substances.",
  },
];



export default function HomePage() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
            <div className="animate-fade-up">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "24px",
                  border: "1px solid #bfdbfe",
                }}
              >
                <CheckCircle2 size={13} />
                Clinician-reviewed care
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontSize: "clamp(36px, 6vw, 60px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "20px",
                color: "#0f172a",
              }}
            >
              ADHD care,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                built around you
              </span>
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: "18px",
                color: "#475569",
                lineHeight: "1.7",
                marginBottom: "36px",
              }}
            >
              Start with a free, private ADHD assessment. Our licensed providers
              review your information and work with you on a personalized care plan
              — no guesswork, no pressure.
            </p>

            <div
              className="animate-fade-up delay-300"
              style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
            >
              <Link href="/assessment" className="btn btn-primary btn-lg" id="hero-cta">
                Start Free Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/#how-it-works" className="btn btn-secondary btn-lg">
                How It Works
              </Link>
            </div>

            {/* Disclaimer */}
            <div
              className="animate-fade-up delay-400"
              style={{ marginTop: "28px" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <AlertCircle size={12} />
                Prescription treatment is only available if clinically appropriate after review by a
                licensed provider.
              </p>
            </div>
          </div>

          {/* Feature pills */}
          <div
            className="animate-fade-up delay-500"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              marginTop: "56px",
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#334155",
                  boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)",
                }}
              >
                <span style={{ color: "#2563eb" }}>{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ───────────────────────── */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
              Simple process
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              How ClarityMD works
            </h2>
            <p style={{ fontSize: "17px", color: "#475569", marginTop: "14px", maxWidth: "480px", margin: "14px auto 0" }}>
              Four steps from assessment to ongoing support, guided by real providers.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="card"
                style={{
                  textAlign: "center",
                  position: "relative",
                  padding: "36px 28px",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)",
                    border: "1px solid #bfdbfe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "#2563eb",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: 28,
                    height: 28,
                    background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 800,
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.65" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer box */}
          <div className="disclaimer" style={{ marginTop: "40px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <AlertCircle size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>
                <strong>Completing this assessment does not guarantee a diagnosis, medication, or prescription.</strong>{" "}
                Treatment decisions are made only by licensed medical providers after clinical evaluation.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST SOCIAL PROOF ─────────────────── */}
      <section style={{ background: "#f8fafc", padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Why patients choose ClarityMD
            </h2>
          </div>
          <div className="grid-3">
            {[
              {
                title: "No automatic prescriptions",
                desc: "Every care decision is made by a licensed provider after reviewing your complete health profile.",
                color: "#2563eb",
              },
              {
                title: "Secure & private",
                desc: "Your health data is encrypted and handled with HIPAA-conscious practices throughout.",
                color: "#06b6d4",
              },
              {
                title: "Comprehensive intake",
                desc: "Our thorough assessment helps ensure provider review is informed, safe, and clinically appropriate.",
                color: "#10b981",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ borderTop: `3px solid ${item.color}` }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────── */}
      <section className="section" id="faq">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
              Common questions
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Frequently asked questions
            </h2>
          </div>

          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ─── CTA BOTTOM ─────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #0e7490 100%)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Ready to take the first step?
          </h2>
          <p style={{ fontSize: "17px", color: "#bfdbfe", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
            Start your free ADHD assessment today. No commitment, no pressure.
          </p>
          <Link href="/assessment" className="btn btn-lg" id="bottom-cta"
            style={{
              background: "#fff",
              color: "#1d4ed8",
              fontWeight: 700,
            }}
          >
            Start Free Assessment <ArrowRight size={18} />
          </Link>
          <p style={{ marginTop: "20px", fontSize: "12px", color: "#93c5fd" }}>
            Prescription treatment is only available if clinically appropriate after review by a licensed provider.
          </p>
        </div>
      </section>
    </>
  );
}


