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

// Countries with flags
const countries = [
  { name: "Afghanistan", flag: "🇦🇫" },
  { name: "Albania", flag: "🇦🇱" },
  { name: "Algeria", flag: "🇩🇿" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Bulgaria", flag: "🇧🇬" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "China", flag: "🇨🇳" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Croatia", flag: "🇭🇷" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "France", flag: "🇫🇷" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Hong Kong", flag: "🇭🇰" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "Iceland", flag: "🇮🇸" },
  { name: "India", flag: "🇮🇳" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Iran", flag: "🇮🇷" },
  { name: "Iraq", flag: "🇮🇶" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Israel", flag: "🇮🇱" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Jordan", flag: "🇯🇴" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lebanon", flag: "🇱🇧" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Norway", flag: "🇳🇴" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Serbia", flag: "🇷🇸" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Taiwan", flag: "🇹🇼" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Vietnam", flag: "🇻🇳" },
];

// Phone codes with flags
const phoneCodes = [
  { country: "United States", code: "+1", flag: "🇺🇸" },
  { country: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { country: "Canada", code: "+1", flag: "🇨🇦" },
  { country: "Australia", code: "+61", flag: "🇦🇺" },
  { country: "Germany", code: "+49", flag: "🇩🇪" },
  { country: "France", code: "+33", flag: "🇫🇷" },
  { country: "Italy", code: "+39", flag: "🇮🇹" },
  { country: "Spain", code: "+34", flag: "🇪🇸" },
  { country: "China", code: "+86", flag: "🇨🇳" },
  { country: "Japan", code: "+81", flag: "🇯🇵" },
  { country: "India", code: "+91", flag: "🇮🇳" },
  { country: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { country: "Pakistan", code: "+92", flag: "🇵🇰" },
  { country: "Brazil", code: "+55", flag: "🇧🇷" },
  { country: "Mexico", code: "+52", flag: "🇲🇽" },
  { country: "Russia", code: "+7", flag: "🇷🇺" },
  { country: "South Korea", code: "+82", flag: "🇰🇷" },
  { country: "Indonesia", code: "+62", flag: "🇮🇩" },
  { country: "Turkey", code: "+90", flag: "🇹🇷" },
  { country: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { country: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { country: "Netherlands", code: "+31", flag: "🇳🇱" },
  { country: "Switzerland", code: "+41", flag: "🇨🇭" },
  { country: "Singapore", code: "+65", flag: "🇸🇬" },
  { country: "Malaysia", code: "+60", flag: "🇲🇾" },
  { country: "Thailand", code: "+66", flag: "🇹🇭" },
  { country: "Vietnam", code: "+84", flag: "🇻🇳" },
  { country: "Philippines", code: "+63", flag: "🇵🇭" },
  { country: "Egypt", code: "+20", flag: "🇪🇬" },
  { country: "South Africa", code: "+27", flag: "🇿🇦" },
];

interface RegisterModalProps {
  children: React.ReactNode;
}

export function RegisterModal({ children }: RegisterModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string>("");
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
    phoneFlag: "🇺🇸",
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
        countryFlag: "",
        companyName: "",
        designation: "",
        productType: "",
        phoneCode: "+1",
        phoneFlag: "🇺🇸",
        phoneNumber: "",
        email: "",
      });
      setFileName("");
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                        <span className="text-xl" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>{formData.countryFlag}</span>
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
                              const selected = countries.find(c => c.name.toLowerCase() === currentValue.toLowerCase());
                              setFormData({
                                ...formData,
                                country: selected ? selected.name : "",
                                countryFlag: selected ? selected.flag : "",
                              });
                              setCountryOpen(false);
                            }}
                          >
                            <span className="flex items-center gap-2 flex-1">
                              <span className="text-xl" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>{country.flag}</span>
                              <span>{country.name}</span>
                            </span>
                            <Check
                              className={cn(
                                "ml-auto h-4 w-4",
                                formData.country === country.name
                                  ? "opacity-100"
                                  : "opacity-0"
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
                        <span className="text-lg" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>{formData.phoneFlag}</span>
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
                                <span className="text-lg" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>{item.flag}</span>
                                <span className="font-medium">{item.code}</span>
                                <span className="text-gray-500">{item.country}</span>
                              </span>
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  formData.phoneCode === item.code
                                    ? "opacity-100"
                                    : "opacity-0"
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
