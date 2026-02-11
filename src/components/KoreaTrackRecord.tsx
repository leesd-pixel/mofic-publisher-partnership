'use client';

import { useTranslations } from 'next-intl';

export default function KoreaTrackRecord() {
  const t = useTranslations('koreaTrack');

  const allItems = ['item1', 'item2', 'item3', 'item4', 'item5'];
  const items = allItems.filter((item) => t.has(item));

  return (
    <section className="py-24 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{t('title')}</h2>
          <p className="text-xl text-violet-600 font-semibold">{t('subtitle')}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{t(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
