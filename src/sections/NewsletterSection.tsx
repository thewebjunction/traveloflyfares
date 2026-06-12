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
        backgroundColor: '#F0F9FF',
        borderTop: '1px solid rgba(14,165,233,0.1)',
      }}
    >
      <div className="content-max" ref={sectionRef}>
        <div className="reveal-child max-w-[560px] mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl mb-4"
            style={{ color: '#1F2937' }}
          >
            Get Exclusive Deals
          </h2>
          <p className="text-sm md:text-base mb-8" style={{ color: '#6B7280' }}>
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
                backgroundColor: '#ffffff',
                border: '1px solid rgba(107,114,128,0.2)',
                color: '#1F2937',
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid #0EA5E9';
                e.target.style.boxShadow = '0 0 0 4px rgba(14,165,233,0.15)';
              }}
              onBlur={(e) => {
                e.target.style.border = '1px solid rgba(107,114,128,0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shrink-0"
              style={{
                backgroundColor: '#0EA5E9',
                color: '#ffffff',
              }}
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs mt-4" style={{ color: 'rgba(107,114,128,0.6)' }}>
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
