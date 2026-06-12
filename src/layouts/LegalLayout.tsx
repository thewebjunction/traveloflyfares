import { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface Section {
  title?: string;
  body?: string;
  subsections?: { heading: string; body?: string; bullets?: string[] }[];
  bullets?: string[];
}

interface LegalPageProps {
  title: string;
  sections: Section[];
  showContact?: boolean;
}

export function LegalPage({ title, sections, showContact = false }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-28 pb-20 section-padding" style={{ minHeight: '100vh' }}>
      <div className="content-max max-w-[860px] mx-auto">

        {/* Page title */}
        <div className="mb-14">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#1F2937' }}
          >
            {title}
          </h1>
          <div className="w-[60px] h-[3px]" style={{ backgroundColor: '#0EA5E9' }} />
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              {section.title && (
                <h2
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  style={{ color: '#1F2937' }}
                >
                  {section.title}
                </h2>
              )}
              {section.body && (
                <p
                  className="text-sm sm:text-base leading-relaxed mb-4"
                  style={{ color: '#6B7280' }}
                >
                  {section.body}
                </p>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm sm:text-base" style={{ color: '#6B7280' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#0EA5E9' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.subsections && section.subsections.map((sub, k) => (
                <div key={k} className="mb-5">
                  <h3
                    className="text-base sm:text-lg font-semibold mb-2"
                    style={{ color: '#0EA5E9' }}
                  >
                    {sub.heading}
                  </h3>
                  {sub.body && (
                    <p className="text-sm sm:text-base leading-relaxed mb-3" style={{ color: '#6B7280' }}>
                      {sub.body}
                    </p>
                  )}
                  {sub.bullets && sub.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {sub.bullets.map((b, l) => (
                        <li key={l} className="flex items-start gap-3 text-sm sm:text-base" style={{ color: '#6B7280' }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#0EA5E9' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="w-full h-px mt-8" style={{ backgroundColor: 'rgba(14,165,233,0.1)' }} />
            </div>
          ))}
        </div>

        {/* Contact block */}
        {showContact && (
          <div
            className="mt-12 p-6 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(14,165,233,0.15)' }}
          >
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1F2937' }}>Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@traveloflyfaresllc.com" className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <Mail size={16} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                support@traveloflyfaresllc.com
              </a>
              <a href="tel:+18337010952" className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <Phone size={16} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                +1 (833) 701-0952
              </a>
              <span className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <MapPin size={16} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                915 MAIN ST, 805, HARTFORD, CT, 06103, United States
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
