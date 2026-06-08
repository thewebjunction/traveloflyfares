import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import MobileCallWidget from './components/MobileCallWidget';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import BookingEngine from './sections/BookingEngine';
import WhyBookSection from './sections/WhyBookSection';
import PackagesSection from './sections/PackagesSection';
import FlightsGridSection from './sections/FlightsGridSection';
import TestimonialsSection from './sections/TestimonialsSection';
import EventsSection from './sections/EventsSection';
import FAQSection from './sections/FAQSection';
import NewsletterSection from './sections/NewsletterSection';

export default function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh]" style={{ backgroundColor: '#011C27' }}>
      {/* Fixed Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(0,212,170,0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(217,166,108,0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <AnnouncementBar />
        <Header />
        <main>
          <HeroSection />
          <BookingEngine />
          <WhyBookSection />
          <PackagesSection />
          <FlightsGridSection />
          <TestimonialsSection />
          <EventsSection />
          <FAQSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
      <MobileCallWidget />
    </div>
  );
}
