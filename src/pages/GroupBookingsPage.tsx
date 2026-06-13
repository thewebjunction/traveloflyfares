import { useEffect, useState } from 'react';
import { Phone, Users, CheckCircle, ChevronDown, Star } from 'lucide-react';

const groupTypes = [
  {
    title: 'Family Vacations',
    size: '6–20 passengers',
    desc: 'Coordinate flights for the whole family — from toddlers to grandparents — with dedicated seat grouping, meal preferences, and luggage coordination.',
    highlights: ['Seat grouping assistance', 'Child-friendly scheduling', 'Flexible fare options'],
  },
  {
    title: 'Corporate Travel',
    size: '10–100+ passengers',
    desc: 'Streamline business travel for your team with dedicated group booking support, consistent itineraries, and invoice-based payment options for corporate accounts.',
    highlights: ['Consolidated itineraries', 'Corporate billing', 'Priority support'],
  },
  {
    title: 'School & Student Groups',
    size: '15–200 passengers',
    desc: 'Affordable group fares for school trips, educational tours, student exchanges, and university field programs, with flexible cancellation consideration.',
    highlights: ['Educational fare options', 'Chaperone coordination', 'Safety-focused scheduling'],
  },
  {
    title: 'Sports Teams & Events',
    size: '10–50 passengers',
    desc: 'Coordinate travel for sports teams, athletic delegations, and competitive events with equipment-friendly baggage options and synchronized departure times.',
    highlights: ['Equipment baggage handling', 'Synchronized schedules', 'Team seat blocks'],
  },
  {
    title: 'Weddings & Celebrations',
    size: '10–150 passengers',
    desc: 'Ensure all your guests arrive together for destination weddings, milestone birthdays, anniversary celebrations, or any special group occasion.',
    highlights: ['Guest coordination', 'Destination expertise', 'Flexible add-on seats'],
  },
  {
    title: 'Tour & Travel Groups',
    size: '15–500 passengers',
    desc: 'Full-service group travel coordination for tour operators, travel agencies, and organized tour groups on domestic and international routes.',
    highlights: ['Bulk fare negotiation', 'Multi-leg coordination', 'Agency billing'],
  },
];

const process = [
  {
    number: '01',
    title: 'Contact Our Group Desk',
    desc: 'Call or email our dedicated group booking team with your origin, destination, travel dates, passenger count, and any special requirements.',
  },
  {
    number: '02',
    title: 'Receive Your Custom Quote',
    desc: 'Our specialists research group fares across multiple airlines and present you with available options tailored to your group size, budget, and preferences.',
  },
  {
    number: '03',
    title: 'Review & Approve',
    desc: 'We send you a clear breakdown of the proposed itinerary, fares, and any applicable fees. You review and approve before any booking is made.',
  },
  {
    number: '04',
    title: 'Booking & Confirmation',
    desc: 'Once approved, we handle all individual seat bookings, coordinate seat assignments, and send itineraries to the group organizer or each traveler.',
  },
  {
    number: '05',
    title: 'Pre-Departure Support',
    desc: 'We stay available up until your departure date for any changes, additions to the group, or questions about documents and travel requirements.',
  },
  {
    number: '06',
    title: 'Day-of-Travel Assistance',
    desc: 'Our support team is available 24/7 on the day of departure to assist with any last-minute issues, delays, or rebooking needs.',
  },
];

const advantages = [
  { title: 'Dedicated Group Specialist', desc: 'A single point of contact manages your entire group booking from start to finish.' },
  { title: 'Competitive Group Fares', desc: 'Group bookings often unlock fares and availability not accessible through standard channels.' },
  { title: 'Seat Block Coordination', desc: 'We work to keep your group seated together or in coordinated sections on the aircraft.' },
  { title: 'Domestic & International Routes', desc: 'We coordinate group travel on domestic US routes and international flights worldwide.' },
  { title: 'Flexible Payment Options', desc: 'We accommodate various payment arrangements for group bookings including deposit structures.' },
  { title: 'Name Change Flexibility', desc: 'Group bookings sometimes allow name changes before departure — our agents explain what\'s possible.' },
  { title: 'Special Dietary & Meal Requests', desc: 'We help submit special meal requests for individual travelers within your group.' },
  { title: 'Baggage Coordination', desc: 'We advise on group baggage policies and help coordinate any excess luggage or sports equipment.' },
];

const faqs = [
  {
    q: 'What is the minimum group size for a group booking?',
    a: 'Most airlines define a "group" as 10 or more passengers traveling on the same itinerary. However, we can assist with coordinated bookings for smaller parties as well. Call us to discuss your specific needs.',
  },
  {
    q: 'Can group members travel on different dates or return flights?',
    a: 'Yes, it\'s possible to coordinate group bookings where some members have different return dates or connecting flights. Our agents will structure the booking to accommodate individual variations where possible.',
  },
  {
    q: 'How far in advance should I book a group trip?',
    a: 'For large groups (50+ passengers), booking 3–6 months in advance is strongly recommended to ensure seat availability and competitive fares. Smaller groups (10–30) can often be arranged with 4–8 weeks of lead time.',
  },
  {
    q: 'Can you coordinate international group flights?',
    a: 'Yes. We handle both domestic and international group bookings across all major destinations. International group travel often requires more lead time for visa coordination and special documentation.',
  },
  {
    q: 'What happens if a group member needs to cancel?',
    a: 'Cancellation policies for group bookings depend on the airline and the specific fare type. Our agents will clearly explain cancellation terms and any applicable penalties before you confirm the group booking.',
  },
  {
    q: 'Do you handle charter flights for very large groups?',
    a: 'Yes, for very large groups or special travel requirements, we can also assist with charter flight arrangements. Call our group desk to discuss charter options for groups that exceed standard airline capacity.',
  },
];

const testimonials = [
  {
    name: 'Jennifer L.',
    role: 'Event Coordinator',
    text: 'Coordinated flights for 45 guests to our destination wedding in Cancun. Every detail was handled perfectly. I can\'t recommend them enough.',
    stars: 5,
  },
  {
    name: 'Marcus T.',
    role: 'Corporate Travel Manager',
    text: 'Our team of 30 travels quarterly. Since switching to Traveloflyfares for group bookings, the process has been seamless and we save on every trip.',
    stars: 5,
  },
  {
    name: 'Coach Daniel R.',
    role: 'Athletic Director',
    text: 'Handled our high school basketball team\'s flights across 3 tournaments this season. Always reliable, always coordinated.',
    stars: 4,
  },
];

export default function GroupBookingsPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-20 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[900px] mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>Travel Together</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight" style={{ color: '#ffffff' }}>
            Group Bookings
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg mb-4" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 24px' }}>
            Planning travel for 10 or more people? Our dedicated group booking specialists make it easy to coordinate flights, seating, and itineraries for any size group — families, corporate teams, schools, weddings, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="tel:+18337010952"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
            >
              <Phone size={18} /> Call Group Desk — +1 (833) 701-0952
            </a>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>10+ passengers · Domestic & International</div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="section-padding py-8" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '10+', label: 'Minimum Group Size' },
              { val: '500+', label: 'Airlines Searched' },
              { val: '24/7', label: 'Group Support' },
              { val: '100%', label: 'Dedicated Specialist' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black mb-1" style={{ color: '#ffffff' }}>{s.val}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Group Types ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Who We Help Travel Together</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {groupTypes.map((g) => (
              <div
                key={g.title}
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Users size={18} style={{ color: '#0EA5E9' }} />
                  <h3 className="font-bold" style={{ color: '#1F2937' }}>{g.title}</h3>
                </div>
                <p className="text-xs font-medium mb-3" style={{ color: '#0EA5E9' }}>{g.size}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>{g.desc}</p>
                <ul className="mt-auto space-y-1">
                  {g.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs" style={{ color: '#6B7280' }}>
                      <CheckCircle size={12} style={{ color: '#0EA5E9', flexShrink: 0 }} /> {h}
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>How Group Booking Works</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.number} className="p-6 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)' }}>
                <div className="text-4xl font-black mb-4" style={{ color: 'rgba(14,165,233,0.2)' }}>{step.number}</div>
                <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Advantages ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Group Booking Advantages</h2>
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

      {/* ── Testimonials ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>What Group Organizers Say</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.06)' }}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill={s <= t.stars ? '#0EA5E9' : 'transparent'} style={{ color: '#0EA5E9' }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#6B7280' }}>"{t.text}"</p>
                <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>— {t.name}</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[760px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Group Booking FAQs</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(14,165,233,0.15)', backgroundColor: '#ffffff' }}>
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
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Get a Group Quote Today</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Speak with our group travel specialists and get a personalized quote for your group of 10 or more — for any domestic or international destination.
          </p>
          <a href="tel:+18337010952" className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5" style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}>
            <Phone size={20} /> +1 (833) 701-0952
          </a>
          <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Available 24 hours a day, 7 days a week</p>
        </div>
      </div>

    </div>
  );
}
