import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 30 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing! Check your inbox for exclusive deals.');
      setEmail('');
    }
  };

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: '#011C27',
        borderTop: '1px solid rgba(148,184,196,0.1)',
      }}
    >
      <div className="content-max" ref={sectionRef}>
        <div className="reveal-child max-w-[560px] mx-auto text-center">
          <h2
            className="font-script text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: '#E8F4F8' }}
          >
            Get Exclusive Deals
          </h2>
          <p className="text-sm md:text-base mb-8" style={{ color: '#94B8C4' }}>
            Subscribe to our newsletter for promo codes, flash sales, and travel tips &mdash; up to $20 off your next booking.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                backgroundColor: '#042F3E',
                border: '1px solid rgba(148,184,196,0.2)',
                color: '#E8F4F8',
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid #00D4AA';
                e.target.style.boxShadow = '0 0 0 4px rgba(0,212,170,0.15)';
              }}
              onBlur={(e) => {
                e.target.style.border = '1px solid rgba(148,184,196,0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shrink-0"
              style={{
                backgroundColor: '#D9A66C',
                color: '#011C27',
              }}
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs mt-4" style={{ color: 'rgba(148,184,196,0.6)' }}>
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
