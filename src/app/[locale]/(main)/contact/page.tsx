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
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Send us a message!"
      />
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <MapSection />
    </main>
  );
}
