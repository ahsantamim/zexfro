"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { HowItWorks } from "@/components/services/HowItWorks";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title={t("pageTitle")}
        description={t("pageDescription")}
        heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
      />
      <ServicesGrid />
      <HowItWorks />
      <ServicesBenefits />
      <ServicesCTA />
    </main>
  );
}
