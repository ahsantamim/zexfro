"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PageActionsProps {
  title: string;
  description: string;
  createButtonText?: string;
  createLink?: string;
}

export function PageActions({
  title,
  description,
  createButtonText,
  createLink,
}: PageActionsProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0a4a9e] to-[#05306b] bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">{description}</p>
        </div>
        {createButtonText && createLink && (
          <Link
            href={createLink}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Plus className="w-5 h-5" strokeWidth={2.5} />
            {createButtonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>
      <Separator />
    </div>
  );
}
