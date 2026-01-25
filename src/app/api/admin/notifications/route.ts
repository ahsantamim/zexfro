import { NextResponse } from 'next/server';
import { getPendingRegistrationsCount } from '@/lib/api/registrations';
import { getSession } from '@/auth';

export async function GET() {
  try {
    // Check if user is admin
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const pendingCount = await getPendingRegistrationsCount();

    return NextResponse.json({
      pendingRegistrations: pendingCount,
      total: pendingCount,
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}
