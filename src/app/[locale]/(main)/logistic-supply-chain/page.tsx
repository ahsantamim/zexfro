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
