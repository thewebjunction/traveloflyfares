import { useEffect, useState } from 'react';
import { Phone, Plane, CheckCircle, ChevronDown, Shield } from 'lucide-react';

const useCases = [
  {
    title: 'Corporate Charters',
    category: 'Business Travel',
    desc: 'Private charter flights for executive teams, board meetings, investor roadshows, and business delegations requiring maximum discretion, speed, and scheduling flexibility.',
    benefits: ['Custom departure times', 'Privacy and confidentiality', 'No commercial airline delays'],
  },
  {
    title: 'Sports Teams & Events',
    category: 'Athletic Travel',
    desc: 'Charter coordination for professional sports teams, athletic groups, collegiate programs, and competitive delegations — with equipment-friendly cargo options and synchronized team scheduling.',
    benefits: ['Equipment baggage coordination', 'Team-only cabin', 'Flexible departure windows'],
  },
  {
    title: 'Destination Weddings & Events',
    category: 'Celebration Travel',
    desc: 'Fly your entire wedding party or event guests on a private or semi-private charter, ensuring everyone travels together and arrives ready to celebrate.',
    benefits: ['All guests on one flight', 'Customizable in-flight service', 'Coordinated arrival times'],
  },
  {
    title: 'Medical & Emergency Charters',
    category: 'Critical Transport',
    desc: 'Urgent charter arrangements for medical evacuations, patient transfers, organ transport, and any time-critical travel where commercial options are too slow or unavailable.',
    benefits: ['Immediate departure options', 'Medical equipment accommodation', 'Cleared priority routing'],
  },
  {
    title: 'Large Group Charters',
    category: 'Mass Travel',
    desc: 'When group bookings aren\'t enough — full aircraft charter for 100 to 500+ passengers traveling together on the same route, including incentive travel and employee programs.',
    benefits: ['Full aircraft available', 'Customized passenger experience', 'Bulk pricing available'],
  },
  {
    title: 'Remote & Special Destinations',
    category: 'Access Travel',
    desc: 'Reach destinations not well served by commercial airlines — remote islands, private airstrips, smaller regional airports, and international locations with limited scheduled service.',
    benefits: ['Access to private airstrips', 'Remote destination routing', 'No commercial route required'],
  },
];

const process = [
  {
    number: '01',
    title: 'Initial Inquiry',
    desc: 'Call our charter desk and describe your travel requirements: departure location, destination, date, passenger count, and any special needs such as cargo, medical equipment, or onboard catering.',
  },
  {
    number: '02',
    title: 'Charter Research',
    desc: 'Our team researches available aircraft, charter operators, and routing options that meet your specifications. We gather competitive quotes from our network of charter providers.',
  },
  {
    number: '03',
    title: 'Proposal Presentation',
    desc: 'We present you with a detailed charter proposal including aircraft type, operator details, full itinerary, pricing breakdown, and any applicable terms or conditions.',
  },
  {
    number: '04',
    title: 'Contract & Payment',
    desc: 'Once you approve the charter, we facilitate the contract process and payment arrangements. Deposits and payment schedules vary depending on the charter operator and booking lead time.',
  },
  {
    number: '05',
    title: 'Pre-Flight Coordination',
    desc: 'We coordinate all pre-flight logistics: passenger manifest, special catering requests, ground transportation coordination, and any customs or documentation requirements for international charters.',
  },
  {
    number: '06',
    title: 'Day-of Support',
    desc: 'Our team is available on your departure day to assist with any last-minute changes, logistics questions, or issues that arise at the terminal or with the charter operator.',
  },
];

const advantages = [
  { title: 'Custom Departure Times', desc: 'Fly on your schedule — not the airline\'s. Choose the exact departure time that works for your group.' },
  { title: 'No Layovers', desc: 'Fly direct to your destination without connections, stopovers, or commercial routing constraints.' },
  { title: 'Private Terminal Access', desc: 'Many charter flights use private FBOs (Fixed Base Operators) with faster security and more privacy.' },
  { title: 'Flexible Baggage & Cargo', desc: 'Charter flights accommodate oversized luggage, sports equipment, medical devices, and cargo that commercial airlines won\'t carry.' },
  { title: 'Full Aircraft or Seat Block', desc: 'Arrange a full aircraft charter or a private block of seats, depending on your group size and budget.' },
  { title: 'Aircraft Selection', desc: 'Choose from a wide range of aircraft sizes — from light jets for small groups to wide-body jets for 400+ passengers.' },
  { title: 'Custom Onboard Experience', desc: 'Arrange custom catering, branding, specific seating configurations, and entertainment for your charter flight.' },
  { title: 'Dedicated Specialist', desc: 'A single point of contact manages your charter from inquiry to touchdown — no call center handoffs.' },
];

const faqs = [
  {
    q: 'What is the minimum group size for a charter flight?',
    a: 'There\'s no strict minimum — charters can be arranged for as few as 2-4 passengers on a small jet, up to 400+ on a wide-body aircraft. The economics of a charter typically make most sense for groups that can fill most or all of an aircraft.',
  },
  {
    q: 'How much does a charter flight cost?',
    a: 'Charter pricing varies enormously based on the aircraft type, route, flight duration, and availability. A light jet for a short domestic hop might start at a few thousand dollars, while a full wide-body international charter can run into six figures. Call us for a quote specific to your needs.',
  },
  {
    q: 'How far in advance do I need to book a charter?',
    a: 'Charter availability can sometimes be arranged with very short notice (24–48 hours), but for best availability, pricing, and aircraft choice, booking 2–4 weeks in advance is recommended. For international or large-group charters, 4–8 weeks is preferred.',
  },
  {
    q: 'Can you arrange charter flights internationally?',
    a: 'Yes. We assist with both domestic and international charter arrangements. International charters require additional coordination for overflight permits, customs clearance, landing rights, and passenger documentation, which we handle on your behalf.',
  },
  {
    q: 'What types of aircraft are available for charter?',
    a: 'Available aircraft range from turboprops and light jets (4–8 passengers), midsize jets (8–10 passengers), and large cabin jets (12–16 passengers), up to commercial airliners (100–500+ passengers) for full aircraft charters. We match the aircraft to your specific group size and route.',
  },
  {
    q: 'Is charter travel safe?',
    a: 'Yes. Reputable charter operators are subject to FAA Part 135 regulations in the US (or equivalent international standards), which govern safety standards, pilot certification, aircraft maintenance, and operational procedures. We only work with operators that meet these standards.',
  },
];

export default function CharterFlightsPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-20 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[900px] mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>Exclusive Travel</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight" style={{ color: '#ffffff' }}>
            Charter Flights
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 32px' }}>
            For when commercial flights just won't do. We assist in arranging charter flight options for corporate, medical, group, sports, and special travel needs — with complete scheduling flexibility, privacy, and dedicated support from inquiry to landing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18337010952"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
            >
              <Phone size={18} /> Inquire About Charters — +1 (833) 701-0952
            </a>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>Available 24/7 · All aircraft types</div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="section-padding py-8" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: 'Any Size', label: 'Group Capacity' },
              { val: 'Global', label: 'Charter Coverage' },
              { val: '24/7', label: 'Charter Desk' },
              { val: 'Custom', label: 'Scheduling Flexibility' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black mb-1" style={{ color: '#ffffff' }}>{s.val}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Use Cases ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Charter Flight Solutions</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Plane size={16} style={{ color: '#0EA5E9' }} />
                  <h3 className="font-bold text-sm" style={{ color: '#1F2937' }}>{u.title}</h3>
                </div>
                <p className="text-xs font-medium mb-3" style={{ color: '#0EA5E9' }}>{u.category}</p>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#6B7280' }}>{u.desc}</p>
                <ul className="space-y-1">
                  {u.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs" style={{ color: '#6B7280' }}>
                      <CheckCircle size={11} style={{ color: '#0EA5E9', flexShrink: 0 }} /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>The Charter Process</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.number} className="p-6 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)' }}>
                <div className="text-4xl font-black mb-4" style={{ color: 'rgba(14,165,233,0.2)' }}>{step.number}</div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#1F2937' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Advantages ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Charter Flight Advantages</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)' }}>
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#0EA5E9' }} />
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#1F2937' }}>{a.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Safety Trust Badge ── */}
      <div className="section-padding py-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <div className="flex items-center gap-5 p-6 rounded-2xl" style={{ backgroundColor: '#F0F9FF', border: '1px solid rgba(14,165,233,0.2)' }}>
            <Shield size={40} style={{ color: '#0EA5E9', flexShrink: 0 }} />
            <div>
              <h3 className="font-bold mb-1 text-sm" style={{ color: '#1F2937' }}>Safety-First Charter Partner Selection</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We only facilitate charters through operators that meet FAA Part 135 standards (US) or equivalent international aviation regulations. Safety certifications, pilot qualifications, and maintenance records are part of every operator we work with.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[760px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Charter Flight FAQs</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(14,165,233,0.15)', backgroundColor: '#F0F9FF' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(14,165,233,0.1)' : 'none' }}>
                  <button onClick={() => setOpenFaq(isOpen ? -1 : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                    <span className="font-semibold text-sm pr-4" style={{ color: '#1F2937' }}>{faq.q}</span>
                    <ChevronDown size={18} className="shrink-0 transition-transform duration-300" style={{ color: '#0EA5E9', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}>
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#6B7280' }}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[640px] mx-auto text-center">
          <Plane size={32} className="mx-auto mb-4" style={{ color: '#0EA5E9' }} />
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Request a Charter Quote</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Charter flight pricing is unique to your route, aircraft type, and schedule. Call our charter specialists for a personalized quote — no obligation, no automated systems.
          </p>
          <a href="tel:+18337010952" className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5" style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}>
            <Phone size={20} /> +1 (833) 701-0952
          </a>
          <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Available 24 hours a day, 7 days a week · Domestic & International Charters</p>
        </div>
      </div>

    </div>
  );
}
