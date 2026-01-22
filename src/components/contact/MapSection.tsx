"use client";

import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        {/* Map Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#0a4a9e] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find Us Here
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Visit our office or locate us on the map below
          </p>
        </div>
      </div>

      {/* Map Container - Full Width */}
      <div className="w-full">
        <div className="h-[600px] relative overflow-hidden border-y border-gray-200 shadow-lg">
          {/* Google Maps Iframe */}
          <iframe
            key="google-maps-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3110171640137!2d90.39908767593036!3d23.87858758384199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d4e76bda3f%3A0xe046f68b43abf029!2sZexfro%20international%20Ltd.!5e0!3m2!1sen!2sbd!4v1769057720476!5m2!1sen!2sbd"
            className="w-full h-full absolute inset-0"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zexfro International Ltd Location Map"
          />
        </div>
      </div>

      {/* Location Card - Moved outside map container */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#0a4a9e] rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Our Location:
              </p>
              <p className="text-gray-700 text-sm">
                House# 3, Road# 19, Sector# 11
                <br />
                Uttara, Dhaka-1230
                <br />
                Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
