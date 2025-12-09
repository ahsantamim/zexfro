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

  // ★ Ultra Smooth Typewriter
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseTime = 900;

    const currentWord = texts[textIndex];

    const interval = setInterval(
      () => {
        setTypewriterText((prev) => {
          // Typing
          if (!isDeleting) {
            if (prev.length < currentWord.length) {
              return currentWord.slice(0, prev.length + 1);
            }

            setTimeout(() => setIsDeleting(true), pauseTime);
            clearInterval(interval);
            return prev;
          }

          // Deleting
          if (prev.length > 0) {
            return prev.slice(0, prev.length - 1);
          }

          // Next word
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
          clearInterval(interval);
          return prev;
        });
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(interval);
  }, [textIndex, isDeleting]);

  // ★ Parallax
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
    <section
      className="relative flex flex-col text-white"
      style={{ minHeight: "100svh" }}
    >
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="container mx-auto relative z-10 max-w-7xl flex-1 flex items-center justify-center py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-4xl text-center animate-fade-in">
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

          <p
            className="font-normal leading-[1.4] md:leading-[1.5] mb-6 sm:mb-7 md:mb-8
                        text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
                        text-gray-200 mx-auto max-w-[60ch]"
          >
            Connect with verified partners in Europe. Access approved product
            categories, manage orders seamlessly, and grow your business with
            confidence.
          </p>

          <div className="space-y-4 flex flex-col items-center">
            <Link href="/register">
              <MovingBorderButton
                borderRadius="9999px"
                containerClassName="h-[56px] sm:h-[64px] md:h-[72px] lg:h-[80px] min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px]"
                borderClassName="bg-[radial-gradient(#ffffff_40%,transparent_60%)] group-hover:bg-[radial-gradient(#0A4D96_40%,transparent_60%)] transition-all duration-500"
                className="bg-[#0A4D96] cursor-pointer hover:bg-white active:bg-gray-100
                           text-white hover:text-[#0A4D96]
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
              <span className="font-semibold text-white bg-[#0A4D96]/40 backdrop-blur-sm rounded-full inline-block min-w-[120px]">
                {typewriterText}
                <span className="animate-ping">|</span>
              </span>{" "}
              here
            </p>
          </div>

          <div className="mt-3 sm:mt-4 md:mt-5 pt-4 sm:pt-5 md:pt-6 border-t border-gray-400/20 max-w-md mx-auto">
            <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-300">
              Trusted by <span className="font-bold text-white">100+</span>{" "}
              importers and exporters worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full flex justify-center">
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="px-6 py-2.5 sm:px-8 sm:py-3 flex items-center rounded-tl-full rounded-tr-full cursor-pointer justify-center gap-2 bg-[#F9FAFB] hover:bg-[#0A4D96] text-[#0A4D96] hover:text-white font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300"
        >
          <span>VIEW PRODUCTS</span>
          <ArrowRight className="w-4 h-4 rotate-90" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
