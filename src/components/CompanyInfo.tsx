'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function CompanyInfo() {
  const t = useTranslations('companyInfo');
  const locale = useLocale();

  // 일본어/영어: 일본법인 정보 (설립일, 법인번호, 자본금 포함)
  // 한국어: 한국법인 정보 (설립일, 법인번호, 자본금 제외)
  const showJapanDetails = locale !== 'ko';

  return (
    <section id="company" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Company info card */}
        <div className="bg-gray-50 rounded-2xl p-8">
          {/* Basic info */}
          <div className="grid gap-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
              <span className="text-gray-500 font-medium sm:w-40 mb-1 sm:mb-0">{t('company.label')}</span>
              <span className="text-gray-900">{t('company.value')}</span>
            </div>

            {showJapanDetails && (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
                  <span className="text-gray-500 font-medium sm:w-40 mb-1 sm:mb-0">{t('established.label')}</span>
                  <span className="text-gray-900">{t('established.value')}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
                  <span className="text-gray-500 font-medium sm:w-40 mb-1 sm:mb-0">{t('corporateNumber.label')}</span>
                  <span className="text-gray-900">{t('corporateNumber.value')}</span>
                </div>
              </>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
              <span className="text-gray-500 font-medium sm:w-40 mb-1 sm:mb-0">{t('representative.label')}</span>
              <span className="text-gray-900">{t('representative.value')}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
              <span className="text-gray-500 font-medium sm:w-40 mb-1 sm:mb-0">{t('address.label')}</span>
              <span className="text-gray-900">{t('address.value')}</span>
            </div>

            {showJapanDetails && (
              <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
                <span className="text-gray-500 font-medium sm:w-40 mb-1 sm:mb-0">{t('capital.label')}</span>
                <span className="text-gray-900">{t('capital.value')}</span>
              </div>
            )}
          </div>

          {/* Business info */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('business.title')}</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                {t('business.services')}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                {t('business.partners')}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('contact.title')}</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${t('contact.email')}`} className="text-violet-600 hover:underline">
                {t('contact.email')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
