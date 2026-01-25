import nodemailer from 'nodemailer';
import {
  getRegistrationConfirmationHTML,
  getRegistrationConfirmationText,
} from './templates';

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

interface SendRegistrationEmailParams {
  to: string;
  name: string;
  company?: string;
}

export async function sendRegistrationConfirmationEmail({
  to,
  name,
  company,
}: SendRegistrationEmailParams) {
  const transporter = createTransporter();

  const htmlContent = getRegistrationConfirmationHTML({
    name,
    email: to,
    company,
  });

  const textContent = getRegistrationConfirmationText({
    name,
    email: to,
    company,
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Zexfro" <noreply@zexfro.com>',
      to,
      subject: '🎉 Welcome to Zexfro - Registration Confirmed',
      text: textContent,
      html: htmlContent,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        Importance: 'high',
      },
    });

    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw error;
  }
}

// Test email function
export async function sendTestEmail(to: string) {
  const transporter = createTransporter();

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Zexfro" <noreply@zexfro.com>',
      to,
      subject: '🧪 Zexfro - Email Test',
      text: 'This is a test email from Zexfro. If you received this, your SMTP configuration is working correctly!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f7fa;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h1 style="color: #1800ad;">🧪 Email Test Successful!</h1>
            <p style="font-size: 16px; color: #333;">
              Congratulations! Your SMTP configuration is working correctly.
            </p>
            <p style="font-size: 14px; color: #666;">
              This test was sent from Zexfro at ${new Date().toLocaleString()}.
            </p>
            <div style="margin-top: 30px; padding: 15px; background: #e0f2fe; border-left: 4px solid #0A4D96; border-radius: 4px;">
              <p style="margin: 0; color: #1e40af; font-weight: bold;">
                ✅ SMTP Status: Connected
              </p>
              <p style="margin: 5px 0 0 0; color: #1e40af; font-size: 14px;">
                You can now send registration confirmation emails!
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log('✅ Test email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Test email failed:', error);
    throw error;
  }
}

// Verify SMTP connection
export async function verifyEmailConnection() {
  const transporter = createTransporter();
  
  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    return { success: true, message: 'SMTP connection verified' };
  } catch (error) {
    console.error('❌ SMTP connection failed:', error);
    throw error;
  }
}
