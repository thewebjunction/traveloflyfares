import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    image: '/images/img-dubai.jpg',
    badge: 'OPEN ALL\nYEAR ROUND!',
    bg: '#3D2B1F',
    heading: 'Expert Travel Assistance',
    desc: 'Our travel experts are here to help you find suitable flight options, understand your choices, and make your booking experience simple and convenient.',
    links: ['Call a Travel Expert', 'Get Flight Assistance', 'Explore Travel Options', 'Last-Minute Booking Help'],
  },
  {
    image: '/images/img-mauritius.jpg',
    badge: null,
    bg: '#4E5C1A',
    heading: 'Competitive Fares',
    desc: 'We help you explore flight options across multiple airlines and destinations, making it easier to compare choices that fit your travel plans and budget.',
    links: ['Compare Flight Options', 'Domestic & International Flights', 'Business Class Options', 'Group Travel Assistance'],
  },
  {
    image: '/images/img-thailand.jpg',
    badge: null,
    bg: '#1A5068',
    heading: 'Easy & Convenient Booking',
    desc: 'From searching flights to getting booking support, we make the travel planning process smooth, quick, and hassle-free.',
    links: ['Book Your Flight', 'Flight & Travel Assistance', 'Flexible Travel Options', 'Reservation Support'],
  },
];

export default function WhyBookSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15, y: 60 });

  return (
    <section id="hotels" className="section-padding" style={{ backgroundColor: '#F0F9FF' }}>
      <div className="content-max" ref={sectionRef}>

        {/* Section heading */}
        <div className="text-center mb-12 reveal-child">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: '#1F2937' }}>
            Why Book With Us
          </h2>
          <div className="w-[60px] h-[2px] mx-auto" style={{ backgroundColor: '#0EA5E9' }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="reveal-child flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: card.bg,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Image */}
              <div className="relative" style={{ height: '240px', flexShrink: 0 }}>
                <img
                  src={card.image}
                  alt={card.heading}
                  className="w-full h-full object-cover"
                />

                {/* Badge circle — first card only */}
                {card.badge && (
                  <div
                    className="absolute flex items-center justify-center text-center"
                    style={{
                      top: '16px',
                      right: '16px',
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      backgroundColor: '#00b8f1',
                      boxShadow: '0 4px 20px rgba(0,184,241,0.5)',
                    }}
                  >
                    <span
                      style={{
                        color: '#011C27',
                        fontSize: '10px',
                        fontWeight: 900,
                        fontFamily: 'Jost, sans-serif',
                        textTransform: 'uppercase',
                        lineHeight: 1.25,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {card.badge.split('\n').map((line, j) => (
                        <span key={j} style={{ display: 'block' }}>{line}</span>
                      ))}
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1" style={{ padding: '28px 28px 24px' }}>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '26px',
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    marginBottom: '10px',
                  }}
                >
                  {card.heading}
                </h3>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.72)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {card.desc}
                </p>

                {/* Links */}
                <div
                  className="flex flex-col mt-auto"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.18)' }}
                >
                  {card.links.map((link) => (
                    <a
                      key={link}
                      href="tel:+18337010952"
                      className="flex items-center justify-between group"
                      style={{
                        padding: '13px 0',
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.88)',
                        fontSize: '14px',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')}
                    >
                      {link}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
