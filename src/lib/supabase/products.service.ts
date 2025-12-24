import { supabase } from "./client";

export interface Product {
  id: string;
  category_id: string;
  slug: string;
  name: string;
  type: string | null;
  short_description: string;
  long_description: string;
  hs_code: string | null;
  brand: string | null;
  origin_country: string | null;
  status: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  images?: ProductImage[];
  specifications?: ProductSpecification[];
  trade_types?: TradeType[];
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text: string;
  is_primary: boolean;
  sort_order: number;
  created_at: string;
}

export interface ProductSpecification {
  id: string;
  product_id: string;
  spec_key: string;
  spec_value: string;
  unit: string | null;
  created_at: string;
}

export interface TradeType {
  id: string;
  slug: string;
  name: string;
  status: boolean;
}

export interface Category {
  id: string;
  parent_id: string | null;
  slug: string;
  name: string;
  description: string | null;
  status: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProductInput {
  category_id: string;
  slug: string;
  name: string;
  type?: string;
  short_description: string;
  long_description: string;
  hs_code?: string;
  brand?: string;
  origin_country?: string;
  status?: boolean;
  created_by: string;
  trade_type_ids?: string[];
  images?: Array<{
    image_url: string;
    alt_text: string;
    is_primary?: boolean;
    sort_order?: number;
  }>;
  specifications?: Array<{
    spec_key: string;
    spec_value: string;
    unit?: string;
  }>;
}

export interface UpdateProductInput {
  category_id?: string;
  slug?: string;
  name?: string;
  type?: string;
  short_description?: string;
  long_description?: string;
  hs_code?: string;
  brand?: string;
  origin_country?: string;
  status?: boolean;
  trade_type_ids?: string[];
  images?: Array<{
    image_url: string;
    alt_text: string;
    is_primary: boolean;
    sort_order: number;
  }>;
  specifications?: Array<{
    spec_key: string;
    spec_value: string;
    unit?: string | null;
  }>;
}

/**
 * Get all products with pagination and filters
 */
export async function getProducts(params?: {
  page?: number;
  limit?: number;
  category_id?: string;
  type?: string;
  status?: boolean;
  search?: string;
}): Promise<{ products: Product[]; total: number; error: string | null }> {
  try {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const offset = (page - 1) * limit;

    let query = supabase.from("products").select(
      `
        *,
        category:categories(
          id, 
          name, 
          slug, 
          type,
          trade_type:trade_types!type(id, name, slug)
        ),
        images:product_images(*),
        specifications:product_specifications(*),
        trade_types:product_trade_types(
          trade_type:trade_types(*)
        )
      `,
      { count: "exact" }
    );

    // Apply filters
    if (params?.category_id) {
      query = query.eq("category_id", params.category_id);
    }

    if (params?.status !== undefined) {
      query = query.eq("status", params.status);
    }

    if (params?.search) {
      query = query.or(
        `name.ilike.%${params.search}%,short_description.ilike.%${params.search}%`
      );
    }

    // Apply pagination
    query = query
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      return { products: [], total: 0, error: error.message };
    }

    // Transform the data to flatten trade_types
    let products = (data || []).map((product: any) => ({
      ...product,
      trade_types: product.trade_types?.map((tt: any) => tt.trade_type) || [],
    }));

    // Filter by type if provided (import/export from trade_types)
    if (params?.type) {
      products = products.filter((product) =>
        product.trade_types?.some((tt: any) => tt.slug === params.type)
      );
    }

    return {
      products,
      total: params?.type ? products.length : count || 0,
      error: null,
    };
  } catch (error) {
    console.error("Get products error:", error);
    return {
      products: [],
      total: 0,
      error: "An error occurred while fetching products",
    };
  }
}

/**
 * Get single product by ID or slug
 */
export async function getProduct(
  identifier: string,
  by: "id" | "slug" = "id"
): Promise<{ product: Product | null; error: string | null }> {
  try {
    const query = supabase
      .from("products")
      .select(
        `
        *,
        category:categories(id, name, slug),
        images:product_images(*),
        specifications:product_specifications(*),
        trade_types:product_trade_types(
          trade_type:trade_types(*)
        )
      `
      )
      .eq(by, identifier)
      .single();

    const { data, error } = await query;

    if (error || !data) {
      return { product: null, error: "Product not found" };
    }

    // Transform the data to flatten trade_types
    const product = {
      ...data,
      trade_types: data.trade_types?.map((tt: any) => tt.trade_type) || [],
    };

    return { product, error: null };
  } catch (error) {
    console.error("Get product error:", error);
    return { product: null, error: "An error occurred while fetching product" };
  }
}

/**
 * Create new product
 */
export async function createProduct(
  input: CreateProductInput
): Promise<{ product: Product | null; error: string | null }> {
  try {
    // Insert product
    const { data: product, error: productError } = await supabase
      .from("products")
      .insert({
        category_id: input.category_id,
        slug: input.slug,
        name: input.name,
        type: input.type,
        short_description: input.short_description,
        long_description: input.long_description,
        hs_code: input.hs_code,
        brand: input.brand,
        origin_country: input.origin_country,
        status: input.status ?? true,
        created_by: input.created_by,
      })
      .select()
      .single();

    if (productError || !product) {
      return {
        product: null,
        error: productError?.message || "Failed to create product",
      };
    }

    // Insert trade types
    if (input.trade_type_ids && input.trade_type_ids.length > 0) {
      const tradeTypeInserts = input.trade_type_ids.map((ttId) => ({
        product_id: product.id,
        trade_type_id: ttId,
      }));

      await supabase.from("product_trade_types").insert(tradeTypeInserts);
    }

    // Insert images
    if (input.images && input.images.length > 0) {
      const imageInserts = input.images.map((img, idx) => ({
        product_id: product.id,
        image_url: img.image_url,
        alt_text: img.alt_text,
        is_primary: img.is_primary ?? idx === 0,
        sort_order: img.sort_order ?? idx,
      }));

      await supabase.from("product_images").insert(imageInserts);
    }

    // Insert specifications
    if (input.specifications && input.specifications.length > 0) {
      const specInserts = input.specifications.map((spec) => ({
        product_id: product.id,
        spec_key: spec.spec_key,
        spec_value: spec.spec_value,
        unit: spec.unit,
      }));

      await supabase.from("product_specifications").insert(specInserts);
    }

    // Fetch complete product with relations
    return await getProduct(product.id);
  } catch (error) {
    console.error("Create product error:", error);
    return { product: null, error: "An error occurred while creating product" };
  }
}

/**
 * Update product
 */
export async function updateProduct(
  id: string,
  input: UpdateProductInput
): Promise<{ product: Product | null; error: string | null }> {
  try {
    // Extract images, specifications, and trade_type_ids from input
    const { images, specifications, trade_type_ids, ...productData } = input;

    console.log("updateProduct called with:");
    console.log("- Product ID:", id);
    console.log("- Images count:", images?.length || 0);
    console.log("- Images data:", images);
    console.log("- Specifications count:", specifications?.length || 0);
    console.log("- Trade types count:", trade_type_ids?.length || 0);

    // Update product basic data
    const { data: product, error } = await supabase
      .from("products")
      .update(productData)
      .eq("id", id)
      .select()
      .single();

    if (error || !product) {
      console.error("Failed to update product:", error);
      return {
        product: null,
        error: error?.message || "Failed to update product",
      };
    }

    console.log("Product basic data updated successfully");

    // Update trade types if provided
    if (trade_type_ids) {
      console.log("Updating trade types...");
      // Delete existing trade types
      await supabase.from("product_trade_types").delete().eq("product_id", id);

      // Insert new trade types
      if (trade_type_ids.length > 0) {
        const tradeTypeData = trade_type_ids.map((trade_type_id) => ({
          product_id: id,
          trade_type_id,
        }));

        const { error: tradeError } = await supabase
          .from("product_trade_types")
          .insert(tradeTypeData);

        if (tradeError) {
          console.error("Trade types insert error:", tradeError);
        } else {
          console.log("Trade types updated successfully");
        }
      }
    }

    // Update images if provided
    if (images && images.length > 0) {
      console.log("Updating images - deleting old images...");
      // Delete existing images
      const { error: deleteError } = await supabase
        .from("product_images")
        .delete()
        .eq("product_id", id);

      if (deleteError) {
        console.error("Failed to delete old images:", deleteError);
      } else {
        console.log("Old images deleted, inserting new images...");
      }

      // Insert new images
      const imageData = images.map((img) => ({
        product_id: id,
        ...img,
      }));

      console.log("Inserting images:", imageData);

      const { error: insertError } = await supabase
        .from("product_images")
        .insert(imageData);

      if (insertError) {
        console.error("Failed to insert images:", insertError);
      } else {
        console.log("Images inserted successfully");
      }
    } else {
      console.log("No images to update (images array is empty or undefined)");
    }

    // Update specifications if provided
    if (specifications && specifications.length > 0) {
      console.log("Updating specifications...");
      // Delete existing specifications
      await supabase
        .from("product_specifications")
        .delete()
        .eq("product_id", id);

      // Insert new specifications
      const specData = specifications.map((spec) => ({
        product_id: id,
        ...spec,
      }));

      const { error: specError } = await supabase
        .from("product_specifications")
        .insert(specData);

      if (specError) {
        console.error("Specifications insert error:", specError);
      } else {
        console.log("Specifications updated successfully");
      }
    }

    console.log("Fetching complete product with relations...");
    // Fetch complete product with relations
    return await getProduct(id);
  } catch (error) {
    console.error("Update product error:", error);
    return { product: null, error: "An error occurred while updating product" };
  }
}

/**
 * Delete product
 */
export async function deleteProduct(
  id: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Delete product error:", error);
    return {
      success: false,
      error: "An error occurred while deleting product",
    };
  }
}

/**
 * Get all categories
 */
export async function getCategories(params?: {
  status?: boolean;
  parent_id?: string | null;
}): Promise<{ categories: Category[]; error: string | null }> {
  try {
    let query = supabase.from("categories").select("*").order("name");

    if (params?.status !== undefined) {
      query = query.eq("status", params.status);
    }

    if (params?.parent_id !== undefined) {
      if (params.parent_id === null) {
        query = query.is("parent_id", null);
      } else {
        query = query.eq("parent_id", params.parent_id);
      }
    }

    const { data, error } = await query;

    if (error) {
      return { categories: [], error: error.message };
    }

    return { categories: data || [], error: null };
  } catch (error) {
    console.error("Get categories error:", error);
    return {
      categories: [],
      error: "An error occurred while fetching categories",
    };
  }
}

/**
 * Get all trade types
 */
export async function getTradeTypes(): Promise<{
  tradeTypes: TradeType[];
  error: string | null;
}> {
  try {
    const { data, error } = await supabase
      .from("trade_types")
      .select("*")
      .eq("status", true)
      .order("name");

    if (error) {
      return { tradeTypes: [], error: error.message };
    }

    return { tradeTypes: data || [], error: null };
  } catch (error) {
    console.error("Get trade types error:", error);
    return {
      tradeTypes: [],
      error: "An error occurred while fetching trade types",
    };
  }
}

/**
 * Update product images
 */
export async function updateProductImages(
  productId: string,
  images: Array<{
    id?: string;
    image_url: string;
    alt_text: string;
    is_primary?: boolean;
    sort_order?: number;
  }>
): Promise<{ success: boolean; error: string | null }> {
  try {
    // Delete existing images
    await supabase.from("product_images").delete().eq("product_id", productId);

    // Insert new images
    const imageInserts = images.map((img, idx) => ({
      product_id: productId,
      image_url: img.image_url,
      alt_text: img.alt_text,
      is_primary: img.is_primary ?? idx === 0,
      sort_order: img.sort_order ?? idx,
    }));

    const { error } = await supabase
      .from("product_images")
      .insert(imageInserts);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Update product images error:", error);
    return {
      success: false,
      error: "An error occurred while updating product images",
    };
  }
}

/**
 * Update product specifications
 */
export async function updateProductSpecifications(
  productId: string,
  specifications: Array<{
    id?: string;
    spec_key: string;
    spec_value: string;
    unit?: string;
  }>
): Promise<{ success: boolean; error: string | null }> {
  try {
    // Delete existing specifications
    await supabase
      .from("product_specifications")
      .delete()
      .eq("product_id", productId);

    // Insert new specifications
    const specInserts = specifications.map((spec) => ({
      product_id: productId,
      spec_key: spec.spec_key,
      spec_value: spec.spec_value,
      unit: spec.unit,
    }));

    const { error } = await supabase
      .from("product_specifications")
      .insert(specInserts);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Update product specifications error:", error);
    return {
      success: false,
      error: "An error occurred while updating product specifications",
    };
  }
}
