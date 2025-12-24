# Vercel Deployment Guide

Complete guide for deploying your Next.js application to Vercel.

## 📋 Required Environment Variables

### **Database (Prisma)**
```bash
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
```
- Must be publicly accessible (not localhost)
- Get from your PostgreSQL hosting provider (Supabase, Railway, Neon, etc.)

### **Supabase (Required)**
```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project-id.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-public-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

**How to get these:**
1. Go to [supabase.com](https://supabase.com/dashboard)
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep secret!)

### **NextAuth Authentication**
```bash
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="your-generated-secret-32-chars-minimum"
```

**Generate NEXTAUTH_SECRET:**
```powershell
# Run this in PowerShell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**NEXTAUTH_URL values:**
- Production: `https://your-domain.vercel.app`
- Preview: Vercel auto-sets this
- Development: `http://localhost:3000`

### **Email Configuration (Optional)**
```bash
CARBONIO_HOST="mail.yourcompany.com"
CARBONIO_PORT="587"
CARBONIO_USERNAME="noreply@yourcompany.com"
CARBONIO_PASSWORD="your-email-password"
CARBONIO_SECURE="true"
MAIL_FROM="noreply@yourcompany.com"
CONTACT_EMAIL="contact@yourcompany.com"
```

### **Supabase Storage (Optional - Has Defaults)**
```bash
NEXT_PUBLIC_SUPABASE_BUCKET_PRODUCTS="product-images"
NEXT_PUBLIC_SUPABASE_BUCKET_BLOG="blog-images"
NEXT_PUBLIC_SUPABASE_S3_REGION="eu-central-1"
```
*Note: These have default values in your code. Only set if you need different values.*

---

## 🚀 Deployment Steps

### **Step 1: Push Code to GitHub**
```powershell
git add .
git commit -m "Ready for deployment"
git push -u origin main
```
✅ **You've already done this!**

### **Step 2: Connect Repository to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select **"Import Git Repository"**
5. Find and select your `zexfro` repository
6. Vercel will auto-detect Next.js configuration

### **Step 3: Configure Build Settings**

Vercel should auto-detect:
```
Framework Preset: Next.js
Build Command: next build
Output Directory: .next
Install Command: npm install
```

**Root Directory:** Leave as `/` (root)

### **Step 4: Add Environment Variables**

In the Vercel import screen:

1. Click **"Environment Variables"**
2. Add each variable (Name + Value)
3. Select environments: **Production**, **Preview**, and **Development**

**Minimum required variables:**
```bash
DATABASE_URL=your-postgresql-connection-string
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-generated-secret
```

**Optional but recommended:**
```bash
CARBONIO_HOST=mail.yourcompany.com
CARBONIO_PORT=587
CARBONIO_USERNAME=noreply@yourcompany.com
CARBONIO_PASSWORD=your-password
CARBONIO_SECURE=true
MAIL_FROM=noreply@yourcompany.com
CONTACT_EMAIL=contact@yourcompany.com
```

### **Step 5: Deploy**

1. Click **"Deploy"**
2. Wait 2-5 minutes for build to complete
3. Vercel will show build logs
4. Once done, you'll get a URL: `https://your-app.vercel.app`

### **Step 6: Configure Supabase Auth Redirect URLs**

1. Go to your Supabase Dashboard
2. Navigate to **Authentication** → **URL Configuration**
3. Add these URLs:

**Site URL:**
```
https://your-app.vercel.app
```

**Redirect URLs (add all):**
```
https://your-app.vercel.app/api/auth/callback/*
https://your-app.vercel.app/api/auth/callback/credentials
http://localhost:3000/api/auth/callback/*
```

### **Step 7: Update NEXTAUTH_URL (After First Deploy)**

1. Copy your Vercel deployment URL
2. Go to Vercel → Your Project → **Settings** → **Environment Variables**
3. Update `NEXTAUTH_URL` with your actual URL
4. **Redeploy** (Vercel → Deployments → ... → Redeploy)

---

## ✅ Post-Deployment Checklist

- [ ] Visit your deployed site
- [ ] Test login/authentication
- [ ] Check admin panel access
- [ ] Verify product images load
- [ ] Test blog post creation
- [ ] Check database connectivity
- [ ] Test file uploads
- [ ] Verify email sending (if configured)
- [ ] Check all API routes work

---

## 🔧 Troubleshooting

### **Build Fails**

**Check build logs in Vercel:**
- Look for TypeScript errors
- Check for missing dependencies
- Verify environment variables are set

**Common fixes:**
```powershell
# Run locally first to catch errors
npm run build

# Check for type errors
npm run type-check
```

### **Database Connection Errors**

- Verify `DATABASE_URL` is correct
- Ensure database is publicly accessible
- Check IP whitelist settings (if using Supabase)
- Test connection string locally

### **Authentication Fails**

- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Ensure Supabase redirect URLs are configured
- Check cookie settings in production

### **Image Upload Fails**

- Verify Supabase storage buckets exist
- Check RLS (Row Level Security) policies
- Ensure `SUPABASE_SERVICE_ROLE_KEY` is correct
- Verify bucket names match your configuration

### **Environment Variables Not Working**

- `NEXT_PUBLIC_*` variables are embedded at build time
- After changing them, you must **redeploy**
- Server-side variables can be changed without rebuild
- Check variable names for typos

---

## 📱 Custom Domain (Optional)

### **Add Custom Domain:**

1. Go to Vercel → Your Project → **Settings** → **Domains**
2. Add your domain: `yourdomain.com`
3. Vercel provides DNS records to add
4. Update your domain registrar's DNS settings
5. Wait for DNS propagation (5-48 hours)
6. Update `NEXTAUTH_URL` to your custom domain

**DNS Records (example):**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔐 Security Best Practices

1. **Never commit secrets to Git**
   - `.env.local` is in `.gitignore`
   - Use Vercel environment variables

2. **Rotate sensitive keys periodically**
   - Database passwords
   - API keys
   - NEXTAUTH_SECRET

3. **Use different credentials per environment**
   - Production vs Preview vs Development
   - Separate database for testing

4. **Protect service role keys**
   - `SUPABASE_SERVICE_ROLE_KEY` has full database access
   - Only use in API routes, never in client code
   - Never prefix with `NEXT_PUBLIC_`

5. **Enable Vercel protections**
   - Enable deployment protection
   - Set up preview protection with passwords
   - Use Vercel Firewall rules

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Supabase Docs:** https://supabase.com/docs
- **NextAuth Docs:** https://next-auth.js.org/deployment

---

## 🎯 Quick Reference: Environment Variables by Location

### **Required in Vercel (Production)**
```bash
DATABASE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXTAUTH_URL
NEXTAUTH_SECRET
```

### **Optional in Vercel**
```bash
CARBONIO_HOST
CARBONIO_PORT
CARBONIO_USERNAME
CARBONIO_PASSWORD
CARBONIO_SECURE
MAIL_FROM
CONTACT_EMAIL
NEXT_PUBLIC_SUPABASE_BUCKET_PRODUCTS
NEXT_PUBLIC_SUPABASE_BUCKET_BLOG
```

### **Used in Code Locations**

**Client-side (src/lib/supabase/client.ts):**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Server-side API Routes:**
- `SUPABASE_SERVICE_ROLE_KEY` (src/app/api/upload/route.ts)
- `DATABASE_URL` (via Prisma)

**Storage Configuration (src/config/storage.ts):**
- `NEXT_PUBLIC_SUPABASE_BUCKET_PRODUCTS`
- `NEXT_PUBLIC_SUPABASE_BUCKET_BLOG`
- `NEXT_PUBLIC_SUPABASE_S3_REGION`

---

## ✨ Success!

Once deployed, your app will be live at:
```
https://your-project.vercel.app
```

Every push to `main` will auto-deploy to production.
Every pull request creates a preview deployment.

**Happy deploying! 🚀**
