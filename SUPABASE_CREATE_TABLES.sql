-- Run this in Supabase SQL Editor to create all tables
-- Step 1: Copy and paste all this SQL
-- Step 2: Click "RUN" in Supabase

-- Create User table (MOST IMPORTANT - for login)
CREATE TABLE IF NOT EXISTS "User" (
  "id" text PRIMARY KEY,
  "email" text NOT NULL UNIQUE,
  "name" text NOT NULL,
  "password" text NOT NULL,
  "role" text NOT NULL DEFAULT 'user',
  "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "User_email_idx" ON "User"("email");
CREATE INDEX IF NOT EXISTS "User_role_idx" ON "User"("role");

-- Create Product table
CREATE TABLE IF NOT EXISTS "Product" (
  "id" text PRIMARY KEY,
  "name" text NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "description" text NOT NULL,
  "price" double precision NOT NULL,
  "category" text NOT NULL,
  "images" text[] DEFAULT '{}',
  "featured" boolean DEFAULT false,
  "inStock" boolean DEFAULT true,
  "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "Product_slug_idx" ON "Product"("slug");
CREATE INDEX IF NOT EXISTS "Product_category_idx" ON "Product"("category");

-- Create BlogPost table
CREATE TABLE IF NOT EXISTS "BlogPost" (
  "id" text PRIMARY KEY,
  "title" text NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "excerpt" text NOT NULL,
  "content" text NOT NULL,
  "category" text NOT NULL,
  "author" text NOT NULL,
  "authorImage" text,
  "coverImage" text,
  "published" boolean DEFAULT false,
  "publishedAt" timestamp,
  "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "BlogPost_slug_idx" ON "BlogPost"("slug");

-- Create Registration table
CREATE TABLE IF NOT EXISTS "Registration" (
  "id" text PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL UNIQUE,
  "password" text NOT NULL,
  "phone" text,
  "company" text,
  "status" text DEFAULT 'pending',
  "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "Registration_email_idx" ON "Registration"("email");

-- Create ContactMessage table
CREATE TABLE IF NOT EXISTS "ContactMessage" (
  "id" text PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "subject" text NOT NULL,
  "message" text NOT NULL,
  "status" text DEFAULT 'new',
  "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP
);

-- Create MailLog table
CREATE TABLE IF NOT EXISTS "MailLog" (
  "id" text PRIMARY KEY,
  "to" text NOT NULL,
  "subject" text NOT NULL,
  "status" text NOT NULL,
  "error" text,
  "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP
);

-- Verify all tables created
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
