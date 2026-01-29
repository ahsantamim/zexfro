"use server";

import { revalidateTag, revalidatePath } from "next/cache";

/**
 * Cache revalidation utilities for Next.js server-side caching
 * Call these functions after data mutations to keep dashboard fresh
 */

/**
 * Revalidate all dashboard-related caches
 * Use after any admin action that should update dashboard
 */
export async function revalidateDashboard() {
  revalidateTag("dashboard");
  revalidateTag("stats");
  revalidateTag("activity");

  // Also revalidate the admin page path
  revalidatePath("/[locale]/admin", "page");
}

/**
 * Revalidate after product changes (create, update, delete)
 */
export async function revalidateAfterProductChange() {
  revalidateTag("dashboard");
  revalidateTag("stats");
  revalidateTag("activity");
  revalidateTag("products");

  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/products", "page");
}

/**
 * Revalidate after blog post changes
 */
export async function revalidateAfterBlogChange() {
  revalidateTag("dashboard");
  revalidateTag("stats");
  revalidateTag("activity");
  revalidateTag("blog");

  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/blog", "page");
}

/**
 * Revalidate after category changes
 */
export async function revalidateAfterCategoryChange() {
  revalidateTag("dashboard");
  revalidateTag("stats");
  revalidateTag("activity");
  revalidateTag("categories");

  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/categories", "page");
}

/**
 * Revalidate after user/registration changes
 */
export async function revalidateAfterUserChange() {
  revalidateTag("dashboard");
  revalidateTag("stats");
  revalidateTag("activity");
  revalidateTag("users");

  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/users", "page");
  revalidatePath("/[locale]/admin/registrations", "page");
}
