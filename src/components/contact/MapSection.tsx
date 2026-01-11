"use client";

import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Map Header */}
        <div className="text-center mb-12">
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

        {/* Map Container */}
        <div className="bg-gray-100 rounded-xl h-[500px] relative overflow-hidden border border-gray-200 shadow-lg">
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-gray-400"></div>
              ))}
            </div>
          </div>
          
          {/* Map Placeholder Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
            <div className="w-20 h-20 bg-[#0a4a9e] rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Map Integration Coming Soon
            </h3>
            <p className="text-gray-600 text-center max-w-md mb-8">
              Google Maps / Mapbox integration will be displayed here
            </p>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Our Location:</p>
              <p className="text-gray-700">
                House# 3, Road# 19, Sector# 11<br />
                Uttara, Dhaka-1230<br />
                Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
