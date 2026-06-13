import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Phone, Menu, X } from 'lucide-react';
import logoImg from '../../images/logo 2.png';
import { useIsMobile } from '../hooks/use-mobile';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Cancellation', to: '/cancellation-policy' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      className="fixed left-0 right-0 z-50 transition-all duration-500"
      style={{
        top: scrolled ? '0' : (isMobile ? '0' : '36px'),
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '24px',
        paddingRight: '24px',
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        boxShadow: 'none',
      }}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="shrink-0"
        >
          <img src={logoImg} alt="Travelofly Fares" className="w-auto" style={{ height: '80px', filter: 'brightness(0)' }} />
        </Link>

        {/* Desktop: centered pill nav */}
        <nav
          className="hidden md:flex items-center gap-1 px-6 py-2 rounded-full"
          style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(14,165,233,0.12)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                style={{
                  color: isActive ? '#1F2937' : '#6B7280',
                  backgroundColor: isActive ? 'rgba(14,165,233,0.1)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: phone icon + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18337010952"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#6B7280', boxShadow: '0 2px 8px rgba(14,165,233,0.1)' }}
            aria-label="Call us"
          >
            <Phone size={16} />
          </a>
          <a
            href="tel:+18337010952"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
            style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
          >
            Call Now
          </a>
        </div>

        {/* Mobile: hamburger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#1F2937', boxShadow: '0 2px 8px rgba(14,165,233,0.1)' }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden mt-3 mx-auto rounded-2xl overflow-hidden max-w-sm"
          style={{ backgroundColor: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 24px rgba(14,165,233,0.12)' }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center px-6 py-4 text-sm font-medium border-b transition-colors duration-200"
                style={{
                  color: isActive ? '#1F2937' : '#6B7280',
                  borderColor: 'rgba(14,165,233,0.1)',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:+18337010952"
            className="flex items-center gap-2 px-6 py-4 text-sm font-semibold"
            style={{ color: '#0EA5E9' }}
          >
            <Phone size={16} /> +1 (833) 701-0952
          </a>
        </div>
      )}
    </header>
  );
}
