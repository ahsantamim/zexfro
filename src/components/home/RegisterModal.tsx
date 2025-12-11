"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";

// Top 50 countries for selection
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
  "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
  "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
  "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Phone codes for top countries
const phoneCodes = [
  { country: "United States", code: "+1" },
  { country: "United Kingdom", code: "+44" },
  { country: "Canada", code: "+1" },
  { country: "Australia", code: "+61" },
  { country: "Germany", code: "+49" },
  { country: "France", code: "+33" },
  { country: "Italy", code: "+39" },
  { country: "Spain", code: "+34" },
  { country: "China", code: "+86" },
  { country: "Japan", code: "+81" },
  { country: "India", code: "+91" },
  { country: "Bangladesh", code: "+880" },
  { country: "Pakistan", code: "+92" },
  { country: "Brazil", code: "+55" },
  { country: "Mexico", code: "+52" },
  { country: "Russia", code: "+7" },
  { country: "South Korea", code: "+82" },
  { country: "Indonesia", code: "+62" },
  { country: "Turkey", code: "+90" },
  { country: "Saudi Arabia", code: "+966" },
  { country: "United Arab Emirates", code: "+971" },
  { country: "Netherlands", code: "+31" },
  { country: "Switzerland", code: "+41" },
  { country: "Singapore", code: "+65" },
  { country: "Malaysia", code: "+60" },
];

interface RegisterModalProps {
  children: React.ReactNode;
}

export function RegisterModal({ children }: RegisterModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    companyName: "",
    designation: "",
    productType: "",
    phoneCode: "+1",
    phoneNumber: "",
    email: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setOpen(false);
      setFormData({
        name: "",
        country: "",
        companyName: "",
        designation: "",
        productType: "",
        phoneCode: "+1",
        phoneNumber: "",
        email: "",
      });
      setFileName("");
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a4a9e]/98 via-[#05306b]/98 to-[#041f3f]/98 backdrop-blur-xl border-2 border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-white">
            Register Now
          </DialogTitle>
          <DialogDescription className="text-gray-200 text-base">
            Join our network of verified importers and exporters worldwide
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <CheckCircle2 className="w-20 h-20 text-green-400 animate-bounce" />
            <h3 className="text-2xl font-bold text-white">
              Registration Successful!
            </h3>
            <p className="text-gray-200 text-center">
              We'll contact you shortly to complete your verification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/50"
                placeholder="Enter your full name"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country" className="text-white font-semibold">
                Country *
              </Label>
              <Select
                required
                value={formData.country}
                onValueChange={(value) =>
                  setFormData({ ...formData, country: value })
                }
              >
                <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-white/50 focus:ring-white/50">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent className="bg-[#05306b] border-white/20 text-white max-h-60">
                  {countries.map((country) => (
                    <SelectItem
                      key={country}
                      value={country}
                      className="text-white hover:bg-white/10 focus:bg-white/10"
                    >
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white font-semibold">
                Company Name *
              </Label>
              <Input
                id="company"
                required
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/50"
                placeholder="Enter your company name"
              />
            </div>

            {/* Client Designation */}
            <div className="space-y-2">
              <Label htmlFor="designation" className="text-white font-semibold">
                Designation *
              </Label>
              <Input
                id="designation"
                required
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/50"
                placeholder="e.g., CEO, Manager, Director"
              />
            </div>

            {/* Product Type */}
            <div className="space-y-2">
              <Label htmlFor="productType" className="text-white font-semibold">
                Product Type *
              </Label>
              <Select
                required
                value={formData.productType}
                onValueChange={(value) =>
                  setFormData({ ...formData, productType: value })
                }
              >
                <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-white/50 focus:ring-white/50">
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent className="bg-[#05306b] border-white/20 text-white">
                  <SelectItem
                    value="import"
                    className="text-white hover:bg-white/10 focus:bg-white/10"
                  >
                    Import Products
                  </SelectItem>
                  <SelectItem
                    value="export"
                    className="text-white hover:bg-white/10 focus:bg-white/10"
                  >
                    Export Products
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white font-semibold">
                Phone Number *
              </Label>
              <div className="flex gap-2">
                <Select
                  value={formData.phoneCode}
                  onValueChange={(value) =>
                    setFormData({ ...formData, phoneCode: value })
                  }
                >
                  <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-white/50 focus:ring-white/50 w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#05306b] border-white/20 text-white max-h-60">
                    {phoneCodes.map((item) => (
                      <SelectItem
                        key={item.code}
                        value={item.code}
                        className="text-white hover:bg-white/10 focus:bg-white/10"
                      >
                        {item.code} {item.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  required
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/50"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/50"
                placeholder="Enter your email address"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file" className="text-white font-semibold">
                Upload Document (Optional)
              </Label>
              <div className="relative">
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <Label
                  htmlFor="file"
                  className="flex items-center justify-center gap-2 w-full p-4 bg-white/10 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  <Upload className="w-5 h-5 text-white" />
                  <span className="text-white">
                    {fileName || "Click to upload file"}
                  </span>
                </Label>
                {fileName && (
                  <p className="text-xs text-gray-300 mt-1">
                    Selected: {fileName}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

