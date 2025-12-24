import { NextResponse } from "next/server";
import { getBlogCategories } from "@/lib/api/blog";

export async function GET() {
  try {
    const categories = await getBlogCategories();
    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
