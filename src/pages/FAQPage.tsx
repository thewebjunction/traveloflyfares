import { useEffect, useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const faqs = [
  {
    category: 'Booking',
    items: [
      {
        q: 'How can I book a flight through Traveloflyfares?',
        a: 'Booking a flight is simple. You can explore available flight options on our website or contact our travel support team for assistance with selecting and reserving your preferred itinerary. Call us at +1 (833) 701-0952 and our agents will guide you through the entire process.',
      },
      {
        q: 'How long does it take to receive my booking confirmation?',
        a: 'Once your reservation is successfully completed and payment is processed, your booking details and e-ticket information will be sent to the email address provided during the booking process, typically within a few minutes to a few hours.',
      },
      {
        q: 'Are there any hidden fees when booking with Traveloflyfares?',
        a: 'We believe in transparent pricing. Any applicable service fees or charges will be clearly communicated before you complete your booking. We do not add hidden charges after confirmation.',
      },
    ],
  },
  {
    category: 'Changes & Cancellations',
    items: [
      {
        q: 'Can I modify or cancel my booking after confirmation?',
        a: 'Changes and cancellations may be possible depending on the airline\'s policies and fare rules. Contact our support team as soon as possible, and we\'ll help you understand the available options. Some fares may include restrictions or may be non-refundable.',
      },
      {
        q: 'What is the 24-hour cancellation policy?',
        a: 'Some airlines may provide a 24-hour cancellation option after booking, depending on their policies. Eligibility depends on the airline and fare conditions — not all bookings qualify for free cancellation within 24 hours.',
      },
      {
        q: 'How long does a refund take to process?',
        a: 'Refund processing times vary depending on the airline, payment provider, and financial institution. Airlines may take several business days to approve refunds, and banks may take additional time to reflect the amount in your account.',
      },
    ],
  },
  {
    category: 'Flights & Services',
    items: [
      {
        q: 'Do you offer domestic and international flight options?',
        a: 'Yes, Traveloflyfares helps travelers explore both domestic and international flight options across a wide range of destinations and airline partners, including business class and group travel.',
      },
      {
        q: 'Are baggage allowances included with every ticket?',
        a: 'Baggage allowances vary by airline, route, and fare type. We recommend reviewing the baggage policy associated with your selected itinerary before completing your booking.',
      },
      {
        q: 'Do you offer last-minute flight bookings?',
        a: 'Yes, we can assist with last-minute flight bookings. Our travel experts have access to a wide network of airlines and can help you find available options even on short notice. Call us directly for the fastest assistance.',
      },
      {
        q: 'Can you help with group travel bookings?',
        a: 'Absolutely. We offer dedicated assistance for group travel bookings. Our team can help coordinate flights for families, corporate groups, or any party traveling together, often with special group fare considerations.',
      },
    ],
  },
  {
    category: 'Support & Contact',
    items: [
      {
        q: 'How can I contact customer support?',
        a: 'Our customer support team is available to assist with booking inquiries, reservation-related questions, and general travel assistance. Call us at +1 (833) 701-0952 or email support@traveloflyfaresllc.com.',
      },
      {
        q: 'What are your customer support hours?',
        a: 'Our travel support team is available around the clock to assist you. You can reach us 24/7 by phone or email for any travel-related assistance.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string>('');

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const toggle = (key: string) => setOpenKey(openKey === key ? '' : key);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>
      {/* Hero */}
      <div className="pt-32 pb-16 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[860px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Frequently Asked Questions
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Find answers to the most common questions about booking, cancellations, and our services.
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="section-padding py-16">
        <div className="content-max max-w-[860px] mx-auto space-y-12">
          {faqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold mb-6" style={{ color: '#1F2937' }}>{cat.category}</h2>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(14,165,233,0.15)', backgroundColor: '#ffffff' }}>
                {cat.items.map((item, i) => {
                  const key = `${cat.category}-${i}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={i} style={{ borderBottom: i < cat.items.length - 1 ? '1px solid rgba(14,165,233,0.12)' : 'none' }}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                      >
                        <span className="text-base font-semibold pr-4" style={{ color: '#1F2937' }}>{item.q}</span>
                        <ChevronDown
                          size={18}
                          className="shrink-0 transition-transform duration-300"
                          style={{ color: '#0EA5E9', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section-padding py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>Still Have Questions?</h2>
          <p className="text-sm mb-8" style={{ color: '#6B7280' }}>Our travel experts are available 24/7 to help you with any questions or booking needs.</p>
          <a
            href="tel:+18337010952"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
            style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
          >
            <Phone size={18} />
            +1 (833) 701-0952
          </a>
        </div>
      </div>
    </div>
  );
}
