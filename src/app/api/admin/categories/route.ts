import { NextRequest, NextResponse } from 'next/server';
import {
  getCategories,
  createCategory,
  type CreateCategoryInput,
} from '@/lib/supabase/categories.service';

/**
 * GET /api/admin/categories
 * Get all categories with pagination and filters
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const parent_id = searchParams.get('parent_id') || undefined;
    const status = searchParams.get('status') ? searchParams.get('status') === 'true' : undefined;
    const search = searchParams.get('search') || undefined;

    const { categories, total, error } = await getCategories({
      page,
      limit,
      parent_id: parent_id === 'null' ? null : parent_id,
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
      data: categories,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('GET /api/admin/categories error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/categories
 * Create new category
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
    
    // Set created_by to a default UUID if not provided
    const created_by = body.created_by || '00000000-0000-0000-0000-000000000000';

    // Validate slug format (lowercase, hyphens only)
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (!slugRegex.test(body.slug)) {
      return NextResponse.json(
        { success: false, error: 'Slug must be lowercase with hyphens only (e.g., "my-category")' },
        { status: 400 }
      );
    }

    const input: CreateCategoryInput = {
      parent_id: body.parent_id || null,
      slug: body.slug,
      name: body.name,
      type: body.type,
      description: body.description,
      status: body.status ?? true,
      created_by: created_by,
    };

    const { category, error } = await createCategory(input);

    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, data: category },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/admin/categories error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
