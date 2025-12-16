"use client";

import { MailSettings } from "@/components/admin/MailSettings";
import { MailStats } from "@/components/admin/MailStats";
import { MailLogs } from "@/components/admin/MailLogs";
import { Separator } from "@/components/ui/separator";
import { LoadingWrapper } from "@/components/admin/LoadingWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminMailPage() {
  return (
    <LoadingWrapper delay={1000}>
      {(loading) => (
        <div className="space-y-8">
          <div>
            {loading ? (
              <>
                <Skeleton className="h-10 w-64 mb-2" />
                <Skeleton className="h-5 w-96" />
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0a4a9e] to-[#05306b] bg-clip-text text-transparent">
                  Mail Management
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Configure and monitor email services with Carbonio integration
                </p>
              </>
            )}
          </div>

          <Separator />

          <MailStats loading={loading} />
          
          <Separator />

          <MailSettings loading={loading} />
          
          <Separator />

          <MailLogs loading={loading} />
        </div>
      )}
    </LoadingWrapper>
  );
}
