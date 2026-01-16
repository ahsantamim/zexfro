# 🗺️ Zexfro - Complete Routes & Pages Documentation

> **Last Updated:** January 13, 2026  
> **Framework:** Next.js 16 with App Router  
> **Internationalization:** next-intl (4 languages)  
> **Supported Locales:** `en`, `es`, `fr`, `ar`

---

## 📋 Table of Contents

1. [Quick Overview](#quick-overview)
2. [Scripts Available](#scripts-available)
3. [Public Routes](#public-routes)
4. [Admin Routes (Protected)](#admin-routes-protected)
5. [API Routes](#api-routes)
6. [Route Patterns](#route-patterns)

---

## 🚀 Quick Overview

### Route Structure

- **Internationalized Routes:** All public routes are prefixed with locale (`/en`, `/es`, `/fr`, `/ar`)
- **Admin Panel:** Protected admin routes under `/[locale]/admin/*`
- **API Endpoints:** RESTful API routes under `/api/*`
- **Authentication:** Next-Auth v5 with custom login page

### Total Routes Count

- **Public Pages:** 27 pages
- **Admin Pages:** 18 pages
- **API Endpoints:** 25 endpoints

---

## 🛠️ Scripts Available

```bash
# Development
npm run dev              # Start development server

# Production
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint

# Database (Prisma)
npm run test:db         # Test database connection
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema to database
npm run db:pull         # Pull schema from database
npm run db:studio       # Open Prisma Studio
npm run db:sync         # Generate + Push (combined)
```

---

## 🌐 Public Routes

### Main Pages

| Route                | File Path                                   | Description                            |
| -------------------- | ------------------------------------------- | -------------------------------------- |
| `/[locale]`          | `src/app/[locale]/(main)/page.tsx`          | Homepage with hero, features, services |
| `/[locale]/about`    | `src/app/[locale]/(main)/about/page.tsx`    | About us page                          |
| `/[locale]/contact`  | `src/app/[locale]/(main)/contact/page.tsx`  | Contact form and information           |
| `/[locale]/services` | `src/app/[locale]/(main)/services/page.tsx` | Services overview                      |
| `/[locale]/faq`      | `src/app/[locale]/(main)/faq/page.tsx`      | Frequently asked questions             |

### Product Routes

| Route                           | File Path                                              | Description                   |
| ------------------------------- | ------------------------------------------------------ | ----------------------------- |
| `/[locale]/products`            | `src/app/[locale]/(main)/products/page.tsx`            | Products listing with filters |
| `/[locale]/products/categories` | `src/app/[locale]/(main)/products/categories/page.tsx` | Product categories overview   |
| `/[locale]/products/[slug]`     | `src/app/[locale]/(main)/products/[slug]/page.tsx`     | Individual product details    |

### Blog Routes

| Route                   | File Path                                      | Description          |
| ----------------------- | ---------------------------------------------- | -------------------- |
| `/[locale]/blog`        | `src/app/[locale]/(main)/blog/page.tsx`        | Blog posts listing   |
| `/[locale]/blog/[slug]` | `src/app/[locale]/(main)/blog/[slug]/page.tsx` | Individual blog post |

### Service Pages

| Route                         | File Path                                            | Description                    |
| ----------------------------- | ---------------------------------------------------- | ------------------------------ |
| `/[locale]/global-service`    | `src/app/[locale]/(main)/global-service/page.tsx`    | Global services information    |
| `/[locale]/local-service`     | `src/app/[locale]/(main)/local-service/page.tsx`     | Local services information     |
| `/[locale]/logistics-support` | `src/app/[locale]/(main)/logistics-support/page.tsx` | Logistics and support services |
| `/[locale]/quality-assurance` | `src/app/[locale]/(main)/quality-assurance/page.tsx` | Quality assurance information  |

### Information & Compliance Pages

| Route                                | File Path                                                   | Description              |
| ------------------------------------ | ----------------------------------------------------------- | ------------------------ |
| `/[locale]/competitive-advantages`   | `src/app/[locale]/(main)/competitive-advantages/page.tsx`   | Company advantages       |
| `/[locale]/benefits-for-supplier`    | `src/app/[locale]/(main)/benefits-for-supplier/page.tsx`    | Supplier benefits        |
| `/[locale]/compliance-standards`     | `src/app/[locale]/(main)/compliance-standards/page.tsx`     | Compliance standards     |
| `/[locale]/documentation-compliance` | `src/app/[locale]/(main)/documentation-compliance/page.tsx` | Documentation compliance |
| `/[locale]/hs-code`                  | `src/app/[locale]/(main)/hs-code/page.tsx`                  | HS Code information      |
| `/[locale]/glossary`                 | `src/app/[locale]/(main)/glossary/page.tsx`                 | Industry glossary        |

### Company Information

| Route                             | File Path                                                | Description                 |
| --------------------------------- | -------------------------------------------------------- | --------------------------- |
| `/[locale]/vision-mission-values` | `src/app/[locale]/(main)/vision-mission-values/page.tsx` | Vision, mission, and values |
| `/[locale]/board-of-directors`    | `src/app/[locale]/(main)/board-of-directors/page.tsx`    | Board of directors          |
| `/[locale]/careers`               | `src/app/[locale]/(main)/careers/page.tsx`               | Career opportunities        |
| `/[locale]/case-study`            | `src/app/[locale]/(main)/case-study/page.tsx`            | Case studies                |
| `/[locale]/payment-methods`       | `src/app/[locale]/(main)/payment-methods/page.tsx`       | Payment methods information |

### Legal Pages

| Route                        | File Path                                           | Description          |
| ---------------------------- | --------------------------------------------------- | -------------------- |
| `/[locale]/privacy-policy`   | `src/app/[locale]/(main)/privacy-policy/page.tsx`   | Privacy policy       |
| `/[locale]/terms-conditions` | `src/app/[locale]/(main)/terms-conditions/page.tsx` | Terms and conditions |

---

## 🔐 Admin Routes (Protected)

All admin routes require authentication and are protected by middleware.

### Dashboard & Main

| Route                          | File Path                                      | Description                |
| ------------------------------ | ---------------------------------------------- | -------------------------- |
| `/[locale]/admin`              | `src/app/[locale]/admin/page.tsx`              | Admin dashboard with stats |
| `/[locale]/admin/demo-loading` | `src/app/[locale]/admin/demo-loading/page.tsx` | Loading states demo        |

### Product Management

| Route                             | File Path                                         | Description               |
| --------------------------------- | ------------------------------------------------- | ------------------------- |
| `/[locale]/admin/products`        | `src/app/[locale]/admin/products/page.tsx`        | Products management table |
| `/[locale]/admin/products/create` | `src/app/[locale]/admin/products/create/page.tsx` | Create new product        |
| `/[locale]/admin/products/[id]`   | `src/app/[locale]/admin/products/[id]/page.tsx`   | Edit product              |

### Category Management

| Route                               | File Path                                           | Description                 |
| ----------------------------------- | --------------------------------------------------- | --------------------------- |
| `/[locale]/admin/categories`        | `src/app/[locale]/admin/categories/page.tsx`        | Categories management table |
| `/[locale]/admin/categories/create` | `src/app/[locale]/admin/categories/create/page.tsx` | Create new category         |
| `/[locale]/admin/categories/[id]`   | `src/app/[locale]/admin/categories/[id]/page.tsx`   | Edit category               |

### Blog Management

| Route                         | File Path                                     | Description           |
| ----------------------------- | --------------------------------------------- | --------------------- |
| `/[locale]/admin/blog`        | `src/app/[locale]/admin/blog/page.tsx`        | Blog posts management |
| `/[locale]/admin/blog/create` | `src/app/[locale]/admin/blog/create/page.tsx` | Create new blog post  |
| `/[locale]/admin/blog/[id]`   | `src/app/[locale]/admin/blog/[id]/page.tsx`   | Edit blog post        |

### Trade Types Management

| Route                                | File Path                                            | Description            |
| ------------------------------------ | ---------------------------------------------------- | ---------------------- |
| `/[locale]/admin/trade-types`        | `src/app/[locale]/admin/trade-types/page.tsx`        | Trade types management |
| `/[locale]/admin/trade-types/create` | `src/app/[locale]/admin/trade-types/create/page.tsx` | Create trade type      |

### User & Registration Management

| Route                           | File Path                                       | Description           |
| ------------------------------- | ----------------------------------------------- | --------------------- |
| `/[locale]/admin/users`         | `src/app/[locale]/admin/users/page.tsx`         | User management       |
| `/[locale]/admin/users/create`  | `src/app/[locale]/admin/users/create/page.tsx`  | Create new user       |
| `/[locale]/admin/registrations` | `src/app/[locale]/admin/registrations/page.tsx` | Registration requests |

### Email Management

| Route                  | File Path                              | Description             |
| ---------------------- | -------------------------------------- | ----------------------- |
| `/[locale]/admin/mail` | `src/app/[locale]/admin/mail/page.tsx` | Email logs and settings |

---

## 🔌 API Routes

### Public API Endpoints

#### Authentication

| Method | Endpoint                  | File Path                                 | Description                |
| ------ | ------------------------- | ----------------------------------------- | -------------------------- |
| `POST` | `/api/auth/[...nextauth]` | `src/app/api/auth/[...nextauth]/route.ts` | NextAuth.js authentication |
| `POST` | `/api/register`           | `src/app/api/register/route.ts`           | User registration          |
| `POST` | `/api/contact`            | `src/app/api/contact/route.ts`            | Contact form submission    |

#### Products

| Method | Endpoint               | File Path                              | Description         |
| ------ | ---------------------- | -------------------------------------- | ------------------- |
| `GET`  | `/api/products`        | `src/app/api/products/route.ts`        | Get all products    |
| `GET`  | `/api/products/[slug]` | `src/app/api/products/[slug]/route.ts` | Get product by slug |

#### Categories

| Method | Endpoint                 | File Path                                | Description          |
| ------ | ------------------------ | ---------------------------------------- | -------------------- |
| `GET`  | `/api/categories`        | `src/app/api/categories/route.ts`        | Get all categories   |
| `GET`  | `/api/categories/[slug]` | `src/app/api/categories/[slug]/route.ts` | Get category by slug |

#### Blog

| Method | Endpoint               | File Path                              | Description         |
| ------ | ---------------------- | -------------------------------------- | ------------------- |
| `GET`  | `/api/blog`            | `src/app/api/blog/route.ts`            | Get all blog posts  |
| `GET`  | `/api/blog/[id]`       | `src/app/api/blog/[id]/route.ts`       | Get blog post by ID |
| `GET`  | `/api/blog/categories` | `src/app/api/blog/categories/route.ts` | Get blog categories |

#### Upload

| Method | Endpoint      | File Path                     | Description         |
| ------ | ------------- | ----------------------------- | ------------------- |
| `POST` | `/api/upload` | `src/app/api/upload/route.ts` | File upload handler |

### Admin API Endpoints (Protected)

#### Dashboard & Stats

| Method | Endpoint               | File Path                              | Description          |
| ------ | ---------------------- | -------------------------------------- | -------------------- |
| `GET`  | `/api/admin/stats`     | `src/app/api/admin/stats/route.ts`     | Dashboard statistics |
| `GET`  | `/api/admin/dashboard` | `src/app/api/admin/dashboard/route.ts` | Dashboard data       |

#### Products Management

| Method                 | Endpoint                   | File Path                                  | Description               |
| ---------------------- | -------------------------- | ------------------------------------------ | ------------------------- |
| `GET`, `POST`          | `/api/admin/products`      | `src/app/api/admin/products/route.ts`      | List/create products      |
| `GET`, `PUT`, `DELETE` | `/api/admin/products/[id]` | `src/app/api/admin/products/[id]/route.ts` | Get/update/delete product |

#### Categories Management

| Method                 | Endpoint                       | File Path                                      | Description                |
| ---------------------- | ------------------------------ | ---------------------------------------------- | -------------------------- |
| `GET`, `POST`          | `/api/admin/categories`        | `src/app/api/admin/categories/route.ts`        | List/create categories     |
| `GET`, `PUT`, `DELETE` | `/api/admin/categories/[id]`   | `src/app/api/admin/categories/[id]/route.ts`   | Get/update/delete category |
| `POST`                 | `/api/admin/categories/images` | `src/app/api/admin/categories/images/route.ts` | Category image upload      |

#### Trade Types Management

| Method                 | Endpoint                      | File Path                                     | Description                  |
| ---------------------- | ----------------------------- | --------------------------------------------- | ---------------------------- |
| `GET`, `POST`          | `/api/admin/trade-types`      | `src/app/api/admin/trade-types/route.ts`      | List/create trade types      |
| `GET`, `PUT`, `DELETE` | `/api/admin/trade-types/[id]` | `src/app/api/admin/trade-types/[id]/route.ts` | Get/update/delete trade type |

#### Blog Management

| Method                 | Endpoint               | File Path                              | Description                 |
| ---------------------- | ---------------------- | -------------------------------------- | --------------------------- |
| `GET`, `POST`          | `/api/admin/blog`      | `src/app/api/admin/blog/route.ts`      | List/create blog posts      |
| `GET`, `PUT`, `DELETE` | `/api/admin/blog/[id]` | `src/app/api/admin/blog/[id]/route.ts` | Get/update/delete blog post |

#### User & Registration Management

| Method                 | Endpoint                        | File Path                                       | Description               |
| ---------------------- | ------------------------------- | ----------------------------------------------- | ------------------------- |
| `GET`, `POST`          | `/api/admin/users`              | `src/app/api/admin/users/route.ts`              | List/create users         |
| `GET`, `PUT`, `DELETE` | `/api/admin/users/[id]`         | `src/app/api/admin/users/[id]/route.ts`         | Get/update/delete user    |
| `GET`                  | `/api/admin/registrations`      | `src/app/api/admin/registrations/route.ts`      | Get registration requests |
| `GET`, `PUT`, `DELETE` | `/api/admin/registrations/[id]` | `src/app/api/admin/registrations/[id]/route.ts` | Manage registration       |

#### Email Management

| Method | Endpoint               | File Path                              | Description             |
| ------ | ---------------------- | -------------------------------------- | ----------------------- |
| `GET`  | `/api/admin/mail`      | `src/app/api/admin/mail/route.ts`      | Email logs and settings |
| `POST` | `/api/admin/mail/send` | `src/app/api/admin/mail/send/route.ts` | Send email              |
| `GET`  | `/api/admin/mail/logs` | `src/app/api/admin/mail/logs/route.ts` | Email logs              |

#### Upload

| Method | Endpoint            | File Path                           | Description       |
| ------ | ------------------- | ----------------------------------- | ----------------- |
| `POST` | `/api/admin/upload` | `src/app/api/admin/upload/route.ts` | Admin file upload |

---

## 🎯 Route Patterns

### Internationalization Pattern

```
/[locale]/...
```

- All public routes are prefixed with locale
- Supported locales: `en`, `es`, `fr`, `ar`
- Default locale: `en`
- Example: `/en/products`, `/es/productos`, `/fr/produits`, `/ar/products`

### Layout Structure

```
src/app/
├── page.tsx                     # Root redirect to locale
├── layout.tsx                   # Root layout
└── [locale]/
    ├── layout.tsx               # Locale layout with i18n
    ├── login/                   # Login page (outside main layout)
    ├── (main)/                  # Public pages with main layout
    │   ├── layout.tsx
    │   └── [pages...]
    └── admin/                   # Admin pages with admin layout
        ├── layout.tsx
        └── [admin-pages...]
```

### Dynamic Route Patterns

```
[locale]/products/[slug]         # Product by slug
[locale]/blog/[slug]             # Blog post by slug
[locale]/admin/products/[id]     # Edit product by ID
[locale]/admin/categories/[id]   # Edit category by ID
[locale]/admin/blog/[id]         # Edit blog post by ID
```

### API Route Patterns

```
/api/[resource]                  # Public resource list
/api/[resource]/[id]             # Public single resource
/api/admin/[resource]            # Admin resource management
/api/admin/[resource]/[id]       # Admin single resource
```

---

## 📁 File Organization

### Page Components

- All pages use Server Components by default
- Client components marked with `"use client"`
- Shared components in `src/components/`
- UI primitives in `src/components/ui/`

### API Routes

- RESTful conventions
- Public APIs in `/api/[resource]`
- Protected admin APIs in `/api/admin/[resource]`
- Authentication via NextAuth middleware

### Layouts

- Root layout: Global providers and metadata
- Locale layout: i18n provider
- Main layout: Public pages (navbar, footer)
- Admin layout: Dashboard UI (sidebar, header)

---

## 🔒 Authentication & Authorization

### Protected Routes

- All `/[locale]/admin/*` routes require authentication
- Middleware checks auth state before rendering
- Redirects to `/[locale]/login` if not authenticated

### Login Page

- Route: `/[locale]/login`
- File: `src/app/[locale]/login/page.tsx`
- Uses NextAuth v5 for authentication

### Auth Configuration

- Config: `src/auth.config.ts`
- Main auth: `src/auth.ts`
- Middleware: `src/middleware.ts`

---

## 🌍 Internationalization (i18n)

### Configuration

- **Library:** next-intl
- **Config:** `src/i18n/config.ts`, `src/i18n/routing.ts`
- **Messages:** `src/i18n/messages/` (en, es, fr, ar)
- **Default:** English (en)

### Usage in Routes

All public routes automatically support all 4 languages:

- English: `/en/about`
- Spanish: `/es/about`
- French: `/fr/about`
- Arabic: `/ar/about`

---

## 📊 Database & Storage

### Database (Prisma)

- ORM: Prisma
- Schema: `prisma/schema.prisma`
- Models: Users, Products, Categories, Blog Posts, Trade Types, Registrations

### File Storage (Supabase)

- Images and media stored in Supabase
- Config: `src/config/storage.ts`
- Utilities: `src/lib/supabase/`

---

## 🎨 UI Components

### Component Library

- **Base:** Radix UI primitives
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion

### Key Component Folders

```
src/components/
├── ui/              # Shadcn/Radix UI components
├── layout/          # Navbar, Footer, Language Switcher
├── home/            # Homepage sections
├── products/        # Product components
├── blog/            # Blog components
├── admin/           # Admin dashboard components
├── forms/           # Form components
└── providers/       # Context providers
```

---

## 🚦 Development Workflow

### Starting Development

```bash
npm run dev
```

Server runs on `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run start
```

### Database Workflow

```bash
# Make schema changes in prisma/schema.prisma
npm run db:generate  # Generate Prisma client
npm run db:push      # Push to database

# Or use combined command
npm run db:sync
```

---

## 📝 Notes

- **Next.js 16:** Latest App Router with React 19
- **TypeScript:** Full type safety
- **ESLint:** Code quality checks
- **Responsive:** Mobile-first design
- **SEO:** Server-side rendering with metadata
- **Performance:** Image optimization, code splitting

---

**Generated:** January 13, 2026  
**Version:** 1.0.0
