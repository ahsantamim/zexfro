# Quick Start Guide

## Immediate Next Steps (5 minutes)

### 1. Copy Environment Variables

```bash
cp .env.example .env.local
```

### 2. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 to see your site!

## What You'll See

- **Home Page**: Working with placeholder content
- **Static Pages**: About, Services, Contact (ready to customize)
- **Dynamic Pages**: Products and Blog (need database setup)
- **Admin Portal**: Available at `/admin` (needs auth setup)

## Customize in 3 Steps

### Step 1: Update Company Info (2 minutes)

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Company Name", // ← Change this
  company: {
    name: "Your Company Name", // ← And this
    address: "Your address",
    phone: "Your phone",
    email: "your@email.com",
  },
};
```

### Step 2: Customize Home Page (5 minutes)

Edit `src/components/sections/HeroSection.tsx`:

```typescript
<h1>Welcome to Your Company</h1>  // ← Change this
<p>Innovative solutions...</p>      // ← And this
```

### Step 3: Update Colors (Optional)

Edit `src/styles/globals.css` for theme colors.

## Enable Database Features

To use Products, Blog, and Admin features:

### 1. Setup Database

```bash
# Update DATABASE_URL in .env.local
# Then run:
npm run db:generate
npm run db:push
```

### 2. Access Admin Portal

Visit http://localhost:3000/admin

(Note: Authentication needs to be implemented first)

## Add UI Components

For better UI, install shadcn/ui:

```bash
npx shadcn@latest init
npx shadcn@latest add button card input
```

## File Structure Quick Reference

```
src/
├── app/                    # Pages (edit page.tsx files)
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   └── ...
├── components/
│   ├── sections/          # Page sections (customize these!)
│   └── ...
├── config/
│   └── site.ts           # Company info (edit this!)
└── styles/
    └── globals.css       # Colors and theme
```

## Common Tasks

### Change a Page Title

Open the page file (e.g., `src/app/about/page.tsx`)
Look for `export const metadata = { title: "..." }`

### Add a New Section to Home

1. Create component in `src/components/sections/`
2. Import it in `src/app/page.tsx`
3. Add `<YourSection />` to the page

### Customize Contact Info

Edit `src/components/sections/ContactInfo.tsx`

### Update Footer/Navigation

Create components and add to `src/app/layout.tsx`

## Need Help?

- **Full documentation**: See `README.md`
- **Project structure**: See `STRUCTURE.md`
- **Setup complete info**: See `SETUP_COMPLETE.md`

## Production Deployment

When ready to deploy:

```bash
npm run build
npm run start
```

Or deploy to Vercel:

```bash
npx vercel
```

---

**That's it! Your site is running.** Start customizing! 🎨
