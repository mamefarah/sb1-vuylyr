import React from 'react';

const zones = [
  {
    name: 'Highland Zone',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
    description: 'Characterized by high altitude farming and diverse crop production'
  },
  {
    name: 'Midland Zone',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
    description: 'Mixed farming systems with moderate rainfall and varied agriculture'
  },
  {
    name: 'Lowland Zone',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
    description: 'Pastoral and agro-pastoral systems adapted to arid conditions'
  }
];

export default function AgriZones() {
  return (
    <section id="zones" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Agricultural Zones</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the diverse agricultural regions of the Somali Region
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {zones.map((zone, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={zone.image} 
                  alt={zone.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{zone.name}</h3>
                <p className="text-gray-600">{zone.description}</p>
                <button className="mt-4 text-green-600 hover:text-green-700 font-medium">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}