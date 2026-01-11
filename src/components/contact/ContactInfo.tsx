"use client";

import { MapPin, Mail, Phone, Clock, Globe, Building2 } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Building2,
      title: "Company Name",
      content: "Zexfro International Limited",
      bgColor: "bg-[#0a4a9e]",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "House# 3, Road# 19, Sector# 11, Uttara, Dhaka-1230, Bangladesh",
      bgColor: "bg-[#0a4a9e]",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@zexfro.com",
      link: "mailto:info@zexfro.com",
      bgColor: "bg-[#0a4a9e]",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+880 1234-567890",
      link: "tel:+8801234567890",
      bgColor: "bg-[#0a4a9e]",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Saturday - Thursday: 9:00 AM - 6:00 PM",
      bgColor: "bg-[#0a4a9e]",
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.zexfro.com",
      link: "https://www.zexfro.com",
      bgColor: "bg-[#0a4a9e]",
    },
  ];

  return (
    <div className="h-full">
      <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-200">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            Have a question or need assistance? We're here to help.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            const content = detail.link ? (
              <a
                href={detail.link}
                className="text-gray-700 hover:text-[#0a4a9e] transition-colors break-words"
              >
                {detail.content}
              </a>
            ) : (
              <p className="text-gray-700 break-words">{detail.content}</p>
            );

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <div className={`${detail.bgColor} rounded-lg p-3 flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1">{detail.title}</h4>
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
