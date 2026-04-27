"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Lock, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ minHeight: "calc(100vh - 65px)", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ maxWidth: "420px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ width: 48, height: 48, background: "#2563eb", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#fff", boxShadow: "0 8px 16px rgba(37, 99, 235, 0.2)" }}>
            <ShieldCheck size={24} />
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", marginBottom: "8px", letterSpacing: "-0.02em" }}>
            Welcome back
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Access your ClarityMD patient portal.
          </p>
        </div>

        <div className="card" style={{ padding: "32px" }}>
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: "13px" }}>Email Address</label>
              <div style={{ position: "relative" }}>
                <Mail size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="name@example.com" 
                  style={{ paddingLeft: "42px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <label className="form-label" style={{ margin: 0, fontSize: "13px" }}>Password</label>
                <Link href="#" style={{ fontSize: "12px", fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>Forgot password?</Link>
              </div>
              <div style={{ position: "relative" }}>
                <Lock size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input 
                  type="password" 
                  className="form-input" 
                  placeholder="••••••••" 
                  style={{ paddingLeft: "42px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: "8px" }}>
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ marginTop: "24px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>
            Don't have an account?{" "}
            <Link href="/signup" style={{ fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>
              Get started
            </Link>
          </div>
        </div>

        <div style={{ marginTop: "32px", display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", opacity: 0.6 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" style={{ height: "20px" }} />
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", borderLeft: "1px solid #e2e8f0", paddingLeft: "24px" }}>
            HIPAA COMPLIANT
          </div>
        </div>
      </div>
    </div>
  );
}
