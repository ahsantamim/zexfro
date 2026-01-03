import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#0A4D96] text-white rounded-lg hover:bg-[#083a73] transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

