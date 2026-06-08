import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const deals = [
  {
    title: 'Weekend Getaway Deals',
    subtitle: 'Domestic flights from $99',
    image: '/images/img-fort-myers.jpg',
  },
  {
    title: 'Group Booking Discounts',
    subtitle: 'Save 15% on 4+ passengers',
    image: '/images/img-orlando.jpg',
  },
  {
    title: 'Last-Minute Flight Specials',
    subtitle: 'Unpublished fares available',
    image: '/images/img-las-vegas.jpg',
  },
];

export default function EventsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15, y: 40 });

  return (
    <section id="car" className="bg-void section-padding">
      <div className="content-max" ref={sectionRef}>
        {/* Header */}
        <h2
          className="reveal-child font-script text-3xl sm:text-4xl md:text-5xl mb-10"
          style={{ color: '#E8F4F8' }}
        >
          Special Travel Deals
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Featured Deal */}
          <div
            className="reveal-child lg:col-span-3 rounded-3xl overflow-hidden relative group cursor-pointer"
            style={{ minHeight: '400px', maxHeight: '520px' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src="/images/img-hero.jpg"
              alt="Summer Sale"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(1,28,39,0.3) 0%, rgba(1,28,39,0.85) 100%)',
              }}
            />
            <div className="absolute top-6 left-6">
              <span
                className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: '#00D4AA', color: '#011C27' }}
              >
                Limited Time
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3
                className="font-script text-2xl sm:text-3xl md:text-4xl mb-3"
                style={{ color: '#E8F4F8' }}
              >
                Summer Sale: Up to 50% Off
              </h3>
              <p className="text-sm mb-5 max-w-[400px]" style={{ color: '#94B8C4' }}>
                Book by June 30th and save big on international flights.
              </p>
              <button
                className="pill-primary text-sm"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Right - Deal List */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {deals.map((deal) => (
              <div
                key={deal.title}
                className="reveal-child card-abyss p-5 flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium mb-1" style={{ color: '#00D4AA' }}>
                    Special Offer
                  </p>
                  <h4 className="text-base font-semibold mb-1 truncate" style={{ color: '#E8F4F8' }}>
                    {deal.title}
                  </h4>
                  <span
                    className="flex items-center gap-1 text-xs font-medium transition-colors duration-200"
                    style={{ color: '#00D4AA' }}
                  >
                    Details <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
