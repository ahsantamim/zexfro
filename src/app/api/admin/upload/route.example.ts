/**
 * API Upload Route for handling file uploads from frontend
 * Optional: If you want to handle uploads through API instead of direct client uploads
 * Place this file at: src/app/api/admin/upload/route.ts
 */

import { NextRequest, NextResponse } from "next/server";
import { uploadMultipleToSupabase } from "@/lib/supabase/storage";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const bucket = (formData.get("bucket") as string) || "products";

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: "No files provided" },
        { status: 400 }
      );
    }

    // Upload files
    const results = await uploadMultipleToSupabase(
      bucket,
      files,
      `${bucket}/${Date.now()}`
    );

    // Filter out errors
    const successful = results.filter((r) => !r.error);
    const failed = results.filter((r) => r.error);

    if (failed.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `${failed.length} file(s) failed to upload`,
          failed,
          successful,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: successful.map((r) => ({ url: r.url, name: r.name })),
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}
