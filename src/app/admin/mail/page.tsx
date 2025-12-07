import { MailSettings } from "@/components/admin/MailSettings";
import { MailStats } from "@/components/admin/MailStats";
import { MailLogs } from "@/components/admin/MailLogs";

export default function AdminMailPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Carbonio Mail Integration
        </h1>
        <p className="text-gray-600 mt-2">
          Configure and monitor email services
        </p>
      </div>

      <MailStats />
      <MailSettings />
      <MailLogs />
    </div>
  );
}
