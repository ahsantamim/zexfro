import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Fashion",
    subtitle: "Clothing & accessories",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    href: "/products/fashion",
  },
  {
    id: 2,
    title: "Electronics",
    subtitle: "Latest tech & gadgets",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
    href: "/products/electronics",
  },
  {
    id: 3,
    title: "Home & Living",
    subtitle: "Furniture & decor",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    href: "/products/home",
  },
  {
    id: 4,
    title: "Food & Beverage",
    subtitle: "Quality ingredients",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    href: "/products/food",
  },
  {
    id: 5,
    title: "Industrial Equipment",
    subtitle: "Machinery & tools",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    href: "/products/industrial",
  },
  {
    id: 6,
    title: "Healthcare",
    subtitle: "Medical supplies",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
    href: "/products/healthcare",
  },
  {
    id: 7,
    title: "Automotive",
    subtitle: "Parts & accessories",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    href: "/products/automotive",
  },
  {
    id: 8,
    title: "Agriculture",
    subtitle: "Farming products",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    href: "/products/agriculture",
  },
];

export function ProductCategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Angled Grid Pattern - Left Side */}
      <div className="absolute -left-32 top-0 bottom-0 w-96 pointer-events-none transform -skew-y-12">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-left"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#0A4D96"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9fafb" stopOpacity="1" />
              <stop offset="30%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f9fafb" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-left)"
            opacity="0.3"
          />
          <rect width="100%" height="100%" fill="url(#fade-left)" />
        </svg>
      </div>

      {/* Decorative Angled Grid Pattern - Right Side */}
      <div className="absolute -right-32 top-0 bottom-0 w-96 pointer-events-none transform skew-y-12">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-right"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#0A4D96"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9fafb" stopOpacity="1" />
              <stop offset="30%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#f9fafb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f9fafb" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-right)"
            opacity="0.3"
          />
          <rect width="100%" height="100%" fill="url(#fade-right)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our approved categories for secure and compliant trade
          </p>
        </div>

        {/* Grid - 4 columns desktop, 4 columns tablet, 8 total cards - Rectangle aspect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <Link
                href={category.href}
                className="relative overflow-hidden rounded-none aspect-[4/3] block transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col p-6">
                  {/* Title & Subtitle - Bottom Left */}
                  <div className="flex-1" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-200">{category.subtitle}</p>
                  </div>
                </div>
              </Link>

              {/* Arrow Button - Outside Link, positioned at bottom-right */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 flex items-center cursor-pointer justify-center bg-white/90  rounded-full   z-10">
                <Image
                  src="/product/button arrow.svg"
                  alt="View category"
                  width={68}
                  height={68}
                  className=" group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
