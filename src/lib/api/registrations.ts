import prisma from "@/lib/db/prisma";
import bcrypt from "bcryptjs";

export interface Registration {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  company?: string;
  country?: string;
  designation?: string;
  clientType?: string;
  documentUrl?: string;
  telephone?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

export async function createRegistration(
  data: Partial<Registration>
): Promise<Registration> {
  // Hash password before saving
  const hashedPassword = await bcrypt.hash(data.password || "", 10);

  const registration = await prisma.registration.create({
    data: {
      name: data.name!,
      email: data.email!,
      password: hashedPassword,
      phone: data.phone,
      company: data.company,
      country: data.country,
      designation: data.designation,
      clientType: data.clientType,
      documentUrl: data.documentUrl,
      telephone: data.telephone,
      status: "pending",
    },
  });

  return registration as Registration;
}

export async function getAllRegistrations(): Promise<Registration[]> {
  const registrations = await prisma.registration.findMany({
    orderBy: { createdAt: "desc" },
  });
  return registrations as Registration[];
}

export async function updateRegistrationStatus(
  id: string,
  status: string
): Promise<Registration | null> {
  const registration = await prisma.registration.update({
    where: { id },
    data: { status },
  });
  return registration as Registration;
}
