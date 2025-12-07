import { RegistrationsTable } from "@/components/admin/RegistrationsTable";
import { PageActions } from "@/components/admin/PageActions";

export default function AdminRegistrationsPage() {
  return (
    <div className="space-y-6">
      <PageActions
        title="User Registrations"
        description="Manage user registrations and accounts"
      />
      <RegistrationsTable />
    </div>
  );
}
