"use client";

export function MailStats() {
  const stats = [
    { label: "Emails Sent", value: "0", color: "bg-green-500" },
    { label: "Failed", value: "0", color: "bg-red-500" },
    { label: "Pending", value: "0", color: "bg-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div
            className={`${stat.color} text-white p-3 rounded-lg inline-block mb-4`}
          >
            📧
          </div>
          <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
