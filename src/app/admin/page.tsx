import type { Metadata } from "next";
import AdminLayout from "@/components/AdminLayout";
import { AlertTriangle, Download, UserCheck, Users, ClipboardList, Flag } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard – ClarityMD",
};

const FLAG_LABELS: Record<string, { label: string; cls: string }> = {
  under_18: { label: "Under 18", cls: "badge-red" },
  heart_history: { label: "Heart History", cls: "badge-red" },
  pregnancy: { label: "Pregnancy", cls: "badge-yellow" },
  suicidal_ideation: { label: "Suicidal Ideation", cls: "badge-red" },
  psychiatric_emergency: { label: "Psychiatric Emergency", cls: "badge-red" },
  substance_misuse_risk: { label: "Substance Risk", cls: "badge-yellow" },
};

const MOCK_USERS = [
  {
    id: "u-001",
    name: "Jordan M.",
    email: "jordan.m@example.com",
    state: "Florida",
    intakeStatus: "Submitted",
    eligibility: "Ready for Review",
    flags: [],
    submittedAt: "Apr 26, 2026",
    referred: false,
    notes: "",
  },
  {
    id: "u-002",
    name: "Alex T.",
    email: "alex.t@example.com",
    state: "Texas",
    intakeStatus: "Submitted",
    eligibility: "Ineligible",
    flags: ["suicidal_ideation"],
    submittedAt: "Apr 25, 2026",
    referred: false,
    notes: "Recommend crisis counselor",
  },
  {
    id: "u-003",
    name: "Sam R.",
    email: "sam.r@example.com",
    state: "New York",
    intakeStatus: "Submitted",
    eligibility: "Ready for Review",
    flags: ["substance_misuse_risk"],
    submittedAt: "Apr 24, 2026",
    referred: true,
    notes: "",
  },
];

const STATS = [
  { icon: <Users size={20} />, label: "Total Users", value: "3", color: "#2563eb" },
  { icon: <ClipboardList size={20} />, label: "Intakes Submitted", value: "3", color: "#06b6d4" },
  { icon: <Flag size={20} />, label: "Risk Flags", value: "2", color: "#ef4444" },
  { icon: <UserCheck size={20} />, label: "Referred to Provider", value: "1", color: "#10b981" },
];

function RiskFlagBadge({ flag }: { flag: string }) {
  const info = FLAG_LABELS[flag] || { label: flag, cls: "badge-gray" };
  return <span className={`badge ${info.cls}`} style={{ marginRight: "4px", marginBottom: "4px" }}>{info.label}</span>;
}

export default function AdminDashboardPage() {
  return (
    <AdminLayout active="users">
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "4px" }}>Admin Dashboard</h1>
            <p style={{ fontSize: "14px", color: "#64748b" }}>Manage user intakes, flags, and referrals.</p>
          </div>
          <button className="btn btn-secondary btn-sm" id="admin-export-csv">
            <Download size={14} /> Export CSV
          </button>
        </div>

        {/* Stat cards */}
        <div className="dash-grid" style={{ marginBottom: "32px" }}>
          {STATS.map((s, i) => (
            <div key={i} className="stat-card" style={{ borderLeft: `4px solid ${s.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: s.color }}>
                {s.icon}
              </div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="card" style={{ marginBottom: "8px", padding: "16px 24px" }}>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>Filter by state:</label>
            <select className="form-select" id="admin-state-filter" style={{ width: "180px", padding: "8px 12px", fontSize: "13px" }}>
              <option value="">All states</option>
              <option>Florida</option>
              <option>Texas</option>
              <option>New York</option>
            </select>

            <label style={{ fontSize: "13px", fontWeight: 600, color: "#475569", marginLeft: "8px" }}>Eligibility:</label>
            <select className="form-select" id="admin-eligibility-filter" style={{ width: "180px", padding: "8px 12px", fontSize: "13px" }}>
              <option value="">All</option>
              <option>Ready for Review</option>
              <option>Ineligible</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>State</th>
                  <th>Submitted</th>
                  <th>Eligibility</th>
                  <th>Risk Flags</th>
                  <th>Referred</th>
                  <th>Notes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_USERS.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: "14px" }}>{user.name}</div>
                      <div style={{ fontSize: "12px", color: "#94a3b8" }}>{user.email}</div>
                    </td>
                    <td>{user.state}</td>
                    <td style={{ color: "#64748b" }}>{user.submittedAt}</td>
                    <td>
                      <span
                        className={`badge ${user.eligibility === "Ineligible" ? "badge-red" : "badge-green"}`}
                      >
                        {user.eligibility}
                      </span>
                    </td>
                    <td>
                      {user.flags.length === 0 ? (
                        <span style={{ color: "#94a3b8", fontSize: "13px" }}>None</span>
                      ) : (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {user.flags.map((f) => (
                            <RiskFlagBadge key={f} flag={f} />
                          ))}
                        </div>
                      )}
                    </td>
                    <td>
                      {user.referred ? (
                        <span className="badge badge-green">Referred</span>
                      ) : (
                        <span className="badge badge-gray">Pending</span>
                      )}
                    </td>
                    <td style={{ fontSize: "13px", color: "#64748b", maxWidth: "160px" }}>
                      {user.notes || "—"}
                    </td>
                    <td>
                      {!user.referred && user.eligibility !== "Ineligible" && (
                        <button
                          className="btn btn-sm btn-primary"
                          id={`admin-refer-${user.id}`}
                          style={{ fontSize: "12px", padding: "6px 14px" }}
                        >
                          Refer
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
