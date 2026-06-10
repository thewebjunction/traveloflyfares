import { useState, useRef } from 'react';
import {
  Plane, Bed, Palmtree, Car, Bus, ArrowRightLeft,
  Calendar, Users, User, Phone, Mail, MapPin
} from 'lucide-react';

type TabId = 'flights' | 'hotels' | 'vacations' | 'car' | 'bus';
type TripType = 'roundtrip' | 'oneway';

const tabs: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'hotels', label: 'Hotels', icon: Bed },
  { id: 'vacations', label: 'Vacations', icon: Palmtree },
  { id: 'car', label: 'Car', icon: Car },
  { id: 'bus', label: 'Bus', icon: Bus },
];

export default function BookingEngine() {
  const [activeTab, setActiveTab] = useState<TabId>('flights');
  const [tripType, setTripType] = useState<TripType>('roundtrip');
  const [passengers, setPassengers] = useState('1');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our travel experts will contact you shortly at +1 (833) 701-0952.');
  };

  const inputBaseClass =
    'w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200';
  const inputStyle = {
    backgroundColor: '#042F3E',
    border: '1px solid rgba(148,184,196,0.2)',
    color: '#E8F4F8',
  };
  const inputFocusStyle = {
    border: '2px solid #00D4AA',
    boxShadow: '0 0 0 4px rgba(0,212,170,0.15)',
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'flights':
        return (
          <div className="space-y-4">
            {/* Trip Type */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setTripType('roundtrip')}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: tripType === 'roundtrip' ? '#D9A66C' : 'transparent',
                  color: tripType === 'roundtrip' ? '#011C27' : '#94B8C4',
                  border: tripType === 'roundtrip' ? 'none' : '1px solid rgba(148,184,196,0.3)',
                }}
              >
                Round Trip
              </button>
              <button
                type="button"
                onClick={() => setTripType('oneway')}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: tripType === 'oneway' ? '#D9A66C' : 'transparent',
                  color: tripType === 'oneway' ? '#011C27' : '#94B8C4',
                  border: tripType === 'oneway' ? 'none' : '1px solid rgba(148,184,196,0.3)',
                }}
              >
                One Way
              </button>
            </div>

            {/* Route Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative">
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input
                  type="text"
                  placeholder="Flying From - City"
                  className={inputBaseClass + ' pl-10'}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input
                  type="text"
                  placeholder="Flying To - City"
                  className={inputBaseClass + ' pl-10'}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>
              <button
                type="button"
                className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full items-center justify-center"
                style={{ backgroundColor: '#042F3E', border: '1px solid rgba(148,184,196,0.2)', zIndex: 2 }}
              >
                <ArrowRightLeft size={14} style={{ color: '#E8F4F8' }} />
              </button>
            </div>

            {/* Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input
                  type="date"
                  placeholder="Journey Date"
                  className={inputBaseClass + ' pl-10 min-w-0'}
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })}
                  onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })}
                />
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input
                  type="date"
                  placeholder="Return Date"
                  disabled={tripType === 'oneway'}
                  className={inputBaseClass + ' pl-10 min-w-0'}
                  style={{
                    ...inputStyle,
                    colorScheme: 'dark',
                    opacity: tripType === 'oneway' ? 0.4 : 1,
                  }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })}
                  onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })}
                />
              </div>
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className={inputBaseClass + ' pl-10 appearance-none'}
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                  <option value="5">5+ Adults</option>
                </select>
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input
                  type="text"
                  placeholder="Name"
                  className={inputBaseClass + ' pl-10'}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={inputBaseClass + ' pl-10'}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input
                  type="email"
                  placeholder="Email ID"
                  className={inputBaseClass + ' pl-10'}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#D9A66C', color: '#011C27' }}
            >
              Search Flights
            </button>
          </div>
        );

      case 'hotels':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Destination / Hotel Name" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="date" placeholder="Check-in" className={inputBaseClass + ' pl-10 min-w-0'} style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="date" placeholder="Check-out" className={inputBaseClass + ' pl-10 min-w-0'} style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })} />
              </div>
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <select className={inputBaseClass + ' pl-10 appearance-none'} style={{ ...inputStyle, colorScheme: 'dark' }}>
                  <option>1 Room, 1 Guest</option>
                  <option>1 Room, 2 Guests</option>
                  <option>2 Rooms, 4 Guests</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Name" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="tel" placeholder="Phone Number" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="email" placeholder="Email ID" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
            </div>
            <button type="submit" className="w-full py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#D9A66C', color: '#011C27' }}>Search Hotels</button>
          </div>
        );

      case 'vacations':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Destination" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="date" placeholder="Travel Date" className={inputBaseClass + ' pl-10 min-w-0'} style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <select className={inputBaseClass + ' pl-10 appearance-none'} style={{ ...inputStyle, colorScheme: 'dark' }}>
                  <option>1 Adult</option><option>2 Adults</option><option>2 Adults, 1 Child</option><option>Family (4+)</option>
                </select>
              </div>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Name" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="tel" placeholder="Phone Number" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="email" placeholder="Email ID" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
            </div>
            <button type="submit" className="w-full py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#D9A66C', color: '#011C27' }}>Search Vacations</button>
          </div>
        );

      case 'car':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Pick-up Location" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Drop-off Location" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="date" placeholder="Pick-up Date" className={inputBaseClass + ' pl-10 min-w-0'} style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })} />
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="date" placeholder="Drop-off Date" className={inputBaseClass + ' pl-10 min-w-0'} style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Name" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="tel" placeholder="Phone" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="email" placeholder="Email" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
            </div>
            <button type="submit" className="w-full py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#D9A66C', color: '#011C27' }}>Search Car Rentals</button>
          </div>
        );

      case 'bus':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="From City" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="To City" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="date" placeholder="Travel Date" className={inputBaseClass + ' pl-10 min-w-0'} style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, colorScheme: 'dark' })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, colorScheme: 'dark' })} />
              </div>
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <select className={inputBaseClass + ' pl-10 appearance-none'} style={{ ...inputStyle, colorScheme: 'dark' }}>
                  <option>1 Passenger</option><option>2 Passengers</option><option>3 Passengers</option><option>4+ Passengers</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="text" placeholder="Name" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="tel" placeholder="Phone" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#94B8C4' }} />
                <input type="email" placeholder="Email" className={inputBaseClass + ' pl-10'} style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
              </div>
            </div>
            <button type="submit" className="w-full py-4 rounded-full text-base font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#D9A66C', color: '#011C27' }}>Search Bus Tickets</button>
          </div>
        );
    }
  };

  return (
    <section id="flights" className="relative z-10 px-4 sm:px-6 mt-8 sm:-mt-20 pb-16">
      <div className="content-max">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="card-abyss p-6 md:p-10 mx-auto max-w-[1000px] overflow-hidden"
          style={{
            border: '1px solid rgba(148,184,196,0.15)',
            boxShadow: '0 8px 48px rgba(0,212,170,0.06)',
          }}
        >
          {/* Tabs */}
          <div className="flex items-center gap-1 mb-6 overflow-x-auto scrollbar-hide pb-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300"
                  style={{
                    backgroundColor: activeTab === tab.id ? '#D9A66C' : 'transparent',
                    color: activeTab === tab.id ? '#011C27' : '#94B8C4',
                  }}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </form>
      </div>
    </section>
  );
}
