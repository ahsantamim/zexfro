import { ArrowRight } from "lucide-react";

export function ArrowButton() {
  return (
    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#0A4D96]">
      {/* Inner circle with stroke */}
      <div className="w-8 h-8 md:w-11 md:h-11 lg:w-14 lg:h-14 rounded-full border-2 border-white/80 flex items-center justify-center transition-all duration-300 group-hover:border-white">
        {/* Arrow icon */}
        <ArrowRight
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white transition-transform duration-300 group-hover:rotate-[-45deg]"
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
}
