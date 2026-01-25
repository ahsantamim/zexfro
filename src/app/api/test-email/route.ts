import { NextRequest, NextResponse } from 'next/server';
import { 
  sendTestEmail, 
  verifyEmailConnection,
  sendRegistrationConfirmationEmail 
} from '@/lib/mail/gmail';

// Test endpoint to verify SMTP configuration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, email, name, company } = body;

    switch (action) {
      case 'verify':
        // Verify SMTP connection
        const verifyResult = await verifyEmailConnection();
        return NextResponse.json({
          success: true,
          message: 'SMTP connection verified successfully',
          details: verifyResult,
        });

      case 'test':
        // Send a simple test email
        if (!email) {
          return NextResponse.json(
            { error: 'Email address is required for test' },
            { status: 400 }
          );
        }
        const testResult = await sendTestEmail(email);
        return NextResponse.json({
          success: true,
          message: `Test email sent to ${email}`,
          details: testResult,
        });

      case 'registration':
        // Send a full registration confirmation email
        if (!email || !name) {
          return NextResponse.json(
            { error: 'Email and name are required' },
            { status: 400 }
          );
        }
        const regResult = await sendRegistrationConfirmationEmail({
          to: email,
          name,
          company,
        });
        return NextResponse.json({
          success: true,
          message: `Registration confirmation email sent to ${email}`,
          details: regResult,
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: verify, test, or registration' },
          { status: 400 }
        );
    }
  } catch (error: any) {
    console.error('Email test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Email test failed',
        details: error.toString(),
      },
      { status: 500 }
    );
  }
}

// GET endpoint for quick verification
export async function GET() {
  try {
    const result = await verifyEmailConnection();
    return NextResponse.json({
      success: true,
      message: 'SMTP configuration is valid',
      timestamp: new Date().toISOString(),
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER ? '✓ Set' : '✗ Not set',
        password: process.env.SMTP_PASSWORD ? '✓ Set' : '✗ Not set',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'SMTP verification failed',
        message: error.message,
        config: {
          host: process.env.SMTP_HOST || '✗ Not set',
          port: process.env.SMTP_PORT || '✗ Not set',
          user: process.env.SMTP_USER ? '✓ Set' : '✗ Not set',
          password: process.env.SMTP_PASSWORD ? '✓ Set' : '✗ Not set',
        },
      },
      { status: 500 }
    );
  }
}
