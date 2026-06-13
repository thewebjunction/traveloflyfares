import { useEffect, useState } from 'react';
import { Phone, ArrowRight, ChevronDown, CheckCircle, Star } from 'lucide-react';

const routes = [
  { from: 'New York (JFK)', to: 'Los Angeles (LAX)', price: 'From $149', duration: '~5h 30m' },
  { from: 'Chicago (ORD)', to: 'Miami (MIA)', price: 'From $129', duration: '~3h 10m' },
  { from: 'Dallas (DFW)', to: 'Las Vegas (LAS)', price: 'From $109', duration: '~2h 45m' },
  { from: 'Atlanta (ATL)', to: 'Orlando (MCO)', price: 'From $89', duration: '~1h 15m' },
  { from: 'Boston (BOS)', to: 'Seattle (SEA)', price: 'From $179', duration: '~6h 10m' },
  { from: 'Denver (DEN)', to: 'Phoenix (PHX)', price: 'From $99', duration: '~1h 45m' },
  { from: 'Houston (IAH)', to: 'New York (JFK)', price: 'From $139', duration: '~3h 30m' },
  { from: 'San Francisco (SFO)', to: 'Chicago (ORD)', price: 'From $159', duration: '~4h 15m' },
  { from: 'Los Angeles (LAX)', to: 'Honolulu (HNL)', price: 'From $249', duration: '~5h 30m' },
];

const topDestinations = [
  { city: 'Las Vegas', state: 'Nevada', desc: 'Entertainment capital of the world — shows, casinos, nightlife, and world-class dining.' },
  { city: 'Orlando', state: 'Florida', desc: 'Theme parks, beaches, and family fun. Home to Walt Disney World and Universal Studios.' },
  { city: 'New York City', state: 'New York', desc: 'The city that never sleeps — Broadway, iconic skyline, museums, and legendary food.' },
  { city: 'Miami', state: 'Florida', desc: 'Sun, sand, and vibrant culture. South Beach, Art Deco, and world-class nightlife.' },
  { city: 'Chicago', state: 'Illinois', desc: 'The Windy City offers iconic architecture, deep-dish pizza, and stunning lakefront views.' },
  { city: 'Honolulu', state: 'Hawaii', desc: 'Tropical paradise with pristine beaches, volcanic landscapes, and Aloha spirit.' },
];

const airlines = ['Delta Air Lines', 'United Airlines', 'American Airlines', 'Southwest Airlines', 'JetBlue', 'Alaska Airlines', 'Spirit Airlines', 'Frontier Airlines'];

const benefits = [
  {
    title: 'Compare 500+ Airlines',
    desc: 'We search fares across all major US carriers including Delta, United, American, Southwest, JetBlue, Alaska, Spirit, and Frontier — giving you the widest selection of domestic flight options.',
  },
  {
    title: 'Best Price Guarantee',
    desc: 'Our travel experts work hard to find you the most competitive domestic fares available. We compare prices in real time to ensure you\'re getting the best deal for your route and travel dates.',
  },
  {
    title: 'All Cabin Classes',
    desc: 'Whether you\'re looking for the most affordable economy seat or a premium first-class experience, we can source fares for all cabin types across domestic routes.',
  },
  {
    title: 'Flexible Date Options',
    desc: 'Can\'t commit to exact dates? Our team can show you fare options across different travel days to help you find the best combination of price and schedule.',
  },
  {
    title: '24/7 Expert Support',
    desc: 'Our domestic flight specialists are available around the clock. Call us anytime to search, book, modify, or get information about your domestic flight.',
  },
  {
    title: 'Fast Booking Confirmation',
    desc: 'Once you confirm your domestic flight, we process the booking quickly and send your e-ticket and itinerary directly to your email address.',
  },
];

const faqs = [
  {
    q: 'How do I book a domestic flight through Traveloflyfares?',
    a: 'Simply call our team at +1 (833) 701-0952. Our travel experts will search available domestic routes, compare fares across airlines, and book your preferred option. The whole process typically takes just a few minutes.',
  },
  {
    q: 'Can I book a one-way domestic flight?',
    a: 'Yes, we handle both one-way and round-trip domestic bookings. One-way fares are available on most domestic routes and can often be more flexible than round-trip tickets.',
  },
  {
    q: 'What is the cheapest day to fly domestically?',
    a: 'Generally, Tuesdays and Wednesdays tend to offer lower domestic fares. Flying early in the morning or late at night can also help reduce costs. Our agents can check fares across multiple dates to find the best option for you.',
  },
  {
    q: 'How far in advance should I book a domestic flight?',
    a: 'Booking 3-6 weeks in advance typically offers a good balance of availability and price for domestic routes. However, we can also assist with last-minute bookings when needed.',
  },
  {
    q: 'Can I choose my seat on a domestic flight?',
    a: 'Seat selection depends on the airline and fare type. Many airlines offer seat selection at the time of booking, while others assign seats at check-in. Our agents will advise you on seat options for your chosen fare.',
  },
  {
    q: 'What baggage allowances apply to domestic flights?',
    a: 'Baggage policies vary by airline and fare type. Most domestic carriers charge for checked bags, while carry-on policies also differ. We\'ll inform you of the applicable baggage rules when you book.',
  },
];

const testimonials = [
  {
    name: 'Rachel M.',
    text: 'Found me a great fare to Chicago with almost no wait. The agent was knowledgeable and had my ticket confirmed in under 10 minutes.',
    stars: 5,
  },
  {
    name: 'Tom B.',
    text: 'I needed a last-minute flight from New York to Miami and the team found me a seat the same day. Highly recommend calling them directly.',
    stars: 5,
  },
  {
    name: 'Sandra K.',
    text: 'Compared several airlines for my Dallas to Las Vegas trip and got a much better rate than what I found online. Very happy with the service.',
    stars: 4,
  },
];

export default function DomesticFlightsPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-20 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[900px] mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>Explore the USA</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight" style={{ color: '#ffffff' }}>
            Domestic Flights
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg mb-4" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 24px' }}>
            Fly to 1,000+ destinations across the United States. Compare domestic fares from all major US airlines and get the best deal on your next trip — with personalized expert assistance every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="tel:+18337010952"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
            >
              <Phone size={18} /> Call to Book — +1 (833) 701-0952
            </a>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>Available 24/7 · No online fees</div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="section-padding py-8" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '500+', label: 'Airlines Searched' },
              { val: '1,000+', label: 'US Destinations' },
              { val: '24/7', label: 'Expert Support' },
              { val: '100%', label: 'Secure Booking' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black mb-1" style={{ color: '#ffffff' }}>{s.val}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Popular Routes ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Popular Domestic Routes</h2>
          <p className="text-sm text-center mb-10" style={{ color: '#6B7280' }}>Call us to get real-time pricing and seat availability on any of these routes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {routes.map((route) => (
              <a
                key={route.from + route.to}
                href="tel:+18337010952"
                className="flex flex-col p-5 rounded-xl group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.15)' }}
              >
                <div className="mb-3">
                  <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>{route.from}</p>
                  <div className="flex items-center gap-1 my-1">
                    <div className="h-px flex-1" style={{ backgroundColor: '#0EA5E9' }} />
                    <ArrowRight size={12} style={{ color: '#0EA5E9' }} />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>{route.to}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid rgba(14,165,233,0.1)' }}>
                  <p className="text-lg font-extrabold" style={{ color: '#0EA5E9' }}>{route.price}</p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{route.duration}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: '#9CA3AF' }}>
            * Prices shown are indicative and subject to availability. Call us for confirmed real-time fares.
          </p>
        </div>
      </div>

      {/* ── Top Destinations ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Top US Destinations</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {topDestinations.map((dest) => (
              <div
                key={dest.city}
                className="p-6 rounded-xl"
                style={{ border: '1px solid rgba(14,165,233,0.12)', backgroundColor: '#F0F9FF' }}
              >
                <h3 className="font-bold text-base mb-0.5" style={{ color: '#1F2937' }}>{dest.city}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: '#0EA5E9' }}>{dest.state}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{dest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Airlines We Search ── */}
      <div className="section-padding py-14">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>Airlines We Search For You</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {airlines.map((airline) => (
              <span
                key={airline}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.2)', color: '#374151' }}
              >
                {airline}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Book With Us ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Why Book Domestic Flights With Us</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 p-6 rounded-xl"
                style={{ border: '1px solid rgba(14,165,233,0.12)' }}
              >
                <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: '#0EA5E9' }} />
                <div>
                  <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>What Our Customers Say</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.06)' }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} fill={s <= t.stars ? '#0EA5E9' : 'transparent'} style={{ color: '#0EA5E9' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#6B7280' }}>"{t.text}"</p>
                <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[760px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Frequently Asked Questions</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(14,165,233,0.15)' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(14,165,233,0.1)' : 'none' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
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
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Ready to Fly Domestic?</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Call our domestic flight experts now. We'll search every major US airline and get you the best available fare — in minutes, not hours.
          </p>
          <a
            href="tel:+18337010952"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
            style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
          >
            <Phone size={20} /> +1 (833) 701-0952
          </a>
          <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Available 24 hours a day, 7 days a week</p>
        </div>
      </div>

    </div>
  );
}
