"use client";

import Link from "next/link";

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
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      {createButtonText && createLink && (
        <Link
          href={createLink}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {createButtonText}
        </Link>
      )}
    </div>
  );
}
