"use client";

import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader 
} from "@/components/ui/ContentLayout";
import { 
  BookOpen,
  Search
} from "lucide-react";
import { useState, useMemo } from "react";

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const glossaryTerms = [
    {
      term: "Bill of Lading (B/L)",
      definition: "A legal document issued by a carrier to a shipper that details the type, quantity, and destination of goods being carried. It serves as a shipment receipt when the carrier delivers the goods at a predetermined destination.",
      category: "Shipping"
    },
    {
      term: "Certificate of Origin (COO)",
      definition: "An important document certifying the country in which a commodity or good was manufactured. Used in international trade to determine whether goods are eligible for import or subject to specific tariffs.",
      category: "Documentation"
    },
    {
      term: "Customs Clearance",
      definition: "The process of declaring goods to customs authorities when entering or leaving a country. This involves submitting documentation and paying applicable duties and taxes.",
      category: "Customs"
    },
    {
      term: "ERC (Export Registration Certificate)",
      definition: "A mandatory certificate required in Bangladesh to legally export goods. Issued by the Chief Controller of Imports and Exports (CCI&E).",
      category: "Compliance"
    },
    {
      term: "FOB (Free On Board)",
      definition: "An Incoterm indicating that the seller delivers goods to a named port and loads them onto a vessel. The buyer assumes all costs and risks from that point forward.",
      category: "Incoterms"
    },
    {
      term: "HS Code",
      definition: "Harmonized System Code - A standardized numerical method of classifying traded products used by customs authorities worldwide to identify products for tax and regulation purposes.",
      category: "Classification"
    },
    {
      term: "IRC (Import Registration Certificate)",
      definition: "A certificate required in Bangladesh to legally import goods into the country. Issued by the Chief Controller of Imports and Exports (CCI&E).",
      category: "Compliance"
    },
    {
      term: "Incoterms",
      definition: "International Commercial Terms - A set of rules published by the International Chamber of Commerce that define the responsibilities of sellers and buyers in international trade.",
      category: "Trade Terms"
    },
    {
      term: "Letter of Credit (LC)",
      definition: "A payment mechanism used in international trade where a bank guarantees payment to a seller on behalf of the buyer, provided the seller meets all the terms and conditions specified in the LC.",
      category: "Finance"
    },
    {
      term: "Packing List",
      definition: "A document that provides detailed information about the contents of a shipment, including the quantity, type, dimensions, and weight of each package.",
      category: "Documentation"
    },
    {
      term: "Proforma Invoice",
      definition: "A preliminary invoice sent before goods are delivered, outlining the products, prices, and terms of sale. Used for customs purposes and to secure financing.",
      category: "Documentation"
    },
    {
      term: "Commercial Invoice",
      definition: "An official document issued by a seller to a buyer listing the goods sold, quantities, prices, and total amount due. Required for customs clearance.",
      category: "Documentation"
    },
    {
      term: "CIF (Cost, Insurance, and Freight)",
      definition: "An Incoterm where the seller pays for shipping and insurance to deliver goods to the port of destination. Risk transfers to the buyer once goods are loaded.",
      category: "Incoterms"
    },
    {
      term: "CFR (Cost and Freight)",
      definition: "An Incoterm where the seller pays transportation costs to the port of destination, but the buyer assumes risk once goods are loaded onto the vessel.",
      category: "Incoterms"
    },
    {
      term: "DDP (Delivered Duty Paid)",
      definition: "An Incoterm where the seller assumes all responsibilities and costs for delivering goods to the buyer's location, including customs duties and taxes.",
      category: "Incoterms"
    },
    {
      term: "EXW (Ex Works)",
      definition: "An Incoterm where the seller makes goods available at their premises, and the buyer assumes all costs and risks from that point.",
      category: "Incoterms"
    },
    {
      term: "TIN (Tax Identification Number)",
      definition: "A unique number assigned by tax authorities to identify taxpayers for tax administration purposes.",
      category: "Compliance"
    },
    {
      term: "Trade License",
      definition: "A legal permit issued by local authorities that authorizes a business to operate within a specific jurisdiction.",
      category: "Compliance"
    },
    {
      term: "KYC (Know Your Customer)",
      definition: "A process of verifying the identity of clients and assessing their suitability and potential risks of illegal intentions.",
      category: "Compliance"
    },
    {
      term: "AML (Anti-Money Laundering)",
      definition: "A set of laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income.",
      category: "Compliance"
    },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredTerms = useMemo(() => {
    let filtered = glossaryTerms;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by selected letter
    if (selectedLetter) {
      filtered = filtered.filter((item) =>
        item.term.toUpperCase().startsWith(selectedLetter)
      );
    }

    // Sort alphabetically
    return filtered.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedLetter]);

  const groupedTerms = useMemo(() => {
    const grouped: Record<string, typeof glossaryTerms> = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(term);
    });
    return grouped;
  }, [filteredTerms]);

  return (
    <ContentLayout
      pageTitle="Trade Glossary"
      pageDescription="Your comprehensive guide to international trade terminology and definitions"
      heroImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#0a4a9e] rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Understanding Trade Terminology
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Navigate the world of international trade with confidence. Our glossary provides clear, concise definitions of essential terms used in import, export, logistics, and compliance.
          </p>
        </div>
      </ContentSection>

      {/* Search and Filter */}
      <ContentSection bgColor="gray">
        <div className="max-w-5xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for terms, definitions, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#0a4a9e] focus:ring-2 focus:ring-[#0a4a9e]/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Alphabet Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedLetter(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedLetter === null
                  ? "bg-[#0a4a9e] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            {alphabet.map((letter) => {
              const hasTerms = glossaryTerms.some((term) =>
                term.term.toUpperCase().startsWith(letter)
              );
              return (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  disabled={!hasTerms}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    selectedLetter === letter
                      ? "bg-[#0a4a9e] text-white shadow-lg"
                      : hasTerms
                      ? "bg-white text-gray-700 hover:bg-gray-100"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Showing <span className="font-bold text-[#0a4a9e]">{filteredTerms.length}</span>{" "}
              {filteredTerms.length === 1 ? "term" : "terms"}
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Glossary Terms */}
      <ContentSection bgColor="white">
        <div className="max-w-5xl mx-auto">
          {Object.keys(groupedTerms).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedTerms).map(([letter, terms]) => (
                <div key={letter} id={`letter-${letter}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{letter}</span>
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#0a4a9e] to-transparent"></div>
                  </div>

                  <div className="space-y-6">
                    {terms.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0a4a9e] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            {item.term}
                          </h3>
                          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {item.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">
                No terms found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLetter(null);
                }}
                className="mt-4 px-6 py-2 bg-[#0a4a9e] text-white rounded-lg hover:bg-[#0a4a9e]/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </ContentSection>

      {/* Help Section */}
      <ContentSection bgColor="blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Information?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            If you can't find a term you're looking for or need clarification on any trade-related topic, our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Experts
          </a>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}

