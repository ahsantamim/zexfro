import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { category_id, image_url, alt_text } = body;

    if (!category_id || !image_url) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from("category_images")
      .insert({
        category_id,
        image_url,
        alt_text: alt_text || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Failed to save category image:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Category image API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("category_id");

    if (!categoryId) {
      return NextResponse.json(
        { success: false, error: "Missing category_id" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from("category_images")
      .select("*")
      .eq("category_id", categoryId)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 is "not found"
      console.error("Failed to fetch category image:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data: data || null });
  } catch (error) {
    console.error("Category image API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("category_id");

    if (!categoryId) {
      return NextResponse.json(
        { success: false, error: "Missing category_id" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("category_images")
      .delete()
      .eq("category_id", categoryId);

    if (error) {
      console.error("Failed to delete category image:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Category image API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
