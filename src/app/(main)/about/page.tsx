import { PageHeader } from "@/components/ui/PageHeader";
import { MissionSection } from "@/components/about/MissionSection";
import { AboutStatsSection } from "@/components/about/StatsSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata = {
  title: "About Us - Zexfro | Global Trade Made Simple",
  description: "Learn about Zexfro's mission to revolutionize international trade through innovation, security, and compliance. Meet our team and discover our journey.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-60">
      <PageHeader
        title="About Zexfro"
        description="Revolutionizing global trade through innovation, security, and unwavering commitment to our clients"
      />
      <MissionSection />
      <AboutStatsSection />
      <TimelineSection />
      <TeamSection />
    </main>
  );
}
