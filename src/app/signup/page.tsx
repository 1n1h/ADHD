"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Lock, User, ShieldCheck } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  return (
    <div style={{ minHeight: "calc(100vh - 65px)", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ maxWidth: "420px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ width: 48, height: 48, background: "#2563eb", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#fff", boxShadow: "0 8px 16px rgba(37, 99, 235, 0.2)" }}>
            <ShieldCheck size={24} />
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", marginBottom: "8px", letterSpacing: "-0.02em" }}>
            Create your account
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Start your journey to clarity today.
          </p>
        </div>

        <div className="card" style={{ padding: "32px" }}>
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/assessment"; }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: "13px" }}>Full Name</label>
              <div style={{ position: "relative" }}>
                <User size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="John Doe" 
                  style={{ paddingLeft: "42px" }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: "13px" }}>Email Address</label>
              <div style={{ position: "relative" }}>
                <Mail size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="name@example.com" 
                  style={{ paddingLeft: "42px" }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: "13px" }}>Password</label>
              <div style={{ position: "relative" }}>
                <Lock size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input 
                  type="password" 
                  className="form-input" 
                  placeholder="••••••••" 
                  style={{ paddingLeft: "42px" }}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "8px" }}>
                Must be at least 8 characters.
              </p>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: "8px" }}>
              Continue to Assessment <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ marginTop: "24px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>
              Sign in
            </Link>
          </div>
        </div>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
            By signing up, you agree to our <Link href="/legal/terms" style={{ color: "#64748b", textDecoration: "underline" }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: "#64748b", textDecoration: "underline" }}>Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
