import { supabase } from "./client";

export interface CategoryImage {
  id: string;
  category_id: string;
  image_url: string;
  alt_text: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateCategoryImageInput {
  category_id: string;
  image_url: string;
  alt_text?: string;
}

export interface UpdateCategoryImageInput {
  image_url?: string;
  alt_text?: string;
}

/**
 * Get category image by category ID
 */
export async function getCategoryImage(
  categoryId: string
): Promise<{ image: CategoryImage | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from("category_images")
      .select("*")
      .eq("category_id", categoryId)
      .single();

    if (error) {
      // If no image found, return null instead of error
      if (error.code === "PGRST116") {
        return { image: null, error: null };
      }
      return { image: null, error: error.message };
    }

    return { image: data, error: null };
  } catch (error) {
    console.error("Get category image error:", error);
    return {
      image: null,
      error: "An error occurred while fetching category image",
    };
  }
}

/**
 * Create category image
 */
export async function createCategoryImage(
  input: CreateCategoryImageInput
): Promise<{ image: CategoryImage | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from("category_images")
      // @ts-ignore - Supabase type inference issue
      .insert({
        ...input,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      return { image: null, error: error.message };
    }

    return { image: data, error: null };
  } catch (error) {
    console.error("Create category image error:", error);
    return {
      image: null,
      error: "An error occurred while creating category image",
    };
  }
}

/**
 * Update category image
 */
export async function updateCategoryImage(
  id: string,
  input: UpdateCategoryImageInput
): Promise<{ image: CategoryImage | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from("category_images")
      // @ts-ignore - Supabase type inference issue
      .update({
        ...input,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return { image: null, error: error.message };
    }

    return { image: data, error: null };
  } catch (error) {
    console.error("Update category image error:", error);
    return {
      image: null,
      error: "An error occurred while updating category image",
    };
  }
}

/**
 * Delete category image
 */
export async function deleteCategoryImage(
  id: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    const { error } = await supabase
      .from("category_images")
      .delete()
      .eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Delete category image error:", error);
    return {
      success: false,
      error: "An error occurred while deleting category image",
    };
  }
}

/**
 * Upsert category image (create or update)
 */
export async function upsertCategoryImage(
  categoryId: string,
  input: CreateCategoryImageInput
): Promise<{ image: CategoryImage | null; error: string | null }> {
  try {
    // Check if image already exists
    const { image: existingImage } = await getCategoryImage(categoryId);

    if (existingImage) {
      // Update existing image
      return await updateCategoryImage(existingImage.id, {
        image_url: input.image_url,
        alt_text: input.alt_text,
      });
    } else {
      // Create new image
      return await createCategoryImage(input);
    }
  } catch (error) {
    console.error("Upsert category image error:", error);
    return {
      image: null,
      error: "An error occurred while upserting category image",
    };
  }
}
