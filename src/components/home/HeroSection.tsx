"use client";

import { ArrowRight } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { useEffect, useRef, useState } from "react";
import { ProductDrawer } from "@/components/home/ProductDrawer";
import { RegisterModal } from "@/components/home/RegisterModal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { LettersPullUp } from "@/components/ui/letters-pull-up";

export function HeroSection() {
  const t = useTranslations("hero");
  const bgRef = useRef<HTMLDivElement>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [t("typewriter.importer"), t("typewriter.exporter")];

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
      className="relative flex flex-col justify-center text-white pt-16 md:pt-20"
      style={{ minHeight: "100vh" }}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/20" />

      {/* MAIN HERO CONTENT (perfect centered) */}
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          {/* TITLE - Animated with LettersPullUp - Two Lines */}
          <div className="mb-6 space-y-2">
            {/* Line 1: Secure. Compliant. */}
            <LettersPullUp 
              text={t("title.line1")}
              className="font-bold leading-[1.2] text-[36px] sm:text-[40px] md:text-[48px] lg:text-[72px] drop-shadow-lg text-white"
              delay={0.08}
            />
            {/* Line 2: Global Trade Made Simple. */}
            <LettersPullUp 
              text={`${t("title.line2")} ${t("title.line3")}`}
              className="font-bold leading-[1.2] text-[36px] sm:text-[40px] md:text-[48px] lg:text-[72px] drop-shadow-lg text-white"
              delay={0.08}
            />
          </div>

          {/* SUBTITLE - Animated */}
          <motion.p 
            className="font-normal leading-[1.4] md:leading-[1.5] mb-8 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-200 mx-auto max-w-[60ch]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            {t("subtitle")}
          </motion.p>

          {/* BUTTON - Animated */}
          <motion.div 
            className="space-y-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: 1.7,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <RegisterModal>
              <MovingBorderButton
                borderRadius="9999px"
                containerClassName="
                  h-[72px] sm:h-[64px] md:h-[72px] lg:h-[90px]
                  min-w-[280px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[360px]
                "
                borderClassName="
                  bg-[radial-gradient(#7BE0A5_40%,transparent_60%)]
                  group-hover:bg-[radial-gradient(#0AFF72_40%,transparent_60%)]
                  transition-all duration-500
                "
                className="
                  cursor-pointer relative overflow-hidden
                  bg-green-900
                  hover:from-[#0AFF72] hover:via-[#15E67C] hover:to-[#7BE0A5]
               
                  transition-all duration-500 ease-in-out
                  px-12 py-6 sm:px-10 sm:py-5 flex items-center justify-center gap-4
                  rounded-full whitespace-nowrap group
                "
              >
<span
  className="
    font-bold tracking-tight font-[Poppins]
    text-[32px] sm:text-[30px] md:text-[32px] lg:text-[36px]
    text-transparent bg-clip-text
    bg-gradient-to-b from-white via-[#e8e8e8] to-[#bfbfbf] text-yellow-50

    /* Glossy highlight */
    [text-shadow:
      0px_1px_1px_rgba(255,255,255,0.9),
      0px_3px_2px_rgba(255,255,255,0.5),

      /* Deep layered shadow for 3D depth */
      0px_4px_2px_rgba(0,0,0,0.25),
      0px_6px_6px_rgba(0,0,0,0.40),
      0px_10px_12px_rgba(0,0,0,0.50)
    ]
  "
>
  {t("cta")}
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
            </RegisterModal>

            {/* TYPEWRITER */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 min-h-[30px]">
              {t("registerAs")}{" "}
              <span className="font-semibold text-white bg-[#0A4D96]/40 backdrop-blur-sm rounded-full inline-block min-w-[120px] px-2">
                {typewriterText}
                <span className="animate-ping">|</span>
              </span>{" "}
              {t("here")}
            </p>

            <motion.div 
              className="flex flex-row flex-wrap gap-y-4 gap-x-56 mt-12 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
            >
              <ProductDrawer type="import">
                <button className="px-8 py-3.5 bg-white font-bold cursor-pointer hover:bg-[#083a73] hover:text-white text-[#0A4D96] text-[18px] sm:text-[22px] rounded-full border border-[#0A4D96] transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center group whitespace-nowrap">
                  {t("importProducts")}
                  <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                </button>
              </ProductDrawer>

              <ProductDrawer type="export">
                <button className="px-8 py-3.5 bg-white font-bold cursor-pointer hover:bg-[#083a73] hover:text-white text-[#0A4D96] text-[18px] sm:text-[22px] rounded-full border border-[#0A4D96] transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center group whitespace-nowrap">
                  {t("exportProducts")}
                  <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                </button>
              </ProductDrawer>
            </motion.div>
          </motion.div>

          {/* TRUST BADGE - Animated */}
          <motion.div 
            className="mt-10 pt-6 border-t border-gray-400/20 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.7, ease: "easeOut" }}
          >
            <p className="text-[12px] sm:text-[13px] text-gray-300">
              {t("trustedBy")} <span className="font-bold text-white">{t("trustedByCount")}</span>{" "}
              {t("trustedByText")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
