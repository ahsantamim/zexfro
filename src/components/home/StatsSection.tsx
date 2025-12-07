"use client";

import React from "react";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Stat = ({
  num,
  suffix,
  decimals = 0,
  subheading,
  lightMode = false,
}: {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
  lightMode?: boolean;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-full sm:w-72 flex-col items-center py-2 sm:py-3">
      <p
        className={`text-center font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter ${
          lightMode ? "text-white" : "text-black"
        }`}
      >
        <span ref={ref}></span>
        {suffix}
      </p>
      <p
        className={`max-w-[12rem] text-center text-xs font-medium uppercase tracking-wider ${
          lightMode ? "text-white/80" : "text-neutral-600"
        }`}
      >
        {subheading}
      </p>
    </div>
  );
};

export function StatsSection() {
  return (
    <section className="relative border-y border-[#0A4D96]/20 py-8 sm:py-10 bg-[#0A4D96]">
      {/* Enhanced background shapes */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg
          className="absolute right-1/4 top-0 h-64 w-64 text-white"
          viewBox="0 0 100 100"
        >
          <path
            d="M30,10 L70,10 L90,50 L70,90 L30,90 L10,50 Z"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
        </svg>
        <svg
          className="absolute left-1/3 bottom-0 h-48 w-48 text-white/80"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
            strokeDasharray="60,10"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 sm:mb-4 text-center text-2xl font-semibold tracking-widest text-white">
          Trusted by industry leaders with
          <span className="inline ml-1 text-white">proven results</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          <Stat
            num={92}
            suffix="%"
            subheading="Client satisfaction rate"
            lightMode={true}
          />
          <Stat
            num={25.5}
            decimals={1}
            suffix="K+"
            subheading="Projects completed"
            lightMode={true}
          />
          <Stat
            num={150}
            suffix="M+"
            subheading="Revenue generated"
            lightMode={true}
          />
          <Stat
            num={12}
            suffix="+"
            subheading="Years of experience"
            lightMode={true}
          />
        </div>
      </div>
    </section>
  );
}
