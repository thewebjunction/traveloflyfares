import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'How can I book a flight through Traveloflyfares?',
    a: 'Booking a flight is simple. You can explore available flight options on our website or contact our travel support team for assistance with selecting and reserving your preferred itinerary.',
  },
  {
    q: 'Can I modify or cancel my booking after confirmation?',
    a: 'Changes and cancellations may be possible depending on the airline\'s policies and fare rules. Contact our support team as soon as possible, and we\'ll help you understand the available options.',
  },
  {
    q: 'When will I receive my booking confirmation?',
    a: 'Once your reservation is successfully completed and confirmed, your booking details and e-ticket information will be sent to the email address provided during the booking process.',
  },
  {
    q: 'Do you offer domestic and international flight options?',
    a: 'Yes, Traveloflyfares helps travelers explore both domestic and international flight options across a wide range of destinations and airline partners.',
  },
  {
    q: 'Are baggage allowances included with every ticket?',
    a: 'Baggage allowances vary by airline, route, and fare type. We recommend reviewing the baggage policy associated with your selected itinerary before completing your booking.',
  },
  {
    q: 'How can I contact customer support?',
    a: 'Our customer support team is available to assist with booking inquiries, reservation-related questions, and general travel assistance. You can reach us by phone or email through the contact information provided on our website.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, y: 30 });

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="bus" className="section-padding" style={{ backgroundColor: '#F0F9FF' }}>
      <div className="content-max" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-12 reveal-child">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl mb-4"
            style={{ color: '#1F2937' }}
          >
            Frequently Asked Questions
          </h2>
          <div
            className="w-[60px] h-[2px] mx-auto"
            style={{ backgroundColor: '#0EA5E9' }}
          />
        </div>

        {/* Accordion */}
        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal-child"
              style={{
                borderTop: '1px solid rgba(14,165,233,0.15)',
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span
                  className="text-base md:text-lg font-semibold pr-4"
                  style={{ color: '#1F2937' }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    color: '#6B7280',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p
                  className="pb-5 text-sm md:text-base leading-relaxed"
                  style={{ color: '#6B7280' }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(148,184,196,0.15)' }} />
        </div>
      </div>
    </section>
  );
}
