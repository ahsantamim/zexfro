"use client";

import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Package } from "lucide-react";

const importProducts = [
  {
    id: 1,
    name: "Agriculture Equipment",
    subtitle: "Farming machinery & tools",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    description:
      "High-quality farming equipment including tractors, harvesters, and irrigation systems.",
  },
  {
    id: 2,
    name: "Garment Products",
    subtitle: "Clothing & textiles",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    description:
      "Premium quality clothing and textile products from leading manufacturers worldwide.",
  },
  {
    id: 3,
    name: "Electronics",
    subtitle: "Latest tech & gadgets",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
    description:
      "Cutting-edge electronics including smartphones, laptops, and smart home devices.",
  },
  {
    id: 4,
    name: "Medical Equipment",
    subtitle: "Healthcare devices",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    description:
      "Advanced medical equipment and diagnostic tools for healthcare facilities.",
  },
  {
    id: 5,
    name: "Veterinary Medicine",
    subtitle: "Animal healthcare",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80",
    description:
      "Comprehensive veterinary medicines and animal healthcare products.",
  },
  {
    id: 6,
    name: "Spices",
    subtitle: "Quality seasonings",
    image:
      "https://images.unsplash.com/photo-1596040033229-a0b3b83c9dd3?w=800&q=80",
    description:
      "Premium spices and seasonings sourced from the finest regions globally.",
  },
  {
    id: 7,
    name: "Cosmetics",
    subtitle: "Beauty products",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    description:
      "High-end cosmetics and beauty products from international brands.",
  },
  {
    id: 8,
    name: "Consumer Products",
    subtitle: "Daily essentials",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description:
      "Wide range of consumer goods and daily essential products.",
  },
  {
    id: 9,
    name: "Sport Products",
    subtitle: "Athletic gear",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    description:
      "Professional sports equipment and athletic gear for all sports.",
  },
  {
    id: 10,
    name: "Industrial Machinery",
    subtitle: "Manufacturing equipment",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    description:
      "Heavy-duty industrial machinery for manufacturing and production facilities.",
  },
  {
    id: 11,
    name: "Pharmaceutical Products",
    subtitle: "Medicines & healthcare",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    description:
      "Certified pharmaceutical products and medicines from international suppliers.",
  },
  {
    id: 12,
    name: "Automotive Parts",
    subtitle: "Vehicle components",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    description:
      "Genuine automotive parts and accessories for various vehicle brands.",
  },
  {
    id: 13,
    name: "Construction Materials",
    subtitle: "Building supplies",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    description:
      "Quality construction materials including cement, steel, and building equipment.",
  },
  {
    id: 14,
    name: "Chemical Products",
    subtitle: "Industrial chemicals",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description:
      "Industrial and laboratory chemicals meeting international safety standards.",
  },
  {
    id: 15,
    name: "Food & Beverages",
    subtitle: "Imported food items",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    description:
      "Premium imported food products and beverages from around the world.",
  },
  {
    id: 16,
    name: "Furniture & Fixtures",
    subtitle: "Home & office furniture",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    description:
      "Elegant furniture and fixtures for residential and commercial spaces.",
  },
  {
    id: 17,
    name: "Toys & Games",
    subtitle: "Children's products",
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80",
    description:
      "Safe and entertaining toys and games for children of all ages.",
  },
  {
    id: 18,
    name: "Office Supplies",
    subtitle: "Business essentials",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    description:
      "Complete range of office supplies and stationery for businesses.",
  },
  {
    id: 19,
    name: "Renewable Energy Equipment",
    subtitle: "Solar & wind power",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    description:
      "Sustainable energy solutions including solar panels and wind turbines.",
  },
  {
    id: 20,
    name: "Others",
    subtitle: "Various products",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    description:
      "Diverse range of specialized products for various industries.",
  },
];

const exportProducts = [
  {
    id: 1,
    name: "Readymade Garments",
    subtitle: "Fashion & apparel",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    description:
      "High-quality readymade garments and fashion apparel for global markets.",
  },
  {
    id: 2,
    name: "Leather Products",
    subtitle: "Quality leather goods",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    description:
      "Premium leather products including bags, shoes, and accessories.",
  },
  {
    id: 3,
    name: "Jute Products",
    subtitle: "Eco-friendly items",
    image:
      "https://images.unsplash.com/photo-1625887291775-b45b0bcac0fa?w=800&q=80",
    description:
      "Sustainable jute products including bags, rugs, and handicrafts.",
  },
  {
    id: 4,
    name: "Frozen Food",
    subtitle: "Preserved goods",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    description:
      "Quality frozen food products including seafood, vegetables, and prepared meals.",
  },
  {
    id: 5,
    name: "Agricultural Products",
    subtitle: "Farm produce",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    description:
      "Fresh agricultural products and farm produce for international markets.",
  },
  {
    id: 6,
    name: "Cottage Industry Products",
    subtitle: "Handcrafted items",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    description:
      "Authentic handcrafted items from traditional cottage industries.",
  },
  {
    id: 7,
    name: "Tea & Coffee",
    subtitle: "Premium beverages",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    description:
      "Export-quality tea and coffee sourced from the finest plantations.",
  },
  {
    id: 8,
    name: "Seafood Products",
    subtitle: "Fresh & frozen seafood",
    image:
      "https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=800&q=80",
    description:
      "Premium quality seafood products including fish, shrimp, and crab.",
  },
  {
    id: 9,
    name: "Handicrafts",
    subtitle: "Traditional art & crafts",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    description:
      "Beautiful handicrafts and decorative items showcasing traditional artistry.",
  },
  {
    id: 10,
    name: "Textiles & Fabrics",
    subtitle: "Quality fabrics",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea672c89?w=800&q=80",
    description:
      "Wide variety of textiles and fabrics for garment and home use.",
  },
  {
    id: 11,
    name: "Footwear",
    subtitle: "Shoes & sandals",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    description:
      "Stylish and comfortable footwear for men, women, and children.",
  },
  {
    id: 12,
    name: "Ceramic Products",
    subtitle: "Pottery & ceramics",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e32a9c?w=800&q=80",
    description:
      "Beautiful ceramic products including tableware and decorative items.",
  },
  {
    id: 13,
    name: "Processed Foods",
    subtitle: "Packaged food items",
    image:
      "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=800&q=80",
    description:
      "Processed and packaged food products meeting international standards.",
  },
  {
    id: 14,
    name: "Spices & Herbs",
    subtitle: "Aromatic spices",
    image:
      "https://images.unsplash.com/photo-1599909533063-28d4f3e6c46a?w=800&q=80",
    description:
      "Aromatic spices and herbs sourced from premium farms worldwide.",
  },
  {
    id: 15,
    name: "Home Textiles",
    subtitle: "Linens & towels",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    description:
      "Premium quality home textiles including bed linens, towels, and curtains.",
  },
  {
    id: 16,
    name: "Bamboo Products",
    subtitle: "Eco-friendly bamboo",
    image:
      "https://images.unsplash.com/photo-1601048869889-4cc17f7a9c2d?w=800&q=80",
    description:
      "Sustainable bamboo products for various applications.",
  },
  {
    id: 17,
    name: "Jewelry & Accessories",
    subtitle: "Fashion jewelry",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    description:
      "Elegant jewelry and fashion accessories for international markets.",
  },
  {
    id: 18,
    name: "Organic Products",
    subtitle: "Certified organic",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
    description:
      "Certified organic products including food, textiles, and cosmetics.",
  },
  {
    id: 19,
    name: "Wood Products",
    subtitle: "Wooden furniture & crafts",
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
    description:
      "Quality wood products including furniture and decorative items.",
  },
  {
    id: 20,
    name: "Canned & Preserved Foods",
    subtitle: "Long shelf-life products",
    image:
      "https://images.unsplash.com/photo-1587048181999-5cfa1e4229d8?w=800&q=80",
    description:
      "Canned and preserved food products with extended shelf life.",
  },
];

interface ProductsGridProps {
  activeTab: "import" | "export";
  searchQuery: string;
  selectedCategory: string;
}

export function ProductsGrid({
  activeTab,
  searchQuery,
  selectedCategory,
}: ProductsGridProps) {
  const allProducts = activeTab === "import" ? importProducts : exportProducts;

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-600">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
      key={`${activeTab}-${selectedCategory}-${searchQuery}`}
    >
      {filteredProducts.map((product, index) => (
        <div
          key={product.id}
          className="group relative overflow-hidden rounded-none aspect-[4/3] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: "backwards",
          }}
        >
          {/* Background Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col p-6">
            <div className="flex-1" />
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-200 mb-2">
                  {product.subtitle}
                </p>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <button className="text-white font-semibold text-sm hover:text-blue-300 transition-colors">
                  Learn More
                </button>
                <ArrowButton />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
