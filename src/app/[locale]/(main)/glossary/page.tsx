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
    { term: "A.A.", definition: "Always afloat, after arrival" },
    { term: "A.A.D.", definition: "Annual aggregate deductible" },
    { term: "A.H.F.", definition: "American hull form (insurance policy)" },
    { term: "A.M.L.", definition: "Absolute maximum loss" },
    { term: "A.O.", definition: "Any one voyage" },
    { term: "A.P.L.", definition: "As per list" },
    { term: "A/O", definition: "Account of" },
    { term: "A/R", definition: "All risks, Against all risks" },
    { term: "A/V", definition: "Average, ad valorem (according to value)" },
    { term: "Abdnt.", definition: "Abandonment" },
    { term: "Abt.", definition: "About" },
    { term: "Acct", definition: "Account" },
    { term: "Ad Valorem", definition: "Literally: according to value. Any charge, tax, or duty that is applied as a percentage of value." },
    { term: "Ad Valorem Equivalent", definition: "AVE is the rate of duty which would have been incurred on dutiable imports under that item, if the United States customs value of such imports were based on the United States port of entry value." },
    { term: "Ad Valorem Tariff", definition: "A tariff assessed as a percentage of the value of the goods cleared through customs. For example, 10 percent ad valorem means the tariff is 10 percent of the value of the goods." },
    { term: "Affiliate", definition: "An affiliate is a business enterprise located in one country which is directly or indirectly owned or controlled by a person of another country to the extent of 10 percent or more of its voting securities for an incorporated business enterprise or equity." },
    { term: "African Export Import Bank", definition: "African Export Import Bank" },
    { term: "Agent / Distributor Service", definition: "The Agent/Distributor Service (ADS) is an International Trade Administration (ITA) fee service." },
    { term: "Agreement", definition: "Agreement by one government to accept the accreditation of an ambassador from another government." },
    { term: "Air Cargo Agent", definition: "A type of freight forwarder who specializes in air cargo and acts for airlines that pay him a fee (usually 5%). The Air Cargo Agent is registered with the International Air Transport Association (IATA)." },
    { term: "Air Freight Forwarder", definition: "A type of freight forwarder who specializes in air cargo. The Air Freight Forwarder usually consolidates the air shipments of various exporters, charging them for actual weight and deriving his profit by paying the airline the lower consolidated rate." },
    { term: "Air Waybill", definition: "An AWB is a bill of lading which covers both domestic and international flights transporting goods to a specified destination. Technically, it is a non-negotiable instrument." },
    { term: "All Risks Coverage", definition: "A type of marine insurance providing the broadest kind of standard coverage, excluding damage caused by war, strikes, and riots." },
    { term: "All Risk Clause", definition: "Risk Clause" },
    { term: "Bill of Lading (B/L)", definition: "A legal document issued by a carrier to a shipper that details the type, quantity, and destination of goods being carried. It serves as a shipment receipt when the carrier delivers the goods at a predetermined destination." },
    { term: "Certificate of Origin (COO)", definition: "An important document certifying the country in which a commodity or good was manufactured. Used in international trade to determine whether goods are eligible for import or subject to specific tariffs." },
    { term: "Customs Clearance", definition: "The process of declaring goods to customs authorities when entering or leaving a country. This involves submitting documentation and paying applicable duties and taxes." },
    { term: "ERC (Export Registration Certificate)", definition: "A mandatory certificate required in Bangladesh to legally export goods. Issued by the Chief Controller of Imports and Exports (CCI&E)." },
    { term: "FOB (Free On Board)", definition: "An Incoterm indicating that the seller delivers goods to a named port and loads them onto a vessel. The buyer assumes all costs and risks from that point forward." },
    { term: "HS Code", definition: "Harmonized System Code - A standardized numerical method of classifying traded products used by customs authorities worldwide to identify products for tax and regulation purposes." },
    { term: "IRC (Import Registration Certificate)", definition: "A certificate required in Bangladesh to legally import goods into the country. Issued by the Chief Controller of Imports and Exports (CCI&E)." },
    { term: "Incoterms", definition: "International Commercial Terms - A set of rules published by the International Chamber of Commerce that define the responsibilities of sellers and buyers in international trade." },
    { term: "Letter of Credit (LC)", definition: "A payment mechanism used in international trade where a bank guarantees payment to a seller on behalf of the buyer, provided the seller meets all the terms and conditions specified in the LC." },
    { term: "Packing List", definition: "A document that provides detailed information about the contents of a shipment, including the quantity, type, dimensions, and weight of each package." },
    { term: "Proforma Invoice", definition: "A preliminary invoice sent before goods are delivered, outlining the products, prices, and terms of sale. Used for customs purposes and to secure financing." },
    { term: "Commercial Invoice", definition: "An official document issued by a seller to a buyer listing the goods sold, quantities, prices, and total amount due. Required for customs clearance." },
    { term: "CIF (Cost, Insurance, and Freight)", definition: "An Incoterm where the seller pays for shipping and insurance to deliver goods to the port of destination. Risk transfers to the buyer once goods are loaded." },
    { term: "CFR (Cost and Freight)", definition: "An Incoterm where the seller pays transportation costs to the port of destination, but the buyer assumes risk once goods are loaded onto the vessel." },
    { term: "DDP (Delivered Duty Paid)", definition: "An Incoterm where the seller assumes all responsibilities and costs for delivering goods to the buyer's location, including customs duties and taxes." },
    { term: "EXW (Ex Works)", definition: "An Incoterm where the seller makes goods available at their premises, and the buyer assumes all costs and risks from that point." },
    { term: "TIN (Tax Identification Number)", definition: "A unique number assigned by tax authorities to identify taxpayers for tax administration purposes." },
    { term: "Trade License", definition: "A legal permit issued by local authorities that authorizes a business to operate within a specific jurisdiction." },
    { term: "KYC (Know Your Customer)", definition: "A process of verifying the identity of clients and assessing their suitability and potential risks of illegal intentions." },
    { term: "AML (Anti-Money Laundering)", definition: "A set of laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income." },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredTerms = useMemo(() => {
    let filtered = glossaryTerms;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="max-w-6xl mx-auto">
          {/* Search Bar with Enhanced Design */}
          <div className="mb-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a4a9e]/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Search className="absolute left-6 text-gray-400 w-6 h-6 group-focus-within:text-[#0a4a9e] transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search for terms or definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-[#0a4a9e] focus:ring-4 focus:ring-[#0a4a9e]/10 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-6 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <span className="text-xl">×</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Alphabet Filter with Modern Design */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedLetter(null)}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedLetter === null
                    ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                    className={`w-11 h-11 rounded-xl font-bold transition-all duration-300 ${
                      selectedLetter === letter
                        ? "bg-gradient-to-br from-[#0a4a9e] to-[#05306b] text-white shadow-lg shadow-blue-500/30 transform scale-110"
                        : hasTerms
                        ? "bg-gray-100 text-gray-700 hover:bg-gradient-to-br hover:from-[#0a4a9e]/10 hover:to-[#05306b]/10 hover:scale-105 hover:shadow-md"
                        : "bg-gray-50 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count with Enhanced Styling */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="w-2 h-2 bg-[#0a4a9e] rounded-full animate-pulse"></div>
              <p className="text-gray-700 font-medium">
                Showing <span className="font-bold text-[#0a4a9e] text-lg">{filteredTerms.length}</span>{" "}
                <span className="text-gray-600">{filteredTerms.length === 1 ? "term" : "terms"}</span>
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Glossary Terms */}
      <ContentSection bgColor="white">
        <div className="max-w-7xl mx-auto">
          {Object.keys(groupedTerms).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(groupedTerms).map(([letter, terms]) => (
                <div key={letter} id={`letter-${letter}`}>
                  {/* Letter Header with Modern Design */}
                  <div className="relative mb-8">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-2xl blur-md opacity-50"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                          <span className="text-3xl font-bold text-white">{letter}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="h-0.5 bg-gradient-to-r from-[#0a4a9e] via-blue-300 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Terms Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {terms.map((item, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0a4a9e]/30 overflow-hidden"
                      >
                        {/* Decorative Corner Element */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0a4a9e]/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                        
                        {/* Decorative Bottom Element */}
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-tr-full transform -translate-x-6 translate-y-6 group-hover:scale-125 transition-transform duration-500"></div>
                        
                        <div className="relative z-10">
                          {/* Term Title with Icon */}
                          <div className="flex items-start gap-3 mb-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                              <BookOpen className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0a4a9e] transition-colors duration-300 leading-tight">
                              {item.term}
                            </h3>
                          </div>
                          
                          {/* Definition */}
                          <p className="text-gray-700 leading-relaxed text-base pl-11">
                            {item.definition}
                          </p>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#0a4a9e]/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-full p-6 mb-6 inline-block">
                  <BookOpen className="w-16 h-16 text-[#0a4a9e]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No terms found
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We couldn't find any terms matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLetter(null);
                }}
                className="px-8 py-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Clear All Filters
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

