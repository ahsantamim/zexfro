import { NextRequest, NextResponse } from "next/server";
import {
  getProduct,
  updateProduct,
  deleteProduct,
  type UpdateProductInput,
} from "@/lib/supabase/products.service";

/**
 * GET /api/admin/products/:id
 * Get single product by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { product, error } = await getProduct(id);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("GET /api/admin/products/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/products/:id
 * Update product
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    console.log("PUT /api/admin/products/:id - Product ID:", id);
    console.log("Request body keys:", Object.keys(body));
    console.log("Images count:", body.images?.length || 0);
    console.log("Specifications count:", body.specifications?.length || 0);
    console.log("Trade types count:", body.trade_type_ids?.length || 0);

    const input: UpdateProductInput = {
      category_id: body.category_id || null,
      slug: body.slug,
      name: body.name,
      short_description: body.short_description,
      long_description: body.long_description,
      hs_code: body.hs_code || null,
      brand: body.brand || null,
      origin_country: body.origin_country || null,
      status: body.status,
      trade_type_ids: body.trade_type_ids,
      images: body.images,
      specifications: body.specifications,
    };

    const { product, error } = await updateProduct(id, input);

    if (error) {
      console.error("Update product error:", error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    console.log("Product updated successfully");
    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("PUT /api/admin/products/:id error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/products/:id
 * Partially update product
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { product, error } = await updateProduct(id, body);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("PATCH /api/admin/products/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/products/:id
 * Delete product
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { success, error } = await deleteProduct(id);

    if (error || !success) {
      return NextResponse.json(
        { success: false, error: error || "Failed to delete product" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/admin/products/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
