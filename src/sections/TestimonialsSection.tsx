import { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Michael R.',
    stars: 5,
    quote: 'The booking process was simple and convenient. The support team helped me understand my flight options and made my travel planning much easier.',
  },
  {
    name: 'Sarah L.',
    stars: 5,
    quote: 'I received great assistance while planning my trip. The team was responsive and guided me through the available flight choices.',
  },
  {
    name: 'David M.',
    stars: 5,
    quote: 'Traveloflyfares made my flight booking experience smooth and stress-free. The process was easy, and the support was helpful throughout.',
  },
  {
    name: 'Emily T.',
    stars: 5,
    quote: 'Finding the right travel option was much easier with their assistance. The team was professional and answered all my questions patiently.',
  },
  {
    name: 'James K.',
    stars: 5,
    quote: 'A helpful travel platform with reliable support. The booking experience was straightforward, and the team made the process comfortable.',
  },
  {
    name: 'Jasmin Afanador',
    stars: 5,
    quote: 'Methew, You have been so amazing. You have made it possible for me to help my half sister with her mother\'s funeral arrangements as she had brain surgery two weeks ago.',
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
    <section className="section-padding" style={{ backgroundColor: '#F0F9FF' }}>
      <div className="content-max" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-12 reveal-child">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" style={{ color: '#1F2937' }}>
            Our Happy Travelers
          </h2>
          <p className="text-sm md:text-base" style={{ color: '#6B7280' }}>
            Real stories from real customers
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="reveal-child max-w-[640px] mx-auto text-center">
          {/* Quote Mark */}
          <span
            className="font-script text-6xl md:text-7xl leading-none block mb-4"
            style={{ color: '#0EA5E9' }}
          >
            &ldquo;
          </span>

          {/* Quote */}
          <p
            key={active}
            className="text-base md:text-lg italic leading-relaxed mb-6 transition-all duration-400"
            style={{ color: '#1F2937' }}
          >
            {current.quote}
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={18}
                fill="#0EA5E9"
                stroke="#0EA5E9"
              />
            ))}
          </div>

          {/* Author */}
          <h4 className="text-lg font-semibold" style={{ color: '#1F2937' }}>
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
                  backgroundColor: i === active ? '#0EA5E9' : 'rgba(107,114,128,0.3)',
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
