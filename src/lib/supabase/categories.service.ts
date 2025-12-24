import { supabase } from './client';

export interface Category {
  id: string;
  parent_id: string | null;
  slug: string;
  name: string;
  type: string | null;
  description: string | null;
  status: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
  parent?: {
    id: string;
    name: string;
    slug: string;
  };
  trade_type?: {
    id: string;
    name: string;
    slug: string;
  };
  children?: Category[];
  _count?: {
    products: number;
  };
}

export interface CreateCategoryInput {
  parent_id?: string | null;
  slug: string;
  name: string;
  type?: string;
  description?: string;
  status?: boolean;
  created_by: string;
}

export interface UpdateCategoryInput {
  parent_id?: string | null;
  slug?: string;
  name?: string;
  type?: string;
  description?: string;
  status?: boolean;
}

/**
 * Get all categories with pagination and filters
 */
export async function getCategories(params?: {
  page?: number;
  limit?: number;
  parent_id?: string | null;
  status?: boolean;
  search?: string;
}): Promise<{ categories: Category[]; total: number; error: string | null }> {
  try {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('categories')
      .select(`
        *,
        parent:categories!parent_id(id, name, slug),
        trade_type:trade_types!type(id, name, slug)
      `, { count: 'exact' });

    // Apply filters
    if (params?.parent_id !== undefined) {
      if (params.parent_id === null) {
        query = query.is('parent_id', null);
      } else {
        query = query.eq('parent_id', params.parent_id);
      }
    }

    if (params?.status !== undefined) {
      query = query.eq('status', params.status);
    }

    if (params?.search) {
      query = query.or(`name.ilike.%${params.search}%,description.ilike.%${params.search}%`);
    }

    // Apply pagination
    query = query
      .order('name')
      .range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      return { categories: [], total: 0, error: error.message };
    }

    // Get product counts for each category
    const categoriesWithCounts = await Promise.all(
      (data || []).map(async (category: any) => {
        const { count: productsCount } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true })
          .eq('category_id', category.id);

        return {
          ...category,
          _count: {
            products: productsCount || 0,
          },
        };
      })
    );

    return { categories: categoriesWithCounts, total: count || 0, error: null };
  } catch (error) {
    console.error('Get categories error:', error);
    return { categories: [], total: 0, error: 'An error occurred while fetching categories' };
  }
}

/**
 * Get single category by ID or slug
 */
export async function getCategory(identifier: string, by: 'id' | 'slug' = 'id'): Promise<{ category: Category | null; error: string | null }> {
  try {
    const query = supabase
      .from('categories')
      .select(`
        *,
        parent:categories!parent_id(id, name, slug),
        trade_type:trade_types!type(id, name, slug)
      `)
      .eq(by, identifier)
      .single();

    const { data, error } = await query;

    if (error || !data) {
      return { category: null, error: 'Category not found' };
    }

    // Get children count
    const { count: productsCount } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('category_id', (data as any).id);

    return {
      category: {
        ...(data as any),
        _count: {
          products: productsCount || 0,
        },
      },
      error: null,
    };
  } catch (error) {
    console.error('Get category error:', error);
    return { category: null, error: 'An error occurred while fetching category' };
  }
}

/**
 * Get category hierarchy (tree structure)
 */
export async function getCategoryTree(): Promise<{ categories: Category[]; error: string | null }> {
  try {
    // Get all categories
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) {
      return { categories: [], error: error.message };
    }

    // Build tree structure
    const categoryMap = new Map<string, Category>();
    const rootCategories: Category[] = [];

    // First pass: create map
    (data as any)?.forEach((cat: any) => {
      categoryMap.set(cat.id, { ...cat, children: [] });
    });

    // Second pass: build tree
    (data as any)?.forEach((cat: any) => {
      const category = categoryMap.get(cat.id)!;
      if (cat.parent_id) {
        const parent = categoryMap.get(cat.parent_id);
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(category);
        }
      } else {
        rootCategories.push(category);
      }
    });

    return { categories: rootCategories, error: null };
  } catch (error) {
    console.error('Get category tree error:', error);
    return { categories: [], error: 'An error occurred while fetching category tree' };
  }
}

/**
 * Create new category
 */
export async function createCategory(input: CreateCategoryInput): Promise<{ category: Category | null; error: string | null }> {
  try {
    // Check if slug already exists
    const { data: existingCategory } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', input.slug)
      .single();

    if (existingCategory) {
      return { category: null, error: 'Slug already exists' };
    }

    // Insert category
    const { data: category, error } = await supabase
      .from('categories')
      // @ts-ignore - Supabase type inference issue
      .insert({
        parent_id: input.parent_id,
        slug: input.slug,
        name: input.name,
        type: input.type,
        description: input.description,
        status: input.status ?? true,
        created_by: input.created_by,
      })
      .select()
      .single();

    if (error || !category) {
      return { category: null, error: error?.message || 'Failed to create category' };
    }

    // Fetch complete category with relations
    return await getCategory((category as any).id);
  } catch (error) {
    console.error('Create category error:', error);
    return { category: null, error: 'An error occurred while creating category' };
  }
}

/**
 * Update category
 */
export async function updateCategory(id: string, input: UpdateCategoryInput): Promise<{ category: Category | null; error: string | null }> {
  try {
    // Check if slug already exists (excluding current category)
    if (input.slug) {
      const { data: existingCategory } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', input.slug)
        .neq('id', id)
        .single();

      if (existingCategory) {
        return { category: null, error: 'Slug already exists' };
      }
    }

    // Check for circular reference if parent_id is being updated
    if (input.parent_id) {
      const isCircular = await checkCircularReference(id, input.parent_id);
      if (isCircular) {
        return { category: null, error: 'Cannot set parent to a child category (circular reference)' };
      }
    }

    const { data: category, error } = await supabase
      .from('categories')
      // @ts-ignore - Supabase type inference issue
      .update(input)
      .eq('id', id)
      .select()
      .single();

    if (error || !category) {
      return { category: null, error: error?.message || 'Failed to update category' };
    }

    // Fetch complete category with relations
    return await getCategory(id);
  } catch (error) {
    console.error('Update category error:', error);
    return { category: null, error: 'An error occurred while updating category' };
  }
}

/**
 * Delete category
 */
export async function deleteCategory(id: string): Promise<{ success: boolean; error: string | null }> {
  try {
    // Check if category has products
    const { count: productsCount } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('category_id', id);

    if (productsCount && productsCount > 0) {
      return { success: false, error: `Cannot delete category with ${productsCount} products. Please reassign or delete products first.` };
    }

    // Check if category has children
    const { count: childrenCount } = await supabase
      .from('categories')
      .select('*', { count: 'exact', head: true })
      .eq('parent_id', id);

    if (childrenCount && childrenCount > 0) {
      return { success: false, error: `Cannot delete category with ${childrenCount} sub-categories. Please delete or reassign sub-categories first.` };
    }

    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Delete category error:', error);
    return { success: false, error: 'An error occurred while deleting category' };
  }
}

/**
 * Check for circular reference in category hierarchy
 */
async function checkCircularReference(categoryId: string, newParentId: string): Promise<boolean> {
  if (categoryId === newParentId) {
    return true; // Direct circular reference
  }

  let currentParentId: string | null = newParentId;

  while (currentParentId) {
    if (currentParentId === categoryId) {
      return true; // Circular reference found
    }

    const { data }: any = await supabase
      .from('categories')
      .select('parent_id')
      .eq('id', currentParentId)
      .single();

    currentParentId = data?.parent_id || null;
  }

  return false; // No circular reference
}

/**
 * Get root categories (no parent)
 */
export async function getRootCategories(): Promise<{ categories: Category[]; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .is('parent_id', null)
      .eq('status', true)
      .order('name');

    if (error) {
      return { categories: [], error: error.message };
    }

    return { categories: data || [], error: null };
  } catch (error) {
    console.error('Get root categories error:', error);
    return { categories: [], error: 'An error occurred while fetching root categories' };
  }
}

