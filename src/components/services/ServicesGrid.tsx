import { 
  Ship, 
  Package, 
  ShieldCheck, 
  FileCheck, 
  TrendingUp, 
  Globe, 
  Warehouse, 
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Truck
} from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      icon: Ship,
      title: "International Shipping",
      description: "Comprehensive sea, air, and land freight services to move your cargo efficiently across borders with real-time tracking and insurance coverage."
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description: "Expert customs documentation and clearance services ensuring compliance with international regulations and smooth border crossings for your shipments."
    },
    {
      icon: ShieldCheck,
      title: "Trade Compliance",
      description: "Navigate complex international trade regulations with our compliance services, including licensing, permits, and regulatory documentation support."
    },
    {
      icon: Package,
      title: "Export Documentation",
      description: "Complete export documentation services including commercial invoices, certificates of origin, packing lists, and all required export paperwork."
    },
    {
      icon: Warehouse,
      title: "Warehousing Solutions",
      description: "Secure storage facilities at strategic locations worldwide with inventory management, cross-docking, and distribution services for your goods."
    },
    {
      icon: Globe,
      title: "Market Research",
      description: "In-depth market analysis and trade intelligence to help you identify opportunities, understand regulations, and expand into new international markets."
    },
    {
      icon: DollarSign,
      title: "Trade Finance",
      description: "Flexible financing solutions including letters of credit, trade credit insurance, and working capital facilities to support your import-export operations."
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain consulting to streamline operations, reduce costs, and improve efficiency across your international trade network."
    },
    {
      icon: Users,
      title: "Supplier Verification",
      description: "Thorough due diligence and verification of international suppliers to ensure reliability, quality standards, and compliance with ethical practices."
    },
    {
      icon: Clock,
      title: "Quality Inspection",
      description: "Pre-shipment and on-site quality control inspections to ensure products meet specifications and international quality standards before dispatch."
    },
    {
      icon: BarChart3,
      title: "Trade Analytics",
      description: "Advanced data analytics and reporting tools to track performance, identify trends, and make informed decisions about your international trade operations."
    },
    {
      icon: Truck,
      title: "Door-to-Door Delivery",
      description: "Complete logistics management from origin to destination, including pickup, transportation, customs clearance, and final mile delivery services."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Comprehensive Export-Import Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From shipping to compliance, we provide end-to-end services to make your international trade seamless and successful
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-none hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0a4a9e]"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0a4a9e] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#0a4a9e] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
