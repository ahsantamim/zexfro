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
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>

      {/* Title */}
      <h1 className="text-base md:text-lg font-extrabold tracking-wide text-white">
        ZEXFRO INTERNATIONAL
      </h1>
    </div>
  );
}
