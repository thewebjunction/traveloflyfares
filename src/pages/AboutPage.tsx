import { useEffect } from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const whatWeDo = [
  'Explore various flight options based on your travel needs',
  'Find suitable fares for domestic and international journeys',
  'Compare available choices before making travel decisions',
  'Get assistance with booking-related queries',
  'Enjoy a simple and convenient travel planning experience',
];

const whyChooseUs = [
  {
    title: 'Wide Range of Flight Choices',
    desc: 'Explore multiple flight options to find what best matches your schedule and travel preferences.',
  },
  {
    title: 'Simple & Convenient Booking Experience',
    desc: 'Our platform is designed to make searching and planning your journey easier from start to finish.',
  },
  {
    title: 'Reliable Travel Assistance',
    desc: 'Get support for your travel-related questions and booking concerns whenever you need it.',
  },
  {
    title: 'Clear Travel Information',
    desc: 'We focus on providing easy-to-understand details to help you make informed choices.',
  },
  {
    title: 'Traveler-Focused Approach',
    desc: 'Your travel needs remain at the center of everything we do — every feature, every decision.',
  },
  {
    title: '24/7 Expert Support',
    desc: 'Our support team is available around the clock to assist with bookings and travel questions.',
  },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>

      {/* ── Hero ── */}
      <div className="pt-32 pb-16 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[860px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
            About Us
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 620, margin: '0 auto' }}>
            At Traveloflyfares, we believe planning a journey should be simple, convenient, and enjoyable from the very beginning.
          </p>
        </div>
      </div>

      {/* ── Mission ── */}
      <div className="section-padding py-16">
        <div className="content-max max-w-[860px] mx-auto">
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 24px rgba(14,165,233,0.06)' }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>That's Where We Come In</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Traveloflyfares was created with the goal of making flight search and booking a smoother experience for travelers worldwide. Whether you are planning a holiday, visiting family, traveling for work, or arranging a quick trip, we help you explore flight options with greater ease and confidence.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
              Finding the right flight often involves comparing multiple options, understanding fares, and managing different travel details — and we aim to make that process easier for travelers. With Traveloflyfares, travelers can explore different flight options in one place, compare available choices, and make decisions based on their preferences.
            </p>
          </div>
        </div>
      </div>

      {/* ── What We Do ── */}
      <div className="section-padding py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[860px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>What We Do</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-4" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-center text-sm mb-10" style={{ color: '#6B7280', maxWidth: 520, margin: '0 auto 40px' }}>
            Our platform is designed to make the flight booking process easier, allowing you to focus more on your upcoming journey and less on complicated planning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatWeDo.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ border: '1px solid rgba(14,165,233,0.12)' }}
              >
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#0EA5E9' }} />
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Vision ── */}
      <div className="section-padding py-16">
        <div className="content-max max-w-[860px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 24px rgba(14,165,233,0.06)' }}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>Our Vision</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                Our vision is to become a trusted travel partner for travelers looking for convenience, accessibility, and a smooth booking experience.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                We aim to support modern travelers by offering a platform that values transparency, simplicity, and customer-focused service. Every trip has a reason behind it, and we want to make the first step of that journey easier.
              </p>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 24px rgba(14,165,233,0.06)' }}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>Built Around Travelers</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                Traveloflyfares is built with an understanding of the challenges travelers experience while planning trips. From searching for suitable fares to managing reservation-related questions, we aim to provide assistance throughout your travel journey.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                For us, travel is not only about booking a ticket — it is about helping you begin your journey with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="section-padding py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[860px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Why Choose Traveloflyfares</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-12" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyChooseUs.map((f) => (
              <div key={f.title} className="p-6 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)' }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: '#0EA5E9' }} />
                <h4 className="font-semibold mb-2" style={{ color: '#1F2937' }}>{f.title}</h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Promise ── */}
      <div className="section-padding py-16">
        <div className="content-max max-w-[860px] mx-auto">
          <div
            className="p-8 rounded-2xl text-center"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 24px rgba(14,165,233,0.06)' }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>Our Promise</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280', maxWidth: 620, margin: '0 auto 16px' }}>
              At Traveloflyfares, we are committed to providing a smooth, reliable, and traveler-friendly experience. As the travel industry continues to evolve, we continue to improve our services to meet changing traveler expectations.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7280', maxWidth: 560, margin: '0 auto' }}>
              Every journey begins with a single step, and we are here to help make that beginning simple and convenient.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="section-padding py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>Ready to Plan Your Journey?</h2>
          <p className="text-sm mb-8" style={{ color: '#6B7280' }}>Our travel experts are available 24/7 to help you find the right flight and make your booking experience simple.</p>
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
