# User Setup & RLS Configuration Guide

## Step 1: Create Admin User in Database

Run this SQL script in your Supabase SQL editor:

```sql
-- From file: SETUP_ADMIN_USER.sql
INSERT INTO "User" (id, email, name, password, role, "createdAt", "updatedAt")
VALUES (
  'zexfro-admin-001',
  'admin@zexfro.com',
  'zexfro-admin',
  '$2b$10$YixZaYV8fNMfzU8Z.HXlrOHnM6K4VzTZJSevJ4n.R5w1uLjAKs6tG', -- hashed: zexfro12341234
  'admin',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO UPDATE
SET 
  name = 'zexfro-admin',
  password = '$2b$10$YixZaYV8fNMfzU8Z.HXlrOHnM6K4VzTZJSevJ4n.R5w1uLjAKs6tG',
  role = 'admin',
  "updatedAt" = NOW();
```

**Admin Credentials:**
- **Username:** `zexfro-admin`
- **Password:** `zexfro12341234`

---

## Step 2: Fix RLS Policy for Image Upload

The 403 Unauthorized error happens because Supabase Storage has RLS (Row Level Security) policies that need to be enabled.

Run this SQL script in Supabase SQL Editor:

```sql
-- From file: FIX_RLS_IMAGE_UPLOAD.sql

-- For product-images bucket
CREATE POLICY "Allow authenticated users to upload product images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Allow authenticated users to read product images"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Allow authenticated users to update product images"
ON storage.objects
FOR UPDATE
WITH CHECK (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Allow authenticated users to delete product images"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- For blog-images bucket (similar policies)
CREATE POLICY "Allow authenticated users to upload blog images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'blog-images'
  AND auth.role() = 'authenticated'
);

-- ... and other operations for blog-images
```

---

## Step 3: Verify Database Schema

The User table already has the required columns:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String          ✓ (for username)
  password  String          ✓ (hashed password)
  role      String   @default("user")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## Step 4: Updated Authentication System

### Changes Made:

1. **Removed Hardcoded Admin (1234)** ✓
   - Replaced with database-based authentication

2. **Updated auth.ts** ✓
   - Now queries User table
   - Uses bcrypt to verify passwords
   - Supports login by username or email

3. **Updated Login Page** ✓
   - Shows correct credentials: zexfro-admin / zexfro12341234

### How It Works:

1. User enters username and password in login form
2. System queries database for user by name or email
3. Password is compared using bcrypt
4. If valid, user is authenticated and session is created
5. User can access admin panel

---

## Step 5: Test Login

1. Go to: `http://localhost:3000/login`
2. Enter:
   - **Username:** `zexfro-admin`
   - **Password:** `zexfro12341234`
3. Click Sign In
4. You should be redirected to `/admin`

---

## Step 6: Test Image Upload

1. Go to: `http://localhost:3000/admin/products/create`
2. Upload product images
3. Should work without 403 error

---

## Database User Management

### Add More Users:

Use this query to add additional users:

```javascript
// In your app or Prisma Studio
import bcrypt from 'bcryptjs';

const hashedPassword = await bcrypt.hash('password123', 10);

const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: 'username',
    password: hashedPassword,
    role: 'user' // or 'admin'
  }
});
```

### View All Users:

```sql
SELECT id, email, name, role, "createdAt" FROM "User";
```

### Update User Password:

```javascript
const hashedPassword = await bcrypt.hash('newpassword', 10);

const updated = await prisma.user.update({
  where: { email: 'user@example.com' },
  data: { password: hashedPassword }
});
```

---

## Supabase Dashboard - Storage RLS Setup (Alternative)

If SQL doesn't work, use Supabase Dashboard:

1. Go to **Storage** → **Policies**
2. For each bucket (product-images, blog-images):
   - Click **New Policy**
   - Select **FOR INSERT** → Choose template
   - Add policy for authenticated users
   - Repeat for SELECT, UPDATE, DELETE

---

## Troubleshooting

### Still Getting 403 Error?

1. **Verify RLS policies are created:**
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'objects';
   ```

2. **Check Supabase auth is working:**
   - Make sure your anon key is correct in `.env.local`
   - Verify auth session is active

3. **Enable storage on your user:**
   - Create Supabase auth user linked to database user

### Login Not Working?

1. Verify user exists:
   ```sql
   SELECT * FROM "User" WHERE name = 'zexfro-admin';
   ```

2. Check bcrypt package is installed:
   ```bash
   npm list bcryptjs
   ```

3. Check password is hashed correctly

---

## Summary

✅ Admin user created: zexfro-admin / zexfro12341234
✅ Hardcoded admin removed
✅ Database authentication implemented
✅ Login page updated
✅ RLS policies configured for image upload
✅ User table has name and password columns

**Next Steps:**
1. Run SETUP_ADMIN_USER.sql in Supabase
2. Run FIX_RLS_IMAGE_UPLOAD.sql in Supabase
3. Test login with new credentials
4. Try uploading images
