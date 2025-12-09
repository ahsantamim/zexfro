"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ["Importer", "Exporter"];

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentText.length) {
          setTypewriterText(currentText.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentText.slice(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, textIndex]);

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

      {/* Gradient overlay: centered for H pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Content Container - H Pattern with centered text */}
      <div className="container mx-auto relative z-10 max-w-7xl flex-1 flex items-center justify-center pt-20 pb-10 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 px-4">
        <div className="max-w-4xl text-center animate-fade-in">
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
                        text-gray-200 mx-auto max-w-[60ch]"
          >
            Connect with verified partners in Europe. Access approved product
            categories, manage orders seamlessly, and grow your business with
            confidence.
          </p>

          {/* Primary CTA Button - Touch-friendly responsive sizing with continuous animation */}
          <div className="space-y-4 flex flex-col items-center">
            <Link href="/register">
              <MovingBorderButton
                borderRadius="9999px"
                containerClassName="h-[56px] sm:h-[64px] md:h-[72px] lg:h-[80px] min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px]"
                borderClassName="bg-[radial-gradient(#0A4D96_40%,transparent_60%)]"
                className="bg-white cursor-pointer hover:bg-[#0A4D96] active:bg-[#062d5a]
                           text-[#0A4D96] hover:text-white
                           font-semibold
                           transition-all duration-500 ease-in-out
                           text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
                           px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-6
                           h-full w-full
                           flex items-center justify-center gap-3
                           group"
              >
                Register for Free
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-rotate-45 transition-transform duration-300" />
              </MovingBorderButton>
            </Link>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 min-h-[30px]">
              Register as an{" "}
              <span className="font-semibold text-white bg-white/10 backdrop-blur-sm px-2 py-1 rounded inline-block min-w-[120px]">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>{" "}
              here
            </p>
          </div>

          {/* Trust Badge */}
          <div className="mt-4 sm:mt-6 md:mt-6 pt-6 sm:pt-7 md:pt-8 border-t border-gray-400/20 max-w-md mx-auto">
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
          className="px-8 py-3 flex items-center rounded-tl-full rounded-tr-full cursor-pointer justify-center gap-2 bg-[#F9FAFB] hover:bg-[#0A4D96] text-[#0A4D96] hover:text-white font-semibold text-sm tracking-wider transition-all duration-300"
        >
          <span>VIEW PRODUCTS</span>
          <ArrowRight className="w-4 h-4 rotate-90" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
