# Project Structure Overview

## Directory Structure

```
zexfro/
├── prisma/
│   └── schema.prisma              # Database schema with all models
├── public/                        # Static assets
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── products/
│   │   │   ├── page.tsx          # Products listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Product detail (dynamic)
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Blog post detail (dynamic)
│   │   ├── register/
│   │   │   └── page.tsx          # Registration page
│   │   ├── admin/                # Admin portal
│   │   │   ├── layout.tsx        # Admin layout with sidebar
│   │   │   ├── page.tsx          # Dashboard
│   │   │   ├── products/
│   │   │   │   ├── page.tsx      # Products management
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx  # Create product
│   │   │   │   └── [id]/
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx # Edit product
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx      # Blog management
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx  # Create post
│   │   │   │   └── [id]/
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx # Edit post
│   │   │   ├── registrations/
│   │   │   │   └── page.tsx      # User registrations
│   │   │   └── mail/
│   │   │       └── page.tsx      # Mail settings
│   │   └── api/                  # API routes
│   │       ├── products/
│   │       │   ├── route.ts      # GET all, POST create
│   │       │   └── [id]/
│   │       │       └── route.ts  # GET, PUT, DELETE by ID
│   │       ├── blog/
│   │       │   ├── route.ts      # GET all, POST create
│   │       │   └── [id]/
│   │       │       └── route.ts  # GET, PUT, DELETE by ID
│   │       ├── register/
│   │       │   └── route.ts      # POST registration
│   │       ├── contact/
│   │       │   └── route.ts      # POST contact form
│   │       └── admin/
│   │           └── stats/
│   │               └── route.ts  # GET dashboard stats
│   ├── components/
│   │   ├── admin/               # Admin components
│   │   │   ├── AdminHeader.tsx
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── Analytics.tsx
│   │   │   ├── BlogPostsTable.tsx
│   │   │   ├── DashboardStats.tsx
│   │   │   ├── MailLogs.tsx
│   │   │   ├── MailSettings.tsx
│   │   │   ├── MailStats.tsx
│   │   │   ├── PageActions.tsx
│   │   │   ├── ProductsTable.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   ├── RegistrationsTable.tsx
│   │   │   └── forms/
│   │   │       ├── BlogPostForm.tsx
│   │   │       └── ProductForm.tsx
│   │   ├── blog/                # Blog components
│   │   │   ├── BlogCategories.tsx
│   │   │   ├── BlogComments.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── BlogSearch.tsx
│   │   │   └── RelatedPosts.tsx
│   │   ├── forms/               # Form components
│   │   │   ├── ContactForm.tsx
│   │   │   └── RegistrationForm.tsx
│   │   ├── products/            # Product components
│   │   │   ├── ProductDetails.tsx
│   │   │   ├── ProductsFilter.tsx
│   │   │   ├── ProductsGrid.tsx
│   │   │   └── RelatedProducts.tsx
│   │   ├── sections/            # Page sections
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MapSection.tsx
│   │   │   ├── MissionSection.tsx
│   │   │   ├── ServicesBenefits.tsx
│   │   │   ├── ServicesCTA.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── TimelineSection.tsx
│   │   └── ui/                  # Reusable UI components
│   │       └── PageHeader.tsx
│   ├── config/
│   │   └── site.ts              # Site configuration
│   ├── lib/
│   │   ├── api/                 # API functions
│   │   │   ├── blog.ts          # Blog CRUD operations
│   │   │   ├── dashboard.ts     # Dashboard statistics
│   │   │   ├── products.ts      # Product CRUD operations
│   │   │   └── registrations.ts # Registration management
│   │   ├── db/
│   │   │   └── prisma.ts        # Prisma client instance
│   │   ├── mail/
│   │   │   └── carbonio.ts      # Carbonio mail integration
│   │   ├── auth.ts              # Authentication utilities
│   │   ├── utils.ts             # Utility functions
│   │   └── validations.ts       # Zod schemas
│   └── styles/
│       └── globals.css          # Global styles with Tailwind
├── .env.example                 # Environment variables template
├── .gitignore
├── biome.json                   # Code formatter config
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── STRUCTURE.md                # This file
```

## Key Features

### Static Pages (No Database Required)

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Contact (`/contact`)

### Dynamic Pages (Database-Driven)

- Products listing (`/products`)
- Product detail (`/products/[slug]`)
- Blog listing (`/blog`)
- Blog post (`/blog/[slug]`)
- Registration (`/register`)

### Admin Portal (Protected)

- Dashboard (`/admin`)
- Products management (`/admin/products`)
- Blog management (`/admin/blog`)
- Registrations (`/admin/registrations`)
- Mail settings (`/admin/mail`)

### API Endpoints

- `GET/POST /api/products` - List/Create products
- `GET/PUT/DELETE /api/products/[id]` - Product operations
- `GET/POST /api/blog` - List/Create blog posts
- `GET/PUT/DELETE /api/blog/[id]` - Blog post operations
- `POST /api/register` - User registration
- `POST /api/contact` - Contact form submission
- `GET /api/admin/stats` - Dashboard statistics

## Database Models (Prisma)

1. **Product** - Product catalog
2. **BlogPost** - Blog articles
3. **Registration** - User registrations
4. **User** - Admin users
5. **ContactMessage** - Contact form submissions
6. **MailLog** - Email sending logs

## Next Steps for Development

### 1. Database Setup

```bash
# Configure DATABASE_URL in .env.local
npm run db:generate
npm run db:push
```

### 2. Install shadcn/ui Components

```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea
```

### 3. Configure Carbonio Mail

Update `.env.local` with your Carbonio mail settings

### 4. Implement Authentication

Consider using NextAuth.js for admin authentication

### 5. Add Image Upload

Integrate with Cloudinary, AWS S3, or similar service

### 6. Customize Sections

Edit component files in `src/components/sections/`

### 7. Add Real Content

Use the admin portal to add products and blog posts

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Prisma ORM (PostgreSQL/MySQL/SQLite)
- **Email**: Nodemailer with Carbonio
- **Validation**: Zod
- **Forms**: React Hook Form (recommended to add)
- **UI Components**: shadcn/ui (recommended to add)

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
```

## Deployment Checklist

- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Set up Carbonio mail
- [ ] Implement authentication
- [ ] Add image upload functionality
- [ ] Test all CRUD operations
- [ ] Add error handling and logging
- [ ] Set up analytics
- [ ] Configure SEO metadata
- [ ] Test email functionality
- [ ] Deploy to Vercel/Netlify/VPS
