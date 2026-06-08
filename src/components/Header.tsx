import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
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
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className="fixed left-0 right-0 z-50 flex items-center justify-center px-4 transition-all duration-500"
      style={{
        top: scrolled ? '0' : (isMobile ? '8px' : '42px'),
        paddingTop: scrolled ? '12px' : '8px',
      }}
    >
      <nav
        className="flex items-center gap-2 md:gap-4 px-3 md:px-4 rounded-full transition-all duration-500 max-w-[800px] w-full overflow-visible"
        style={{
          height: '55px',
          backgroundColor: scrolled ? 'rgba(4, 47, 62, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 shrink-0"
        >
          <img src={logoImg} alt="Travelofly Fares" className="w-auto" style={{ height: '96px' }} />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full"
              style={{
                color: activeLink === link.href ? '#E8F4F8' : '#94B8C4',
              }}
            >
              {link.label}
              {activeLink === link.href && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                  style={{ backgroundColor: '#D9A66C' }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="tel:+18887252195"
            className="p-2 rounded-full transition-colors duration-200 hover:scale-110"
            style={{ color: '#94B8C4' }}
            aria-label="Call us"
          >
            <Phone size={18} />
          </a>
          <a
            href="tel:+18887252195"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#D9A66C',
              color: '#011C27',
            }}
          >
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}
