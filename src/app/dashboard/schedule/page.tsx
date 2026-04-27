"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Calendar as CalendarIcon, Clock, Video, ChevronRight, Check } from "lucide-react";

const TIME_SLOTS = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
const DAYS = [
  { name: "Mon", date: "Apr 27" },
  { name: "Tue", date: "Apr 28", active: true },
  { name: "Wed", date: "Apr 29" },
  { name: "Thu", date: "Apr 30" },
  { name: "Fri", date: "May 1" },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState("Apr 28");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <DashboardLayout active="schedule">
        <div style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Check size={32} color="#15803d" />
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px" }}>Visit Scheduled!</h1>
          <p style={{ color: "#64748b", marginBottom: "32px" }}>
            Your consultation is confirmed for <strong>{selectedDay} at {selectedTime}</strong>. 
            A calendar invite and link have been sent to your email.
          </p>
          <div className="card" style={{ textAlign: "left", padding: "24px", marginBottom: "32px" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Video size={20} color="#2563eb" />
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 700 }}>Virtual Visit Details</p>
                <p style={{ fontSize: "13px", color: "#64748b" }}>Provider: Dr. Sarah Smith, PMHNP</p>
              </div>
            </div>
          </div>
          <button onClick={() => window.location.href = "/dashboard"} className="btn btn-primary">
            Back to Dashboard
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active="schedule">
      <div style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>Schedule your visit</h1>
        <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px" }}>
          Choose a time for your initial clinical evaluation.
        </p>

        <div className="dash-grid" style={{ gridTemplateColumns: "1fr 300px", alignItems: "start" }}>
          <div className="card" style={{ padding: "32px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <CalendarIcon size={18} color="#2563eb" /> Select a Date
            </h3>
            
            <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
              {DAYS.map((day) => (
                <button
                  key={day.date}
                  onClick={() => setSelectedDay(day.date)}
                  style={{
                    flex: 1,
                    padding: "16px 8px",
                    borderRadius: "12px",
                    border: `1.5px solid ${selectedDay === day.date ? "#2563eb" : "#e2e8f0"}`,
                    background: selectedDay === day.date ? "#eff6ff" : "#fff",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  <p style={{ fontSize: "12px", fontWeight: 700, color: selectedDay === day.date ? "#2563eb" : "#94a3b8", textTransform: "uppercase" }}>{day.name}</p>
                  <p style={{ fontSize: "16px", fontWeight: 800, marginTop: "4px", color: selectedDay === day.date ? "#1e40af" : "#334155" }}>{day.date.split(" ")[1]}</p>
                </button>
              ))}
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Clock size={18} color="#2563eb" /> Available Times
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "12px" }}>
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    border: `1.5px solid ${selectedTime === time ? "#2563eb" : "#e2e8f0"}`,
                    background: selectedTime === time ? "#2563eb" : "#fff",
                    color: selectedTime === time ? "#fff" : "#334155",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: "#f8fafc", border: "1px dashed #cbd5e1" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>Summary</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ color: "#64748b" }}>Date:</span>
                <span style={{ fontWeight: 600 }}>{selectedDay || "Select date"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ color: "#64748b" }}>Time:</span>
                <span style={{ fontWeight: 600 }}>{selectedTime || "Select time"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ color: "#64748b" }}>Duration:</span>
                <span style={{ fontWeight: 600 }}>30 mins</span>
              </div>
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "16px", marginTop: "8px" }}>
                <button 
                  className="btn btn-primary w-full" 
                  disabled={!selectedDay || !selectedTime}
                  onClick={() => setConfirmed(true)}
                  style={{ width: "100%" }}
                >
                  Confirm Appointment <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
