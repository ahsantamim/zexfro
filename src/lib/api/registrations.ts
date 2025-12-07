import prisma from "@/lib/db/prisma";

export interface Registration {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  company?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

export async function createRegistration(
  data: Partial<Registration>
): Promise<Registration> {
  // Hash password before saving
  // Replace with actual Prisma query
  throw new Error("Not implemented");
}

export async function getAllRegistrations(): Promise<Registration[]> {
  // Replace with actual Prisma query
  return [];
}

export async function updateRegistrationStatus(
  id: string,
  status: string
): Promise<Registration | null> {
  // Replace with actual Prisma query
  return null;
}
