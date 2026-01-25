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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Upload,
  CheckCircle2,
  Loader2,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
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

// Countries with flag codes (ISO 3166-1 alpha-2)
const countries = [
  { name: "Afghanistan", flag: "af" },
  { name: "Albania", flag: "al" },
  { name: "Algeria", flag: "dz" },
  { name: "Argentina", flag: "ar" },
  { name: "Australia", flag: "au" },
  { name: "Austria", flag: "at" },
  { name: "Bangladesh", flag: "bd" },
  { name: "Belgium", flag: "be" },
  { name: "Brazil", flag: "br" },
  { name: "Bulgaria", flag: "bg" },
  { name: "Canada", flag: "ca" },
  { name: "Chile", flag: "cl" },
  { name: "China", flag: "cn" },
  { name: "Colombia", flag: "co" },
  { name: "Croatia", flag: "hr" },
  { name: "Czech Republic", flag: "cz" },
  { name: "Denmark", flag: "dk" },
  { name: "Egypt", flag: "eg" },
  { name: "Estonia", flag: "ee" },
  { name: "Finland", flag: "fi" },
  { name: "France", flag: "fr" },
  { name: "Germany", flag: "de" },
  { name: "Greece", flag: "gr" },
  { name: "Hong Kong", flag: "hk" },
  { name: "Hungary", flag: "hu" },
  { name: "Iceland", flag: "is" },
  { name: "India", flag: "in" },
  { name: "Indonesia", flag: "id" },
  { name: "Iran", flag: "ir" },
  { name: "Iraq", flag: "iq" },
  { name: "Ireland", flag: "ie" },
  { name: "Israel", flag: "il" },
  { name: "Italy", flag: "it" },
  { name: "Japan", flag: "jp" },
  { name: "Jordan", flag: "jo" },
  { name: "Kenya", flag: "ke" },
  { name: "Kuwait", flag: "kw" },
  { name: "Latvia", flag: "lv" },
  { name: "Lebanon", flag: "lb" },
  { name: "Lithuania", flag: "lt" },
  { name: "Luxembourg", flag: "lu" },
  { name: "Malaysia", flag: "my" },
  { name: "Mexico", flag: "mx" },
  { name: "Morocco", flag: "ma" },
  { name: "Netherlands", flag: "nl" },
  { name: "New Zealand", flag: "nz" },
  { name: "Nigeria", flag: "ng" },
  { name: "Norway", flag: "no" },
  { name: "Pakistan", flag: "pk" },
  { name: "Philippines", flag: "ph" },
  { name: "Poland", flag: "pl" },
  { name: "Portugal", flag: "pt" },
  { name: "Qatar", flag: "qa" },
  { name: "Romania", flag: "ro" },
  { name: "Russia", flag: "ru" },
  { name: "Saudi Arabia", flag: "sa" },
  { name: "Serbia", flag: "rs" },
  { name: "Singapore", flag: "sg" },
  { name: "Slovakia", flag: "sk" },
  { name: "Slovenia", flag: "si" },
  { name: "South Africa", flag: "za" },
  { name: "South Korea", flag: "kr" },
  { name: "Spain", flag: "es" },
  { name: "Sri Lanka", flag: "lk" },
  { name: "Sweden", flag: "se" },
  { name: "Switzerland", flag: "ch" },
  { name: "Taiwan", flag: "tw" },
  { name: "Thailand", flag: "th" },
  { name: "Turkey", flag: "tr" },
  { name: "Ukraine", flag: "ua" },
  { name: "United Arab Emirates", flag: "ae" },
  { name: "United Kingdom", flag: "gb" },
  { name: "United States", flag: "us" },
  { name: "Vietnam", flag: "vn" },
];

// Phone codes with flag codes (ISO 3166-1 alpha-2)
const phoneCodes = [
  { country: "United States", code: "+1", flag: "us" },
  { country: "United Kingdom", code: "+44", flag: "gb" },
  { country: "Canada", code: "+1", flag: "ca" },
  { country: "Australia", code: "+61", flag: "au" },
  { country: "Germany", code: "+49", flag: "de" },
  { country: "France", code: "+33", flag: "fr" },
  { country: "Italy", code: "+39", flag: "it" },
  { country: "Spain", code: "+34", flag: "es" },
  { country: "China", code: "+86", flag: "cn" },
  { country: "Japan", code: "+81", flag: "jp" },
  { country: "India", code: "+91", flag: "in" },
  { country: "Bangladesh", code: "+880", flag: "bd" },
  { country: "Pakistan", code: "+92", flag: "pk" },
  { country: "Brazil", code: "+55", flag: "br" },
  { country: "Mexico", code: "+52", flag: "mx" },
  { country: "Russia", code: "+7", flag: "ru" },
  { country: "South Korea", code: "+82", flag: "kr" },
  { country: "Indonesia", code: "+62", flag: "id" },
  { country: "Turkey", code: "+90", flag: "tr" },
  { country: "Saudi Arabia", code: "+966", flag: "sa" },
  { country: "United Arab Emirates", code: "+971", flag: "ae" },
  { country: "Netherlands", code: "+31", flag: "nl" },
  { country: "Switzerland", code: "+41", flag: "ch" },
  { country: "Singapore", code: "+65", flag: "sg" },
  { country: "Malaysia", code: "+60", flag: "my" },
  { country: "Thailand", code: "+66", flag: "th" },
  { country: "Vietnam", code: "+84", flag: "vn" },
  { country: "Philippines", code: "+63", flag: "ph" },
  { country: "Egypt", code: "+20", flag: "eg" },
  { country: "South Africa", code: "+27", flag: "za" },
];

interface RegisterModalProps {
  children: React.ReactNode;
}

export function RegisterModal({ children }: RegisterModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [countryOpen, setCountryOpen] = useState(false);
  const [phoneCodeOpen, setPhoneCodeOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    countryFlag: "",
    companyName: "",
    designation: "",
    productType: "",
    phoneCode: "+1",
    phoneFlag: "us",
    phoneNumber: "",
    email: "",
    telephone: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      submitFormData.append("country", formData.country);
      submitFormData.append("company", formData.companyName);
      submitFormData.append("designation", formData.designation);
      submitFormData.append("clientType", formData.productType);
      submitFormData.append("phoneCode", formData.phoneCode);
      submitFormData.append("phoneNumber", formData.phoneNumber);
      if (formData.telephone) {
        submitFormData.append("telephone", formData.telephone);
      }
      if (selectedFile) {
        submitFormData.append("file", selectedFile);
      }

      const response = await fetch("/api/register", {
        method: "POST",
        body: submitFormData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setIsSuccess(true);
      setIsSubmitting(false); // Reset immediately after success

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setOpen(false);
        setFormData({
          name: "",
          country: "",
          countryFlag: "",
          companyName: "",
          designation: "",
          productType: "",
          phoneCode: "+1",
          phoneFlag: "us",
          phoneNumber: "",
          email: "",
          telephone: "",
        });
        setFileName("");
        setSelectedFile(null);
        setError("");
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Failed to register. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        setOpen(newOpen);
        // Reset form state when modal is closed
        if (!newOpen) {
          setIsSubmitting(false);
          setError("");
          setIsSuccess(false);
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a4a9e]/98 via-[#05306b]/98 to-[#041f3f]/98 backdrop-blur-xl border-2 border-white/20 text-white p-4 sm:p-6 md:p-8 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-[#0a4a9e] [&::-webkit-scrollbar-thumb]:to-[#05306b] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white/20 hover:[&::-webkit-scrollbar-thumb]:from-[#0d5bbf] hover:[&::-webkit-scrollbar-thumb]:to-[#0a4a9e]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-white text-center">
            Register Now
          </DialogTitle>
          <DialogDescription className="text-gray-200 text-base text-center">
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
              We&apos;ll contact you shortly to complete your verification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mt-4">
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
                className="bg-white border-gray-300 text-black placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country" className="text-white font-semibold">
                Country *
              </Label>
              <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={countryOpen}
                    className="w-full justify-start bg-white border-gray-300 text-black hover:bg-gray-50 hover:text-black"
                  >
                    <ChevronsUpDown className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    {formData.country ? (
                      <span className="flex items-center gap-2">
                        <CountryFlag countryCode={formData.countryFlag} />
                        <span>{formData.country}</span>
                      </span>
                    ) : (
                      "Select your country"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="p-0"
                  style={{ width: "var(--radix-popover-trigger-width)" }}
                  align="start"
                  onWheel={(e) => e.stopPropagation()}
                >
                  <Command>
                    <CommandInput
                      placeholder="Search country..."
                      className="h-9"
                    />
                    <CommandList
                      className="max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
                      style={
                        {
                          overscrollBehavior: "contain",
                          pointerEvents: "auto",
                        } as React.CSSProperties
                      }
                    >
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            key={country.name}
                            value={country.name}
                            onSelect={(currentValue: string) => {
                              const selected = countries.find(
                                (c) =>
                                  c.name.toLowerCase() ===
                                  currentValue.toLowerCase(),
                              );
                              setFormData({
                                ...formData,
                                country: selected ? selected.name : "",
                                countryFlag: selected ? selected.flag : "",
                              });
                              setCountryOpen(false);
                            }}
                          >
                            <span className="flex items-center gap-2 flex-1">
                              <CountryFlag countryCode={country.flag} />
                              <span>{country.name}</span>
                            </span>
                            <Check
                              className={cn(
                                "ml-auto h-4 w-4",
                                formData.country === country.name
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
                className="bg-white border-gray-300 text-black placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
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
                className="bg-white border-gray-300 text-black placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g., CEO, Manager, Director"
              />
            </div>

            {/* Client Type */}
            <div className="space-y-2">
              <Label htmlFor="productType" className="text-white font-semibold">
                Client Type *
              </Label>
              <Select
                required
                value={formData.productType}
                onValueChange={(value) =>
                  setFormData({ ...formData, productType: value })
                }
              >
                <SelectTrigger className="w-full bg-white border-gray-300 text-black focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="I am an exporter" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  <SelectItem
                    value="exporter"
                    className="text-black hover:bg-gray-100 focus:bg-gray-100"
                  >
                    I am an exporter
                  </SelectItem>
                  <SelectItem
                    value="importer"
                    className="text-black hover:bg-gray-100 focus:bg-gray-100"
                  >
                    I am an importer
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
                <Popover open={phoneCodeOpen} onOpenChange={setPhoneCodeOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={phoneCodeOpen}
                      className="w-[140px] sm:w-[160px] justify-start bg-white border-gray-300 text-black hover:bg-gray-50 hover:text-black"
                    >
                      <ChevronsUpDown className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                      <span className="flex items-center gap-1.5">
                        <CountryFlag countryCode={formData.phoneFlag} />
                        <span>{formData.phoneCode}</span>
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="p-0"
                    style={{ width: "var(--radix-popover-trigger-width)" }}
                    align="start"
                    onWheel={(e) => e.stopPropagation()}
                  >
                    <Command>
                      <CommandInput
                        placeholder="Search country code..."
                        className="h-9"
                      />
                      <CommandList
                        className="max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
                        style={
                          {
                            overscrollBehavior: "contain",
                            pointerEvents: "auto",
                          } as React.CSSProperties
                        }
                      >
                        <CommandEmpty>No country code found.</CommandEmpty>
                        <CommandGroup>
                          {phoneCodes.map((item) => (
                            <CommandItem
                              key={`${item.code}-${item.country}`}
                              value={`${item.code} ${item.country}`}
                              onSelect={() => {
                                setFormData({
                                  ...formData,
                                  phoneCode: item.code,
                                  phoneFlag: item.flag,
                                });
                                setPhoneCodeOpen(false);
                              }}
                            >
                              <span className="flex items-center gap-2 flex-1 text-sm">
                                <CountryFlag countryCode={item.flag} />
                                <span className="font-medium">{item.code}</span>
                                <span className="text-gray-500">
                                  {item.country}
                                </span>
                              </span>
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  formData.phoneCode === item.code
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <Input
                  id="phone"
                  required
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="flex-1 bg-white border-gray-300 text-black placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
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
                className="bg-white border-gray-300 text-black placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Telephone Number (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-white font-semibold">
                Telephone Number (Optional)
              </Label>
              <Input
                id="telephone"
                type="tel"
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                placeholder="Enter phone number"
                className="w-full bg-white border-gray-300 text-black placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
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

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-center">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}

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
