"use client";

import { RegistrationsTable } from "@/components/admin/RegistrationsTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { PageHeaderSkeleton } from "@/components/admin/loading";

export default function AdminRegistrationsPage() {
  return (
    <LoadingWrapper>
      {(loading) => (
        <div className="space-y-6">
          {loading ? (
            <>
              <PageHeaderSkeleton />
              <RegistrationsTable loading={true} />
            </>
          ) : (
            <>
              <PageActions
                title="User Registrations"
                description="Manage user registrations and accounts"
              />
              <RegistrationsTable />
            </>
          )}
        </div>
      )}
    </LoadingWrapper>
  );
}
