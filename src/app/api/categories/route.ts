import { NextRequest, NextResponse } from "next/server";
import { getCategories } from "@/lib/supabase/categories.service";
import { getCategoryImage } from "@/lib/supabase/category-images.service";

/**
 * GET /api/categories
 * Public endpoint to get all active categories
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type") || undefined; // 'import' or 'export'
    const parent_id = searchParams.get("parent_id") || undefined;

    const { categories, error } = await getCategories({
      status: true, // Only active categories
      parent_id: parent_id === "null" ? null : parent_id,
      limit: 1000, // Get all categories
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    // Filter by type if provided (comparing with trade_type slug)
    let filteredCategories = categories;
    if (type) {
      filteredCategories = categories.filter(
        (cat) => cat.trade_type?.slug === type
      );
    }

    // Fetch images for each category
    const categoriesWithImages = await Promise.all(
      filteredCategories.map(async (category) => {
        const { image } = await getCategoryImage(category.id);
        return {
          ...category,
          image,
        };
      })
    );

    return NextResponse.json({
      success: true,
      data: categoriesWithImages,
    });
  } catch (error) {
    console.error("GET /api/categories error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
