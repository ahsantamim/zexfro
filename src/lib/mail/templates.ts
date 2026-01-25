import { siteConfig } from "@/config/site";

interface EmailTemplateProps {
  name: string;
  email: string;
  company?: string;
}

export function getRegistrationConfirmationHTML({
  name,
  email,
  company,
}: EmailTemplateProps): string {
  const logoUrl = `${siteConfig.url}/zexfro_logo_new.png`;
  const websiteUrl = siteConfig.url;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Registration</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', 'Helvetica', sans-serif;
      background-color: #f4f7fa;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #1800ad 0%, #0A4D96 100%);
      padding: 40px 20px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==');
      opacity: 0.3;
    }
    .logo {
      position: relative;
      z-index: 1;
      max-width: 180px;
      height: auto;
      margin-bottom: 10px;
    }
    .header-title {
      position: relative;
      z-index: 1;
      color: #ffffff;
      font-size: 28px;
      font-weight: bold;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .content {
      padding: 40px 30px;
      color: #333333;
      line-height: 1.6;
    }
    .greeting {
      font-size: 24px;
      font-weight: bold;
      color: #1800ad;
      margin-bottom: 20px;
    }
    .message {
      font-size: 16px;
      color: #555555;
      margin-bottom: 20px;
    }
    .highlight-box {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      border-left: 4px solid #0A4D96;
      padding: 20px;
      margin: 25px 0;
      border-radius: 4px;
    }
    .highlight-box p {
      margin: 0;
      color: #1e40af;
      font-weight: 500;
    }
    .info-grid {
      background-color: #f9fafb;
      border-radius: 8px;
      padding: 20px;
      margin: 25px 0;
    }
    .info-row {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: bold;
      color: #374151;
      min-width: 120px;
    }
    .info-value {
      color: #6b7280;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #1800ad 0%, #0A4D96 100%);
      color: #ffffff !important;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 50px;
      font-weight: bold;
      font-size: 16px;
      margin: 25px 0;
      box-shadow: 0 4px 12px rgba(24, 0, 173, 0.3);
      transition: transform 0.2s;
    }
    .cta-button:hover {
      transform: translateY(-2px);
    }
    .features {
      margin: 30px 0;
    }
    .feature-item {
      display: flex;
      align-items: start;
      margin-bottom: 15px;
    }
    .feature-icon {
      width: 24px;
      height: 24px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }
    .feature-icon::after {
      content: '✓';
      color: white;
      font-weight: bold;
      font-size: 14px;
    }
    .feature-text {
      color: #374151;
      font-size: 15px;
    }
    .footer {
      background-color: #f9fafb;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-link {
      display: inline-block;
      margin: 0 10px;
      color: #6b7280;
      text-decoration: none;
      font-size: 14px;
    }
    .footer-text {
      font-size: 13px;
      color: #9ca3af;
      margin: 10px 0;
    }
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <img src="${logoUrl}" alt="Zexfro Logo" class="logo" />
      <h1 class="header-title">Welcome to Zexfro</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <div class="greeting">
        Hello ${name}! 👋
      </div>

      <p class="message">
        Thank you for registering with <strong>Zexfro</strong> – your trusted partner in global trade solutions. We're thrilled to have you join our growing community of importers and exporters.
      </p>

      <div class="highlight-box">
        <p>
          🎉 <strong>Your registration has been received successfully!</strong>
        </p>
        <p style="margin-top: 10px; font-size: 14px;">
          Our team is reviewing your application and will contact you shortly to discuss how we can help streamline your international trade operations.
        </p>
      </div>

      <!-- Registration Info -->
      <div class="info-grid">
        <div class="info-row">
          <div class="info-label">Name:</div>
          <div class="info-value">${name}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Email:</div>
          <div class="info-value">${email}</div>
        </div>
        ${company ? `
        <div class="info-row">
          <div class="info-label">Company:</div>
          <div class="info-value">${company}</div>
        </div>
        ` : ''}
        <div class="info-row">
          <div class="info-label">Registration Date:</div>
          <div class="info-value">${new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- What's Next -->
      <h2 style="color: #1800ad; font-size: 20px; margin-bottom: 15px;">
        What Happens Next?
      </h2>

      <div class="features">
        <div class="feature-item">
          <div class="feature-icon"></div>
          <div class="feature-text">
            <strong>Review Process:</strong> Our team will carefully review your registration details within 24-48 hours.
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon"></div>
          <div class="feature-text">
            <strong>Personal Contact:</strong> A dedicated account manager will reach out to you via email or phone.
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon"></div>
          <div class="feature-text">
            <strong>Account Setup:</strong> We'll guide you through setting up your personalized trading account.
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon"></div>
          <div class="feature-text">
            <strong>Start Trading:</strong> Begin connecting with verified partners across Europe and beyond.
          </div>
        </div>
      </div>

      <div style="text-align: center; margin: 35px 0;">
        <a href="${websiteUrl}" class="cta-button">
          Visit Our Website
        </a>
      </div>

      <p class="message" style="font-size: 14px; color: #6b7280;">
        If you have any questions in the meantime, please don't hesitate to contact us at 
        <a href="mailto:${siteConfig.company.email}" style="color: #0A4D96; text-decoration: none;">
          ${siteConfig.company.email}
        </a> or call us at ${siteConfig.company.phone}.
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p style="font-weight: bold; color: #1800ad; margin-bottom: 15px;">
        Secure. Compliant. Global Trade Made Simple.
      </p>

      <div class="social-links">
        <a href="${siteConfig.social.linkedin}" class="social-link">LinkedIn</a>
        <span style="color: #e5e7eb;">|</span>
        <a href="${siteConfig.social.twitter}" class="social-link">Twitter</a>
        <span style="color: #e5e7eb;">|</span>
        <a href="${siteConfig.social.facebook}" class="social-link">Facebook</a>
        <span style="color: #e5e7eb;">|</span>
        <a href="${siteConfig.social.instagram}" class="social-link">Instagram</a>
      </div>

      <p class="footer-text">
        © ${new Date().getFullYear()} Zexfro. All rights reserved.
      </p>
      <p class="footer-text">
        ${siteConfig.company.address}
      </p>
      <p class="footer-text" style="margin-top: 15px; font-size: 11px;">
        You received this email because you registered at Zexfro.com. 
        If you didn't register, please ignore this email.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function getRegistrationConfirmationText({
  name,
  email,
  company,
}: EmailTemplateProps): string {
  return `
Hello ${name}!

Thank you for registering with Zexfro – your trusted partner in global trade solutions.

YOUR REGISTRATION HAS BEEN RECEIVED SUCCESSFULLY!

Registration Details:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
- Registration Date: ${new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}

What Happens Next?

✓ Review Process: Our team will carefully review your registration details within 24-48 hours.
✓ Personal Contact: A dedicated account manager will reach out to you via email or phone.
✓ Account Setup: We'll guide you through setting up your personalized trading account.
✓ Start Trading: Begin connecting with verified partners across Europe and beyond.

If you have any questions, please contact us:
Email: ${siteConfig.company.email}
Phone: ${siteConfig.company.phone}

Visit our website: ${siteConfig.url}

Secure. Compliant. Global Trade Made Simple.

© ${new Date().getFullYear()} Zexfro. All rights reserved.
${siteConfig.company.address}
  `.trim();
}
