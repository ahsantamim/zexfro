# Authentication Setup Guide

## NextAuth Configuration

This project uses NextAuth v5 for authentication with a simple credentials provider.

## Admin Access

### Login Page
Access the login page at: `http://localhost:3000/login`

### Demo Admin Credentials
- **Username:** `admin`
- **Password:** `1234`

### Admin Portal
After logging in, you'll be redirected to: `http://localhost:3000/admin`

## Important Environment Variables

Add the following to your `.env.local` file:

```env
# NextAuth
NEXTAUTH_SECRET=your-secret-key-here-change-in-production
NEXTAUTH_URL=http://localhost:3000
```

### Generate a Secret Key

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use this Node.js command:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## File Structure

```
src/
├── auth.config.ts              # NextAuth configuration
├── auth.ts                     # Auth handlers and session management
├── middleware.ts               # Route protection middleware
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts    # NextAuth API routes
│   ├── login/
│   │   └── page.tsx           # Login page
│   └── admin/
│       └── layout.tsx         # Protected admin layout
├── components/
│   ├── providers/
│   │   └── SessionProvider.tsx # Session provider wrapper
│   └── admin/
│       └── AdminHeader.tsx    # Admin header with logout
└── types/
    └── next-auth.d.ts         # NextAuth type definitions
```

## How It Works

1. **Login Flow:**
   - User enters credentials on `/login`
   - Credentials are validated against dummy user
   - JWT token is created with user role
   - User is redirected to `/admin`

2. **Protection:**
   - Middleware checks authentication on all admin routes
   - Unauthenticated users are redirected to `/login`
   - Session is validated on every request

3. **Logout:**
   - Click "Logout" button in admin header
   - Session is cleared
   - User is redirected to login page

## Production Considerations

⚠️ **Important:** This setup uses a hardcoded dummy user for development only.

For production, you should:

1. **Replace with real authentication:**
   - Connect to a database
   - Hash passwords with bcrypt
   - Implement user management
   - Add password reset functionality

2. **Add more providers:**
   - OAuth (Google, GitHub, etc.)
   - Email magic links
   - 2FA authentication

3. **Enhance security:**
   - Use strong NEXTAUTH_SECRET
   - Enable HTTPS only
   - Add rate limiting
   - Implement CSRF protection

## Troubleshooting

### Can't access admin page
- Make sure you're logged in first at `/login`
- Check that credentials are correct: `admin` / `1234`
- Clear cookies and try again

### 404 on /login
- Make sure the dev server is running
- Check that all files are created correctly
- Restart the development server

### Session not persisting
- Check NEXTAUTH_SECRET is set in `.env.local`
- Make sure SessionProvider is wrapping your app
- Clear browser cookies and try again

## Development Commands

```bash
# Start development server
npm run dev

# Access login page
http://localhost:3000/login

# Access admin (after login)
http://localhost:3000/admin
```

## Support

For more information about NextAuth, visit:
- [NextAuth Documentation](https://next-auth.js.org/)
- [NextAuth GitHub](https://github.com/nextauthjs/next-auth)

