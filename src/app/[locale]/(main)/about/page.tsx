"use client";

import {
  ContentLayout,
  ContentSection,
  SectionHeader,
  FeatureCard,
  CTABox,
} from "@/components/ui/ContentLayout";
import {
  Target,
  Users,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Package,
  CheckCircle2,
  Heart,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <ContentLayout
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
    >
      {/* Scroll Velocity Text Bar */}
      <div className="w-full bg-gradient-to-r from-[#0a4a9e] via-[#05306b] to-[#0a4a9e] py-8 text-white overflow-hidden">
        <ScrollVelocity
          texts={[t("announcement")]}
          velocity={50}
          className="custom-scroll-text"
        />
      </div>

      {/* Evolution Story */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("evolution.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            {t("evolution.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t("evolution.paragraph1")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t("evolution.paragraph2")}
            </p>
            <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 rounded-r-lg">
              <p className="text-gray-700 font-semibold mb-2">
                {t("evolution.celebration")}
              </p>
              <p className="text-gray-600">{t("evolution.celebrationDesc")}</p>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Zexfro team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Gratitude Section */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("gratitude.title")}
          subtitle={t("gratitude.subtitle")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#0a4a9e]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("gratitude.buyers.title")}
            </h3>
            <p className="text-gray-600">{t("gratitude.buyers.description")}</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("gratitude.suppliers.title")}
            </h3>
            <p className="text-gray-600">
              {t("gratitude.suppliers.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("gratitude.wellWishers.title")}
            </h3>
            <p className="text-gray-600">
              {t("gratitude.wellWishers.description")}
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Looking Ahead */}
      <ContentSection bgColor="blue">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-[#0a4a9e]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("lookingAhead.title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t("lookingAhead.paragraph1")}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("lookingAhead.paragraph2")}
          </p>
        </div>
      </ContentSection>

      {/* Who We Are */}
      <ContentSection bgColor="white">
        <SectionHeader
          title={t("whoWeAre.title")}
          subtitle={t("whoWeAre.subtitle")}
          centered
        />

        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t("whoWeAre.paragraph1")}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("whoWeAre.paragraph2")}
          </p>
        </div>
      </ContentSection>

      {/* What We Do - Imports */}
      <ContentSection bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
              alt="Import operations"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              title={t("imports.title")}
              subtitle={t("imports.subtitle")}
            />

            <p className="text-gray-700 mb-6 mt-6">{t("imports.intro")}</p>

            <div className="grid grid-cols-1 gap-3">
              {t.raw("imports.items").map((item: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-4 rounded-r-lg mt-6">
              <p className="text-sm text-gray-700">{t("imports.note")}</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* What We Do - Exports */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title={t("exports.title")}
              subtitle={t("exports.subtitle")}
            />

            <p className="text-gray-700 mb-6 mt-6">{t("exports.intro")}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    {t("exports.garments.title")}
                  </span>
                  <p className="text-sm text-gray-600">
                    {t("exports.garments.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    {t("exports.agricultural.title")}
                  </span>
                  <p className="text-sm text-gray-600">
                    {t("exports.agricultural.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    {t("exports.consumer.title")}
                  </span>
                  <p className="text-sm text-gray-600">
                    {t("exports.consumer.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    {t("exports.handicrafts.title")}
                  </span>
                  <p className="text-sm text-gray-600">
                    {t("exports.handicrafts.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    {t("exports.customized.title")}
                  </span>
                  <p className="text-sm text-gray-600">
                    {t("exports.customized.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mt-6">
              <p className="text-sm text-gray-700">{t("exports.note")}</p>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
              alt="Export operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Commitment to Quality */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("quality.title")}
          subtitle={t("quality.subtitle")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title={t("quality.verification.title")}
            description={t("quality.verification.description")}
            color="blue"
          />
          <FeatureCard
            icon={<CheckCircle2 className="w-6 h-6" />}
            title={t("quality.checks.title")}
            description={t("quality.checks.description")}
            color="green"
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title={t("quality.compliance.title")}
            description={t("quality.compliance.description")}
            color="purple"
          />
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title={t("quality.standards.title")}
            description={t("quality.standards.description")}
            color="orange"
          />
          <FeatureCard
            icon={<Package className="w-6 h-6" />}
            title={t("quality.logistics.title")}
            description={t("quality.logistics.description")}
            color="blue"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title={t("quality.team.title")}
            description={t("quality.team.description")}
            color="green"
          />
        </div>
      </ContentSection>

      {/* Customer Satisfaction */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="Customer satisfaction"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              title={t("customerSatisfaction.title")}
              subtitle={t("customerSatisfaction.subtitle")}
            />

            <p className="text-gray-700 mb-6 mt-6">
              {t("customerSatisfaction.intro")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {t("customerSatisfaction.authentic.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("customerSatisfaction.authentic.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {t("customerSatisfaction.pricing.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("customerSatisfaction.pricing.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {t("customerSatisfaction.support.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("customerSatisfaction.support.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {t("customerSatisfaction.delivery.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("customerSatisfaction.delivery.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {t("customerSatisfaction.communication.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("customerSatisfaction.communication.description")}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-6">
              {t("customerSatisfaction.outro")}
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Why Choose Us */}
      <ContentSection bgColor="blue">
        <SectionHeader
          title={t("whyChoose.title")}
          subtitle={t("whyChoose.subtitle")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#0a4a9e]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("whyChoose.network.title")}
            </h3>
            <p className="text-gray-600">
              {t("whyChoose.network.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("whyChoose.expertise.title")}
            </h3>
            <p className="text-gray-600">
              {t("whyChoose.expertise.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("whyChoose.insight.title")}
            </h3>
            <p className="text-gray-600">
              {t("whyChoose.insight.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("whyChoose.focused.title")}
            </h3>
            <p className="text-gray-600">
              {t("whyChoose.focused.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#0a4a9e]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("whyChoose.customerCentric.title")}
            </h3>
            <p className="text-gray-600">
              {t("whyChoose.customerCentric.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("whyChoose.ethics.title")}
            </h3>
            <p className="text-gray-600">{t("whyChoose.ethics.description")}</p>
          </div>
        </div>
      </ContentSection>

      {/* Vision & Mission */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">{t("vision.title")}</h2>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              {t("vision.description")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-8 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">{t("mission.title")}</h2>
            </div>
            <ul className="space-y-3 text-white/90">
              {t.raw("mission.items").map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Closing Message */}
      <ContentSection bgColor="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("closing.title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {t("closing.paragraph")}
          </p>
          <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white">
            <p className="text-xl font-semibold mb-4">{t("closing.regards")}</p>
            <p className="text-2xl font-bold">{t("closing.team")}</p>
            <p className="text-xl mt-2">{t("closing.company")}</p>
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
