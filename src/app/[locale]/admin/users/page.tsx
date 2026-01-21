"use client";

import { UsersTable } from "@/components/admin/UsersTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";

export default function AdminUsersPage() {
  return (
    <LoadingWrapper loadingText="Loading users...">
      <div className="space-y-6">
        <PageActions
          title="Users Management"
          description="Manage admin and editor users"
          createButtonText="Add New User"
          createLink="/admin/users/create"
        />
        <UsersTable />
      </div>
    </LoadingWrapper>
  );
}
