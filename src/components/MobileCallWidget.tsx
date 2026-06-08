import { useState } from 'react';
import { X, Armchair } from 'lucide-react';
import agentImg from '../../public/images/agent-avatar.jpg';

export default function MobileCallWidget() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      {/* Chair badge overlapping top of pill */}
      <div className="flex justify-start pl-5 mb-[-10px] relative z-10">
        <div
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shadow-md"
          style={{ backgroundColor: '#011C27', color: '#00D4AA' }}
        >
          <Armchair size={13} />
          <span>Best Seats</span>
        </div>
      </div>

      {/* Main popup pill */}
      <a
        href="tel:+18888070272"
        className="flex items-center gap-3 px-3 pt-3 pb-2.5 rounded-xl overflow-hidden shadow-xl active:brightness-95 transition-all"
        style={{ backgroundColor: '#00D4AA' }}
      >
        {/* Avatar with online indicator */}
        <div className="relative shrink-0">
          <div
            className="w-9 h-9 rounded-full overflow-hidden border-2"
            style={{ borderColor: '#011C27' }}
          >
            <img
              src={agentImg}
              alt="Travel Agent"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span
            className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
            style={{ backgroundColor: '#22c55e', borderColor: '#00D4AA' }}
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <p className="text-xs font-semibold truncate" style={{ color: 'rgba(1,28,39,0.7)' }}>
            Grab Your Flight Discount
          </p>
          <p className="text-base font-bold leading-tight truncate" style={{ color: '#011C27' }}>
            +1 888-807-0272
          </p>
        </div>

        {/* Dismiss button — stopPropagation so tap on X doesn't call */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDismissed(true); }}
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-opacity active:opacity-60"
          style={{ backgroundColor: 'rgba(1,28,39,0.18)', color: '#011C27' }}
          aria-label="Dismiss"
        >
          <X size={11} />
        </button>
      </a>
    </div>
  );
}
