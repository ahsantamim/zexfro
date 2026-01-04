"use client";

import { ReactNode } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

interface ContentLayoutProps {
  children: ReactNode;
  pageTitle: string;
  pageDescription: string;
  heroImage?: string;
}

export function ContentLayout({
  children,
  pageTitle,
  pageDescription,
  heroImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
}: ContentLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Header with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a4a9e]/95 via-[#05306b]/90 to-[#041f3f]/85" />
        
        {/* Decorative Geometric Shapes */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute right-10 top-10 h-32 w-32 text-white"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg
            className="absolute left-20 bottom-20 h-24 w-24 text-white"
            viewBox="0 0 100 100"
          >
            <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg
            className="absolute right-1/3 bottom-10 h-28 w-28 text-white"
            viewBox="0 0 100 100"
          >
            <path
              d="M30,10 L70,10 L90,50 L70,90 L30,90 L10,50 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in">
              {pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-50">
        {children}
      </main>
    </div>
  );
}

interface ContentSectionProps {
  children: ReactNode;
  bgColor?: "white" | "gray" | "blue";
  noPadding?: boolean;
}

export function ContentSection({ 
  children, 
  bgColor = "white",
  noPadding = false 
}: ContentSectionProps) {
  const bgColors = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-50",
  };

  return (
    <section className={`${bgColors[bgColor]} ${noPadding ? "" : "py-12 sm:py-16 md:py-20"}`}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  icon,
  centered = false 
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
      {icon && (
        <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
          <div className="w-14 h-14 bg-[#0a4a9e] rounded-lg flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: "blue" | "green" | "purple" | "orange";
}

export function FeatureCard({ icon, title, description, color = "blue" }: FeatureCardProps) {
  const colors = {
    blue: {
      icon: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    green: {
      icon: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    purple: {
      icon: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    orange: {
      icon: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
  };

  return (
    <div className={`p-6 ${colors[color].bg} border-2 ${colors[color].border} rounded-lg hover:shadow-lg transition-all duration-300`}>
      <div className={`w-12 h-12 ${colors[color].bg} rounded-lg flex items-center justify-center mb-4`}>
        <div className={colors[color].icon}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

interface CTABoxProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CTABox({ title, description, buttonText, buttonLink }: CTABoxProps) {
  return (
    <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 md:p-12 text-white text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <Link
        href={buttonLink}
        className="inline-block bg-white text-[#0a4a9e] font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        {buttonText}
      </Link>
    </div>
  );
}

