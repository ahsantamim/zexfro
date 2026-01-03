import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { HowItWorks } from "@/components/services/HowItWorks";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services - Zexfro | Export-Import Solutions",
  description:
    "Comprehensive export-import services including international shipping, customs clearance, trade compliance, warehousing, and supply chain optimization for global businesses.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Our Services"
        description="End-to-end export-import solutions to help your business succeed in global markets"
      />
      <ServicesGrid />
      <HowItWorks />
      <ServicesBenefits />
      <ServicesCTA />
    </main>
  );
}
