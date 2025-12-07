export function StatsSection() {
  const stats = [
    { value: "1000+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
    { value: "100+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
