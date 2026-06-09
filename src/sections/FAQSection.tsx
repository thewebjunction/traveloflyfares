import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'How do I book a flight with Travelofly Fares?',
    a: 'Booking a flight is easy! Simply use our search form above to enter your travel details \u2014 departure city, destination, dates, and number of passengers. Our travel experts will then contact you with the best available options and guide you through the booking process. You can also call us directly at +1 (833) 701-0952 for personalized assistance.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Our cancellation policy varies depending on the airline and fare type. Most bookings can be cancelled within 24 hours for a full refund. For other cancellations, fees may apply based on the airline\'s policy. Our agents will always inform you of the specific cancellation terms before you complete your booking.',
  },
  {
    q: 'Can I make changes to my existing reservation?',
    a: 'Yes, you can make changes to your reservation. We offer support for date changes, route modifications, passenger name corrections, and other adjustments. Change fees depend on the airline\'s policy. Contact our 24/7 support team at +1 (833) 701-0952 and we\'ll handle the changes for you.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'Absolutely not. The price we quote is the price you pay. All fares displayed on our website are inclusive of taxes and fees. We believe in transparent pricing with no surprises. Any optional add-ons (like travel insurance or seat selection) will always be clearly presented before you confirm.',
  },
  {
    q: 'How do I receive my e-ticket?',
    a: 'Once your booking is confirmed and payment is processed, your e-ticket will be emailed to you within minutes. You\'ll also receive a booking confirmation with your reservation details. If you need assistance, our team can resend your tickets or help you with check-in.',
  },
  {
    q: 'Do you offer travel insurance?',
    a: 'Yes, we offer comprehensive travel insurance options that cover trip cancellation, medical emergencies, baggage loss, and flight delays. Our agents can help you choose the right coverage for your trip. We highly recommend travel insurance for international journeys.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, y: 30 });

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="bus" className="bg-abyss section-padding">
      <div className="content-max" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-12 reveal-child">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl mb-4"
            style={{ color: '#E8F4F8' }}
          >
            Frequently Asked Questions
          </h2>
          <div
            className="w-[60px] h-[2px] mx-auto"
            style={{ backgroundColor: '#D9A66C' }}
          />
        </div>

        {/* Accordion */}
        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal-child"
              style={{
                borderTop: '1px solid rgba(148,184,196,0.15)',
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span
                  className="text-base md:text-lg font-semibold pr-4"
                  style={{ color: '#E8F4F8' }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    color: '#94B8C4',
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
                  style={{ color: '#94B8C4' }}
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
