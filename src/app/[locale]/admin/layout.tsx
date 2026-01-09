import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Breadcrumbs } from "@/components/admin/Breadcrumbs";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { getSession } from "@/auth";

export const metadata = {
  title: "Admin Dashboard - Zexfro",
  description: "Manage your website content",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || session.role !== "admin") {
    redirect("/login");
  }

  return (
    <QueryProvider>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-6 md:p-8 lg:p-10">
            <div className="max-w-full mx-auto">
              <Breadcrumbs />
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </QueryProvider>
  );
}
