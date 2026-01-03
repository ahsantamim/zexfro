"use client";

import { UsersTable } from "@/components/admin/UsersTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { PageHeaderSkeleton } from "@/components/admin/loading";

export default function AdminUsersPage() {
  return (
    <LoadingWrapper>
      {(loading) => (
        <div className="space-y-6">
          {loading ? (
            <>
              <PageHeaderSkeleton />
              <UsersTable loading={true} />
            </>
          ) : (
            <>
              <PageActions
                title="Users Management"
                description="Manage admin and editor users"
                createButtonText="Add New User"
                createLink="/admin/users/create"
              />
              <UsersTable />
            </>
          )}
        </div>
      )}
    </LoadingWrapper>
  );
}

