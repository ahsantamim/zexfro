# Internationalization (i18n) Setup Guide

## Overview

This application uses `next-intl` for internationalization with support for 4 languages:
- 🇬🇧 English (en) - Default
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇸🇦 Arabic (ar)

## File Structure

```
src/
├── i18n/
│   ├── config.ts           # Locale configuration
│   ├── routing.ts          # Routing configuration
│   ├── request.ts          # Server-side request handler
│   └── messages/
│       ├── en.json         # English translations
│       ├── es.json         # Spanish translations
│       ├── fr.json         # French translations
│       └── ar.json         # Arabic translations
├── middleware.ts           # Next.js middleware for locale detection
└── app/
    ├── [locale]/           # Locale-based routes
    │   ├── (main)/         # Main application routes
    │   ├── admin/          # Admin routes
    │   └── layout.tsx      # Locale layout
    ├── api/                # API routes (not localized)
    └── layout.tsx          # Root layout
```

## How It Works

### 1. URL Structure

All routes are prefixed with the locale:
- `/en/` - English
- `/es/` - Spanish
- `/fr/` - French
- `/ar/` - Arabic

Example: `/en/products`, `/es/productos`, `/fr/produits`, `/ar/products`

### 2. Language Switcher

The language switcher is located in the Navbar component:
- Desktop: Top right corner
- Mobile: Bottom of the mobile menu

Users can switch between languages, and the current page will be preserved.

### 3. Adding Translations

#### For Static Content:

1. Add your translation keys to all language files in `src/i18n/messages/`:

```json
// en.json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

2. Use the `useTranslations` hook in your component:

```tsx
"use client";

import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('mySection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

#### For Server Components:

```tsx
import { useTranslations } from 'next-intl';

export default function MyPage() {
  const t = useTranslations('mySection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 4. Navigation

Use the localized `Link` component from `@/i18n/routing`:

```tsx
import { Link } from '@/i18n/routing';

<Link href="/products">Products</Link>
```

This automatically prefixes the URL with the current locale.

### 5. Programmatic Navigation

Use the localized router:

```tsx
import { useRouter } from '@/i18n/routing';

const router = useRouter();
router.push('/products');
```

## RTL Support

Arabic language automatically enables RTL (Right-to-Left) layout through the `dir` attribute in the root layout.

## Dynamic Content

The following content is fetched from the database and should NOT be translated via i18n:
- Product listings
- Category listings
- Blog posts

These should be managed through the admin panel with multilingual support in the database.

## Adding a New Language

1. Add the locale to `src/i18n/config.ts`:
```ts
export const locales = ['en', 'es', 'fr', 'ar', 'de'] as const; // Added 'de'
```

2. Add the locale name and flag:
```ts
export const localeNames: Record<Locale, string> = {
  // ... existing
  de: 'Deutsch',
};

export const localeFlags: Record<Locale, string> = {
  // ... existing
  de: '🇩🇪',
};
```

3. Update `src/i18n/routing.ts`:
```ts
export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'ar', 'de'],
  // ...
});
```

4. Update middleware matcher in `src/middleware.ts`:
```ts
export const config = {
  matcher: ['/', '/(ar|en|es|fr|de)/:path*']
};
```

5. Create `src/i18n/messages/de.json` with all translations

## Current Implementation

### Landing Page Components (Translated):
- ✅ Navbar (with language switcher)
- ✅ Hero Section (fully translated)
- ✅ Features Section (fully translated)
- ✅ Product Categories Section 
  - ✅ Section title, subtitle, tabs (Import/Export), loading message, "View All" button
  - 🔄 Product names and descriptions are dynamic from database
- ✅ Testimonials Section (fully translated)
- ✅ Stats Section (fully translated)
- ✅ Blog Section
  - ✅ Section title, subtitle, "Read" button, "View All" button
  - 🔄 Blog posts content is dynamic (currently hardcoded, should be from database)
- ✅ CTA Section (fully translated)

### Not Yet Translated:
- Footer (can be added later)
- Other pages (about, services, contact, etc.)
- Admin panel
- Forms and validation messages

## Best Practices

1. **Always use translation keys**: Never hardcode text in components
2. **Organize translations**: Group related translations under common namespaces
3. **Keep keys descriptive**: Use clear, hierarchical key names
4. **Test all languages**: Ensure UI works well with different text lengths
5. **Handle pluralization**: Use next-intl's built-in pluralization features when needed

## Testing

To test different languages:
1. Navigate to any page
2. Click the language switcher (Globe icon)
3. Select a language
4. Verify all static content is translated
5. Check that the URL reflects the selected locale

## Troubleshooting

### Issue: Translations not showing
- Check that the translation key exists in all language files
- Verify the namespace matches the `useTranslations()` parameter
- Ensure the component is properly using the `t()` function

### Issue: Language switcher not working
- Check browser console for errors
- Verify middleware is properly configured
- Ensure routing configuration is correct

### Issue: Arabic text not displaying correctly
- Verify the `dir="rtl"` attribute is set in the HTML tag
- Check that fonts support Arabic characters
- Test with Arabic-specific CSS adjustments if needed

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

