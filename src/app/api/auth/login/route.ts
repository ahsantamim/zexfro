import { NextRequest, NextResponse } from 'next/server';
import { verifyUserPassword } from '@/lib/supabase/users.service';

/**
 * POST /api/auth/login
 * Authenticate user with email and password
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.email || !body.password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const { valid, user, error } = await verifyUserPassword(body.email, body.password);

    if (!valid || error || !user) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // In a production environment, you would:
    // 1. Generate a JWT token
    // 2. Set it as an HTTP-only cookie
    // 3. Return the token to the client
    // For now, we'll just return the user data

    return NextResponse.json({
      success: true,
      data: {
        user,
        // token: generateJWT(user), // Implement this in production
      },
    });
  } catch (error) {
    console.error('POST /api/auth/login error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

