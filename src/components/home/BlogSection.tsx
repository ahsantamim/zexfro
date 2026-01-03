"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useTranslations } from "next-intl";

export function BlogSection() {
  const t = useTranslations("blog");
  const blogPosts = [
    {
      id: 1,
      title: "Understanding EU Trade Regulations for 2024",
      excerpt:
        "Navigate the latest compliance requirements and documentation standards for seamless cross-border trade.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      author: "Sarah Johnson",
      date: "Dec 5, 2024",
      category: "Compliance",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "5 Strategies to Optimize Your Supply Chain",
      excerpt:
        "Discover proven methods to reduce costs, improve efficiency, and enhance reliability in global logistics.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      author: "Michael Chen",
      date: "Dec 3, 2024",
      category: "Logistics",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Digital Transformation in International Trade",
      excerpt:
        "How automation and AI are revolutionizing customs clearance, documentation, and freight management.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      author: "Emma Davis",
      date: "Nov 28, 2024",
      category: "Technology",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Building Trust with Verified Trade Partners",
      excerpt:
        "Essential tips for vetting suppliers, establishing secure payment terms, and ensuring product quality.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      author: "David Martinez",
      date: "Nov 25, 2024",
      category: "Business",
      readTime: "4 min read",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white border border-gray-200 hover:border-[#0A4D96] transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0A4D96] text-white text-xs font-semibold px-3 py-1 rounded-none">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0A4D96] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-[#0A4D96] text-sm font-semibold group-hover:gap-2 transition-all"
                  >
                    {t("read")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t("viewAll")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
