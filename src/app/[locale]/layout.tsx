import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SessionProvider } from "@/components/providers/SessionProvider";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zexfro - Global Trade Made Simple",
  description:
    "Secure. Compliant. Global Trade Made Simple. Connect with verified partners in Europe.",
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={outfit.className}>
        <SessionProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <WhatsAppButton />
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

