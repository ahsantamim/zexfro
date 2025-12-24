import { supabase } from './client';
import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'editor';
  created_at: string;
  updated_at: string;
}

export interface CreateUserInput {
  email: string;
  password: string;
  full_name: string;
  role: 'admin' | 'editor';
}

export interface UpdateUserInput {
  email?: string;
  password?: string;
  full_name?: string;
  role?: 'admin' | 'editor';
}

/**
 * Get all users with pagination
 */
export async function getUsers(params?: {
  page?: number;
  limit?: number;
  role?: 'admin' | 'editor';
  search?: string;
}): Promise<{ users: User[]; total: number; error: string | null }> {
  try {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('user_profiles')
      .select('id, email, full_name, role, created_at, updated_at', { count: 'exact' });

    // Apply filters
    if (params?.role) {
      query = query.eq('role', params.role);
    }

    if (params?.search) {
      query = query.or(`full_name.ilike.%${params.search}%,email.ilike.%${params.search}%`);
    }

    // Apply pagination
    query = query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      return { users: [], total: 0, error: error.message };
    }

    return { users: data || [], total: count || 0, error: null };
  } catch (error) {
    console.error('Get users error:', error);
    return { users: [], total: 0, error: 'An error occurred while fetching users' };
  }
}

/**
 * Get single user by ID
 */
export async function getUser(id: string): Promise<{ user: User | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('id, email, full_name, role, created_at, updated_at')
      .eq('id', id)
      .single();

    if (error || !data) {
      return { user: null, error: 'User not found' };
    }

    return { user: data, error: null };
  } catch (error) {
    console.error('Get user error:', error);
    return { user: null, error: 'An error occurred while fetching user' };
  }
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<{ user: (User & { password_hash: string }) | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) {
      return { user: null, error: 'User not found' };
    }

    return { user: data, error: null };
  } catch (error) {
    console.error('Get user by email error:', error);
    return { user: null, error: 'An error occurred while fetching user' };
  }
}

/**
 * Create new user
 */
export async function createUser(input: CreateUserInput): Promise<{ user: User | null; error: string | null }> {
  try {
    // Check if email already exists
    const { data: existingUser } = await supabase
      .from('user_profiles')
      .select('id')
      .eq('email', input.email)
      .single();

    if (existingUser) {
      return { user: null, error: 'Email already exists' };
    }

    // Hash password
    const password_hash = await bcrypt.hash(input.password, 10);

    // Insert user
    const { data, error } = await supabase
      .from('user_profiles')
      // @ts-ignore - Supabase type inference issue
      .insert({
        email: input.email,
        password_hash,
        full_name: input.full_name,
        role: input.role,
      })
      .select('id, email, full_name, role, created_at, updated_at')
      .single();

    if (error || !data) {
      return { user: null, error: error?.message || 'Failed to create user' };
    }

    return { user: data, error: null };
  } catch (error) {
    console.error('Create user error:', error);
    return { user: null, error: 'An error occurred while creating user' };
  }
}

/**
 * Update user
 */
export async function updateUser(id: string, input: UpdateUserInput): Promise<{ user: User | null; error: string | null }> {
  try {
    const updateData: any = {};

    if (input.email) {
      // Check if email already exists (excluding current user)
      const { data: existingUser } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('email', input.email)
        .neq('id', id)
        .single();

      if (existingUser) {
        return { user: null, error: 'Email already exists' };
      }

      updateData.email = input.email;
    }

    if (input.full_name) {
      updateData.full_name = input.full_name;
    }

    if (input.role) {
      updateData.role = input.role;
    }

    if (input.password) {
      updateData.password_hash = await bcrypt.hash(input.password, 10);
    }

    const { data, error } = await supabase
      .from('user_profiles')
      // @ts-ignore - Supabase type inference issue
      .update(updateData)
      .eq('id', id)
      .select('id, email, full_name, role, created_at, updated_at')
      .single();

    if (error || !data) {
      return { user: null, error: error?.message || 'Failed to update user' };
    }

    return { user: data, error: null };
  } catch (error) {
    console.error('Update user error:', error);
    return { user: null, error: 'An error occurred while updating user' };
  }
}

/**
 * Delete user
 */
export async function deleteUser(id: string): Promise<{ success: boolean; error: string | null }> {
  try {
    const { error } = await supabase
      .from('user_profiles')
      .delete()
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Delete user error:', error);
    return { success: false, error: 'An error occurred while deleting user' };
  }
}

/**
 * Verify user password
 */
export async function verifyUserPassword(email: string, password: string): Promise<{ valid: boolean; user: User | null; error: string | null }> {
  try {
    const { user, error } = await getUserByEmail(email);

    if (error || !user) {
      return { valid: false, user: null, error: 'Invalid credentials' };
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return { valid: false, user: null, error: 'Invalid credentials' };
    }

    // Return user without password hash
    const { password_hash, ...userWithoutPassword } = user;

    return { valid: true, user: userWithoutPassword as User, error: null };
  } catch (error) {
    console.error('Verify password error:', error);
    return { valid: false, user: null, error: 'An error occurred during authentication' };
  }
}

