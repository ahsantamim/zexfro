import { supabase } from './client';

export interface TradeType {
  id: string;
  slug: string;
  name: string;
  status: boolean;
  created_at: string;
  _count?: {
    products: number;
  };
}

export interface CreateTradeTypeInput {
  slug: string;
  name: string;
  status?: boolean;
}

export interface UpdateTradeTypeInput {
  slug?: string;
  name?: string;
  status?: boolean;
}

/**
 * Get all trade types with pagination and filters
 */
export async function getTradeTypes(params?: {
  page?: number;
  limit?: number;
  status?: boolean;
  search?: string;
}): Promise<{ tradeTypes: TradeType[]; total: number; error: string | null }> {
  try {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('trade_types')
      .select('*', { count: 'exact' });

    // Apply filters
    if (params?.status !== undefined) {
      query = query.eq('status', params.status);
    }

    if (params?.search) {
      query = query.or(`name.ilike.%${params.search}%,slug.ilike.%${params.search}%`);
    }

    // Apply pagination
    query = query
      .order('name')
      .range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      return { tradeTypes: [], total: 0, error: error.message };
    }

    return { tradeTypes: data || [], total: count || 0, error: null };
  } catch (error) {
    console.error('Get trade types error:', error);
    return { tradeTypes: [], total: 0, error: 'An error occurred while fetching trade types' };
  }
}

/**
 * Get single trade type by ID or slug
 */
export async function getTradeType(identifier: string, by: 'id' | 'slug' = 'id'): Promise<{ tradeType: TradeType | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('trade_types')
      .select('*')
      .eq(by, identifier)
      .single();

    if (error || !data) {
      return { tradeType: null, error: 'Trade type not found' };
    }

    // Get products count
    const { count: productsCount } = await supabase
      .from('product_trade_types')
      .select('*', { count: 'exact', head: true })
      .eq('trade_type_id', data.id);

    return {
      tradeType: {
        ...data,
        _count: {
          products: productsCount || 0,
        },
      },
      error: null,
    };
  } catch (error) {
    console.error('Get trade type error:', error);
    return { tradeType: null, error: 'An error occurred while fetching trade type' };
  }
}

/**
 * Create new trade type
 */
export async function createTradeType(input: CreateTradeTypeInput): Promise<{ tradeType: TradeType | null; error: string | null }> {
  try {
    // Check if slug already exists
    const { data: existingTradeType } = await supabase
      .from('trade_types')
      .select('id')
      .eq('slug', input.slug)
      .single();

    if (existingTradeType) {
      return { tradeType: null, error: 'Slug already exists' };
    }

    // Insert trade type
    const { data: tradeType, error } = await supabase
      .from('trade_types')
      .insert({
        slug: input.slug,
        name: input.name,
        status: input.status ?? true,
      })
      .select()
      .single();

    if (error || !tradeType) {
      return { tradeType: null, error: error?.message || 'Failed to create trade type' };
    }

    // Fetch complete trade type with counts
    return await getTradeType(tradeType.id);
  } catch (error) {
    console.error('Create trade type error:', error);
    return { tradeType: null, error: 'An error occurred while creating trade type' };
  }
}

/**
 * Update trade type
 */
export async function updateTradeType(id: string, input: UpdateTradeTypeInput): Promise<{ tradeType: TradeType | null; error: string | null }> {
  try {
    // Check if slug already exists (excluding current trade type)
    if (input.slug) {
      const { data: existingTradeType } = await supabase
        .from('trade_types')
        .select('id')
        .eq('slug', input.slug)
        .neq('id', id)
        .single();

      if (existingTradeType) {
        return { tradeType: null, error: 'Slug already exists' };
      }
    }

    const { data: tradeType, error } = await supabase
      .from('trade_types')
      .update(input)
      .eq('id', id)
      .select()
      .single();

    if (error || !tradeType) {
      return { tradeType: null, error: error?.message || 'Failed to update trade type' };
    }

    // Fetch complete trade type with counts
    return await getTradeType(id);
  } catch (error) {
    console.error('Update trade type error:', error);
    return { tradeType: null, error: 'An error occurred while updating trade type' };
  }
}

/**
 * Delete trade type
 */
export async function deleteTradeType(id: string): Promise<{ success: boolean; error: string | null }> {
  try {
    // Check if trade type is used by products
    const { count: productsCount } = await supabase
      .from('product_trade_types')
      .select('*', { count: 'exact', head: true })
      .eq('trade_type_id', id);

    if (productsCount && productsCount > 0) {
      return { success: false, error: `Cannot delete trade type used by ${productsCount} products. Please remove associations first.` };
    }

    const { error } = await supabase
      .from('trade_types')
      .delete()
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Delete trade type error:', error);
    return { success: false, error: 'An error occurred while deleting trade type' };
  }
}

