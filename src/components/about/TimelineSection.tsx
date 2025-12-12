import { CheckCircle2, Rocket, TrendingUp, Globe, Award, Users } from "lucide-react";

export function TimelineSection() {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Zexfro was founded with a vision to revolutionize international trade and make global commerce accessible to businesses of all sizes.",
      icon: Rocket,
      stats: "3 founding members"
    },
    {
      year: "2019",
      title: "First 100 Clients",
      description: "Reached our first milestone of 100 verified businesses on the platform, facilitating secure cross-border transactions across 15 countries.",
      icon: Users,
      stats: "100+ businesses"
    },
    {
      year: "2020",
      title: "European Expansion",
      description: "Expanded operations across Europe, obtaining full regulatory compliance and establishing partnerships with major logistics providers.",
      icon: Globe,
      stats: "25+ countries"
    },
    {
      year: "2021",
      title: "Platform Innovation",
      description: "Launched AI-powered verification system and real-time tracking, reducing processing time by 60% and increasing security standards.",
      icon: TrendingUp,
      stats: "60% faster processing"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received 'Best Trade Platform' award and reached $1B in facilitated transactions, cementing our position as industry leaders.",
      icon: Award,
      stats: "$1B in transactions"
    },
    {
      year: "2023",
      title: "Global Network",
      description: "Surpassed 10,000 verified businesses and expanded to 50+ countries, creating a truly global trade ecosystem.",
      icon: CheckCircle2,
      stats: "10,000+ businesses"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-4 border-[#0a4a9e] rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 border-4 border-[#0a4a9e] rounded-none" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            The Story Behind Zexfro
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From a small startup to a global trade platform - here's how we grew
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0a4a9e] to-[#05306b] hidden lg:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white p-6 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0a4a9e]">
                      <div className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} flex-row`}>
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#0a4a9e]" strokeWidth={2} />
                        </div>
                        <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"} text-left`}>
                          <span className="text-sm font-bold text-[#0a4a9e] uppercase tracking-wider">
                            {milestone.year}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            {milestone.description}
                          </p>
                          <div className="inline-block bg-blue-50 px-3 py-1 rounded-full">
                            <span className="text-sm font-semibold text-[#0a4a9e]">
                              {milestone.stats}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-full items-center justify-center shadow-lg z-10">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Empty Space for Alternate Layout */}
                  <div className="w-full lg:w-5/12 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
