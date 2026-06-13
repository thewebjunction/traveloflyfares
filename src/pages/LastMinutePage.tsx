import { useEffect, useState } from 'react';
import { Phone, Zap, CheckCircle, ChevronDown, Clock } from 'lucide-react';

const scenarios = [
  {
    title: 'Emergency Family Travel',
    timeframe: 'Need to fly within hours',
    desc: 'A family member needs you — now. We have experience finding seats on same-day departures and can walk you through exactly what to expect at the airport.',
    tips: ['Same-day flights available', 'Multiple airline search', 'Expedited booking process'],
  },
  {
    title: 'Missed or Cancelled Flight',
    timeframe: 'Stranded & need rebooking',
    desc: 'Missed your connection or your flight was cancelled without a satisfactory airline resolution? We\'ll search all available options to get you rebooked quickly.',
    tips: ['Rapid rebooking support', 'Alternative route search', '24/7 phone availability'],
  },
  {
    title: 'Urgent Business Travel',
    timeframe: 'Meeting within 24 hours',
    desc: 'An unplanned client meeting, site visit, or conference requirement has you needing to be in a different city by tomorrow morning. We find the fastest routing.',
    tips: ['Early morning departures', 'Business class options', 'Efficient routing'],
  },
  {
    title: 'Spontaneous Getaway',
    timeframe: 'Weekend travel on short notice',
    desc: 'Sometimes the best trips are decided on Thursday afternoon. We search last-minute availability across hundreds of airlines to find open seats at the best price.',
    tips: ['Weekend departure focus', 'Flexible destination search', 'Best available pricing'],
  },
  {
    title: 'Bereavement Travel',
    timeframe: 'Loss of a loved one',
    desc: 'In difficult moments, you shouldn\'t have to fight with booking systems. Our agents handle the logistics compassionately so you can focus on what matters most.',
    tips: ['Compassionate support', 'Bereavement fare inquiry', 'Flexible change options'],
  },
  {
    title: 'Work Assignment or Deployment',
    timeframe: 'Deployment or contract travel',
    desc: 'Whether it\'s a last-minute job posting, film shoot, event contract, or professional assignment — we understand the urgency of professional travel needs.',
    tips: ['One-way tickets available', 'Open-jaw itineraries', 'Extended stay options'],
  },
];

const tips = [
  {
    number: '01',
    title: 'Call Us First',
    desc: 'Don\'t waste time clicking through booking sites. Our agents have access to consolidated real-time availability — one call gets you a faster answer than any search engine.',
  },
  {
    number: '02',
    title: 'Have Your Information Ready',
    desc: 'Know your departure city, destination (or a few options), travel dates, and passenger count. The faster you can share this, the faster we can search and confirm.',
  },
  {
    number: '03',
    title: 'Be Flexible on Airports',
    desc: 'If you\'re near a major metro area, specifying alternate airports (e.g., JFK, EWR, or LGA) dramatically increases the number of options we can search for you.',
  },
  {
    number: '04',
    title: 'Consider Connecting Flights',
    desc: 'Non-stop availability at the last minute can be limited. Being open to one connection — even a short one — often unlocks significantly more seats and better pricing.',
  },
  {
    number: '05',
    title: 'Pack Light If Possible',
    desc: 'Checking bags adds check-in time on short-notice flights. If you can travel carry-on only, you gain significant flexibility, speed through security, and fewer risks.',
  },
  {
    number: '06',
    title: 'Confirm Documentation',
    desc: 'For international last-minute travel, ensure your passport has at least 6 months of validity and that you\'re aware of any entry requirements or visas required.',
  },
];

const popularRoutes = [
  { from: 'New York', to: 'Los Angeles', note: 'Multiple daily departures' },
  { from: 'Chicago', to: 'Miami', note: 'Same-day options available' },
  { from: 'Dallas', to: 'Las Vegas', note: 'Frequent service' },
  { from: 'Atlanta', to: 'New York', note: 'Multiple carriers' },
  { from: 'Los Angeles', to: 'San Francisco', note: 'Hourly departures' },
  { from: 'Houston', to: 'Denver', note: 'Non-stop available' },
];

const faqs = [
  {
    q: 'Can you actually find flights within hours of departure?',
    a: 'Yes. Same-day and next-day flights are our specialty for last-minute travel. Airlines hold seats until departure, and our agents access availability in real time. Availability varies by route and date, but we\'ll tell you exactly what\'s open when you call.',
  },
  {
    q: 'Are last-minute flights always more expensive?',
    a: 'Not always. While premium pricing is common close to departure, airlines occasionally discount unsold seats to fill the plane. Our agents search multiple airlines simultaneously and present you with the best available options — not just the first result.',
  },
  {
    q: 'Can I book a one-way last-minute flight?',
    a: 'Absolutely. One-way tickets for last-minute travel are common, especially for emergency or open-ended trips. We handle one-way bookings on both domestic and international routes without any additional complexity.',
  },
  {
    q: 'How quickly can a booking be confirmed?',
    a: 'Once you approve the fare and provide passenger details, most bookings are confirmed within minutes. Your e-ticket and confirmation are sent by email immediately after booking is complete.',
  },
  {
    q: 'What if I need to change my last-minute flight?',
    a: 'Change and cancellation policies depend on the fare type booked. Our agents explain these terms clearly before you confirm. We recommend noting the rules at time of booking, especially for urgent travel.',
  },
  {
    q: 'Do you handle last-minute international flights?',
    a: 'Yes. We book last-minute international flights, though the process may require more lead time due to visa and documentation requirements. Call us early and have your passport information ready to speed the process.',
  },
];

export default function LastMinutePage() {
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-20 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(14,165,233,0.15)', color: '#0EA5E9' }}>
            <Zap size={12} /> Urgent Departures
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight" style={{ color: '#ffffff' }}>
            Last Minute Flights
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 32px' }}>
            When time is short and you need to fly — today, tomorrow, or within the next few days — our specialists search hundreds of airlines in real time to find the fastest available routing at the best available price.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18337010952"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
            >
              <Phone size={18} /> Call Now — +1 (833) 701-0952
            </a>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <Clock size={14} /> Available 24/7 for urgent travel
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="section-padding py-8" style={{ backgroundColor: '#0EA5E9' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '24/7', label: 'Urgent Booking Support' },
              { val: 'Same Day', label: 'Departures Available' },
              { val: '300+', label: 'Airlines Searched' },
              { val: 'Minutes', label: 'Booking Confirmation' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black mb-1" style={{ color: '#ffffff' }}>{s.val}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scenarios ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>We Handle Every Urgent Situation</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 2px 12px rgba(14,165,233,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={16} style={{ color: '#0EA5E9' }} />
                  <h3 className="font-bold text-sm" style={{ color: '#1F2937' }}>{s.title}</h3>
                </div>
                <p className="text-xs font-medium mb-3" style={{ color: '#0EA5E9' }}>{s.timeframe}</p>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#6B7280' }}>{s.desc}</p>
                <ul className="space-y-1">
                  {s.tips.map((tip) => (
                    <li key={tip} className="flex items-center gap-2 text-xs" style={{ color: '#6B7280' }}>
                      <CheckCircle size={11} style={{ color: '#0EA5E9', flexShrink: 0 }} /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Popular Routes ── */}
      <div className="section-padding py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Popular Last-Minute Routes</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {popularRoutes.map((r) => (
              <a
                key={r.from + r.to}
                href="tel:+18337010952"
                className="flex flex-col p-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ border: '1px solid rgba(14,165,233,0.15)', backgroundColor: '#F0F9FF' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-sm" style={{ color: '#1F2937' }}>{r.from}</span>
                  <span style={{ color: '#0EA5E9' }}>→</span>
                  <span className="font-bold text-sm" style={{ color: '#1F2937' }}>{r.to}</span>
                </div>
                <p className="text-xs" style={{ color: '#6B7280' }}>{r.note}</p>
                <p className="text-xs mt-2 font-semibold" style={{ color: '#0EA5E9' }}>Call for current pricing →</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tips ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Last-Minute Travel Tips</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-10" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.number} className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)' }}>
                <div className="text-4xl font-black mb-4" style={{ color: 'rgba(14,165,233,0.2)' }}>{tip.number}</div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#1F2937' }}>{tip.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[760px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1F2937' }}>Last-Minute Flight FAQs</h2>
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
          <Zap size={32} className="mx-auto mb-4" style={{ color: '#0EA5E9' }} />
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Need to Fly Urgently?</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Don't waste time searching booking sites. Call our team right now — we search live availability across hundreds of airlines and get you booked fast.
          </p>
          <a href="tel:+18337010952" className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5" style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}>
            <Phone size={20} /> +1 (833) 701-0952
          </a>
          <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Available 24 hours a day, 7 days a week · Same-day departures available</p>
        </div>
      </div>

    </div>
  );
}
