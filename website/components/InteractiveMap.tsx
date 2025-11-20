'use client';

import { motion } from 'framer-motion';
import { useState, forwardRef } from 'react';

interface Location {
  id: string;
  name: string;
  details: string;
  type: 'hq' | 'office';
}

const locations: Location[] = [
  { id: 'hk', name: 'Hong Kong (HQ)', details: 'Global Headquarters', type: 'hq' },
  { id: 'sz', name: 'Shenzhen', details: 'Operations Center', type: 'office' },
  { id: 'cd', name: 'Chengdu', details: 'R&D Support', type: 'office' },
  { id: 'my', name: 'Malaysia', details: 'Southeast Asia Hub', type: 'office' },
  { id: 'us', name: 'Phoenix, USA', details: 'North American Sales', type: 'office' },
  { id: 'au', name: 'Brisbane, Australia', details: 'Oceania Office', type: 'office' },
  { id: 'pl', name: 'Poland', details: 'European Center', type: 'office' },
  { id: 'ru', name: 'Russia', details: 'CIS Regional Office', type: 'office' },
];

interface InteractiveMapProps {
  children?: React.ReactNode;
}

const InteractiveMap = forwardRef<HTMLDivElement, InteractiveMapProps>((props, ref) => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-8 relative z-10">
      {/* Globe Placeholder - The GlobeScene will position the actual globe over this area */}
      <div 
        ref={ref} 
        className="relative w-full lg:w-1/2 aspect-square max-w-[600px] rounded-2xl bg-gray-50/50 border border-gray-100/50 overflow-hidden"
      >
        {/* Optional: Add a static placeholder or loading state here if needed */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm pointer-events-none">
            {/* Globe lands here */}
        </div>
        {/* Render children (StaticGlobe) if provided */}
        {props.children && (
            <div className="absolute inset-0 z-20">
                {props.children}
            </div>
        )}
      </div>

      {/* Locations List */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-30">
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
              activeLocation === loc.id
                ? 'bg-blue-50 border-blue-200 shadow-sm'
                : 'bg-white border-gray-100 hover:border-blue-100 hover:bg-gray-50'
            }`}
            onMouseEnter={() => setActiveLocation(loc.id)}
            onMouseLeave={() => setActiveLocation(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-2">
                <span className={`w-2 h-2 rounded-full ${loc.type === 'hq' ? 'bg-blue-600' : 'bg-gray-400'}`} />
                <h4 className={`font-semibold text-sm ${activeLocation === loc.id ? 'text-blue-700' : 'text-black'}`}>
                    {loc.name}
                </h4>
            </div>
            <p className="text-xs text-gray-500 pl-5">{loc.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

InteractiveMap.displayName = 'InteractiveMap';
export default InteractiveMap;
