import { NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/supabase/products.service";
import { getCategory } from "@/lib/supabase/categories.service";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const type = searchParams.get("type") || undefined; // 'import' or 'export'
    const category_id = searchParams.get("category_id") || undefined;
    const category_slug = searchParams.get("category_slug") || undefined;
    const search = searchParams.get("search") || undefined;
    const status = searchParams.get("status")
      ? searchParams.get("status") === "true"
      : undefined;

    let finalCategoryId = category_id;

    // If category_slug is provided, get the category ID
    if (category_slug && !category_id) {
      const { category } = await getCategory(category_slug, "slug");
      if (category) {
        finalCategoryId = category.id;
      }
    }

    const { products, total, error } = await getProducts({
      page,
      limit,
      category_id: finalCategoryId,
      type,
      search,
      status: status ?? true, // Default to only active products
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
