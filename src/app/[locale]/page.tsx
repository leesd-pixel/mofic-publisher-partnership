import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import CompanyInfo from '@/components/CompanyInfo';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <About />
      <CompanyInfo />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
