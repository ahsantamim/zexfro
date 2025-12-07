import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";

export const metadata = {
  title: "Contact Us - Company Profile",
  description: "Get in touch with our team",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Send us a message!"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <MapSection />
    </main>
  );
}
