import { NextRequest, NextResponse } from "next/server";

// ─── Risk flag logic ─────────────────────────────────────────────────────────
function computeFlags(answers: Record<string, unknown>): string[] {
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

// ─── POST /api/intake ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { answers, userId } = body as {
      answers: Record<string, unknown>;
      userId?: string;
    };

    if (!answers) {
      return NextResponse.json({ error: "answers required" }, { status: 400 });
    }

    const flags = computeFlags(answers);
    const hasHighRisk =
      flags.includes("suicidal_ideation") ||
      flags.includes("psychiatric_emergency") ||
      flags.includes("under_18");

    const eligibilityStatus = hasHighRisk ? "ineligible" : "ready_for_review";

    // TODO: Insert into InsForge DB
    // await db.from("intake_submissions").insert({ userId, answers, flags, eligibilityStatus });
    // await db.from("eligibility_flags").insert(flags.map(f => ({ userId, flag: f })));

    return NextResponse.json({
      success: true,
      eligibilityStatus,
      flags,
      // submissionId: row.id,
    });
  } catch (err) {
    console.error("Intake API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
