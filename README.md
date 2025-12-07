# Company Profile Website

A full-featured company profile website built with Next.js 16 App Router, TypeScript, Tailwind CSS, and Prisma.

## Features

### Public Pages

- **Home**: Hero section, features, stats, and call-to-action
- **About**: Company mission, vision, timeline, and team
- **Services**: Service offerings with benefits
- **Contact**: Contact form with Carbonio mail integration
- **Products**: Dynamic product catalog with filtering
- **Blog**: Dynamic blog with categories and search
- **Registration**: User registration system

### Admin Portal

- **Dashboard**: Overview with stats and analytics
- **Product Management**: Full CRUD operations for products
- **Blog Management**: Create, edit, and publish blog posts
- **Registration Management**: Review and manage user registrations
- **Mail Integration**: Carbonio mail configuration and logs

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Prisma ORM (supports PostgreSQL, MySQL, SQLite)
- **Email**: Carbonio Mail integration with nodemailer

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

### 3. Set Up Database

```bash
npm run db:generate
npm run db:push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
