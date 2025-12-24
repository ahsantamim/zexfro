"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  id: string;
  slug: string;
  name: string;
  image?: {
    image_url: string;
    alt_text: string | null;
  } | null;
}

interface ProductDrawerProps {
  type: "import" | "export";
  children: React.ReactNode;
}

export function ProductDrawer({ type, children }: ProductDrawerProps) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const title = type === "import" ? "Import Products" : "Export Products";
  const description =
    type === "import"
      ? "Explore our wide range of import product categories"
      : "Discover our export product categories";

  // Fetch categories when drawer opens
  useEffect(() => {
    if (open && categories.length === 0) {
      const fetchCategories = async () => {
        try {
          setLoading(true);
          const response = await fetch(`/api/categories?type=${type}`);
          const data = await response.json();

          if (data.success) {
            setCategories(data.data);
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCategories();
    }
  }, [open, type, categories.length]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="bg-gradient-to-br from-[#0a4a9e]/98 via-[#05306b]/98 to-[#041f3f]/98 backdrop-blur-xl border-t-2 border-white/20 shadow-2xl">
        <div className="mx-auto w-full max-w-6xl">
          <DrawerHeader className="relative">
            <DrawerTitle className="text-4xl md:text-5xl font-bold text-white text-center">
              {title}
            </DrawerTitle>
            <DrawerDescription className="text-gray-200 text-center text-base md:text-lg mt-2">
              {description}
            </DrawerDescription>
            <DrawerClose className="absolute right-4 top-4 rounded-full bg-white/10 hover:bg-white/20 p-2 transition-all duration-200">
              <X className="h-5 w-5 text-white" />
              <span className="sr-only">Close</span>
            </DrawerClose>
          </DrawerHeader>

          <div className="p-6 md:p-8">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-12 h-12 animate-spin text-white" />
              </div>
            ) : categories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white text-lg">No categories available</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                {categories.map((category) => {
                  const imageUrl =
                    category.image?.image_url ||
                    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop";

                  return (
                    <Link
                      key={category.id}
                      href={`/products/categories/${category.slug}`}
                      onClick={() => setOpen(false)}
                      className="group relative overflow-hidden rounded-none bg-white/10 backdrop-blur-md border border-white/20 h-32 hover:border-white/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl"
                    >
                      {/* Background Image */}
                      <Image
                        src={imageUrl}
                        alt={category.image?.alt_text || category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300 z-10" />

                      {/* Content */}
                      <div className="relative h-full flex items-center justify-center p-3 z-20">
                        <h3 className="text-white font-bold text-lg md:text-2xl leading-tight drop-shadow-lg text-center">
                          {category.name}
                        </h3>
                      </div>

                      {/* Hover Arrow Button */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-30">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-[radial-gradient(#7BE0A5_40%,transparent_60%)] animate-pulse" />
                          <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-1.5 shadow-lg group-hover:shadow-green-500/50">
                            <ArrowRight className="w-4 h-4 text-white group-hover:-rotate-45 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Glossy overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <DrawerFooter className="pt-4 pb-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => setOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-base md:text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  window.location.href = `/products?type=${type}`;
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-base md:text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
