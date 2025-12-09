import { Quote, Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Import Manager",
      company: "TechGlobal Ltd",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      quote:
        "Zexfro transformed our import process. The compliance features and verified partners gave us peace of mind we never had before.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Export Director",
      company: "EuroTrade GmbH",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      quote:
        "Real-time tracking and automated notifications saved us countless hours. The platform is intuitive and incredibly efficient.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Supply Chain Lead",
      company: "Global Ventures",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      quote:
        "Finding quality verified partners across Europe has never been easier. Zexfro's network is unmatched in the industry.",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white min-h-[25vh] flex items-center">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by importers and exporters across Europe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group p-6 bg-gray-50 rounded-none hover:shadow-xl transition-all duration-300 border border-gray-200 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#0A4D96]" strokeWidth={1} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                `{testimonial.quote}`
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
