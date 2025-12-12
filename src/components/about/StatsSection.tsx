import { TrendingUp, Users, Globe, Award } from "lucide-react";

export function AboutStatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Verified Businesses",
      description: "Companies trust us worldwide"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries",
      description: "Global network coverage"
    },
    {
      icon: TrendingUp,
      value: "$2B+",
      label: "Transaction Volume",
      description: "In secure trade facilitated"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Client satisfaction score"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-80 h-80 border-4 border-white rounded-none" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-white font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
            Numbers That Speak
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-md rounded-none border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <p className="text-white/80 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

