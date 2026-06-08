import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const packages = [
  {
    title: 'All in One Thailand',
    image: '/images/img-thailand.jpg',
    duration: '2N Pattaya \u00b7 2N Bangkok \u00b7 2N Phuket',
    price: 'USD 799',
    rating: 4,
  },
  {
    title: 'Serene Thailand',
    image: '/images/img-thailand-2.jpg',
    duration: '3N Pattaya \u00b7 2N Bangkok',
    price: 'USD 499',
    rating: 4,
  },
  {
    title: 'Mauritius & Dubai',
    image: '/images/img-mauritius.jpg',
    duration: '4N Mauritius \u00b7 3N Dubai',
    price: 'USD 999',
    rating: 5,
  },
  {
    title: 'Dubai & Abu Dhabi',
    image: '/images/img-dubai.jpg',
    duration: '5N Dubai \u00b7 1N Abu Dhabi',
    price: 'USD 899',
    rating: 4,
  },
  {
    title: 'Luxury World Voyage',
    image: '/images/img-dubai-2.jpg',
    duration: 'Hawaii \u00b7 Asia \u00b7 Australia',
    price: 'On Request',
    rating: 5,
  },
];

export default function PackagesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <section id="vacations" className="bg-abyss section-padding">
      <div className="content-max">
        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-10">
          <div className="reveal-child">
            <h2 className="font-script text-3xl sm:text-4xl md:text-5xl" style={{ color: '#E8F4F8' }}>
              Popular Vacation Packages
            </h2>
            <p className="text-sm mt-2" style={{ color: '#94B8C4' }}>
              Browse our handpicked vacation deals
            </p>
          </div>
          <div className="reveal-child hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                border: '1px solid rgba(232,244,248,0.3)',
                color: canScrollLeft ? '#E8F4F8' : 'rgba(232,244,248,0.3)',
                opacity: canScrollLeft ? 1 : 0.5,
              }}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                border: '1px solid rgba(232,244,248,0.3)',
                color: canScrollRight ? '#E8F4F8' : 'rgba(232,244,248,0.3)',
                opacity: canScrollRight ? 1 : 0.5,
              }}
              disabled={!canScrollRight}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10"
          style={{ scrollSnapType: 'x mandatory', scrollPaddingLeft: '1rem' }}
        >
          {packages.map((pkg, i) => (
            <div
              key={pkg.title}
              className={`shrink-0 w-[78vw] sm:w-[360px] rounded-3xl overflow-hidden relative group cursor-pointer${i === packages.length - 1 ? ' mr-4 sm:mr-6 lg:mr-10' : ''}`}
              style={{
                height: '480px',
                scrollSnapAlign: 'start',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Background Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(transparent 30%, rgba(1,28,39,0.9) 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#E8F4F8' }}>
                  {pkg.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: '#94B8C4' }}>
                  {pkg.duration}
                </p>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill={s <= pkg.rating ? '#D9A66C' : 'transparent'}
                      stroke={s <= pkg.rating ? '#D9A66C' : 'rgba(148,184,196,0.3)'}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: '#D9A66C' }}>
                    From {pkg.price}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium" style={{ color: '#00D4AA' }}>
                    View Deal <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
