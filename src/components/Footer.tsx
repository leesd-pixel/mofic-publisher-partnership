'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">{t('company')}</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              {t('description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('links')}</h4>
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('terms')}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">{t('contact')}</h4>
              <a href={`mailto:${t('email')}`} className="text-violet-400 hover:text-violet-300 transition-colors">
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
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-violet-700 hover:to-indigo-700 transition-all"
      >
        {t('button')}
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
