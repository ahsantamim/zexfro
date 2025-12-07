"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const scrolled = window.scrollY;
            bgRef.current.style.transform = `translate3d(0, ${
              scrolled * 0.5
            }px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col text-white overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
        style={{
          backgroundImage: "url('/home/hero.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient overlay: darker left for text, brighter right for image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Content Container - Max width 7xl (1280px) */}
      <div className="container mx-auto relative z-10 max-w-7xl flex-1 flex items-center pt-20 pb-10 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl animate-fade-in">
          {/* H1 Title - Responsive Typography Scale */}
          <h1
            className="font-bold leading-[1.2] mb-4 sm:mb-5 md:mb-6 
                         text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px]
                         text-white drop-shadow-lg"
          >
            Secure. Compliant.
            <br />
            <span className="text-[#ffffff] bg-white/10 backdrop-blur-sm px-2 rounded">
              Global Trade
            </span>
            <br />
            Made Simple.
          </h1>

          {/* H2 Subheadline - Supporting value proposition */}
          <p
            className="font-normal leading-[1.4] md:leading-[1.5] mb-6 sm:mb-7 md:mb-8
                        text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
                        text-gray-200 max-w-[60ch]"
          >
            Connect with verified partners in Europe. Access approved product
            categories, manage orders seamlessly, and grow your business with
            confidence.
          </p>

          {/* Primary CTA Button - Touch-friendly responsive sizing */}
          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="bg-[#0A4D96] hover:bg-[#083a73] active:bg-[#062d5a]
                         text-white font-semibold rounded-none
                         text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]
                         px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-3.5 lg:px-6 lg:py-4
                         min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]
                         h-[40px] sm:h-[44px] md:h-[50px] lg:h-[56px]
                         group"
            >
              <Link href="/register">
                Register for Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-rotate-45 transition-transform duration-300" />
              </Link>
            </Button>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-300 ml-1">
              Register as an{" "}
              <span className="font-semibold text-white">Exporter</span> or{" "}
              <span className="font-semibold text-white">Importer</span> here
            </p>
          </div>

          {/* Trust Badge */}
          <div className="mt-4 sm:mt-6 md:mt-6 pt-6 sm:pt-7 md:pt-8 border-t border-gray-400/20">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-300">
              Trusted by <span className="font-bold text-white">100+</span>{" "}
              importers and exporters worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Down Button - Bottom of screen */}
      <div className="relative z-10 w-full flex justify-center">
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="px-6 py-3 flex items-center rounded-tl-xl rounded-tr-xl cursor-pointer justify-center gap-2 bg-[#F9FAFB] text-[#0A4D96] font-semibold text-sm tracking-wider"
        >
          <span>VIEW PRODUCTS</span>
          <ArrowRight className="w-4 h-4 rotate-90" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
