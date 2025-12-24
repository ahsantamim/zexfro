import { supabase } from './client';
import bcrypt from 'bcryptjs';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'editor';
}

/**
 * Login user with email and password
 */
export async function loginUser(credentials: LoginCredentials): Promise<{ user: AuthUser | null; error: string | null }> {
  try {
    const { email, password } = credentials;

    // Query user from database
    const { data: user, error: queryError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('email', email)
      .single();

    if (queryError || !user) {
      return { user: null, error: 'Invalid email or password' };
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return { user: null, error: 'Invalid email or password' };
    }

    // Return user without password hash
    const authUser: AuthUser = {
      id: user.id,
      email: user.email,
      full_name: user.full_name,
      role: user.role,
    };

    return { user: authUser, error: null };
  } catch (error) {
    console.error('Login error:', error);
    return { user: null, error: 'An error occurred during login' };
  }
}

/**
 * Get user by ID
 */
export async function getUserById(id: string): Promise<{ user: AuthUser | null; error: string | null }> {
  try {
    const { data: user, error } = await supabase
      .from('user_profiles')
      .select('id, email, full_name, role')
      .eq('id', id)
      .single();

    if (error || !user) {
      return { user: null, error: 'User not found' };
    }

    return { user: user as AuthUser, error: null };
  } catch (error) {
    console.error('Get user error:', error);
    return { user: null, error: 'An error occurred while fetching user' };
  }
}

/**
 * Create new user (admin only)
 */
export async function createUser(data: {
  email: string;
  password: string;
  full_name: string;
  role: 'admin' | 'editor';
}): Promise<{ user: AuthUser | null; error: string | null }> {
  try {
    // Hash password
    const password_hash = await bcrypt.hash(data.password, 10);

    // Insert user
    const { data: user, error } = await supabase
      .from('user_profiles')
      .insert({
        email: data.email,
        password_hash,
        full_name: data.full_name,
        role: data.role,
      })
      .select('id, email, full_name, role')
      .single();

    if (error) {
      return { user: null, error: error.message };
    }

    return { user: user as AuthUser, error: null };
  } catch (error) {
    console.error('Create user error:', error);
    return { user: null, error: 'An error occurred while creating user' };
  }
}

/**
 * Update user
 */
export async function updateUser(
  id: string,
  data: {
    email?: string;
    password?: string;
    full_name?: string;
    role?: 'admin' | 'editor';
  }
): Promise<{ user: AuthUser | null; error: string | null }> {
  try {
    const updateData: any = {
      email: data.email,
      full_name: data.full_name,
      role: data.role,
    };

    // Hash password if provided
    if (data.password) {
      updateData.password_hash = await bcrypt.hash(data.password, 10);
    }

    const { data: user, error } = await supabase
      .from('user_profiles')
      .update(updateData)
      .eq('id', id)
      .select('id, email, full_name, role')
      .single();

    if (error) {
      return { user: null, error: error.message };
    }

    return { user: user as AuthUser, error: null };
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

