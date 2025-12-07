"use client";

export function DashboardStats() {
  const stats = [
    { label: "Total Products", value: "0", icon: "📦", color: "bg-blue-500" },
    { label: "Blog Posts", value: "0", icon: "📝", color: "bg-green-500" },
    { label: "Registrations", value: "0", icon: "👥", color: "bg-purple-500" },
    { label: "Emails Sent", value: "0", icon: "📧", color: "bg-orange-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`${stat.color} text-white p-3 rounded-lg text-2xl`}>
              {stat.icon}
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
