import { useEffect, useState } from 'react';
import { Phone, Globe, ChevronDown, CheckCircle, Star } from 'lucide-react';

const regions = [
  {
    name: 'Europe',
    flag: '🇪🇺',
    destinations: [
      { city: 'London', country: 'UK', price: 'From $399' },
      { city: 'Paris', country: 'France', price: 'From $429' },
      { city: 'Rome', country: 'Italy', price: 'From $459' },
      { city: 'Barcelona', country: 'Spain', price: 'From $419' },
      { city: 'Amsterdam', country: 'Netherlands', price: 'From $389' },
      { city: 'Frankfurt', country: 'Germany', price: 'From $409' },
    ],
  },
  {
    name: 'Asia & Middle East',
    flag: '🌏',
    destinations: [
      { city: 'Tokyo', country: 'Japan', price: 'From $699' },
      { city: 'Bangkok', country: 'Thailand', price: 'From $579' },
      { city: 'Dubai', country: 'UAE', price: 'From $599' },
      { city: 'Singapore', country: 'Singapore', price: 'From $649' },
      { city: 'Mumbai', country: 'India', price: 'From $629' },
      { city: 'Seoul', country: 'South Korea', price: 'From $679' },
    ],
  },
  {
    name: 'Caribbean & Latin America',
    flag: '🌴',
    destinations: [
      { city: 'Cancun', country: 'Mexico', price: 'From $299' },
      { city: 'Punta Cana', country: 'Dominican Rep.', price: 'From $319' },
      { city: 'Bogota', country: 'Colombia', price: 'From $349' },
      { city: 'Lima', country: 'Peru', price: 'From $399' },
      { city: 'Buenos Aires', country: 'Argentina', price: 'From $549' },
      { city: 'Nassau', country: 'Bahamas', price: 'From $279' },
    ],
  },
  {
    name: 'Africa & Oceania',
    flag: '🌍',
    destinations: [
      { city: 'Sydney', country: 'Australia', price: 'From $799' },
      { city: 'Auckland', country: 'New Zealand', price: 'From $849' },
      { city: 'Nairobi', country: 'Kenya', price: 'From $699' },
      { city: 'Cape Town', country: 'South Africa', price: 'From $749' },
      { city: 'Casablanca', country: 'Morocco', price: 'From $559' },
      { city: 'Lagos', country: 'Nigeria', price: 'From $629' },
    ],
  },
];

const benefits = [
  {
    title: '500+ Global Airlines',
    desc: 'Search international fares across hundreds of carriers worldwide — from global giants like Emirates, British Airways, and Lufthansa to budget international airlines.',
  },
  {
    title: 'Multi-City & Stopover Routing',
    desc: 'We build complex multi-destination itineraries, including strategic stopovers in hub cities to reduce fares or add an extra destination to your trip.',
  },
  {
    title: 'All Cabin Classes',
    desc: 'Economy, premium economy, business class, and first class — we source fares for every cabin type so you travel the way you want at the right price.',
  },
  {
    title: 'Visa & Entry Guidance',
    desc: 'Our agents can advise on general passport, visa, and entry document requirements for your destination so you travel prepared and confident.',
  },
  {
    title: 'Group & Family International Travel',
    desc: 'Coordinating international flights for a family or group? We handle all bookings under one itinerary with dedicated seat coordination and support.',
  },
  {
    title: 'Flexible Cancellation Options',
    desc: 'International travel plans can change. We help you understand fare conditions and explore flexible fare options that offer changes or cancellations.',
  },
];

const travelTips = [
  { title: 'Book Early', desc: 'International fares tend to be cheapest when booked 2–4 months in advance. Popular routes and peak seasons sell out quickly.' },
  { title: 'Check Passport Validity', desc: 'Many countries require your passport to be valid for at least 6 months beyond your travel dates. Verify before you book.' },
  { title: 'Understand Baggage Rules', desc: 'International baggage allowances vary significantly by airline and route. Economy fares often include one free checked bag on international flights.' },
  { title: 'Arrive Early at the Airport', desc: 'International flights require arriving at least 2–3 hours before departure for check-in, security, and immigration procedures.' },
  { title: 'Purchase Travel Insurance', desc: 'International travel insurance can protect you against flight delays, cancellations, medical emergencies, and lost baggage abroad.' },
  { title: 'Know Your Layover Duration', desc: 'If your route includes a layover, ensure you have enough connection time — typically 90 minutes minimum for international connections.' },
];

const faqs = [
  {
    q: 'How do I book an international flight through Traveloflyfares?',
    a: 'Call our international flight specialists at +1 (833) 701-0952. Our team searches across hundreds of airlines and builds the best available itinerary for your destination, budget, and travel dates.',
  },
  {
    q: 'Do you offer multi-city international itineraries?',
    a: 'Yes. We can build multi-city international routes — for example, flying into London, traveling through Europe, and returning from Paris. Our agents are experienced in designing complex international itineraries.',
  },
  {
    q: 'Can I book business class or first class for international flights?',
    a: 'Absolutely. We source fares for all cabin classes including premium economy, business class, and first class on international routes. Call us and we\'ll find the best premium fares available.',
  },
  {
    q: 'What documents do I need for international travel?',
    a: 'Requirements vary by destination and nationality. In general, you\'ll need a valid passport and possibly a visa depending on your citizenship and the country you\'re visiting. Our agents can provide general guidance on typical requirements for your destination.',
  },
  {
    q: 'Are international flights refundable?',
    a: 'Refund eligibility depends on the airline and fare type selected. Some international fares are fully refundable, others are partially refundable, and some are non-refundable. Our agents will clearly explain the fare conditions before you confirm any booking.',
  },
  {
    q: 'How long does it take to receive my international e-ticket?',
    a: 'After your booking is confirmed and payment is processed, you\'ll receive your e-ticket and itinerary by email. This typically happens within a few minutes to a few hours depending on the airline and booking system.',
  },
];

const testimonials = [
  {
    name: 'Priya S.',
    text: 'Got a fantastic business class fare to Mumbai that I couldn\'t find anywhere online. The agent was knowledgeable and patient throughout.',
    stars: 5,
  },
  {
    name: 'Carlos R.',
    text: 'Booked a complicated multi-city Europe trip — London, Paris, and Rome — all coordinated perfectly. Amazing service.',
    stars: 5,
  },
  {
    name: 'Linda T.',
    text: 'They found me a fare to Bangkok with a convenient stopover that actually saved me over $200. Very impressed.',
    stars: 4,
  },
];

export default function InternationalFlightsPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-20 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[900px] mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>Fly Worldwide</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight" style={{ color: '#ffffff' }}>
            International Flights
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 24px' }}>
            Explore the world with competitive international fares. From Europe to Asia, the Caribbean to Africa — our experts search 500+ airlines worldwide to find the right flight at the right price.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="tel:+18337010952"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
            >
              <Phone size={18} /> Call to Book — +1 (833) 701-0952
            </a>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>Available 24/7 · All cabin classes</div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="section-padding py-8" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '500+', label: 'Airlines Worldwide' },
              { val: '150+', label: 'Countries' },
              { val: '1,000+', label: 'International Routes' },
              { val: '24/7', label: 'Expert Support' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black mb-1" style={{ color: '#ffffff' }}>{s.val}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Destinations by Region ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>International Destinations</h2>
          <p className="text-sm text-center mb-12" style={{ color: '#6B7280' }}>Browse by region and call us for real-time fares and availability.</p>
          <div className="space-y-10">
            {regions.map((region) => (
              <div key={region.name}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{region.flag}</span>
                  <h3 className="text-xl font-bold" style={{ color: '#1F2937' }}>{region.name}</h3>
                  <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(14,165,233,0.2)' }} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {region.destinations.map((dest) => (
                    <a
                      key={dest.city}
                      href="tel:+18337010952"
                      className="flex flex-col p-4 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.15)' }}
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Globe size={12} style={{ color: '#0EA5E9' }} />
                      </div>
                      <p className="text-sm font-bold mb-0.5" style={{ color: '#1F2937' }}>{dest.city}</p>
                      <p className="text-xs mb-2" style={{ color: '#9CA3AF' }}>{dest.country}</p>
                      <p className="text-xs font-bold" style={{ color: '#0EA5E9' }}>{dest.price}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8" style={{ color: '#9CA3AF' }}>
            * Prices shown are indicative. Call us for confirmed real-time fares based on your travel dates.
          </p>
        </div>
      </div>

      {/* ── Why Book International With Us ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Why Book International With Us</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-6 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)' }}>
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

      {/* ── Travel Tips ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>International Travel Tips</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {travelTips.map((tip, i) => (
              <div key={tip.title} className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)' }}>
                <div className="text-2xl font-black mb-3" style={{ color: 'rgba(14,165,233,0.2)' }}>0{i + 1}</div>
                <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>{tip.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>What International Travelers Say</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.06)' }}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill={s <= t.stars ? '#0EA5E9' : 'transparent'} style={{ color: '#0EA5E9' }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#6B7280' }}>"{t.text}"</p>
                <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[760px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Frequently Asked Questions</h2>
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
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Plan Your International Journey</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Talk to our international flight specialists today. We search 500+ airlines worldwide and build the perfect itinerary for your global adventure.
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
