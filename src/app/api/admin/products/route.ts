import { NextRequest, NextResponse } from 'next/server';
import {
  getProducts,
  createProduct,
  type CreateProductInput,
} from '@/lib/supabase/products.service';

/**
 * GET /api/admin/products
 * Get all products with pagination and filters
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category_id = searchParams.get('category_id') || undefined;
    const status = searchParams.get('status') ? searchParams.get('status') === 'true' : undefined;
    const search = searchParams.get('search') || undefined;

    const { products, total, error } = await getProducts({
      page,
      limit,
      category_id,
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
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('GET /api/admin/products error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/products
 * Create new product
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['category_id', 'slug', 'name', 'short_description', 'long_description'];
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
    
    // Set created_by to null if not provided
    const created_by = body.created_by || null;

    const input: CreateProductInput = {
      category_id: body.category_id,
      slug: body.slug,
      name: body.name,
      type: body.type,
      short_description: body.short_description,
      long_description: body.long_description,
      hs_code: body.hs_code,
      brand: body.brand,
      origin_country: body.origin_country,
      status: body.status ?? true,
      created_by: created_by,
      trade_type_ids: body.trade_type_ids,
      images: body.images,
      specifications: body.specifications,
    };

    const { product, error } = await createProduct(input);

    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, data: product },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/admin/products error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

