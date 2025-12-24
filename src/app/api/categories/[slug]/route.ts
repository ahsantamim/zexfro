import { NextRequest, NextResponse } from "next/server";
import { getCategory } from "@/lib/supabase/categories.service";
import { getCategoryImage } from "@/lib/supabase/category-images.service";

/**
 * GET /api/categories/[slug]
 * Public endpoint to get a single category by slug
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const { category, error } = await getCategory(slug, "slug");

    if (error || !category) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 }
      );
    }

    // Only return active categories
    if (!category.status) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 }
      );
    }

    // Get category image if exists
    const { image } = await getCategoryImage(category.id);

    return NextResponse.json({
      success: true,
      data: {
        ...category,
        image,
      },
    });
  } catch (error) {
    console.error("GET /api/categories/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
