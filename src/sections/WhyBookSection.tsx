import { useScrollReveal } from '../hooks/useScrollReveal';
import { Headphones, Award, Zap, Star, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    text: 'Our travel agents work round the clock. Get human help anytime, anywhere \u2014 no bots, no waiting.',
  },
  {
    icon: Award,
    title: 'We Know Travel',
    text: 'Served by deal specialists who compare 500+ airlines to find you the best price every time.',
  },
  {
    icon: Zap,
    title: 'Easy Booking',
    text: 'Get your e-tickets in minutes. Simple, fast, and hassle-free reservations every single time.',
  },
  {
    icon: Star,
    title: 'Top Rated Service',
    text: 'Rated 4.8 out of 5 on Google. Thousands of happy travelers trust us with their journeys.',
  },
];

export default function WhyBookSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15, y: 60 });

  return (
    <section id="hotels" className="bg-void section-padding">
      <div className="content-max" ref={sectionRef}>
        {/* Heading */}
        <div className="text-center mb-12 reveal-child">
          <h2
            className="font-script text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: '#E8F4F8' }}
          >
            Why Book With Us
          </h2>
          <div
            className="w-[60px] h-[2px] mx-auto"
            style={{ backgroundColor: '#D9A66C' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="reveal-child card-abyss p-8 group transition-all duration-400 hover:-translate-y-1"
                style={{
                  boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,212,170,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(0,212,170,0.15)',
                  }}
                >
                  <Icon size={22} style={{ color: '#00D4AA' }} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#E8F4F8' }}
                >
                  {feature.title}
                </h3>

                {/* Text */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#94B8C4' }}>
                  {feature.text}
                </p>

                {/* Divider + Link */}
                <div
                  className="pt-4 flex items-center gap-2 text-sm font-medium cursor-pointer transition-colors duration-200"
                  style={{
                    borderTop: '1px solid rgba(148,184,196,0.1)',
                    color: '#00D4AA',
                  }}
                >
                  Learn more
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
