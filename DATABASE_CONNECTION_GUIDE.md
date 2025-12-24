# Database Connection Fix Guide

## 🚨 Quick Fix - Run This First

```bash
node test-db-connection.js
```

This will test your connection and tell you exactly what's wrong.

---

## ✅ Step-by-Step: Get Correct DATABASE_URL

### Method 1: Using Supabase Dashboard (Recommended)

1. **Go to Supabase Database Settings**

   ```
   https://supabase.com/dashboard/project/YOUR_PROJECT_ID/settings/database
   ```

2. **Find Connection String Section**

   - Look for "Connection string" or "Connection info"
   - You'll see dropdown with options: **Session**, **Transaction**, **URI**

3. **Select "Transaction" Mode** ⚠️ IMPORTANT

   ```
   Transaction pooling (Recommended for serverless)
   Port: 6543
   ```

4. **Copy the Connection String**

   ```
   postgresql://postgres.PROJECT_REF:[YOUR-PASSWORD]@aws-0-REGION.pooler.supabase.com:6543/postgres
   ```

5. **Replace `[YOUR-PASSWORD]`** with your actual database password

   - If you don't know it, reset it in the same Database Settings page

6. **Update `.env` file**
   ```env
   DATABASE_URL="postgresql://postgres.jjkczpvsxzglqursnhya:[YOUR_PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
   ```

---

## 🔧 Common Issues & Solutions

### Issue 1: Can't reach database server (P1001)

**Solution:** Use the **pooler URL** with port **6543**, not direct connection (5432)

❌ **Wrong:**

```
DATABASE_URL="postgresql://postgres:password@db.jjkczpvsxzglqursnhya.supabase.co:5432/postgres"
```

✅ **Correct:**

```
DATABASE_URL="postgresql://postgres.jjkczpvsxzglqursnhya:password@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
```

### Issue 2: Database is paused

**Solution:**

1. Go to Supabase Dashboard
2. If you see "Project is paused", click "Resume"
3. Wait 1-2 minutes for it to start
4. Run test script again

### Issue 3: Wrong password

**Solution:**

1. Go to Database Settings
2. Click "Reset database password"
3. Copy new password
4. Update `.env` file

---

## 🧪 Testing Your Connection

### Test 1: Run connection test script

```bash
node test-db-connection.js
```

### Test 2: Generate Prisma Client

```bash
npx prisma generate
```

### Test 3: Push schema to database

```bash
npx prisma db push
```

### Test 4: View database in Prisma Studio

```bash
npx prisma studio
```

---

## 📝 Complete .env Example

```env
# Database (Use POOLER URL with port 6543)
DATABASE_URL="postgresql://postgres.jjkczpvsxzglqursnhya:YOUR_PASSWORD@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Supabase URLs (these are usually correct)
NEXT_PUBLIC_SUPABASE_URL="https://jjkczpvsxzglqursnhya.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_anon_key"
SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key"
```

---

## 🛠️ Manual Database Sync

If tables are missing, run these commands in order:

```bash
# 1. Generate Prisma Client
npx prisma generate

# 2. Push schema to database (creates tables)
npx prisma db push

# 3. Verify in Prisma Studio
npx prisma studio
```

---

## 🎯 Finding Your Project Details

Your project appears to be:

- **Project Ref:** `jjkczpvsxzglqursnhya`
- **Region:** `eu-central-1` (likely)

Your correct DATABASE_URL should look like:

```
postgresql://postgres.jjkczpvsxzglqursnhya:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

Replace `[PASSWORD]` with your actual password!

---

## ✅ Success Checklist

After fixing, verify:

- [ ] `node test-db-connection.js` shows ✅ all green
- [ ] `npx prisma studio` opens and shows tables
- [ ] You can create a blog post from admin panel
- [ ] Images upload successfully
- [ ] Blog posts appear on frontend

---

## 🆘 Still Not Working?

Run this diagnostic:

```bash
# Test connection
node test-db-connection.js

# Check if Prisma client is generated
npx prisma generate

# Try to push schema
npx prisma db push

# Open Prisma Studio
npx prisma studio
```

Copy the error messages and check:

1. Is your Supabase project paused? (Resume it)
2. Is the password correct? (Reset it)
3. Are you using port 6543 (pooler)? (Not 5432)
