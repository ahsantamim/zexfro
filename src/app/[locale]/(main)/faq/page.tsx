"use client";

import { ContentLayout, ContentSection } from "@/components/ui/ContentLayout";
import {
  Building2,
  FileCheck,
  Shield,
  Package,
  DollarSign,
  ChevronDown,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { RegisterModal } from "@/components/home/RegisterModal";

export default function FAQPage() {
  const t = useTranslations("faq");
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({
    general: null,
    compliance: null,
    shipping: null,
    safety: null,
    business: null,
  });

  const leftColumnCategories = [
    {
      id: "general",
      title: t("categories.general.title"),
      icon: <Building2 className="w-5 h-5" />,
      color: "blue" as const,
      questions: ["q1", "q2", "q3"],
    },
    {
      id: "compliance",
      title: t("categories.compliance.title"),
      icon: <FileCheck className="w-5 h-5" />,
      color: "green" as const,
      questions: ["q4", "q5", "q6"],
    },
    {
      id: "business",
      title: t("categories.business.title"),
      icon: <DollarSign className="w-5 h-5" />,
      color: "blue" as const,
      questions: ["q13", "q14", "q15", "q16", "q17"],
    },
  ];

  const rightColumnCategories = [
    {
      id: "shipping",
      title: t("categories.shipping.title"),
      icon: <Package className="w-5 h-5" />,
      color: "purple" as const,
      questions: ["q7", "q8", "q9", "q10"],
    },
    {
      id: "safety",
      title: t("categories.safety.title"),
      icon: <Shield className="w-5 h-5" />,
      color: "orange" as const,
      questions: ["q11", "q12"],
    },
  ];

  const toggleAccordion = (categoryId: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === index ? null : index,
    }));
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: "border-blue-200",
        bg: "bg-blue-50",
        icon: "text-blue-600",
        iconBg: "bg-blue-100",
        headerBg: "bg-blue-50",
      },
      green: {
        border: "border-green-200",
        bg: "bg-green-50",
        icon: "text-green-600",
        iconBg: "bg-green-100",
        headerBg: "bg-green-50",
      },
      purple: {
        border: "border-purple-200",
        bg: "bg-purple-50",
        icon: "text-purple-600",
        iconBg: "bg-purple-100",
        headerBg: "bg-purple-50",
      },
      orange: {
        border: "border-orange-200",
        bg: "bg-orange-50",
        icon: "text-orange-600",
        iconBg: "bg-orange-100",
        headerBg: "bg-orange-50",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <ContentLayout
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80"
    >
      {/* FAQ Categories - Two Column Layout */}
      <ContentSection bgColor="gray" noPadding>
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {leftColumnCategories.map((category) => {
                const colors = getColorClasses(category.color);

                return (
                  <div key={category.id} className="space-y-3">
                    {/* Category Header */}
                    <div
                      className={`${colors.headerBg} border-2 ${colors.border} rounded-lg p-4`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <div className={colors.icon}>{category.icon}</div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {category.title}
                        </h2>
                      </div>
                    </div>

                    {/* Questions in this category */}
                    <div className="space-y-2">
                      {category.questions.map((questionKey, index) => {
                        const isOpen = openItems[category.id] === index;

                        return (
                          <div
                            key={questionKey}
                            className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0a4a9e] transition-colors duration-300"
                          >
                            {/* Question Button */}
                            <button
                              onClick={() =>
                                toggleAccordion(category.id, index)
                              }
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                              aria-expanded={isOpen}
                            >
                              <div className="flex items-start gap-3 flex-1">
                                <div
                                  className={`w-7 h-7 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}
                                >
                                  <span
                                    className={`${colors.icon} font-bold text-xs`}
                                  >
                                    Q
                                  </span>
                                </div>
                                <span className="text-sm md:text-base font-bold text-gray-900 pr-4">
                                  {t(`questions.${questionKey}.question`)}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
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
                                        ease: "easeInOut",
                                      },
                                      opacity: {
                                        duration: 0.3,
                                        delay: 0.1,
                                        ease: "easeIn",
                                      },
                                    },
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                    transition: {
                                      height: {
                                        duration: 0.4,
                                        ease: "easeInOut",
                                      },
                                      opacity: {
                                        duration: 0.2,
                                        ease: "easeOut",
                                      },
                                    },
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4">
                                    <div className="flex items-start gap-3 pl-10 pt-3 border-t border-gray-200">
                                      <div
                                        className={`w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                                      >
                                        <span className="text-green-600 font-bold text-xs">
                                          A
                                        </span>
                                      </div>
                                      <div className="text-sm text-gray-700 leading-relaxed flex-1">
                                        {t.rich(
                                          `questions.${questionKey}.answer`,
                                          {
                                            br: () => <br />,
                                            ul: (chunks) => (
                                              <ul className="list-disc pl-5 space-y-1 mt-2">
                                                {chunks}
                                              </ul>
                                            ),
                                            li: (chunks) => <li>{chunks}</li>,
                                            strong: (chunks) => (
                                              <strong className="font-semibold">
                                                {chunks}
                                              </strong>
                                            ),
                                          }
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {rightColumnCategories.map((category) => {
                const colors = getColorClasses(category.color);

                return (
                  <div key={category.id} className="space-y-3">
                    {/* Category Header */}
                    <div
                      className={`${colors.headerBg} border-2 ${colors.border} rounded-lg p-4`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <div className={colors.icon}>{category.icon}</div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {category.title}
                        </h2>
                      </div>
                    </div>

                    {/* Questions in this category */}
                    <div className="space-y-2">
                      {category.questions.map((questionKey, index) => {
                        const isOpen = openItems[category.id] === index;

                        return (
                          <div
                            key={questionKey}
                            className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0a4a9e] transition-colors duration-300"
                          >
                            {/* Question Button */}
                            <button
                              onClick={() =>
                                toggleAccordion(category.id, index)
                              }
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                              aria-expanded={isOpen}
                            >
                              <div className="flex items-start gap-3 flex-1">
                                <div
                                  className={`w-7 h-7 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}
                                >
                                  <span
                                    className={`${colors.icon} font-bold text-xs`}
                                  >
                                    Q
                                  </span>
                                </div>
                                <span className="text-sm md:text-base font-bold text-gray-900 pr-4">
                                  {t(`questions.${questionKey}.question`)}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
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
                                        ease: "easeInOut",
                                      },
                                      opacity: {
                                        duration: 0.3,
                                        delay: 0.1,
                                        ease: "easeIn",
                                      },
                                    },
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                    transition: {
                                      height: {
                                        duration: 0.4,
                                        ease: "easeInOut",
                                      },
                                      opacity: {
                                        duration: 0.2,
                                        ease: "easeOut",
                                      },
                                    },
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4">
                                    <div className="flex items-start gap-3 pl-10 pt-3 border-t border-gray-200">
                                      <div
                                        className={`w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                                      >
                                        <span className="text-green-600 font-bold text-xs">
                                          A
                                        </span>
                                      </div>
                                      <div className="text-sm text-gray-700 leading-relaxed flex-1">
                                        {t.rich(
                                          `questions.${questionKey}.answer`,
                                          {
                                            br: () => <br />,
                                            ul: (chunks) => (
                                              <ul className="list-disc pl-5 space-y-1 mt-2">
                                                {chunks}
                                              </ul>
                                            ),
                                            li: (chunks) => <li>{chunks}</li>,
                                            strong: (chunks) => (
                                              <strong className="font-semibold">
                                                {chunks}
                                              </strong>
                                            ),
                                          }
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Still Have Questions - Blue Background */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute right-10 top-10 h-32 w-32 text-white"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <svg
            className="absolute left-20 bottom-10 h-24 w-24 text-white"
            viewBox="0 0 100 100"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("stillHaveQuestions.title")}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t("stillHaveQuestions.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {t("stillHaveQuestions.contactButton")}
            </Link>
            <a
              href="mailto:info@zexfro.com"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              {t("stillHaveQuestions.emailButton")}
            </a>
          </div>
        </div>
      </section>

      {/* Ready to Start Trading - White Background */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <RegisterModal>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {t("cta.button")}
            </button>
          </RegisterModal>
        </div>
      </section>
    </ContentLayout>
  );
}
