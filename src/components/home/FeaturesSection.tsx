export function FeaturesSection() {
  const features = [
    {
      title: "Fast & Reliable",
      description: "Built with performance in mind",
      icon: "⚡",
    },
    {
      title: "Secure",
      description: "Your data is safe with us",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "We're here whenever you need us",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            We provide the best solutions for your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
