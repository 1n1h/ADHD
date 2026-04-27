"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  MessageSquare,
  CreditCard,
  HeartPulse,
  FileText,
  Settings,
} from "lucide-react";

const links = [
  { href: "/dashboard", label: "Overview", icon: <LayoutDashboard size={16} />, key: "overview" },
  { href: "/dashboard/intake", label: "Intake Status", icon: <ClipboardList size={16} />, key: "intake" },
  { href: "/dashboard/messages", label: "Messages", icon: <MessageSquare size={16} />, key: "messages" },
  { href: "/dashboard/care-plan", label: "Care Plan", icon: <HeartPulse size={16} />, key: "care-plan" },
  { href: "/dashboard/documents", label: "Documents", icon: <FileText size={16} />, key: "documents" },
  { href: "/dashboard/subscription", label: "Subscription", icon: <CreditCard size={16} />, key: "subscription" },
];

export default function DashboardLayout({
  children,
  active,
}: {
  children: React.ReactNode;
  active: string;
}) {
  return (
    <div className="sidebar-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ padding: "12px 20px 20px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            My Care
          </p>
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

      {/* Main content */}
      <main className="main-content">{children}</main>
    </div>
  );
}
