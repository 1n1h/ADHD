"use client";

import Link from "next/link";
import { Users, ClipboardList, Flag, Settings, BarChart3 } from "lucide-react";

const links = [
  { href: "/admin", label: "Users & Intakes", icon: <Users size={16} />, key: "users" },
  { href: "/admin/flags", label: "Risk Flags", icon: <Flag size={16} />, key: "flags" },
  { href: "/admin/analytics", label: "Analytics", icon: <BarChart3 size={16} />, key: "analytics" },
  { href: "/admin/settings", label: "Settings", icon: <Settings size={16} />, key: "settings" },
];

export default function AdminLayout({
  children,
  active,
}: {
  children: React.ReactNode;
  active: string;
}) {
  return (
    <div className="sidebar-layout">
      <aside className="sidebar">
        <div style={{ padding: "12px 20px 8px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
            Admin
          </p>
          <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "16px" }}>Internal access only</p>
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`sidebar-link ${active === l.key ? "active" : ""}`}
            >
              {l.icon} {l.label}
            </Link>
          ))}
        </div>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
}
