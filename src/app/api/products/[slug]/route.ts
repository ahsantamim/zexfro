import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    console.log("API received slug:", slug);

    // Fetch product by slug with all relationships
    const { data: product, error } = await supabase
      .from("products")
      .select(
        `
        id,
        name,
        slug,
        short_description,
        long_description,
        hs_code,
        brand,
        origin_country,
        category_id,
        status,
        created_at,
        category:categories(id, name, slug),
        product_images(id, image_url, alt_text, is_primary),
        product_specifications(id, spec_key, spec_value),
        trade_types:product_trade_types(trade_type:trade_types(id, name, slug))
      `
      )
      .eq("slug", slug)
      .eq("status", true)
      .single();

    console.log(
      "Database query result - error:",
      error,
      "product:",
      product ? "found" : "not found"
    );
    if (product) {
      console.log("Product ID:", product.id);
      console.log("Product images count:", product.product_images?.length || 0);
      console.log("Product images:", product.product_images);
    }

    // Also check if images exist separately
    if (
      product &&
      (!product.product_images || product.product_images.length === 0)
    ) {
      const { data: images, error: imgError } = await supabase
        .from("product_images")
        .select("*")
        .eq("product_id", product.id);

      console.log(
        "Separate image query - count:",
        images?.length || 0,
        "error:",
        imgError
      );
      if (images && images.length > 0) {
        console.log("Images found separately:", images);
        product.product_images = images;
      }
    }

    if (error || !product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    // Transform trade_types to flat array
    const tradeTypesData = product.trade_types as unknown as Array<{
      trade_type: { id: string; name: string; slug: string };
    }>;

    const transformedProduct = {
      ...product,
      trade_types: (tradeTypesData || []).map((ptt) => ptt.trade_type),
    };

    return NextResponse.json({
      success: true,
      data: transformedProduct,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
