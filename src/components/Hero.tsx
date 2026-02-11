'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ONELINK_URL = 'https://mofic.onelink.me/76fN';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse" />
            <span className="text-teal-700 text-sm font-medium">Publisher Partnership Program</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('title')}
          </h1>

          <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 font-semibold max-w-3xl mx-auto mb-4">
            {t('subtitle')}
          </p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t('description')}
          </p>

          <div className="inline-flex items-center px-5 py-2.5 bg-amber-50 border border-amber-200 rounded-xl mb-8">
            <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-amber-800 text-sm font-medium">{t('casestudy')}</span>
          </div>

          {/* ① Hero CTA: Primary + Secondary(OneLink) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-white rounded-xl font-semibold text-lg hover:bg-teal-600 transform hover:scale-105 transition-all shadow-lg shadow-teal-200">
              {t('cta')}
            </a>
            <a
              href={ONELINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-sm"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mofic-app-icon.svg`}
                alt="MOFIC"
                width={20}
                height={20}
                className="rounded flex-shrink-0"
              />
              {t('onelinkButton')}
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="mb-12" />

          {/* Platform info card */}
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-3">
              <p className="text-sm font-bold text-gray-900">{t('platformTitlePrefix')}</p>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mofic-text-logo.png`}
                alt="MOFIC"
                width={80}
                height={20}
                className="flex-shrink-0"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                {t('platformKorea')}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                {t('platformJapan')}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                {t('platformAmerica')}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                {t('platformTaiwan')}
              </div>
            </div>

            {/* ② Platform block bottom: OneLink text link */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href={ONELINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                {t('platformLink')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
