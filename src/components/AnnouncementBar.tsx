import { useState } from 'react';
import { X, Plane, Phone, Star, Clock, Shield, Tag } from 'lucide-react';

const items = [
  { icon: <Tag size={13} />, text: 'Unpublished fares — up to 60% off retail price' },
  { icon: <Phone size={13} />, text: 'Call our experts now: +1 (833) 701-0952' },
  { icon: <Star size={13} />, text: 'Best Price Guarantee — we beat any quote' },
  { icon: <Clock size={13} />, text: 'Limited seats available — prices rise daily' },
  { icon: <Plane size={13} />, text: '300+ airlines · destinations worldwide' },
  { icon: <Shield size={13} />, text: '24/7 live support · no hold times · instant savings' },
];

const Dot = () => (
  <span className="mx-5 opacity-40 text-[10px]">✦</span>
);

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const track = (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <span className="opacity-60">{item.icon}</span>
          {item.text}
          <Dot />
        </span>
      ))}
    </>
  );

  return (
    <div
      className="hidden md:flex relative items-center overflow-hidden py-2"
      style={{ backgroundColor: '#00b8f1', color: '#000000', height: '36px' }}
    >
      {/* Scrolling track — duplicated for seamless loop */}
      <div className="animate-marquee flex items-center text-xs font-medium" style={{ whiteSpace: 'nowrap' }}>
        {track}
        {track}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16"
        style={{ background: 'linear-gradient(to right, #00b8f1, transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20"
        style={{ background: 'linear-gradient(to left, #00b8f1, transparent)' }} />

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 z-10 p-1 hover:opacity-60 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
