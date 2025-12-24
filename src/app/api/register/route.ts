import { NextRequest, NextResponse } from "next/server";
import { createRegistration } from "@/lib/api/registrations";
import { sendWelcomeEmail } from "@/lib/mail/carbonio";
import { createServerSupabaseClient } from "@/lib/supabase/client";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const country = formData.get("country") as string;
    const company = formData.get("company") as string;
    const designation = formData.get("designation") as string;
    const clientType = formData.get("clientType") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const phoneCode = formData.get("phoneCode") as string;
    const telephone = formData.get("telephone") as string;
    const file = formData.get("file") as File | null;

    // Validate required fields
    if (!email || !name || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let documentUrl: string | undefined;

    // Upload file to Supabase if provided
    if (file && file.size > 0) {
      const supabase = createServerSupabaseClient();
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(7)}.${fileExt}`;
      const filePath = `registration-docs/${fileName}`;

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("registration-docs")
        .upload(filePath, buffer, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        return NextResponse.json(
          { error: "Failed to upload document" },
          { status: 500 }
        );
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("registration-docs")
        .getPublicUrl(filePath);

      documentUrl = urlData.publicUrl;
    }

    // Combine phone code and number
    const phone = phoneNumber ? `${phoneCode}${phoneNumber}` : undefined;

    // Create registration
    const registration = await createRegistration({
      name,
      email,
      password,
      country,
      company,
      designation,
      clientType,
      phone,
      telephone,
      documentUrl,
    });

    // Send welcome email via Carbonio
    try {
      await sendWelcomeEmail(email, name);
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the registration if email fails
    }

    return NextResponse.json(
      {
        message: "Registration successful",
        registration: { id: registration.id },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating registration:", error);

    // Handle unique constraint violation
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}
