"use client";

import { TradeTypesTable } from "@/components/admin/TradeTypesTable";
import { PageActions } from "@/components/admin/PageActions";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { PageHeaderSkeleton } from "@/components/admin/loading";

export default function AdminTradeTypesPage() {
  return (
    <LoadingWrapper>
      {(loading) => (
        <div className="space-y-6">
          {loading ? (
            <>
              <PageHeaderSkeleton />
              <TradeTypesTable loading={true} />
            </>
          ) : (
            <>
              <PageActions
                title="Trade Types Management"
                description="Manage trade types (Import, Export, etc.)"
                createButtonText="Add New Trade Type"
                createLink="/admin/trade-types/create"
              />
              <TradeTypesTable />
            </>
          )}
        </div>
      )}
    </LoadingWrapper>
  );
}

