import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .to(bodyRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to(statsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
  }, []);

  // Lock hero height to a fixed pixel value so the mobile address bar
  // showing/hiding during scroll does NOT resize the hero and reflow the
  // form below it (the source of the jitter). Only recompute on a real
  // width change (orientation), never on address-bar height changes.
  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty('--hero-h', `${window.innerHeight}px`);
    };
    let lastWidth = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        setHeight();
      }
    };
    setHeight();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', setHeight);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', setHeight);
    };
  }, []);

  const stats = ['Round-the-Clock Support', 'Extensive Airline Network', 'Flights Across 1000+ Destinations', 'Competitive Fare Options'];

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'var(--hero-h, 100svh)' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
      </video>


      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[800px] mx-auto pt-20">

        <h1
          ref={headingRef}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
          style={{
            color: '#1F2937',
            opacity: 0,
            transform: 'translateY(30px)',
            textShadow: '0 0 40px rgba(14,165,233,0.2)',
          }}
        >
          Fly More, Spend Less <br className="hidden sm:block" />
          <span style={{ color: '#0EA5E9' }}>On Every Journey</span>
        </h1>

        <p
          ref={bodyRef}
          className="text-base md:text-lg max-w-[500px] mx-auto mb-8"
          style={{
            color: '#6B7280',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          Compare flight options, explore destinations, and get support from travel experts whenever you need it.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <a
            href="tel:+18337010952"
            className="hidden sm:inline-flex pill-primary items-center gap-2 text-base"
          >
            <Phone size={18} />
            +1 (833) 701-0952
          </a>
          <a
            href="#deals"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#deals')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="pill-secondary text-base"
          >
            Explore Deals
          </a>
        </div>

        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          {stats.map((stat) => (
            <span
              key={stat}
              className="px-4 py-2 rounded-full text-xs font-medium"
              style={{
                backgroundColor: '#ffffff',
                color: '#6B7280',
                boxShadow: '0 2px 8px rgba(14,165,233,0.12)',
              }}
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
