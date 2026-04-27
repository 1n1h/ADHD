import type { Metadata } from "next";
import DashboardLayout from "@/components/DashboardLayout";

export const metadata: Metadata = {
  title: "My Dashboard – ClarityMD",
  description: "View your intake status, provider visit status, messages, and care plan.",
};

const mockData = {
  intakeStatus: "Submitted",
  providerStatus: "Pending Review",
  carePlanStatus: "Awaiting Provider",
  subscriptionStatus: "Trial – 7 days remaining",
  messages: [
    { from: "ClarityMD Team", preview: "Welcome! Your intake has been received.", time: "2h ago", read: false },
    { from: "Support", preview: "A provider will review your intake within 1-3 business days.", time: "1d ago", read: true },
  ],
  documents: [{ name: "Intake Form", uploadedAt: "Apr 26, 2026", status: "Received" }],
};

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "Submitted": "badge-green",
    "Pending Review": "badge-yellow",
    "Awaiting Provider": "badge-yellow",
    "Trial – 7 days remaining": "badge-blue",
    "Received": "badge-green",
    "Active": "badge-green",
    "Inactive": "badge-gray",
  };
  return <span className={`badge ${map[status] || "badge-gray"}`}>{status}</span>;
}

export default function DashboardPage() {
  return (
    <DashboardLayout active="overview">
      <div>
        <h1 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "6px" }}>My Dashboard</h1>
        <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px" }}>
          Welcome back. Here's your current care status.
        </p>

        {/* Stat cards */}
        <div className="dash-grid" style={{ marginBottom: "32px" }}>
          {[
            { label: "Intake Status", value: mockData.intakeStatus },
            { label: "Provider Review", value: mockData.providerStatus },
            { label: "Care Plan", value: mockData.carePlanStatus },
            { label: "Subscription", value: mockData.subscriptionStatus },
          ].map((item, i) => (
            <div key={i} className="stat-card">
              <p className="stat-label">{item.label}</p>
              <div style={{ marginTop: "12px" }}>
                <StatusBadge status={item.value} />
              </div>
            </div>
          ))}
        </div>

        {/* Messages */}
        <div className="card" style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "16px" }}>Messages</h2>
          {mockData.messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "14px 0",
                borderBottom: i < mockData.messages.length - 1 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "14px", fontWeight: msg.read ? 500 : 700, color: "#0f172a", marginBottom: "4px" }}>
                  {msg.from}
                  {!msg.read && (
                    <span className="badge badge-blue" style={{ marginLeft: "8px", fontSize: "10px" }}>New</span>
                  )}
                </p>
                <p style={{ fontSize: "13px", color: "#64748b" }}>{msg.preview}</p>
              </div>
              <span style={{ fontSize: "12px", color: "#94a3b8", marginLeft: "16px", flexShrink: 0 }}>{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="card">
          <h2 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "16px" }}>Documents</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Document</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockData.documents.map((doc, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{doc.name}</td>
                  <td style={{ color: "#64748b" }}>{doc.uploadedAt}</td>
                  <td><StatusBadge status={doc.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
