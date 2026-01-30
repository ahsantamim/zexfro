import { PageHeader } from "@/components/ui/PageHeader";
import { useTranslations } from "next-intl";

export default function LogisticSupplyChainPage() {
  const t = useTranslations("logisticsSupplyChainPage");

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title={t("header.title")}
        description={t("header.description")}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Procurement and Inbound Logistics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("procurement.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t("procurement.intro")}
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("procurement.internationalSourcing.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("procurement.internationalSourcing.description")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("procurement.freightForwarding.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("procurement.freightForwarding.description")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("procurement.customsBrokerage.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("procurement.customsBrokerage.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Warehousing and Inventory Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("warehousing.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t("warehousing.intro")}
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("warehousing.centralizedStorage.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("warehousing.centralizedStorage.description")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-l-4 border-teal-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("warehousing.stockkeeping.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("warehousing.stockkeeping.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Distribution and Outbound Logistics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("distribution.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t("distribution.intro")}
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("distribution.lastMile.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("distribution.lastMile.description")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("distribution.b2bSupplyChain.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("distribution.b2bSupplyChain.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Supply Chain Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("challenges.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t("challenges.intro")}
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("challenges.portCongestion.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("challenges.portCongestion.description")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("challenges.infrastructure.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("challenges.infrastructure.description")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t("challenges.regulatoryCompliance.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("challenges.regulatoryCompliance.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Supply Chain Components Table */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("components.title")}
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                  <thead className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        {t("components.tableHeaders.stage")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        {t("components.tableHeaders.keyActivity")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {t("components.upstream.stage")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {t("components.upstream.activity")}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {t("components.midstream.stage")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {t("components.midstream.activity")}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {t("components.downstream.stage")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {t("components.downstream.activity")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Procurement and Inbound Logistics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Procurement and Inbound Logistics
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As an import-oriented firm, Zexfro's supply chain begins with
                global sourcing.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    International Sourcing
                  </h3>
                  <p className="text-gray-700">
                    They engage in identifying global manufacturers (often in
                    Southeast Asia, China, or Europe) to source raw materials or
                    finished products.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Freight Forwarding
                  </h3>
                  <p className="text-gray-700">
                    Since they operate out of Dhaka, they likely rely on a
                    network of sea and air freight forwarders to move goods
                    through Chattogram Port (sea) or Hazrat Shahjalal
                    International Airport (air).
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Customs Brokerage
                  </h3>
                  <p className="text-gray-700">
                    A critical link in their chain is clearing goods through
                    Bangladesh Customs, which involves navigating regulatory
                    compliance and duty structures.
                  </p>
                </div>
              </div>
            </div>

            {/* Warehousing and Inventory Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Warehousing and Inventory Management
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Once goods clear customs, they move into the domestic phase of
                the supply chain.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Centralized Storage
                  </h3>
                  <p className="text-gray-700">
                    With their primary office in Uttara, the company likely
                    utilizes warehouses in the surrounding industrial zones (such
                    as Gazipur or Tongi) to store bulk inventory.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-l-4 border-teal-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Stockkeeping
                  </h3>
                  <p className="text-gray-700">
                    As a "Supply & Marketing" firm, they maintain safety stocks
                    to buffer against the lead-time variability inherent in
                    international shipping.
                  </p>
                </div>
              </div>
            </div>

            {/* Distribution and Outbound Logistics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Distribution and Outbound Logistics
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The "Marketing" arm of Zexfro focuses on moving products from
                storage to the end-user or secondary distributors.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Last-Mile Delivery
                  </h3>
                  <p className="text-gray-700">
                    They likely employ a mix of third-party logistics (3PL)
                    providers and local transport fleets to distribute goods
                    across Bangladesh's major cities.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    B2B Supply Chain
                  </h3>
                  <p className="text-gray-700">
                    Since they are listed as "Suppliers," their primary customers
                    are likely other businesses (B2B), requiring structured
                    delivery schedules and bulk fulfillment.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Supply Chain Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Supply Chain Challenges
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Operating in the Bangladeshi market presents specific logistical
                hurdles that Zexfro must manage:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Port Congestion
                  </h3>
                  <p className="text-gray-700">
                    Delays at Chattogram Port can impact the "Import" timeline,
                    requiring sophisticated lead-time planning.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Infrastructure
                  </h3>
                  <p className="text-gray-700">
                    Navigating the traffic and road conditions between the port
                    and the capital (Dhaka) is a core logistical concern for
                    ensuring on-time delivery.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-700">
                    Managing the documentation for Import Registration
                    Certificates (IRC) and Letters of Credit (L/C) is a vital
                    administrative layer of their supply chain.
                  </p>
                </div>
              </div>
            </div>

            {/* Supply Chain Components Table */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Supply Chain Components
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                  <thead className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Stage
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Key Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        Upstream
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Supplier selection, L/C opening, International Freight.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        Midstream
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Customs clearance, Warehousing in Dhaka/Uttara, Quality
                        Control.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        Downstream
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Distribution to local wholesalers, B2B marketing,
                        After-sales support.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
