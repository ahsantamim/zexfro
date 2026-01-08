import { PageHeader } from "@/components/ui/PageHeader";
import { RegistrationForm } from "@/components/forms/RegistrationForm";

export const metadata = {
  title: "Register - Company Profile",
  description: "Create your account",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Register"
        description="Join us today and get started"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-2xl mx-auto">
            <RegistrationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
