-- Create all tables from Prisma schema

-- Product table
CREATE TABLE IF NOT EXISTS "Product" (
  "id" text NOT NULL PRIMARY KEY,
  "name" text NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "description" text NOT NULL,
  "price" double precision NOT NULL,
  "category" text NOT NULL,
  "images" text[] NOT NULL DEFAULT '{}',
  "featured" boolean NOT NULL DEFAULT false,
  "inStock" boolean NOT NULL DEFAULT true,
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- BlogPost table
CREATE TABLE IF NOT EXISTS "BlogPost" (
  "id" text NOT NULL PRIMARY KEY,
  "title" text NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "excerpt" text NOT NULL,
  "content" text NOT NULL,
  "category" text NOT NULL,
  "author" text NOT NULL,
  "authorImage" text,
  "coverImage" text,
  "published" boolean NOT NULL DEFAULT false,
  "publishedAt" timestamp(3),
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Registration table
CREATE TABLE IF NOT EXISTS "Registration" (
  "id" text NOT NULL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL UNIQUE,
  "password" text NOT NULL,
  "phone" text,
  "company" text,
  "status" text NOT NULL DEFAULT 'pending',
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- User table (IMPORTANT - this is what you need for login)
CREATE TABLE IF NOT EXISTS "User" (
  "id" text NOT NULL PRIMARY KEY,
  "email" text NOT NULL UNIQUE,
  "name" text NOT NULL,
  "password" text NOT NULL,
  "role" text NOT NULL DEFAULT 'user',
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ContactMessage table
CREATE TABLE IF NOT EXISTS "ContactMessage" (
  "id" text NOT NULL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "subject" text NOT NULL,
  "message" text NOT NULL,
  "status" text NOT NULL DEFAULT 'new',
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- MailLog table
CREATE TABLE IF NOT EXISTS "MailLog" (
  "id" text NOT NULL PRIMARY KEY,
  "to" text NOT NULL,
  "subject" text NOT NULL,
  "status" text NOT NULL,
  "error" text,
  "createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS "Product_slug_idx" ON "Product"("slug");
CREATE INDEX IF NOT EXISTS "Product_category_idx" ON "Product"("category");
CREATE INDEX IF NOT EXISTS "Product_featured_idx" ON "Product"("featured");

CREATE INDEX IF NOT EXISTS "BlogPost_slug_idx" ON "BlogPost"("slug");
CREATE INDEX IF NOT EXISTS "BlogPost_category_idx" ON "BlogPost"("category");
CREATE INDEX IF NOT EXISTS "BlogPost_published_idx" ON "BlogPost"("published");

CREATE INDEX IF NOT EXISTS "Registration_email_idx" ON "Registration"("email");
CREATE INDEX IF NOT EXISTS "Registration_status_idx" ON "Registration"("status");

CREATE INDEX IF NOT EXISTS "User_email_idx" ON "User"("email");
CREATE INDEX IF NOT EXISTS "User_role_idx" ON "User"("role");

CREATE INDEX IF NOT EXISTS "ContactMessage_status_idx" ON "ContactMessage"("status");
CREATE INDEX IF NOT EXISTS "ContactMessage_createdAt_idx" ON "ContactMessage"("createdAt");

CREATE INDEX IF NOT EXISTS "MailLog_status_idx" ON "MailLog"("status");
CREATE INDEX IF NOT EXISTS "MailLog_createdAt_idx" ON "MailLog"("createdAt");

-- Verify tables created
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
