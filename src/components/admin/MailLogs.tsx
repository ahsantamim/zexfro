"use client";

export function MailLogs() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">Email Logs</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                To
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="px-6 py-8 text-center text-gray-600">
                No email logs yet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
