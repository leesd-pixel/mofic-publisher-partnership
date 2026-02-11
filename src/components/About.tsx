'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t('title')}</h2>
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t('description1')}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{t('description2')}</p>
        </div>
      </div>
    </section>
  );
}
