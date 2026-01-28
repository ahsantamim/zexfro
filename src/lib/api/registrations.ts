import prisma from "@/lib/db/prisma";

export interface Registration {
  id: string;
  name: string;
  email: string;
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
  data: Partial<Registration>,
): Promise<Registration> {
  const registration = await prisma.registration.create({
    data: {
      name: data.name!,
      email: data.email!,
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
  status: string,
): Promise<Registration | null> {
  const registration = await prisma.registration.update({
    where: { id },
    data: { status },
  });
  return registration as Registration;
}

export async function getPendingRegistrationsCount(): Promise<number> {
  const count = await prisma.registration.count({
    where: {
      status: "pending",
    },
  });
  return count;
}

export async function deleteRegistration(id: string): Promise<boolean> {
  try {
    await prisma.registration.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    console.error("Error deleting registration:", error);
    return false;
  }
}
