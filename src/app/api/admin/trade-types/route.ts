import { NextRequest, NextResponse } from 'next/server';
import {
  getTradeTypes,
  createTradeType,
  type CreateTradeTypeInput,
} from '@/lib/supabase/trade-types.service';

/**
 * GET /api/admin/trade-types
 * Get all trade types with pagination and filters
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status') ? searchParams.get('status') === 'true' : undefined;
    const search = searchParams.get('search') || undefined;

    const { tradeTypes, total, error } = await getTradeTypes({
      page,
      limit,
      status,
      search,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: tradeTypes,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('GET /api/admin/trade-types error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/trade-types
 * Create new trade type
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['slug', 'name'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Validate slug format (lowercase, hyphens only)
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (!slugRegex.test(body.slug)) {
      return NextResponse.json(
        { success: false, error: 'Slug must be lowercase with hyphens only (e.g., "import-export")' },
        { status: 400 }
      );
    }

    const input: CreateTradeTypeInput = {
      slug: body.slug,
      name: body.name,
      status: body.status,
    };

    const { tradeType, error } = await createTradeType(input);

    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, data: tradeType },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/admin/trade-types error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
