import { useScrollReveal } from '../hooks/useScrollReveal';

const destinations = [
  { city: 'Las Vegas', date: 'Jun 26, 2026', price: '$300.68', image: '/images/img-las-vegas.jpg' },
  { city: 'Orlando', date: 'Sep 15, 2026', price: '$218.20', image: '/images/img-orlando.jpg' },
  { city: 'Chicago', date: 'Aug 01, 2026', price: '$187.40', image: '/images/img-chicago.jpg' },
  { city: 'Salt Lake City', date: 'Aug 26, 2026', price: '$165.20', image: '/images/img-salt-lake.jpg' },
  { city: 'Fort Myers', date: 'Sep 29, 2026', price: '$148.20', image: '/images/img-fort-myers.jpg' },
  { city: 'Phoenix', date: 'Aug 04, 2026', price: '$238.20', image: '/images/img-phoenix.jpg' },
];

export default function FlightsGridSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ stagger: 0.12, y: 40 });

  return (
    <section id="deals" className="bg-void section-padding">
      <div className="content-max" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-12 reveal-child">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" style={{ color: '#E8F4F8' }}>
            Affordable Flights
          </h2>
          <p className="text-sm md:text-base" style={{ color: '#94B8C4' }}>
            Best fares from across the U.S. Updated daily.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.city}
              className="reveal-child card-abyss overflow-hidden group cursor-pointer transition-all duration-400 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div className="h-[180px] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#E8F4F8' }}>
                  {dest.city}
                </h3>
                <p className="text-xs mb-3" style={{ color: '#94B8C4' }}>
                  {dest.date}
                </p>
                <p className="text-2xl font-extrabold" style={{ color: '#D9A66C' }}>
                  From {dest.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
