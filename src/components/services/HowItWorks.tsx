import { FileSearch, CheckCircle, Truck, PackageCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: FileSearch,
      title: "Consultation & Assessment",
      description:
        "Share your export-import requirements with us. Our team analyzes your needs and creates a customized solution plan.",
    },
    {
      number: "02",
      icon: CheckCircle,
      title: "Documentation & Compliance",
      description:
        "We handle all necessary documentation, permits, and ensure full compliance with international trade regulations.",
    },
    {
      number: "03",
      icon: Truck,
      title: "Logistics & Shipping",
      description:
        "Your cargo is transported via the most efficient route with real-time tracking and full insurance coverage.",
    },
    {
      number: "04",
      icon: PackageCheck,
      title: "Delivery & Support",
      description:
        "Final delivery to destination with customs clearance, and ongoing support for any post-delivery requirements.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0a4a9e 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process to get your goods moving across
            borders
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0a4a9e] via-[#05306b] to-[#041f3f] z-0"
            style={{ width: "calc(100% - 8rem)", left: "4rem" }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10">
                {/* Step Card */}
                <div className="group">
                  {/* Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white border-2 border-gray-200 rounded-none p-6 hover:border-[#0a4a9e] hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[#0a4a9e] transition-colors duration-300">
                      <Icon
                        className="w-6 h-6 text-[#0a4a9e] group-hover:text-white transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to get started? Our team is here to guide you through every
            step.
          </p>
        </div>
      </div>
    </section>
  );
}
