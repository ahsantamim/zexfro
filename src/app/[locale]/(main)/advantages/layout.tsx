import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'advantages' });
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default function AdvantagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




