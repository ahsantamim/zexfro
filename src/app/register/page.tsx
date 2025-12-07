import { PageHeader } from "@/components/ui/PageHeader";
import { RegistrationForm } from "@/components/forms/RegistrationForm";

export const metadata = {
  title: "Register - Company Profile",
  description: "Create your account",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Register"
        description="Join us today and get started"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
