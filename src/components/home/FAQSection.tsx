"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // All FAQ question keys
  const allFAQs = [
    "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", 
    "q9", "q10", "q11", "q12", "q13", "q14", "q15", "q16", "q17"
  ];

  // Select 5 random FAQs (memoized to avoid re-randomizing on re-render)
  const randomFAQs = useMemo(() => {
    const shuffled = [...allFAQs].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute right-10 top-10 h-32 w-32 text-white"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg
          className="absolute left-20 bottom-20 h-24 w-24 text-white"
          viewBox="0 0 100 100"
        >
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg
          className="absolute right-1/3 bottom-10 h-28 w-28 text-white"
          viewBox="0 0 100 100"
        >
          <path
            d="M30,10 L70,10 L90,50 L70,90 L30,90 L10,50 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4"
          >
            <HelpCircle className="w-6 h-6 text-[#0a4a9e]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
          >
            {t("homeSectionTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
          >
            {t("homeSectionSubtitle")}
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {randomFAQs.map((questionKey, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={questionKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border-2 border-white/20 rounded-lg overflow-hidden hover:border-white hover:shadow-2xl transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">Q</span>
                    </div>
                    <span className="text-base md:text-lg font-bold text-gray-900 pr-4">
                      {t(`questions.${questionKey}.question`)}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#0a4a9e] flex-shrink-0" />
                  </motion.div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: "easeInOut"
                          },
                          opacity: {
                            duration: 0.3,
                            delay: 0.1,
                            ease: "easeIn"
                          }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: "easeInOut"
                          },
                          opacity: {
                            duration: 0.2,
                            ease: "easeOut"
                          }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <div className="flex items-start gap-3 pl-10 pt-3 border-t border-gray-200">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
                          >
                            <span className="text-green-600 font-bold text-xs">A</span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="text-sm md:text-base text-gray-700 leading-relaxed flex-1"
                          >
                            {t.rich(`questions.${questionKey}.answer`, {
                              br: () => <br />,
                              ul: (chunks) => <ul className="list-disc pl-5 space-y-2 mt-2">{chunks}</ul>,
                              li: (chunks) => <li>{chunks}</li>,
                              strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
                            })}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* View All FAQs Button */}
        <div className="text-center mt-6 md:mt-8">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-3 bg-white text-[#0a4a9e] hover:bg-white/90 font-bold text-base md:text-lg px-6 md:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t("viewAllFAQs")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

