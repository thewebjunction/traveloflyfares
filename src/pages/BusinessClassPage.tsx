import { useEffect, useState } from 'react';
import { Phone, Star, Shield, CheckCircle, ChevronDown } from 'lucide-react';

const amenities = [
  {
    title: 'Lie-Flat Seats',
    desc: 'Fully reclining seats that convert to flat beds for maximum comfort on long-haul and overnight flights, so you arrive rested and ready.',
    detail: 'Available on most intercontinental routes',
  },
  {
    title: 'Priority Boarding',
    desc: 'Skip the queues with dedicated priority boarding lanes and early access to the aircraft — more time to settle in before departure.',
    detail: 'Standard on all business class bookings',
  },
  {
    title: 'Premium Dining',
    desc: 'Enjoy gourmet meals curated by top chefs, served on demand with complimentary premium beverages, wine, and champagne.',
    detail: 'Full service on all long-haul routes',
  },
  {
    title: 'Airport Lounge Access',
    desc: 'Relax in exclusive airline or partner lounges before your flight with complimentary food, beverages, showers, and high-speed Wi-Fi.',
    detail: 'Available at most major international airports',
  },
  {
    title: 'Generous Baggage Allowance',
    desc: 'Business class passengers receive significantly higher baggage allowances — typically 2 checked bags at higher weight limits.',
    detail: 'Allowances vary by airline and route',
  },
  {
    title: 'Personal Service',
    desc: 'Attentive cabin crew providing personalized service tailored to your comfort — from meal preferences to sleep turndown service.',
    detail: 'Enhanced crew-to-passenger ratios',
  },
  {
    title: 'Enhanced Privacy',
    desc: 'Direct aisle access seats, privacy dividers, and suite configurations on premium carriers ensure a personal, distraction-free experience.',
    detail: 'On select airlines and aircraft types',
  },
  {
    title: 'In-Flight Entertainment',
    desc: 'Large personal screens, noise-canceling headphones, and extensive libraries of movies, TV, music, and podcasts.',
    detail: 'Premium content library included',
  },
  {
    title: 'Wi-Fi Connectivity',
    desc: 'Stay connected at 35,000 feet with high-speed in-flight Wi-Fi on most long-haul business class cabins.',
    detail: 'Available on most routes',
  },
];

const routes = [
  { from: 'New York (JFK)', to: 'London (LHR)', note: 'Daily departures · 7h flight', price: 'From $1,499' },
  { from: 'Los Angeles (LAX)', to: 'Tokyo (NRT)', note: 'Multiple carriers · 12h flight', price: 'From $1,799' },
  { from: 'Chicago (ORD)', to: 'Paris (CDG)', note: 'Daily service · 9h flight', price: 'From $1,299' },
  { from: 'Miami (MIA)', to: 'Dubai (DXB)', note: 'Long-haul · 14h flight', price: 'From $1,599' },
  { from: 'Dallas (DFW)', to: 'Frankfurt (FRA)', note: 'Direct service · 10h flight', price: 'From $1,349' },
  { from: 'San Francisco (SFO)', to: 'Singapore (SIN)', note: 'Ultra long-haul · 17h flight', price: 'From $2,199' },
];

const airlines = [
  'American Airlines', 'Delta Air Lines', 'United Airlines', 'British Airways',
  'Emirates', 'Qatar Airways', 'Singapore Airlines', 'Lufthansa',
  'Air France', 'Cathay Pacific', 'Turkish Airlines', 'Etihad Airways',
];

const whyUs = [
  { title: 'Access to Best Fares', desc: 'We search business class fares across all airlines simultaneously, often finding prices that standard booking sites don\'t surface.' },
  { title: 'Upgrade Expertise', desc: 'Our agents know which airlines and routes are upgrade-friendly and can advise on the best strategy for your travel needs.' },
  { title: 'Seat Selection Guidance', desc: 'Not all business class seats are equal. We advise on the best seat configurations for your specific aircraft and route.' },
  { title: 'Lounge Briefing', desc: 'We\'ll tell you exactly which lounges you have access to and where they\'re located so you can make the most of your pre-flight time.' },
  { title: 'Change Flexibility Advice', desc: 'Business class tickets often carry different change and refund rules. We explain your ticket\'s flexibility before you commit.' },
  { title: 'Corporate & Points Booking', desc: 'Traveling on a corporate card or using airline points? We can advise on how to best leverage your status and rewards.' },
];

const faqs = [
  {
    q: 'How much does business class typically cost compared to economy?',
    a: 'Business class fares are typically 3–6x the cost of economy on international routes. However, fares vary enormously by airline, route, and timing. Our agents search across all carriers to find you the most competitive business class pricing currently available.',
  },
  {
    q: 'Can you help me find cheaper business class fares?',
    a: 'Yes. We have access to consolidated fares, promotional business class pricing, and can advise on the best timing to find lower-priced business class tickets. Calling us is often significantly more effective than searching booking sites independently.',
  },
  {
    q: 'Is business class worth it for shorter flights?',
    a: 'For flights under 5 hours, the business class experience is less pronounced as flat-bed seats are less relevant. That said, priority boarding, lounge access, improved meals, and extra baggage can still make it worthwhile depending on your needs and budget.',
  },
  {
    q: 'Can I use miles or points to book business class through you?',
    a: 'We primarily book paid tickets, but our agents can advise on which airlines or routes tend to have good award availability and what to look for when booking with miles on your own. Call us to discuss your options.',
  },
  {
    q: 'Are there business class options for domestic US flights?',
    a: 'Yes. Major US carriers including American, Delta, and United offer first or business class cabins on many domestic routes. Features vary — typically this includes priority boarding, wider seats, complimentary meals, and drinks on longer routes.',
  },
  {
    q: 'What\'s the difference between business class and first class?',
    a: 'On most airlines, first class offers a higher level of luxury than business class — with larger suites, more exclusivity, and premium ground services. However, many airlines have discontinued separate first class on long-haul routes, with business class now being the premium cabin.',
  },
];

const testimonials = [
  {
    name: 'Christine L.',
    role: 'Executive traveler',
    text: 'I fly to London 6 times a year for work. Since using Traveloflyfares for business class, I\'ve consistently paid less than what my corporate portal quotes and gotten better seats.',
    stars: 5,
  },
  {
    name: 'Jonathan W.',
    role: 'International consultant',
    text: 'They found me a business class seat to Singapore that was $800 less than anything I could find on the booking sites. The seat and experience were excellent.',
    stars: 5,
  },
  {
    name: 'Maria F.',
    role: 'Frequent flyer',
    text: 'The agent gave me real advice on which seats on my specific aircraft to pick and which lounge to use at Heathrow. That kind of knowledge is worth the call alone.',
    stars: 5,
  },
];

export default function BusinessClassPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-20 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(14,165,233,0.15)', color: '#0EA5E9' }}>
            <Star size={12} fill="#0EA5E9" style={{ color: '#0EA5E9' }} /> Premium Travel Experience
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight" style={{ color: '#ffffff' }}>
            Business Class Flights
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 32px' }}>
            Travel in style and arrive refreshed. Our specialists search business class fares across hundreds of airlines — domestic and international — to find you the best available seat at the most competitive price.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18337010952"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
            >
              <Phone size={18} /> Book Business Class — +1 (833) 701-0952
            </a>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>500+ airlines · 24/7 support</div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="section-padding py-8" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '500+', label: 'Airlines Searched' },
              { val: '150+', label: 'Countries Covered' },
              { val: '24/7', label: 'Expert Support' },
              { val: 'Best', label: 'Available Pricing' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black mb-1" style={{ color: '#ffffff' }}>{s.val}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Amenities ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>What Business Class Includes</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {amenities.map((a) => (
              <div
                key={a.title}
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.06)' }}
              >
                <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: '#0EA5E9' }} />
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#1F2937' }}>{a.title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B7280' }}>{a.desc}</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Popular Routes ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Popular Business Class Routes</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-4" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-center text-sm mb-10" style={{ color: '#9CA3AF' }}>Fares are indicative. Call us for current pricing and seat availability.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {routes.map((r) => (
              <a
                key={r.from}
                href="tel:+18337010952"
                className="flex flex-col p-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ border: '1px solid rgba(14,165,233,0.15)', backgroundColor: '#F0F9FF' }}
              >
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-bold text-sm" style={{ color: '#1F2937' }}>{r.from}</span>
                  <span style={{ color: '#0EA5E9' }}>→</span>
                  <span className="font-bold text-sm" style={{ color: '#1F2937' }}>{r.to}</span>
                </div>
                <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>{r.note}</p>
                <p className="font-bold" style={{ color: '#0EA5E9' }}>{r.price}</p>
                <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Business Class · Call for exact fare</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Airlines ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Airlines We Search for Business Class</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="flex flex-wrap gap-3 justify-center">
            {airlines.map((a) => (
              <span key={a} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.2)', color: '#1F2937' }}>{a}</span>
            ))}
            <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)', color: '#0EA5E9' }}>+ 488 more airlines</span>
          </div>
        </div>
      </div>

      {/* ── Why Us ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Why Book Business Class With Us</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 p-5 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)' }}>
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#0EA5E9' }} />
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#1F2937' }}>{w.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trust Badge ── */}
      <div className="section-padding py-12">
        <div className="content-max max-w-[900px] mx-auto">
          <div className="flex items-center gap-5 p-6 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.15)' }}>
            <Shield size={40} style={{ color: '#0EA5E9', flexShrink: 0 }} />
            <div>
              <h3 className="font-bold mb-1 text-sm" style={{ color: '#1F2937' }}>Secure & Verified Business Class Bookings</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                All business class bookings are processed through verified airline reservation systems. Our agents confirm your seat assignment and send your e-ticket before you hang up. No surprises at the airport.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Business Class Travelers</h2>
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
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Business Class FAQs</h2>
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
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Upgrade Your Next Journey</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Let our premium flight specialists find you the best business class fare on your next domestic or international flight. One call, and we do the searching.
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
