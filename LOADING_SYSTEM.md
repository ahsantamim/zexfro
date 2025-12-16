# Admin Portal Loading System

## Overview

The admin portal uses a professional loading system with skeleton screens and spinners to provide excellent user feedback during data fetching and page transitions.

## Components

### 1. **Skeleton Components**

Located in `src/components/admin/loading/`

#### TableSkeleton
Used for loading table data:
```tsx
<TableSkeleton rows={5} columns={6} />
```

#### StatsCardSkeleton & StatsGridSkeleton
Used for loading statistics cards:
```tsx
<StatsCardSkeleton />
<StatsGridSkeleton count={4} />
```

#### CardSkeleton
Generic card skeleton:
```tsx
<CardSkeleton showHeader={true} contentLines={3} />
```

#### PageHeaderSkeleton
For page headers with title and button:
```tsx
<PageHeaderSkeleton />
```

### 2. **Spinner Components**

Located in `src/components/admin/loading/Spinner.tsx`

#### Spinner
Basic spinner with size options:
```tsx
<Spinner size="sm" | "md" | "lg" | "xl" />
```

#### PageSpinner
Centered spinner for page content:
```tsx
<PageSpinner />
```

#### FullPageSpinner
Full-screen overlay spinner:
```tsx
<FullPageSpinner />
```

### 3. **LoadingWrapper**

A helper component that simulates data fetching with automatic loading state:

```tsx
<LoadingWrapper delay={800}>
  {(loading) => (
    <>
      {loading ? (
        <ComponentSkeleton />
      ) : (
        <Component />
      )}
    </>
  )}
</LoadingWrapper>
```

## Usage Examples

### Table Component with Loading

```tsx
interface MyTableProps {
  loading?: boolean;
}

export function MyTable({ loading = false }: MyTableProps) {
  if (loading) {
    return <TableSkeleton rows={5} columns={6} />;
  }

  return (
    <Table>
      {/* Your table content */}
    </Table>
  );
}
```

### Stats Component with Loading

```tsx
interface StatsProps {
  loading?: boolean;
}

export function Stats({ loading = false }: StatsProps) {
  if (loading) {
    return <StatsGridSkeleton count={4} />;
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Your stats cards */}
    </div>
  );
}
```

### Page with Loading State

```tsx
"use client";

import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { PageHeaderSkeleton, TableSkeleton } from "@/components/admin/loading";

export default function MyPage() {
  return (
    <LoadingWrapper>
      {(loading) => (
        <div className="space-y-6">
          {loading ? (
            <>
              <PageHeaderSkeleton />
              <TableSkeleton rows={5} columns={6} />
            </>
          ) : (
            <>
              <PageActions title="My Page" />
              <MyTable />
            </>
          )}
        </div>
      )}
    </LoadingWrapper>
  );
}
```

## Demo Page

Visit `/admin/demo-loading` to see all loading states in action. The demo page includes:
- Stats cards loading
- Quick actions loading
- Analytics charts loading
- Recent activity loading
- All table variants loading
- Mail components loading

Use the "Simulate Loading" button to toggle between loaded and loading states.

## Best Practices

1. **Match Skeleton to Content**: Make sure your skeleton closely matches the final content layout
2. **Use Appropriate Delays**: Default is 800ms, adjust based on expected data fetch time
3. **Maintain Aspect Ratios**: Keep skeleton sizes similar to actual content to avoid layout shift
4. **Progressive Enhancement**: Show skeleton first, then content
5. **Consistent Animation**: All skeletons use the same pulse animation from shadcn

## Customization

All loading components use Tailwind CSS and can be customized:

```tsx
<Skeleton className="h-4 w-24 bg-gray-200" />
```

The pulse animation is defined in the shadcn skeleton component and follows the design system's color scheme.

## Color Scheme

- Skeleton base: `bg-gray-200`
- Skeleton animation: Pulse from `gray-200` to `gray-300`
- Spinner color: Primary brand color `#0a4a9e`

## Performance

- Skeletons are lightweight and render instantly
- No additional API calls or data fetching
- Uses CSS animations for smooth transitions
- Components are properly memoized to prevent unnecessary re-renders

