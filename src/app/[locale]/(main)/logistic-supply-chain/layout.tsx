import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resources" });

  return {
    title: "Logistics & Supply Chain | Zexfro",
    description:
      "Comprehensive logistics and supply chain management solutions from global sourcing to last-mile delivery. International freight, customs brokerage, warehousing, and B2B distribution services.",
  };
}

export default function LogisticSupplyChainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
