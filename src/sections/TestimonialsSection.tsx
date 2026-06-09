import { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Laurie Sorgen',
    stars: 5,
    quote: 'Addie was very helpful in finding properties in northern Germany for my next trip. I had a voucher from a previous travel experience, which he helped me secure, and it helped to pay for the hotel stay.',
  },
  {
    name: 'Jasmin Afanador',
    stars: 5,
    quote: 'Methew, You have been so amazing. You have made it possible for me to help my half sister with her mother\'s funeral arrangements as she had brain surgery two weeks ago.',
  },
  {
    name: 'Robert Chen',
    stars: 5,
    quote: 'Travelofly Fares found me a deal $200 cheaper than any other site. The agent stayed on the phone until everything was confirmed. Incredible service.',
  },
  {
    name: 'Sarah Mitchell',
    stars: 5,
    quote: 'Booked a last-minute flight to Tokyo for a family emergency. They had options within 10 minutes and walked me through every step.',
  },
  {
    name: 'David Park',
    stars: 5,
    quote: 'I\'ve used Travelofly Fares for 5 trips now. Consistently better prices than the big sites and the personal touch makes all the difference.',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 40 });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[active];

  return (
    <section className="bg-abyss section-padding">
      <div className="content-max" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-12 reveal-child">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" style={{ color: '#E8F4F8' }}>
            Our Happy Travelers
          </h2>
          <p className="text-sm md:text-base" style={{ color: '#94B8C4' }}>
            Real stories from real customers
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="reveal-child max-w-[640px] mx-auto text-center">
          {/* Quote Mark */}
          <span
            className="font-script text-6xl md:text-7xl leading-none block mb-4"
            style={{ color: '#D9A66C' }}
          >
            &ldquo;
          </span>

          {/* Quote */}
          <p
            key={active}
            className="text-base md:text-lg italic leading-relaxed mb-6 transition-all duration-400"
            style={{ color: '#E8F4F8' }}
          >
            {current.quote}
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={18}
                fill="#D9A66C"
                stroke="#D9A66C"
              />
            ))}
          </div>

          {/* Author */}
          <h4 className="text-lg font-semibold" style={{ color: '#E8F4F8' }}>
            {current.name}
          </h4>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === active ? '#D9A66C' : 'rgba(148,184,196,0.3)',
                  transform: i === active ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
