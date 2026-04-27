"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            id={`faq-question-${i}`}
            aria-expanded={open === i}
          >
            {faq.q}
            {open === i ? (
              <ChevronUp size={18} style={{ color: "#2563eb", flexShrink: 0 }} />
            ) : (
              <ChevronDown size={18} style={{ color: "#94a3b8", flexShrink: 0 }} />
            )}
          </button>
          {open === i && (
            <div className="faq-answer animate-fade-in">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
