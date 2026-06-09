import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logoImg from '../../images/logo 2.png';
import { useIsMobile } from '../hooks/use-mobile';

const navLinks = [
  { label: 'Flights', href: '#flights' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Vacations', href: '#vacations' },
  { label: 'Car', href: '#car' },
  { label: 'Bus', href: '#bus' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#flights');
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="shrink-0"
        >
          <img src={logoImg} alt="Travelofly Fares" className="w-auto" style={{ height: '80px' }} />
        </a>

        {/* Desktop: centered dark pill nav */}
        <nav
          className="hidden md:flex items-center gap-1 px-6 py-2 rounded-full"
          style={{
            backgroundColor: 'rgba(4, 47, 62, 0.92)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
              style={{
                color: activeLink === link.href ? '#E8F4F8' : '#94B8C4',
                backgroundColor: activeLink === link.href ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: phone icon + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18337010952"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: 'rgba(4,47,62,0.92)', color: '#94B8C4' }}
            aria-label="Call us"
          >
            <Phone size={16} />
          </a>
          <a
            href="tel:+18337010952"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
            style={{ backgroundColor: '#D9A66C', color: '#011C27' }}
          >
            Call Now
          </a>
        </div>

        {/* Mobile: hamburger only */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: 'rgba(4,47,62,0.92)', color: '#E8F4F8' }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-3 mx-auto rounded-2xl overflow-hidden max-w-sm"
          style={{ backgroundColor: 'rgba(4,47,62,0.97)', backdropFilter: 'blur(16px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center px-6 py-4 text-sm font-medium border-b transition-colors duration-200"
              style={{
                color: activeLink === link.href ? '#E8F4F8' : '#94B8C4',
                borderColor: 'rgba(148,184,196,0.1)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
