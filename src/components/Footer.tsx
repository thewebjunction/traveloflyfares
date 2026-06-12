import { Link } from 'react-router';
import { Instagram, Facebook, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = ['Flights', 'Hotels', 'Vacations', 'Car Rentals', 'Bus', 'Blog'];
const popularDeals = ['Flights to Vegas', 'Flights to Orlando', 'Flights to Chicago', 'Flights to Phoenix', 'Flights to Hawaii', 'Flights to Europe'];
const flightsTo = ['Domestic Flights', 'International', 'Group Bookings', 'Last Minute', 'Business Class', 'Charter Flights'];

const supportLinks = [
  { label: 'Contact Us', href: null },
  { label: 'Customer Support', href: null },
  { label: 'About Us', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="section-padding">
        <div className="content-max">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#F9FAFB' }}>
                Travelofly Fares
              </h3>
              <p className="text-sm" style={{ color: '#9CA3AF' }}>
                Your trusted travel partner since 2017.
              </p>
            </div>
            <div className="flex items-center gap-6">
              {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition-colors duration-200 hover:scale-110"
                  style={{ color: '#9CA3AF' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0EA5E9')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#F9FAFB' }}>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#9CA3AF' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#F9FAFB' }}>
                Popular Deals
              </h4>
              <ul className="space-y-2.5">
                {popularDeals.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#9CA3AF' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#F9FAFB' }}>
                Flights To
              </h4>
              <ul className="space-y-2.5">
                {flightsTo.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#9CA3AF' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#F9FAFB' }}>
                Support
              </h4>
              <ul className="space-y-2.5">
                {supportLinks.map(({ label, href }) => (
                  <li key={label}>
                    {href ? (
                      <Link to={href} className="text-sm transition-colors duration-200" style={{ color: '#9CA3AF' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
                        {label}
                      </Link>
                    ) : (
                      <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#9CA3AF' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col gap-3 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <a href="#" className="flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
              <MapPin size={16} /> 915 MAIN ST, 805, HARTFORD, CT, 06103, United States
            </a>
            <a href="tel:+18337010952" className="flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
              <Phone size={16} /> +1 (833) 701-0952
            </a>
            <a href="mailto:support@traveloflyfaresllc.com" className="flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
              <Mail size={16} /> support@traveloflyfaresllc.com
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: '#6B7280' }}>
              &copy; 2026 Travelofly Fares. All rights reserved.
            </p>
            <div className="flex items-center gap-2 opacity-60">
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#9CA3AF' }}>VISA</span>
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#9CA3AF' }}>MC</span>
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#9CA3AF' }}>AMEX</span>
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#9CA3AF' }}>DISC</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/disclaimer" className="text-xs transition-colors duration-200" style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}>
                Disclaimer
              </Link>
              <Link to="/privacy-policy" className="text-xs transition-colors duration-200" style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs transition-colors duration-200" style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}>
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
