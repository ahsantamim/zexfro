import { NextRequest, NextResponse } from "next/server";
import { createRegistration } from "@/lib/api/registrations";
import { sendWelcomeEmail } from "@/lib/mail/carbonio";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create registration
    const registration = await createRegistration(body);

    // Send welcome email via Carbonio
    await sendWelcomeEmail(email, name);

    return NextResponse.json(
      { message: "Registration successful", registration },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating registration:", error);
    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}
