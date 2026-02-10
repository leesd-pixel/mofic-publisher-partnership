'use client';

import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');

  const contractTypes = [
    {
      key: 'standard',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      key: 'premium',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Highlight banner - 계약 종료 조건 강조 */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-6 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-white text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold">{t('highlight')}</p>
              <p className="text-violet-200 text-sm sm:text-base">{t('highlightSub')}</p>
            </div>
          </div>
        </div>

        {/* Contract types - 2 cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contractTypes.map((type) => (
            <div
              key={type.key}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all"
            >
              {/* Icon and condition */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600">
                  {type.icon}
                </div>
                <div>
                  <p className="text-xl font-bold text-violet-600">
                    {t(`${type.key}.condition`)}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {t(`${type.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Pilot note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          {t('pilotNote')}
        </p>

        {/* Note */}
        {t('note') && (
          <p className="text-center text-gray-500 text-sm mt-4">
            {t('note')}
          </p>
        )}
      </div>
    </section>
  );
}
