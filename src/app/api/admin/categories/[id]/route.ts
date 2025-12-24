import { NextRequest, NextResponse } from "next/server";
import {
  getCategory,
  updateCategory,
  deleteCategory,
  type UpdateCategoryInput,
} from "@/lib/supabase/categories.service";

/**
 * GET /api/admin/categories/:id
 * Get single category by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { category, error } = await getCategory(id);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error("GET /api/admin/categories/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/categories/:id
 * Update category
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validate slug format if provided
    if (body.slug) {
      const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
      if (!slugRegex.test(body.slug)) {
        return NextResponse.json(
          {
            success: false,
            error:
              'Slug must be lowercase with hyphens only (e.g., "my-category")',
          },
          { status: 400 }
        );
      }
    }

    const input: UpdateCategoryInput = {
      parent_id: body.parent_id,
      slug: body.slug,
      name: body.name,
      type: body.type,
      description: body.description,
      status: body.status,
    };

    const { category, error } = await updateCategory(id, input);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error("PUT /api/admin/categories/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/categories/:id
 * Partially update category
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validate slug format if provided
    if (body.slug) {
      const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
      if (!slugRegex.test(body.slug)) {
        return NextResponse.json(
          {
            success: false,
            error:
              'Slug must be lowercase with hyphens only (e.g., "my-category")',
          },
          { status: 400 }
        );
      }
    }

    const { category, error } = await updateCategory(id, body);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error("PATCH /api/admin/categories/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/categories/:id
 * Delete category
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { success, error } = await deleteCategory(id);

    if (error || !success) {
      return NextResponse.json(
        { success: false, error: error || "Failed to delete category" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/admin/categories/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
