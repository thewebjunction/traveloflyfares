import { useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const sections = [
  {
    number: '1',
    title: 'General Cancellation Guidelines',
    body: 'Traveloflyfares operates as a travel service provider and works with third-party airlines and travel partners. Cancellation and refund conditions may vary depending on the airline policies, selected fare type, travel route, and ticket rules.',
    subsections: [
      {
        heading: 'Service Fees and Charges',
        body: 'Any service fees, processing charges, or convenience fees charged by Traveloflyfares may be non-refundable. Certain promotional, discounted, or restricted fares may not qualify for refunds based on airline rules.',
      },
      {
        heading: 'Airline Policies Apply',
        bullets: [
          'Airlines determine refund eligibility',
          'Applicable penalties are decided according to fare rules',
          'Airline decisions regarding refunds are final',
        ],
      },
      {
        heading: 'Cancellation Charges May Include',
        bullets: [
          'Airline cancellation penalties',
          'Applicable service fees',
          'Fare differences or other charges based on ticket conditions',
        ],
      },
    ],
  },
  {
    number: '2',
    title: 'How To Request a Cancellation',
    body: 'To request a cancellation, customers must contact the Traveloflyfares support team. A cancellation is considered processed only after confirmation from our team.',
    subsections: [
      {
        heading: 'For a smoother process:',
        bullets: [
          'Submit cancellation requests as early as possible',
          'Keep your booking details available',
          'Wait for confirmation from our support team',
        ],
      },
    ],
  },
  {
    number: '3',
    title: '24-Hour Cancellation Policy',
    body: 'Some airlines may provide a 24-hour cancellation option after booking, depending on their policies. Traveloflyfares does not control airline-specific cancellation policies.',
    subsections: [
      {
        heading: 'Please note:',
        bullets: [
          'Eligibility depends on the airline and fare conditions',
          'Not all bookings qualify for free cancellation',
          'Refund approval is subject to airline rules',
        ],
      },
    ],
  },
  {
    number: '4',
    title: 'Flexible Fare Options',
    body: 'Some airlines may offer flexible booking options or additional protection plans that may provide reduced cancellation penalties, extended cancellation flexibility, or additional benefits. These options are controlled by the airline or travel provider.',
    subsections: [
      {
        heading: 'Possible benefits include:',
        bullets: [
          'Reduced cancellation penalties',
          'Extended cancellation flexibility',
          'Additional benefits based on selected terms',
        ],
      },
    ],
  },
  {
    number: '5',
    title: 'Important Cancellation Conditions',
    body: 'Customers should consider the following when requesting a cancellation:',
    subsections: [
      {
        heading: '',
        bullets: [
          'Cancellation fees may increase closer to the departure date',
          'Removing a passenger from a booking may result in fare recalculation',
          'Refund eligibility may differ for round-trip or multi-city bookings',
          'Partially used tickets may only qualify for refunds on unused portions, if permitted by airline rules',
        ],
      },
    ],
  },
  {
    number: '6',
    title: 'Refund Policy',
    body: 'Traveloflyfares assists customers with the refund process; however, refund approval and amounts are determined by airline policies. Traveloflyfares cannot modify airline refund decisions.',
    subsections: [
      {
        heading: 'Refund eligibility depends on:',
        bullets: [
          'Airline fare rules',
          'Ticket conditions',
          'Cancellation timing',
          'Applicable deductions or penalties',
        ],
      },
      {
        heading: 'Non-Refundable Bookings',
        body: 'Some tickets may become non-refundable after purchase, qualify only for partial refunds, or include deductions based on airline conditions.',
      },
      {
        heading: 'No-Show Policy',
        body: 'If a traveler does not board the flight and does not cancel before departure, the booking may be considered a "no-show." No-show bookings are generally non-refundable unless the airline provides an exception.',
      },
    ],
  },
  {
    number: '7',
    title: 'Refund Processing Method',
    body: 'Approved refunds are generally returned through the original payment method used during booking. Refunds are usually processed in the name of the original booking customer.',
    subsections: [
      {
        heading: 'Examples:',
        bullets: [
          'Credit/Debit Card payments: Refunded to the original card',
          'Online payment methods: Returned through the applicable payment channel',
        ],
      },
    ],
  },
  {
    number: '8',
    title: 'Refund Timeline',
    body: 'Refund processing times may vary depending on airlines, payment providers, and financial institutions. Traveloflyfares is not responsible for delays caused by airlines, banks, or payment systems but will assist with refund status updates when requested.',
    subsections: [
      {
        heading: 'Generally:',
        bullets: [
          'Airlines may take several business days to process refunds',
          'Some refunds may require additional processing time',
          'Banks or payment providers may take additional time to reflect the amount',
        ],
      },
    ],
  },
  {
    number: '9',
    title: 'Our Role and Responsibility',
    body: 'Traveloflyfares acts as an intermediary between travelers and third-party travel providers.',
    subsections: [
      {
        heading: 'We assist customers by:',
        bullets: [
          'Helping submit cancellation requests',
          'Providing information about applicable policies',
          'Supporting communication regarding refund status',
        ],
      },
      {
        heading: 'However:',
        bullets: [
          'We cannot guarantee refund approval',
          'We do not control airline policies',
          'We do not determine airline processing timelines',
        ],
      },
    ],
  },
];

export default function CancellationPolicyPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-16 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[860px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Cancellation & Refund Policy
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 620, margin: '0 auto' }}>
            We understand that travel plans may change. This policy explains the cancellation and refund process so you understand your available options.
          </p>
        </div>
      </div>

      {/* ── Intro card ── */}
      <div className="section-padding pt-16 pb-4">
        <div className="content-max max-w-[860px] mx-auto">
          <div
            className="p-7 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 24px rgba(14,165,233,0.06)' }}
          >
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B7280' }}>
              At Traveloflyfares, we understand that travel plans may change due to unexpected situations, personal commitments, or schedule adjustments. Our goal is to provide clear information about the cancellation and refund process so travelers can understand their available options.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
              This Cancellation & Refund Policy explains the terms related to booking cancellations, refund eligibility, applicable charges, and processing timelines. By using our services, you agree to the guidelines mentioned below.
            </p>
          </div>
        </div>
      </div>

      {/* ── Policy Sections ── */}
      <div className="section-padding py-12">
        <div className="content-max max-w-[860px] mx-auto space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.04)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                  style={{ backgroundColor: 'rgba(14,165,233,0.12)', color: '#0EA5E9' }}
                >
                  {section.number}
                </span>
                <h2 className="text-lg font-bold pt-1" style={{ color: '#1F2937' }}>{section.title}</h2>
              </div>

              {section.body && (
                <p className="text-sm leading-relaxed mb-5 pl-12" style={{ color: '#6B7280' }}>{section.body}</p>
              )}

              {section.subsections && (
                <div className="pl-12 space-y-4">
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      {sub.heading && (
                        <h3 className="text-sm font-semibold mb-2" style={{ color: '#0EA5E9' }}>{sub.heading}</h3>
                      )}
                      {sub.body && (
                        <p className="text-sm leading-relaxed mb-2" style={{ color: '#6B7280' }}>{sub.body}</p>
                      )}
                      {sub.bullets && (
                        <ul className="space-y-1.5">
                          {sub.bullets.map((b, k) => (
                            <li key={k} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#0EA5E9' }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact CTA ── */}
      <div className="section-padding py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[860px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Questions About Your Cancellation?</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-center text-sm mb-10" style={{ color: '#6B7280' }}>
            We recommend contacting us as soon as possible when your travel plans change so we can assist you with the available options.
          </p>
          <div
            className="p-6 rounded-2xl mb-8"
            style={{ border: '1px solid rgba(14,165,233,0.15)' }}
          >
            <div className="flex flex-col gap-4">
              <a href="tel:+18337010952" className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <Phone size={16} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                +1 (833) 701-0952
              </a>
              <a href="mailto:support@traveloflyfaresllc.com" className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <Mail size={16} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                support@traveloflyfaresllc.com
              </a>
              <span className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <MapPin size={16} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                915 MAIN ST, 805, HARTFORD, CT, 06103, United States
              </span>
            </div>
          </div>
          <div className="text-center">
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

    </div>
  );
}
