# Quick Reference - Admin Panel with Caching

## 🚀 Quick Start

### 1. Fetch Data with Caching

```typescript
import { useBlogPosts } from "@/lib/hooks/useBlog";

function MyComponent() {
  const { data: posts, isLoading, error } = useBlogPosts(false);

  if (isLoading) return <TableLoader />;
  if (error) return <div>Error loading posts</div>;

  return <BlogTable posts={posts} />;
}
```

### 2. Create/Update/Delete with Auto Cache Invalidation

```typescript
import { useCreateBlogPost } from "@/lib/hooks/useBlog";

function CreateForm() {
  const createMutation = useCreateBlogPost();

  const handleSubmit = async (data) => {
    await createMutation.mutateAsync(data);
    // Auto navigates to list + cache refreshed
  };

  return (
    <button disabled={createMutation.isPending}>
      {createMutation.isPending && <Loader2 className="animate-spin" />}
      {createMutation.isPending ? "Saving..." : "Save"}
    </button>
  );
}
```

### 3. Show Loading States

```typescript
import { LoadingSpinner, PageLoader, TableLoader } from '@/components/ui/LoadingSpinner';

// Full page loading
<PageLoader />

// Table loading
<TableLoader rows={5} />

// Custom spinner
<LoadingSpinner size="lg" text="Processing..." />

// Fullscreen overlay
<LoadingSpinner fullScreen text="Please wait..." />
```

---

## 📦 Available Hooks

### Blog Hooks (`useBlog.ts`)

```typescript
// Fetch all posts (cached 60s)
const { data, isLoading, error } = useBlogPosts(publishedOnly);

// Fetch single post (cached 60s)
const { data, isLoading, error } = useBlogPost(id);

// Create post (auto cache invalidation)
const createMutation = useCreateBlogPost();
await createMutation.mutateAsync(postData);

// Update post (auto cache invalidation)
const updateMutation = useUpdateBlogPost();
await updateMutation.mutateAsync({ id, ...data });

// Delete post (auto cache invalidation)
const deleteMutation = useDeleteBlogPost();
await deleteMutation.mutateAsync(id);

// Upload image
const uploadMutation = useUploadImage();
const url = await uploadMutation.mutateAsync(file);
```

### Product Hooks (`useProducts.ts`)

```typescript
const { data } = useProducts();
const { data } = useProduct(id);
const createMutation = useCreateProduct();
const updateMutation = useUpdateProduct();
const deleteMutation = useDeleteProduct();
```

### Category Hooks (`useCategories.ts`)

```typescript
const { data } = useCategories();
const { data } = useCategory(id);
const createMutation = useCreateCategory();
const updateMutation = useUpdateCategory();
const deleteMutation = useDeleteCategory();
```

---

## 🎨 Loading Components

### LoadingSpinner

```typescript
<LoadingSpinner size="sm" />   // 16px
<LoadingSpinner size="md" />   // 24px (default)
<LoadingSpinner size="lg" />   // 32px
<LoadingSpinner size="xl" />   // 48px

<LoadingSpinner text="Loading..." />  // With text
<LoadingSpinner fullScreen text="Please wait..." />  // Overlay
```

### PageLoader

```typescript
<PageLoader /> // Full page with centered spinner
```

### TableLoader

```typescript
<TableLoader rows={5} /> // Skeleton table with 5 rows
```

---

## 🔑 Cache Keys

### Blog

- `["blog-posts", { publishedOnly: boolean }]`
- `["blog-post", id]`

### Products

- `["products"]`
- `["product", id]`

### Categories

- `["categories"]`
- `["category", id]`

---

## ⚙️ Cache Configuration

### Current Settings

```typescript
staleTime: 60 * 1000; // 60 seconds (data fresh)
gcTime: 5 * 60 * 1000; // 5 minutes (garbage collection)
refetchOnWindowFocus: false; // No refetch on tab switch
retry: 1; // Retry failed requests once
```

### Manual Cache Invalidation (if needed)

```typescript
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

// Invalidate specific query
queryClient.invalidateQueries({ queryKey: ["blog-posts"] });

// Invalidate all blog queries
queryClient.invalidateQueries({ queryKey: ["blog"] });

// Remove specific query from cache
queryClient.removeQueries({ queryKey: ["blog-post", id] });
```

---

## 🎯 Common Patterns

### Pattern 1: Table with CRUD

```typescript
function MyTable() {
  const { data: items, isLoading } = useMyItems();
  const deleteMutation = useDeleteMyItem();

  const handleDelete = async (id) => {
    if (confirm("Delete?")) {
      await deleteMutation.mutateAsync(id);
      // List auto-refreshes
    }
  };

  if (isLoading) return <TableLoader />;

  return (
    <Table>
      {items.map((item) => (
        <Row key={item.id}>
          <Cell>{item.name}</Cell>
          <Cell>
            <Button
              onClick={() => handleDelete(item.id)}
              disabled={deleteMutation.isPending}
            >
              Delete
            </Button>
          </Cell>
        </Row>
      ))}
    </Table>
  );
}
```

### Pattern 2: Form with Create/Update

```typescript
function MyForm({ item }: { item?: Item }) {
  const createMutation = useCreateItem();
  const updateMutation = useUpdateItem();
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (item) {
      await updateMutation.mutateAsync({ id: item.id, ...formData });
    } else {
      await createMutation.mutateAsync(formData);
    }
    // Auto navigates + cache refreshed
  };

  const isSubmitting = createMutation.isPending || updateMutation.isPending;

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="animate-spin" />}
        {isSubmitting ? "Saving..." : item ? "Update" : "Create"}
      </button>
    </form>
  );
}
```

### Pattern 3: Edit Page with Data Fetching

```typescript
"use client";

import { use } from "react";
import { useMyItem } from "@/lib/hooks/useMyItems";
import { PageLoader } from "@/components/ui/LoadingSpinner";

function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: item, isLoading, error } = useMyItem(id);

  if (isLoading) return <PageLoader />;
  if (error) return <div>Error loading item</div>;

  return <MyForm item={item} />;
}
```

---

## 🚨 Error Handling

### Query Errors

```typescript
const { data, isLoading, error } = useBlogPosts();

if (error) {
  return (
    <div className="text-red-600 text-center p-6">
      <p>Failed to load data. Please try again.</p>
      <button onClick={() => refetch()}>Retry</button>
    </div>
  );
}
```

### Mutation Errors

```typescript
const createMutation = useCreateBlogPost();

try {
  await createMutation.mutateAsync(data);
} catch (error) {
  alert("Failed to create post: " + error.message);
}

// Or use onError callback
const createMutation = useCreateBlogPost({
  onError: (error) => {
    alert("Failed: " + error.message);
  },
});
```

---

## 📚 File Locations

### Hooks

- `src/lib/hooks/useBlog.ts`
- `src/lib/hooks/useProducts.ts`
- `src/lib/hooks/useCategories.ts`

### Components

- `src/components/ui/LoadingSpinner.tsx`
- `src/components/admin/Breadcrumbs.tsx`
- `src/components/admin/BlogPostsTable.tsx`
- `src/components/admin/forms/BlogPostForm.tsx`

### Providers

- `src/components/providers/QueryProvider.tsx`

### Layout

- `src/app/admin/layout.tsx`

---

## 🔧 Troubleshooting

### Cache Not Updating?

✅ Check cache key matches between query and invalidation  
✅ Ensure `onSuccess` callback has `invalidateQueries`  
✅ Check browser DevTools Network tab for API calls

### Too Many API Calls?

✅ Increase `staleTime` in QueryProvider  
✅ Check for unnecessary component re-renders  
✅ Use React Query DevTools to debug

### Loading State Not Showing?

✅ Ensure `isLoading` is checked before rendering  
✅ Use `isPending` for mutations, not `isLoading`  
✅ Check if data is cached (instant load = cache hit)

### Form Not Resetting After Submit?

✅ Mutations auto-navigate on success  
✅ Cache auto-invalidates on success  
✅ Form data will be fresh on next visit (cached)

---

## 💡 Best Practices

1. **Always use hooks** - Never use `useEffect + fetch`
2. **Handle loading states** - Use `isLoading` and `isPending`
3. **Handle errors** - Check `error` and show user-friendly messages
4. **Disable during mutations** - Set `disabled={isPending}`
5. **Show feedback** - Use loading spinners on buttons
6. **Cache keys** - Keep them consistent across the app
7. **Auto-navigation** - Let mutations handle redirect
8. **Don't manual refresh** - Cache invalidation does it automatically

---

## 🎉 Quick Checklist

✅ Using React Query hooks instead of useEffect?  
✅ Showing loading states (TableLoader, PageLoader)?  
✅ Handling errors with user-friendly messages?  
✅ Disabling buttons during mutations?  
✅ Cache keys match between queries and invalidations?  
✅ Mutations have onSuccess with invalidateQueries?  
✅ No manual router.refresh() calls?  
✅ Using TypeScript types from hook exports?

---

That's it! With these patterns, you can build consistent, performant admin interfaces with minimal code. 🚀
