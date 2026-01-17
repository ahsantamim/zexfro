"use client";

import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Target,
  Compass,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Globe,
  CheckCircle,
  Award
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function VisionMissionValuesPage() {
  const t = useTranslations("visionMissionValues");
  
  return (
    <ContentLayout
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
    >
      {/* Vision */}
      <ContentSection bgColor="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("vision.title")}</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 text-center leading-relaxed">
              "{t("vision.statement")}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <Globe className="w-12 h-12 text-[#0a4a9e] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t("vision.globalReach.title")}</h3>
              <p className="text-gray-600 text-sm">
                {t("vision.globalReach.description")}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <Shield className="w-12 h-12 text-[#0a4a9e] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t("vision.trustSecurity.title")}</h3>
              <p className="text-gray-600 text-sm">
                {t("vision.trustSecurity.description")}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <TrendingUp className="w-12 h-12 text-[#0a4a9e] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t("vision.innovation.title")}</h3>
              <p className="text-gray-600 text-sm">
                {t("vision.innovation.description")}
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Mission */}
      <ContentSection bgColor="blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("mission.title")}</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8">
              "{t("mission.statement")}"
            </p>
            
            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t("mission.subtitle")}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.raw("mission.items").map((item: { title: string; description: string }, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Core Values */}
      <ContentSection bgColor="white">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("values.title")}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("values.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title={t("values.integrity.title")}
            description={t("values.integrity.description")}
            color="blue"
          />
          
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title={t("values.excellence.title")}
            description={t("values.excellence.description")}
            color="green"
          />
          
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title={t("values.customerCentricity.title")}
            description={t("values.customerCentricity.description")}
            color="purple"
          />
          
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6" />}
            title={t("values.innovation.title")}
            description={t("values.innovation.description")}
            color="orange"
          />
          
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title={t("values.collaboration.title")}
            description={t("values.collaboration.description")}
            color="blue"
          />
          
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title={t("values.accountability.title")}
            description={t("values.accountability.description")}
            color="green"
          />
        </div>
      </ContentSection>

      {/* Our Commitment */}
      <ContentSection bgColor="gray">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title={t("commitment.title")}
            subtitle={t("commitment.subtitle")}
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#0a4a9e]">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#0a4a9e]" />
                {t("commitment.toClients.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("commitment.toClients.description")}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600" />
                {t("commitment.toTeam.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("commitment.toTeam.description")}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-purple-600" />
                {t("commitment.toPartners.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("commitment.toPartners.description")}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-orange-600" />
                {t("commitment.toCommunity.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("commitment.toCommunity.description")}
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="white">
        <CTABox
          title={t("cta.title")}
          description={t("cta.description")}
          buttonText={t("cta.button")}
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}
