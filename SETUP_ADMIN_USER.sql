-- Setup Admin User
-- This script creates the default admin user for zexfro

-- Insert admin user
INSERT INTO "User" (id, email, name, password, role, "createdAt", "updatedAt")
VALUES (
  'zexfro-admin-001',
  'admin@zexfro.com',
  'zexfro-admin',
  '$2b$10$YixZaYV8fNMfzU8Z.HXlrOHnM6K4VzTZJSevJ4n.R5w1uLjAKs6tG', -- hashed password for: zexfro12341234
  'admin',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO UPDATE
SET 
  name = 'zexfro-admin',
  password = '$2b$10$YixZaYV8fNMfzU8Z.HXlrOHnM6K4VzTZJSevJ4n.R5w1uLjAKs6tG',
  role = 'admin',
  "updatedAt" = NOW();

-- Verify user was created
SELECT id, email, name, role FROM "User" WHERE email = 'admin@zexfro.com';
