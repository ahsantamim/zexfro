"use client";

import Image from "next/image";

export function ZexfroLogo() {
  return (
    <div className="relative flex items-center select-none -space-x-2">
      {/* Globe Icon */}
      <div className="w-16 h-16 md:w-20 md:h-20 relative -rotate-12">
        <Image
          src="/globe.svg"
          alt="Zexfro Globe"
          fill
          className="object-contain"
          style={{
            filter:
              "invert(21%) sepia(89%) saturate(1831%) hue-rotate(196deg) brightness(93%) contrast(97%)",
          }}
        />
      </div>

      {/* Title */}
      <h1 className="text-base md:text-lg font-extrabold tracking-wide text-[#0A4D96]">
        ZEXFRO
      </h1>
    </div>
  );
}
