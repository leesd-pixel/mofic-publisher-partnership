'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ko';

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <CTASection />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mofic-app-icon.svg`}
                alt="MOFIC"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-xl">{t('company')}</span>
            </div>
            <p className="text-gray-400 max-w-md" style={{ wordBreak: 'keep-all' }}>
              {t('description')}
            </p>

            {/* MOFIC Service Link */}
            <a
              href="https://mofic.onelink.me/76fN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              {t('moficService')}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={currentLocale === 'ja' ? 'https://www.mofic.io/jp/terms/privacy' : currentLocale === 'ko' ? 'https://www.mofic.io/terms/privacy' : '#'}
                  target={currentLocale === 'ja' || currentLocale === 'ko' ? '_blank' : undefined}
                  rel={currentLocale === 'ja' || currentLocale === 'ko' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a
                  href={currentLocale === 'ja' ? 'https://www.mofic.io/jp/terms/policy' : currentLocale === 'ko' ? 'https://www.mofic.io/terms/policy' : '#'}
                  target={currentLocale === 'ja' || currentLocale === 'ko' ? '_blank' : undefined}
                  rel={currentLocale === 'ja' || currentLocale === 'ko' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('terms')}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">{t('contact')}</h4>
              <a href={`mailto:${t('email')}`} className="text-teal-400 hover:text-teal-300 transition-colors">
                {t('email')}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}

function CTASection() {
  const t = useTranslations('cta');

  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        {t('title')}
      </h2>
      <p className="text-xl text-gray-400 mb-8">
        {t('description')}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all"
      >
        {t('button')}
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
