"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const [api, setApi] = useState<CarouselApi | null>(null);
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
    {
      id: 4,
      name: "Amina Rahman",
      role: "Procurement Manager",
      company: "Dhaka Imports Co.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      rating: 5,
      quote:
        "The supplier verification and documentation support made cross-border sourcing much faster and more reliable for our team.",
    },
    {
      id: 5,
      name: "David Miller",
      role: "Operations Lead",
      company: "NorthBridge Logistics",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      quote:
        "From quotation to delivery updates, everything feels streamlined. We reduced coordination overhead significantly.",
    },
    {
      id: 6,
      name: "Priya Kapoor",
      role: "Compliance Specialist",
      company: "TradeSecure Group",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80",
      rating: 5,
      quote:
        "Clear compliance workflows and consistent communication helped us avoid delays and keep shipments moving smoothly.",
    },
  ];

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, 4500);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A4D96] w-full">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            className="w-full"
            opts={{ align: "start", loop: true }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group p-6 bg-white rounded-none hover:shadow-xl transition-all duration-300 border border-white/20 relative h-full">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote
                        className="w-16 h-16 text-[#0A4D96]"
                        strokeWidth={1}
                      />
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
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                      {testimonial.quote}
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
                </CarouselItem>
              ))}
            </CarouselContent>

            {testimonials.length > 1 && (
              <>
                <CarouselPrevious className="bg-white/15 border-white/30 text-white hover:bg-white/25 hover:text-white -left-4 md:-left-10" />
                <CarouselNext className="bg-white/15 border-white/30 text-white hover:bg-white/25 hover:text-white -right-4 md:-right-10" />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
