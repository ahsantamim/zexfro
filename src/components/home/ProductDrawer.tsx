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
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const importProducts = [
  { id: 1, name: "Agriculture Equipment", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop" },
  { id: 2, name: "Garment Products", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop" },
  { id: 3, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop" },
  { id: 4, name: "Medical Equipment", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop" },
  { id: 5, name: "Veterinary Medicine", image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop" },
  { id: 6, name: "Spices", image: "https://images.unsplash.com/photo-1596040033229-a0b3b83c9dd3?w=400&h=300&fit=crop" },
  { id: 7, name: "Cosmetics", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop" },
  { id: 8, name: "Consumer Products", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" },
  { id: 9, name: "Sport Products", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop" },
  { id: 10, name: "Others", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
];

const exportProducts = [
  { id: 1, name: "Readymade Garments", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop" },
  { id: 2, name: "Leather Products", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop" },
  { id: 3, name: "Jute Products", image: "https://images.unsplash.com/photo-1625887291775-b45b0bcac0fa?w=400&h=300&fit=crop" },
  { id: 4, name: "Frozen Food", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop" },
  { id: 5, name: "Agricultural Products", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop" },
  { id: 6, name: "Cottage Industry Products", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop" },
];

interface ProductDrawerProps {
  type: "import" | "export";
  children: React.ReactNode;
}

export function ProductDrawer({ type, children }: ProductDrawerProps) {
  const [open, setOpen] = useState(false);
  const products = type === "import" ? importProducts : exportProducts;
  const title = type === "import" ? "Import Products" : "Export Products";
  const description =
    type === "import"
      ? "Explore our wide range of import product categories"
      : "Discover our export product categories";

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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-none bg-white/10 backdrop-blur-md border border-white/20 h-32 hover:border-white/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center p-3">
                    <h3 className="text-white font-bold text-lg md:text-2xl leading-tight drop-shadow-lg text-center">
                      {product.name}
                    </h3>
                  </div>

                  {/* Hover Arrow Button */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(#7BE0A5_40%,transparent_60%)] animate-pulse" />
                      <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-1.5 shadow-lg group-hover:shadow-green-500/50">
                        <ArrowRight className="w-4 h-4 text-white group-hover:-rotate-45 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
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

