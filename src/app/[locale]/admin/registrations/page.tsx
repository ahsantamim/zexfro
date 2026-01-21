"use client";

import { RegistrationsTable } from "@/components/admin/RegistrationsTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";

export default function AdminRegistrationsPage() {
  return (
    <LoadingWrapper loadingText="Loading registrations...">
      <div className="space-y-6">
        <PageActions
          title="User Registrations"
          description="Manage user registrations and accounts"
        />
        <RegistrationsTable />
      </div>
    </LoadingWrapper>
  );
}
