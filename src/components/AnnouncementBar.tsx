import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="hidden md:flex relative items-center justify-center px-4 py-2.5 text-sm font-medium transition-all duration-300"
      style={{
        backgroundColor: '#00D4AA',
        color: '#011C27',
      }}
    >
      <span>
        Speak to our travel expert:{' '}
        <strong>+1 (888) 725-2195</strong>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
