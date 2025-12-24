import { NextRequest, NextResponse } from "next/server";
import {
  getTradeType,
  updateTradeType,
  deleteTradeType,
  type UpdateTradeTypeInput,
} from "@/lib/supabase/trade-types.service";

/**
 * GET /api/admin/trade-types/:id
 * Get single trade type by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { tradeType, error } = await getTradeType(id);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: tradeType,
    });
  } catch (error) {
    console.error("GET /api/admin/trade-types/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/trade-types/:id
 * Update trade type
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
              'Slug must be lowercase with hyphens only (e.g., "import-export")',
          },
          { status: 400 }
        );
      }
    }

    const input: UpdateTradeTypeInput = {
      slug: body.slug,
      name: body.name,
      status: body.status,
    };

    const { tradeType, error } = await updateTradeType(id, input);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: tradeType,
    });
  } catch (error) {
    console.error("PUT /api/admin/trade-types/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/trade-types/:id
 * Partially update trade type
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
              'Slug must be lowercase with hyphens only (e.g., "import-export")',
          },
          { status: 400 }
        );
      }
    }

    const { tradeType, error } = await updateTradeType(id, body);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: tradeType,
    });
  } catch (error) {
    console.error("PATCH /api/admin/trade-types/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/trade-types/:id
 * Delete trade type
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { success, error } = await deleteTradeType(id);

    if (error || !success) {
      return NextResponse.json(
        { success: false, error: error || "Failed to delete trade type" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Trade type deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/admin/trade-types/:id error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
