# ⚡ Quick Start Guide - Supabase Integration

## 🚀 5-Minute Setup

### Step 1: Run SQL Migration (2 minutes)
1. Open **Supabase Dashboard** → Your Project
2. Click **SQL Editor** (left sidebar)
3. Open `supabase_migration.sql` from project root
4. Copy ALL content → Paste in SQL Editor
5. Click **Run** (or Ctrl/Cmd + Enter)
6. ✅ Wait for "Success" message

### Step 2: Create Storage Buckets (1 minute)
1. Click **Storage** (left sidebar)
2. Click **New bucket**
3. Create: `product-images` (Public: ✅ Yes)
4. Create: `blog-images` (Public: ✅ Yes)

### Step 3: Start App (1 minute)
```bash
npm install
npm run dev
```

### Step 4: Login (1 minute)
1. Open: http://localhost:3000/login
2. Email: `admin@zexfro.com`
3. Password: `zexfro12341234`
4. Click **Login**

## ✅ You're Done!

Navigate to:
- **Products**: http://localhost:3000/admin/products
- **Users**: http://localhost:3000/admin/users

## 🔑 Credentials

**Admin User:**
- Email: `admin@zexfro.com`
- Password: `zexfro12341234`

## 📚 Full Documentation

- **Setup Guide**: `SUPABASE_SETUP_GUIDE.md`
- **Complete Docs**: `SUPABASE_INTEGRATION_README.md`
- **Implementation Summary**: `IMPLEMENTATION_SUMMARY.md`

## 🎯 What You Get

✅ Products Management (Full CRUD)
✅ Users Management (Full CRUD)
✅ Advanced Filtering & Search
✅ Pagination
✅ RESTful API
✅ Secure Authentication
✅ Industry-Standard Backend

## 📋 API Endpoints

### Products
```
GET    /api/admin/products
POST   /api/admin/products
GET    /api/admin/products/:id
PUT    /api/admin/products/:id
DELETE /api/admin/products/:id
```

### Users
```
GET    /api/admin/users
POST   /api/admin/users
GET    /api/admin/users/:id
PUT    /api/admin/users/:id
DELETE /api/admin/users/:id
```

### Auth
```
POST   /api/auth/login
```

## 🎨 Features

### Products Page
- Search products
- Filter by category
- Filter by status
- Pagination (10/25/50/100)
- Create/Edit/Delete

### Users Page
- Search users
- Filter by role (Admin/Editor)
- Pagination
- Create/Edit/Delete
- Password validation

## 🆘 Troubleshooting

**Problem**: Cannot login
- **Solution**: Run SQL migration first

**Problem**: No data showing
- **Solution**: Check Supabase Dashboard → Table Editor

**Problem**: API errors
- **Solution**: Check `.env.local` has correct Supabase URL and key

## 💡 Next Steps

1. ✅ Test product CRUD operations
2. ✅ Create test users
3. 📸 Set up image upload
4. 📝 Build blog management
5. 🎨 Customize UI

---

**Ready to go!** 🎉

**Questions?** Check the detailed documentation files.

