"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          if (!isDeleting) {
            if (prev.length < currentWord.length) {
              return currentWord.slice(0, prev.length + 1);
            }
            setTimeout(() => setIsDeleting(true), pauseTime);
            clearInterval(interval);
            return prev;
          }

          if (prev.length > 0) {
            return prev.slice(0, prev.length - 1);
          }

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
              scrolled * 0.4
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
      className="relative flex flex-col justify-center text-white"
      style={{ minHeight: "100vh", paddingTop: "240px" }}
    >
      {/* Background */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* MAIN HERO CONTENT (perfect centered) */}
      <div className="container mx-auto max-w-7xl relative z-10 px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl animate-fade-in">
          {/* TITLE */}
          <h1 className="font-bold leading-[1.2] mb-6 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[72px] drop-shadow-lg">
            Secure. Compliant.
            <br className="sm:hidden" />
            <span className="text-white bg-white/10 backdrop-blur-sm px-2 rounded">
              Global Trade
            </span>{" "}
            Made Simple.
          </h1>

          {/* SUBTITLE */}
          <p className="font-normal leading-[1.4] md:leading-[1.5] mb-8 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-200 mx-auto max-w-[60ch]">
            Connect with verified partners in Europe. Access approved product
            categories, manage orders seamlessly, and grow your business with
            confidence.
          </p>

          {/* BUTTON */}
          <div className="space-y-4 flex flex-col items-center">
            <Link href="/register">
              <MovingBorderButton
                borderRadius="9999px"
                containerClassName="
                  h-[56px] sm:h-[64px] md:h-[72px] lg:h-[90px]
                  min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[360px]
                "
                borderClassName="
                  bg-[radial-gradient(#7BE0A5_40%,transparent_60%)]
                  group-hover:bg-[radial-gradient(#0AFF72_40%,transparent_60%)]
                  transition-all duration-500
                "
                className="
                  cursor-pointer relative overflow-hidden
                  bg-gradient-to-r from-[#7BE0A5] via-[#1AD38E] to-[#0AFF72]
                  hover:from-[#0AFF72] hover:via-[#15E67C] hover:to-[#7BE0A5]
                  shadow-[0_0_18px_#14ff86,inset_0_0_12px_#14ff86]
                  hover:shadow-[0_0_30px_#14ff86,inset_0_0_18px_#14ff86]
                  transition-all duration-500 ease-in-out
                  px-10 py-5 flex items-center justify-center gap-4
                  rounded-full whitespace-nowrap group
                "
              >
                <span
                  className="
                    bg-white text-transparent bg-clip-text italic font-bold tracking-tight font-[Poppins]
                    drop-shadow-[2px_2px_5px_rgba(0,0,0,0.45)]
                    [text-shadow:0px_1px_0px_#fff,0px_3px_0px_#e5e5e5,0px_4px_4px_rgba(0,0,0,0.55)]
                    text-[32px] sm:text-[30px] md:text-[32px] lg:text-[36px]
                  "
                >
                  Register for Free
                </span>

                <ArrowRight
                  className="
                    w-7 h-7 sm:w-6 sm:h-6 text-white 
                    drop-shadow-[0_0_6px_#14ff86]
                    transition-all duration-300
                    group-hover:-rotate-45 group-hover:translate-x-2
                  "
                />
              </MovingBorderButton>
            </Link>

            {/* TYPEWRITER */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 min-h-[30px]">
              Register as an{" "}
              <span className="font-semibold text-white bg-[#0A4D96]/40 backdrop-blur-sm rounded-full inline-block min-w-[120px] px-2">
                {typewriterText}
                <span className="animate-ping">|</span>
              </span>{" "}
              here
            </p>

            <div className="flex flex-row flex-wrap gap-y-4 gap-x-56 mt-12 justify-center">
              <Link href="/products?type=import">
                <button className="px-8 py-3.5 bg-white font-bold cursor-pointer hover:bg-[#083a73] hover:text-white text-[#0A4D96] text-[18px] sm:text-[22px] rounded-full border border-[#0A4D96] transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center group whitespace-nowrap">
                  Import Products
                  <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                </button>
              </Link>

              <Link href="/products?type=export">
                <button className="px-8 py-3.5 bg-white font-bold cursor-pointer hover:bg-[#083a73] hover:text-white text-[#0A4D96] text-[18px] sm:text-[22px] rounded-full border border-[#0A4D96] transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center group whitespace-nowrap">
                  Export Products
                  <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* TRUST BADGE */}
          <div className="mt-10 pt-6 border-t border-gray-400/20 max-w-md mx-auto">
            <p className="text-[12px] sm:text-[13px] text-gray-300">
              Trusted by <span className="font-bold text-white">100+</span>{" "}
              importers and exporters worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
