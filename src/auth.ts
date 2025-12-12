import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

// Dummy admin user
const ADMIN_USER = {
  id: "1",
  name: "admin",
  email: "admin@zexfro.com",
  password: "1234",
  role: "admin" as const,
};

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET || "FpUXYnvm6XWpT4ul6Q2g9Lfhax7GuZtwvfNIKaxM6Ww=",
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Check against dummy admin user
        if (
          credentials.username === ADMIN_USER.name &&
          credentials.password === ADMIN_USER.password
        ) {
          return {
            id: ADMIN_USER.id,
            name: ADMIN_USER.name,
            email: ADMIN_USER.email,
            role: ADMIN_USER.role,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export interface Session {
  userId: string;
  email: string;
  name: string;
  role: "user" | "admin";
}

export async function getSession(): Promise<Session | null> {
  const session = await auth();
  
  if (!session?.user) {
    return null;
  }

  return {
    userId: session.user.id || "",
    email: session.user.email || "",
    name: session.user.name || "",
    role: (session.user as any).role || "user",
  };
}

