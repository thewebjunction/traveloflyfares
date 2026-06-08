import { Instagram, Facebook, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = ['Flights', 'Hotels', 'Vacations', 'Car Rentals', 'Bus', 'Blog'];
const popularDeals = ['Flights to Vegas', 'Flights to Orlando', 'Flights to Chicago', 'Flights to Phoenix', 'Flights to Hawaii', 'Flights to Europe'];
const flightsTo = ['Domestic Flights', 'International', 'Group Bookings', 'Last Minute', 'Business Class', 'Charter Flights'];
const support = ['Contact Us', 'Customer Support', 'Privacy Policy', 'Terms & Conditions', 'Sitemap', 'Baggage Fees'];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#010E14' }}>
      <div className="section-padding">
        <div className="content-max">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#E8F4F8' }}>
                Travelofly Fares
              </h3>
              <p className="text-sm" style={{ color: '#94B8C4' }}>
                Your trusted travel partner since 2017.
              </p>
            </div>
            <div className="flex items-center gap-6">
              {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition-colors duration-200 hover:scale-110"
                  style={{ color: '#94B8C4' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4AA')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94B8C4')}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#E8F4F8' }}>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#94B8C4' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#E8F4F8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94B8C4')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#E8F4F8' }}>
                Popular Deals
              </h4>
              <ul className="space-y-2.5">
                {popularDeals.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#94B8C4' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#E8F4F8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94B8C4')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#E8F4F8' }}>
                Flights To
              </h4>
              <ul className="space-y-2.5">
                {flightsTo.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#94B8C4' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#E8F4F8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94B8C4')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#E8F4F8' }}>
                Support
              </h4>
              <ul className="space-y-2.5">
                {support.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: '#94B8C4' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#E8F4F8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94B8C4')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col gap-3 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(148,184,196,0.1)' }}>
            <a href="#" className="flex items-center gap-2 text-sm" style={{ color: '#94B8C4' }}>
              <MapPin size={16} /> 915 MAIN ST, 805, HARTFORD, CT, 06103, United States
            </a>
            <a href="tel:+18887252195" className="flex items-center gap-2 text-sm" style={{ color: '#94B8C4' }}>
              <Phone size={16} /> +1 (888) 725-2195
            </a>
            <a href="mailto:support@traveloflyfaresllc.com" className="flex items-center gap-2 text-sm" style={{ color: '#94B8C4' }}>
              <Mail size={16} /> support@traveloflyfaresllc.com
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: 'rgba(148,184,196,0.6)' }}>
              &copy; 2026 Travelofly Fares. All rights reserved.
            </p>
            <div className="flex items-center gap-2 opacity-40">
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(148,184,196,0.3)', color: '#94B8C4' }}>VISA</span>
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(148,184,196,0.3)', color: '#94B8C4' }}>MC</span>
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(148,184,196,0.3)', color: '#94B8C4' }}>AMEX</span>
              <span className="text-xs px-2 py-1 rounded" style={{ border: '1px solid rgba(148,184,196,0.3)', color: '#94B8C4' }}>DISC</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs transition-colors duration-200" style={{ color: 'rgba(148,184,196,0.6)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#94B8C4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148,184,196,0.6)')}>
                Disclaimer
              </a>
              <a href="#" className="text-xs transition-colors duration-200" style={{ color: 'rgba(148,184,196,0.6)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#94B8C4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148,184,196,0.6)')}>
                Privacy Policy
              </a>
              <a href="#" className="text-xs transition-colors duration-200" style={{ color: 'rgba(148,184,196,0.6)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#94B8C4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148,184,196,0.6)')}>
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
