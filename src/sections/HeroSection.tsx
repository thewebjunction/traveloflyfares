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

  const stats = ['24/7 Support', '500+ Airlines', '1000+ Destinations', 'Best Price Guarantee'];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
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
        <source src="/videos/vid-hero-travel.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(1,28,39,0.4) 0%, rgba(1,28,39,0.7) 60%, rgba(1,28,39,0.95) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[800px] mx-auto pt-20">

        <h1
          ref={headingRef}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
          style={{
            color: '#E8F4F8',
            opacity: 0,
            transform: 'translateY(30px)',
            textShadow: '0 0 40px rgba(217,166,108,0.3)',
          }}
        >
          Stop Overpaying <br className="hidden sm:block" />
          <span style={{ color: '#D9A66C' }}>for Flights</span>
        </h1>

        <p
          ref={bodyRef}
          className="text-base md:text-lg max-w-[500px] mx-auto mb-8"
          style={{
            color: '#94B8C4',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          Our experts find unpublished fares across 500+ airlines — deals you won't see online. One call, instant savings.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <a
            href="tel:+18887252195"
            className="hidden sm:inline-flex pill-primary items-center gap-2 text-base"
          >
            <Phone size={18} />
            +1 (888) 725-2195
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
                backgroundColor: '#042F3E',
                color: '#94B8C4',
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
