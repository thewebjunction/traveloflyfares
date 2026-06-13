import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (833) 701-0952',
    desc: 'Available 24/7 for all travel inquiries',
    href: 'tel:+18337010952',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'support@traveloflyfaresllc.com',
    desc: 'We respond within 1-2 business hours',
    href: 'mailto:support@traveloflyfaresllc.com',
  },
  {
    icon: MapPin,
    title: 'Our Office',
    value: '915 Main St, Suite 805',
    desc: 'Hartford, CT 06103, United States',
    href: null,
  },
  {
    icon: Clock,
    title: 'Support Hours',
    value: '24 / 7 / 365',
    desc: 'Always here when you need us',
    href: null,
  },
];

const reasons = [
  'Flight booking assistance and reservation support',
  'Changes, cancellations, and refund inquiries',
  'Group travel coordination',
  'Last-minute flight help',
  'Business class and premium fare options',
  'General travel information and guidance',
];

export default function ContactPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F9FF' }}>
      {/* Hero */}
      <div className="pt-32 pb-16 section-padding" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[860px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Contact Us
          </h1>
          <div className="w-[60px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#0EA5E9' }} />
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Our travel experts are available around the clock to assist you with bookings, inquiries, and travel support.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="section-padding py-16">
        <div className="content-max max-w-[860px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const inner = (
                <>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(14,165,233,0.12)' }}
                  >
                    <Icon size={22} style={{ color: '#0EA5E9' }} />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1F2937' }}>{method.title}</h3>
                  <p className="text-base font-medium mb-1" style={{ color: '#0EA5E9' }}>{method.value}</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{method.desc}</p>
                </>
              );
              return method.href ? (
                <a
                  key={method.title}
                  href={method.href}
                  className="p-8 rounded-2xl block transition-all duration-200 hover:-translate-y-1"
                  style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 20px rgba(14,165,233,0.06)' }}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={method.title}
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)', boxShadow: '0 4px 20px rgba(14,165,233,0.06)' }}
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* How We Can Help */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.12)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Headphones size={24} style={{ color: '#0EA5E9' }} />
              <h2 className="text-xl font-bold" style={{ color: '#1F2937' }}>How We Can Help</h2>
            </div>
            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
              Our dedicated support team is ready to assist you with a wide range of travel-related needs:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#0EA5E9' }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="section-padding py-14" style={{ backgroundColor: '#1F2937' }}>
        <div className="content-max max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>Call Now for Instant Assistance</h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Skip the forms. Talk directly to a travel expert and get your flight booked in minutes.
          </p>
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
