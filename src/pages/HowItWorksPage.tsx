import { useEffect } from 'react';
import { Phone, Search, CheckCircle, Headphones } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Search Your Flight',
    desc: 'Tell us your travel dates, destination, and preferences. Our team searches across multiple airlines to find the best available options for you.',
  },
  {
    icon: CheckCircle,
    number: '02',
    title: 'Compare & Choose',
    desc: 'We present you with a clear comparison of fares, schedules, and airline options so you can make an informed decision that fits your budget and travel needs.',
  },
  {
    icon: Phone,
    number: '03',
    title: 'Book With Confidence',
    desc: 'Once you\'ve chosen your flight, our travel experts handle the booking process for you. Payment is processed securely through authorized payment providers.',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Ongoing Support',
    desc: 'From booking confirmation to the day you travel, our support team is available to assist with any changes, questions, or concerns you may have.',
  },
];

const features = [
  { title: '300+ Airlines', desc: 'Access to a wide network of domestic and international carriers.' },
  { title: '24/7 Support', desc: 'Round-the-clock assistance from our dedicated travel experts.' },
  { title: '1000+ Destinations', desc: 'Flights to popular destinations across the US and worldwide.' },
  { title: 'Secure Payments', desc: 'All transactions are processed through verified payment providers.' },
  { title: 'No Hidden Fees', desc: 'Transparent pricing with all applicable charges shown upfront.' },
  { title: 'Fast Confirmation', desc: 'Receive your e-ticket and booking confirmation quickly via email.' },
];

export default function HowItWorksPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>
      {/* Hero */}
      <div className="pt-32 pb-16 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[860px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
            How It Works
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Booking your perfect flight with Traveloflyfares is simple, fast, and hassle-free. Here's how we help you every step of the way.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="section-padding py-20">
        <div className="content-max max-w-[860px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 24px rgba(14,165,233,0.06)' }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(14,165,233,0.12)' }}
                    >
                      <Icon size={22} style={{ color: '#0EA5E9' }} />
                    </div>
                    <span className="text-4xl font-black" style={{ color: 'rgba(14,165,233,0.15)' }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="section-padding py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="content-max max-w-[860px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Why Choose Traveloflyfares</h2>
          <div className="w-[60px] h-[3px] mx-auto mb-12" style={{ backgroundColor: '#0EA5E9' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl" style={{ border: '1px solid rgba(14,165,233,0.12)' }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: '#0EA5E9' }} />
                <h4 className="font-semibold mb-2" style={{ color: '#1F2937' }}>{f.title}</h4>
                <p className="text-sm" style={{ color: '#6B7280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section-padding py-16">
        <div className="content-max max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>Ready to Book Your Flight?</h2>
          <p className="text-sm mb-8" style={{ color: '#6B7280' }}>Call our travel experts today and get personalized assistance for your next journey.</p>
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
