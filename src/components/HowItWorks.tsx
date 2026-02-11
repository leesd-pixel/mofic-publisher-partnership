'use client';

import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('how');

  const engines = [
    { key: 'step1', number: '01', color: 'teal' },
    { key: 'step2', number: '02', color: 'cyan' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {engines.map((engine) => (
            <div key={engine.key} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  {engine.number}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">{t(`${engine.key}.title`)}</h3>
                <p className="text-gray-500 text-sm mb-6">{t(`${engine.key}.description`)}</p>

                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {i < 4 ? (
                          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className={`text-sm ${i === 4 ? 'font-semibold text-green-700' : 'text-gray-600'}`}>
                        {t(`${engine.key}.flow${i}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
