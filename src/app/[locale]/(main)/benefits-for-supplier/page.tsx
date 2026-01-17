"use client";

import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  DollarSign,
  Package,
  BarChart,
  Headphones,
  FileCheck
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function BenefitsForSupplierPage() {
  const t = useTranslations("benefitsForSupplier");
  
  return (
    <ContentLayout
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
      heroImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("introduction.title")}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("introduction.description")}
          </p>
        </div>
      </ContentSection>

      {/* Key Benefits */}
      <ContentSection bgColor="blue">
        <SectionHeader
          title={t("keyBenefits.title")}
          subtitle={t("keyBenefits.subtitle")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title={t("keyBenefits.globalMarket.title")}
            description={t("keyBenefits.globalMarket.description")}
            color="blue"
          />
          
          <FeatureCard
            icon={<DollarSign className="w-6 h-6" />}
            title={t("keyBenefits.securePayments.title")}
            description={t("keyBenefits.securePayments.description")}
            color="green"
          />
          
          <FeatureCard
            icon={<FileCheck className="w-6 h-6" />}
            title={t("keyBenefits.documentation.title")}
            description={t("keyBenefits.documentation.description")}
            color="purple"
          />
          
          <FeatureCard
            icon={<Headphones className="w-6 h-6" />}
            title={t("keyBenefits.support.title")}
            description={t("keyBenefits.support.description")}
            color="orange"
          />
          
          <FeatureCard
            icon={<Package className="w-6 h-6" />}
            title={t("keyBenefits.logistics.title")}
            description={t("keyBenefits.logistics.description")}
            color="blue"
          />
          
          <FeatureCard
            icon={<BarChart className="w-6 h-6" />}
            title={t("keyBenefits.growth.title")}
            description={t("keyBenefits.growth.description")}
            color="green"
          />
        </div>
      </ContentSection>

      {/* How It Works */}
      <ContentSection bgColor="white">
        <SectionHeader
          title={t("howItWorks.title")}
          subtitle={t("howItWorks.subtitle")}
          centered
        />

        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.raw("howItWorks.steps").map((step: { title: string; description: string }, index: number) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-blue-700' :
                  index === 1 ? 'from-green-500 to-green-700' :
                  index === 2 ? 'from-purple-500 to-purple-700' :
                  'from-orange-500 to-orange-700'
                } rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* What We Offer */}
      <ContentSection bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title={t("whatWeOffer.title")}
              subtitle={t("whatWeOffer.subtitle")}
            />

            <div className="space-y-4 mt-8">
              {t.raw("whatWeOffer.items").map((item: { title: string; description: string }, index: number) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
              alt="Supplier collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Success Stories */}
      <ContentSection bgColor="white">
        <SectionHeader
          title={t("successStories.title")}
          subtitle={t("successStories.subtitle")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-8 text-center">
            <div className="text-5xl font-bold text-[#0a4a9e] mb-2">{t("successStories.revenueGrowth.value")}</div>
            <div className="text-gray-700 font-semibold mb-2">{t("successStories.revenueGrowth.label")}</div>
            <p className="text-sm text-gray-600">
              {t("successStories.revenueGrowth.description")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-lg p-8 text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">{t("successStories.newMarkets.value")}</div>
            <div className="text-gray-700 font-semibold mb-2">{t("successStories.newMarkets.label")}</div>
            <p className="text-sm text-gray-600">
              {t("successStories.newMarkets.description")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-lg p-8 text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">{t("successStories.onTimePayment.value")}</div>
            <div className="text-gray-700 font-semibold mb-2">{t("successStories.onTimePayment.label")}</div>
            <p className="text-sm text-gray-600">
              {t("successStories.onTimePayment.description")}
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Requirements */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("requirements.title")}
          subtitle={t("requirements.subtitle")}
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.raw("requirements.items").map((item: { title: string; description: string }, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-2xl p-12 text-white text-center shadow-2xl">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg mb-8 text-white/90">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a4a9e] hover:bg-white/90 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t("cta.primaryButton")}
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3 rounded-full transition-all duration-300"
              >
                {t("cta.secondaryButton")}
              </a>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
