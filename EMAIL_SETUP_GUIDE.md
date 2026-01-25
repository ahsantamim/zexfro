# Email Testing Guide

## Setup Complete! ✅

Your email system has been configured with the following components:

### Files Created:
1. ✅ **Email Templates** - [src/lib/mail/templates.ts](src/lib/mail/templates.ts)
   - Professional HTML email with Zexfro logo
   - Beautiful gradient design
   - Mobile responsive
   - Plain text fallback

2. ✅ **Gmail Service** - [src/lib/mail/gmail.ts](src/lib/mail/gmail.ts)
   - Nodemailer configuration
   - Registration confirmation sender
   - Test email function
   - Connection verification

3. ✅ **API Integration** - [src/app/api/register/route.ts](src/app/api/register/route.ts)
   - Updated to send confirmation emails
   - Error handling
   - Non-blocking email sending

4. ✅ **Test Endpoint** - [src/app/api/test-email/route.ts](src/app/api/test-email/route.ts)
   - Verify SMTP connection
   - Send test emails
   - Test registration emails

## Configuration Steps

### 1. Update .env.local

Open [.env.local](.env.local) and update these values:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-actual-email@gmail.com"
SMTP_PASSWORD="bqqp xtup ezwt cdvc"
SMTP_FROM="Zexfro <your-actual-email@gmail.com>"
```

**IMPORTANT:** Replace `your-actual-email@gmail.com` with your real Gmail address!

### 2. Start the Development Server

```bash
npm run dev
```

## Testing the Email System

### Test 1: Verify SMTP Connection

**Method 1 - Browser:**
Visit: http://localhost:3000/api/test-email

**Method 2 - PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/test-email" -Method GET
```

Expected Response:
```json
{
  "success": true,
  "message": "SMTP configuration is valid",
  "config": {
    "host": "smtp.gmail.com",
    "port": "587",
    "user": "✓ Set",
    "password": "✓ Set"
  }
}
```

### Test 2: Send a Simple Test Email

```powershell
$body = @{
    action = "test"
    email = "recipient@example.com"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/test-email" -Method POST -Body $body -ContentType "application/json"
```

### Test 3: Send Full Registration Confirmation Email

```powershell
$body = @{
    action = "registration"
    email = "recipient@example.com"
    name = "John Doe"
    company = "Test Company Ltd"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/test-email" -Method POST -Body $body -ContentType "application/json"
```

### Test 4: Test via Registration Form

1. Go to http://localhost:3000
2. Click the "Register Now" button in hero section
3. Fill out the registration form
4. Submit
5. Check the email inbox!

## Email Features

### What's Included:

✨ **Professional Design**
- Zexfro branding with logo
- Beautiful gradient header
- Clean, modern layout
- Mobile responsive

📧 **Email Content**
- Personalized greeting
- Registration confirmation
- Registration details summary
- "What happens next" section
- Contact information
- Social media links
- Footer with company info

🎨 **Visual Elements**
- Gradient backgrounds
- Checkmark icons
- Info boxes
- Hover effects (in supported clients)
- Professional color scheme

## Troubleshooting

### Issue: "Authentication failed"
**Solution:** 
1. Make sure you're using a Gmail App Password, not your regular password
2. Enable 2-factor authentication on your Gmail account
3. Generate a new App Password at: https://myaccount.google.com/apppasswords

### Issue: "Connection timeout"
**Solution:**
1. Check your internet connection
2. Verify SMTP_HOST and SMTP_PORT are correct
3. Check if your firewall is blocking port 587

### Issue: Email not received
**Solution:**
1. Check spam/junk folder
2. Verify the recipient email is correct
3. Check server logs for errors
4. Wait a few minutes (sometimes delayed)

### Issue: "SMTP_USER not set"
**Solution:**
1. Make sure .env.local exists in project root
2. Restart the development server after changing .env.local
3. Verify no typos in environment variable names

## Production Deployment

Before deploying to production:

1. **Set environment variables in Vercel/hosting platform:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-production-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM=Zexfro <your-production-email@gmail.com>
   ```

2. **Update NEXT_PUBLIC_APP_URL:**
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```

3. **Test thoroughly** before going live

## Email Preview

The registration confirmation email includes:

1. **Header Section**
   - Zexfro logo
   - Gradient background with world map pattern
   - "Welcome to Zexfro" title

2. **Content Section**
   - Personalized greeting
   - Thank you message
   - Confirmation highlight box
   - Registration details table
   - "What happens next" with checkmarks
   - Call-to-action button

3. **Footer Section**
   - Tagline
   - Social media links
   - Company information
   - Legal disclaimer

## Need Help?

If you encounter any issues:
1. Check the server console for error messages
2. Verify all environment variables are set
3. Test SMTP connection first before sending emails
4. Check Gmail account settings and App Password

---

**Status:** ✅ Ready to test!
**Last Updated:** ${new Date().toISOString()}
