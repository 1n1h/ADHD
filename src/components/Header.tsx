"use client";

import Link from "next/link";
import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <span className="nav-logo-mark">
            <Brain size={18} />
          </span>
          <span className="nav-logo-text">ClarityMD</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <Link href="/#how-it-works" className="nav-link">How it Works</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
          <Link href="/legal/privacy" className="nav-link">Privacy</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="nav-links" style={{ gap: "10px" }}>
          <Link href="/dashboard" className="nav-link">Sign In</Link>
          <Link href="/assessment" className="btn btn-primary btn-sm">
            Start Free Assessment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Link href="/#how-it-works" className="nav-link" onClick={() => setMobileOpen(false)}>
            How it Works
          </Link>
          <Link href="/#faq" className="nav-link" onClick={() => setMobileOpen(false)}>
            FAQ
          </Link>
          <Link href="/legal/privacy" className="nav-link" onClick={() => setMobileOpen(false)}>
            Privacy
          </Link>
          <div className="divider" />
          <Link href="/dashboard" className="btn btn-secondary btn-sm w-full" onClick={() => setMobileOpen(false)}>
            Sign In
          </Link>
          <Link href="/assessment" className="btn btn-primary btn-sm w-full" onClick={() => setMobileOpen(false)}>
            Start Free Assessment
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-toggle { display: flex !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
