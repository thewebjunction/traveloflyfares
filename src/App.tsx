import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
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
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import AdvertisementDisclosurePage from './pages/AdvertisementDisclosurePage';

function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
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
  );
}

export default function App() {
  return (
    <div className="relative min-h-[100dvh]" style={{ backgroundColor: '#F0F9FF' }}>
      {/* Fixed Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(14,165,233,0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(14,165,233,0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <AnnouncementBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/advertisement-disclosure" element={<AdvertisementDisclosurePage />} />
        </Routes>
        <Footer />
      </div>
      <MobileCallWidget />
    </div>
  );
}
