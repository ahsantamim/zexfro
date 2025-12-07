import { PageHeader } from "@/components/ui/PageHeader";
import { TeamSection } from "@/components/about/TeamSection";
import { MissionSection } from "@/components/about/MissionSection";
import { TimelineSection } from "@/components/about/TimelineSection";

export const metadata = {
  title: "About Us - Company Profile",
  description: "Learn more about our company, mission, and team",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="About Us"
        description="Discover our story, mission, and the team behind our success"
      />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
    </main>
  );
}
