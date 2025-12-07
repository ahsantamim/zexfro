import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services - Company Profile",
  description: "Explore our comprehensive range of professional services",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Services"
        description="Comprehensive solutions tailored to your business needs"
      />
      <ServicesGrid />
      <ServicesBenefits />
      <ServicesCTA />
    </main>
  );
}
