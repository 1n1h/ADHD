"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";

// ─── Types ────────────────────────────────────────────
interface Answer {
  [key: string]: string | string[] | boolean;
}

// ─── All question steps ───────────────────────────────
const STEPS = [
  {
    id: "basics",
    title: "Let's start with basics",
    subtitle: "This information helps us route you to the right provider.",
    fields: [
      { key: "age", label: "How old are you?", type: "number", placeholder: "Your age", required: true },
      {
        key: "state",
        label: "Which state do you live in?",
        type: "select",
        required: true,
        options: [
          "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
          "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
          "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
          "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
          "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
          "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
          "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
        ],
      },
    ],
  },
  {
    id: "concerns",
    title: "What brings you here?",
    subtitle: "Select all that apply to your daily experience.",
    fields: [
      {
        key: "mainConcerns",
        label: "Main concerns",
        type: "multi-select",
        required: true,
        options: [
          "Difficulty focusing",
          "Impulsivity",
          "Forgetfulness",
          "Difficulty with organization",
          "Restlessness or hyperactivity",
          "Trouble completing tasks",
          "Poor time management",
          "Emotional dysregulation",
        ],
      },
      {
        key: "symptomDuration",
        label: "How long have you experienced these symptoms?",
        type: "radio",
        required: true,
        options: ["Less than 6 months","6–12 months","1–5 years","More than 5 years","Since childhood"],
      },
    ],
  },
  {
    id: "history",
    title: "Your ADHD history",
    subtitle: "Help us understand your background.",
    fields: [
      {
        key: "priorDiagnosis",
        label: "Have you ever been diagnosed with ADHD?",
        type: "radio",
        required: true,
        options: ["Yes, by a doctor or psychiatrist","Yes, self-diagnosed","No","Not sure"],
      },
      {
        key: "currentMedications",
        label: "Are you currently taking any medications?",
        type: "textarea",
        placeholder: "List any current medications, or write 'None'",
        required: true,
      },
      {
        key: "pharmacyPreference",
        label: "Preferred pharmacy (name and city, or mail-order)",
        type: "text",
        placeholder: "e.g. CVS – Miami, FL",
        required: false,
      },
    ],
  },
  {
    id: "medical",
    title: "Medical & mental health",
    subtitle: "We ask these for your safety and to guide your provider's review.",
    fields: [
      {
        key: "medicalHistory",
        label: "Do you have any significant medical conditions?",
        type: "textarea",
        placeholder: "e.g. diabetes, asthma, thyroid condition, or 'None'",
        required: true,
      },
      {
        key: "mentalHealthHistory",
        label: "Any mental health history we should know about?",
        type: "textarea",
        placeholder: "e.g. anxiety, depression, bipolar disorder, or 'None'",
        required: true,
      },
      {
        key: "heartHistory",
        label: "Do you have a history of heart conditions or high blood pressure?",
        type: "radio",
        required: true,
        options: ["Yes","No","Not sure"],
      },
      {
        key: "pregnancyStatus",
        label: "Are you currently pregnant, trying to become pregnant, or breastfeeding?",
        type: "radio",
        required: true,
        options: ["Yes","No","Not applicable"],
      },
    ],
  },
  {
    id: "safety",
    title: "Safety screening",
    subtitle: "These questions ensure we route you to the safest level of care.",
    fields: [
      {
        key: "substanceUse",
        label: "In the past 12 months, have you used recreational drugs or misused alcohol?",
        type: "radio",
        required: true,
        options: ["No","Occasionally","Regularly","Prefer not to say"],
      },
      {
        key: "suicidalIdeation",
        label: "Are you currently experiencing thoughts of harming yourself or others?",
        type: "radio",
        required: true,
        options: ["No","Yes"],
      },
      {
        key: "emergencySymptoms",
        label: "Are you currently experiencing a psychiatric emergency (psychosis, severe mania, or crisis)?",
        type: "radio",
        required: true,
        options: ["No","Yes"],
      },
      {
        key: "allergies",
        label: "Do you have any known drug allergies?",
        type: "textarea",
        placeholder: "List any drug allergies, or write 'None'",
        required: true,
      },
    ],
  },
  {
    id: "consent",
    title: "Almost done — consent & review",
    subtitle: "Please review and confirm the following before submitting.",
    fields: [
      {
        key: "consentTreatment",
        label: "I understand that completing this assessment does not guarantee a diagnosis, medication, or prescription. All treatment decisions are made solely by licensed medical providers.",
        type: "checkbox",
        required: true,
      },
      {
        key: "consentHIPAA",
        label: "I consent to the collection and secure storage of my health information in accordance with ClarityMD's Privacy Policy and HIPAA Notice.",
        type: "checkbox",
        required: true,
      },
      {
        key: "consentTelehealth",
        label: "I consent to receive telehealth services and understand the limitations of remote care.",
        type: "checkbox",
        required: true,
      },
      {
        key: "consentAge",
        label: "I confirm I am 18 years of age or older.",
        type: "checkbox",
        required: true,
      },
    ],
  },
];

// ─── Risk flag logic (non-clinical) ─────────────────────
function computeFlags(answers: Answer): string[] {
  const flags: string[] = [];
  const age = parseInt(answers.age as string, 10);
  if (!isNaN(age) && age < 18) flags.push("under_18");
  if (answers.heartHistory === "Yes") flags.push("heart_history");
  if (answers.pregnancyStatus === "Yes") flags.push("pregnancy");
  if (answers.suicidalIdeation === "Yes") flags.push("suicidal_ideation");
  if (answers.emergencySymptoms === "Yes") flags.push("psychiatric_emergency");
  if (answers.substanceUse === "Regularly") flags.push("substance_misuse_risk");
  return flags;
}

// ─── Component helpers ───────────────────────────────────
function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
          Step {step} of {total}
        </span>
        <span style={{ fontSize: "13px", color: "#2563eb", fontWeight: 700 }}>{pct}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      {/* Dot indicators */}
      <div className="step-indicators" style={{ marginTop: "12px" }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`step-indicator-dot ${i + 1 < step ? "done" : ""} ${i + 1 === step ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: (typeof STEPS)[0]["fields"][0];
  value: string | string[] | boolean;
  onChange: (val: string | string[] | boolean) => void;
}) {
  const v = value as string;
  const vArr = (value as string[]) || [];
  const vBool = value as boolean;

  if (field.type === "text" || field.type === "number") {
    return (
      <div className="form-group">
        <label className="form-label" htmlFor={field.key}>{field.label}</label>
        <input
          id={field.key}
          className="form-input"
          type={field.type}
          placeholder={(field as { placeholder?: string }).placeholder || ""}
          value={v || ""}
          onChange={(e) => onChange(e.target.value)}
          min={field.type === "number" ? 1 : undefined}
          max={field.type === "number" ? 120 : undefined}
        />
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div className="form-group">
        <label className="form-label" htmlFor={field.key}>{field.label}</label>
        <select
          id={field.key}
          className="form-select"
          value={v || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select a state…</option>
          {(field as { options: string[] }).options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="form-group">
        <label className="form-label" htmlFor={field.key}>{field.label}</label>
        <textarea
          id={field.key}
          className="form-textarea"
          placeholder={(field as { placeholder?: string }).placeholder || ""}
          value={v || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }

  if (field.type === "radio") {
    return (
      <div className="form-group">
        <label className="form-label">{field.label}</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
          {(field as { options: string[] }).options.map((opt) => (
            <label key={opt} className={`option-card ${v === opt ? "selected" : ""}`}>
              <input
                type="radio"
                name={field.key}
                value={opt}
                checked={v === opt}
                onChange={() => onChange(opt)}
              />
              <span className="option-card-label">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "multi-select") {
    const toggle = (opt: string) => {
      const next = vArr.includes(opt)
        ? vArr.filter((x) => x !== opt)
        : [...vArr, opt];
      onChange(next);
    };
    return (
      <div className="form-group">
        <label className="form-label">{field.label}</label>
        <p className="form-hint" style={{ marginBottom: "8px" }}>Select all that apply</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
          {(field as { options: string[] }).options.map((opt) => (
            <label key={opt} className={`option-card ${vArr.includes(opt) ? "selected" : ""}`}>
              <input
                type="checkbox"
                checked={vArr.includes(opt)}
                onChange={() => toggle(opt)}
              />
              <span className="option-card-label">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "checkbox") {
    return (
      <label className="checkbox-row" style={{ padding: "14px 18px", border: `1.5px solid ${vBool ? "#2563eb" : "#e2e8f0"}`, borderRadius: "8px", background: vBool ? "#eff6ff" : "#fff", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={vBool || false}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="checkbox-label" style={{ fontSize: "14px", color: "#334155" }}>
          {field.label}
        </span>
      </label>
    );
  }

  return null;
}

// ─── Main page ────────────────────────────────────────────
export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const currentStep = STEPS[step];
  const total = STEPS.length;

  function setAnswer(key: string, val: string | string[] | boolean) {
    setAnswers((prev) => ({ ...prev, [key]: val }));
    setErrors((prev) => prev.filter((e) => e !== key));
  }

  function validate(): boolean {
    const missing: string[] = [];
    for (const field of currentStep.fields) {
      if (!field.required) continue;
      const val = answers[field.key];
      if (field.type === "checkbox" && !val) { missing.push(field.key); continue; }
      if (field.type === "multi-select" && (!val || (val as string[]).length === 0)) { missing.push(field.key); continue; }
      if (!val || (typeof val === "string" && val.trim() === "")) missing.push(field.key);
    }
    setErrors(missing);
    return missing.length === 0;
  }

  function next() {
    if (!validate()) return;
    if (step < total - 1) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleSubmit();
    }
  }

  function back() {
    if (step > 0) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    const flags = computeFlags(answers);
    // In production: POST to API route → InsForge DB
    await new Promise((r) => setTimeout(r, 1500));
    const hasHighRisk =
      flags.includes("suicidal_ideation") ||
      flags.includes("psychiatric_emergency") ||
      flags.includes("under_18");
    router.push(
      `/eligibility?status=${hasHighRisk ? "ineligible" : "submitted"}&flags=${flags.join(",")}`
    );
  }

  return (
    <div style={{ minHeight: "calc(100vh - 65px)", background: "#f8fafc", padding: "48px 0" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 16px" }}>
        {/* Progress */}
        <div className="card" style={{ marginBottom: "24px" }}>
          <ProgressBar step={step + 1} total={total} />
        </div>

        {/* Disclaimer */}
        <div className="disclaimer" style={{ marginBottom: "20px", fontSize: "12px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <AlertCircle size={13} style={{ flexShrink: 0, marginTop: "2px" }} />
            Completing this assessment does not guarantee a diagnosis, medication, or prescription.
            Treatment decisions are made only by licensed medical providers after clinical evaluation.
          </div>
        </div>

        {/* Step card */}
        <div className="card animate-fade-in" key={step}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>
            {currentStep.title}
          </h2>
          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "28px" }}>
            {currentStep.subtitle}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {currentStep.fields.map((field) => (
              <div key={field.key}>
                <FieldRenderer
                  field={field}
                  value={answers[field.key] as string | string[] | boolean}
                  onChange={(val) => setAnswer(field.key, val)}
                />
                {errors.includes(field.key) && (
                  <p className="form-error" style={{ marginTop: "6px" }}>
                    This field is required.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <button
              className="btn btn-ghost"
              onClick={back}
              disabled={step === 0}
              id="assessment-back"
              style={{ opacity: step === 0 ? 0.3 : 1 }}
            >
              <ChevronLeft size={16} /> Back
            </button>

            <button
              className="btn btn-primary"
              onClick={next}
              disabled={submitting}
              id="assessment-next"
            >
              {submitting ? (
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
                  Submitting…
                </span>
              ) : step === total - 1 ? (
                <>
                  <CheckCircle2 size={16} /> Submit Assessment
                </>
              ) : (
                <>
                  Continue <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
