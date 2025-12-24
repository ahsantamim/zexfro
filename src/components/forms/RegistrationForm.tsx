"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CountryDropdown,
  type Country,
} from "@/components/ui/country-dropdown";

// Flag component using CDN
const CountryFlag = ({ countryCode }: { countryCode: string }) => {
  return (
    <img
      src={`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png 2x`}
      width="20"
      height="15"
      alt={`${countryCode} flag`}
      className="rounded"
    />
  );
};

export function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    countryCode: "+1",
    password: "",
    confirmPassword: "",
    phone: "",
    company: "",
  });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/register/success");
      } else {
        const data = await response.json();
        setError(data.error || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Telephone Number (Optional)
          </label>
          <div className="flex gap-2">
            <div className="w-32">
              <CountryDropdown
                slim={false}
                placeholder="Country"
                onChange={(country: Country) => {
                  setSelectedCountry(country);
                  const countryCode = country.countryCallingCodes?.[0] || "+1";
                  setFormData({ ...formData, countryCode });
                }}
              />
            </div>
            <div className="flex-1 flex items-center gap-2">
              {selectedCountry && (
                <div className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                  <CountryFlag countryCode={selectedCountry.alpha2} />
                  <span className="text-sm font-medium">
                    {selectedCountry.countryCallingCodes?.[0] || "+1"}
                  </span>
                </div>
              )}
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                placeholder="Enter phone number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password *</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Confirm Password *
          </label>
          <input
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
