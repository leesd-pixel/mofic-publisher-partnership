'use client';

import { useTranslations } from 'next-intl';

export default function JapanExpansion() {
  const t = useTranslations('japanExpansion');

  const items = ['item1', 'item2', 'item3'];

  return (
    <section className="py-24 bg-violet-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
        </div>

        <div className="grid gap-6">
          {items.map((item, index) => (
            <div key={item} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-violet-100">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed pt-2">{t(item)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
