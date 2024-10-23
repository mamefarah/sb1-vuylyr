import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Somali Region Bureau of Agriculture
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Promoting sustainable agriculture and food security through innovation, research, and community engagement
            </p>
            <div className="space-x-4">
              <a href="#services" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Our Services
              </a>
              <a href="#contact" className="bg-white hover:bg-gray-100 text-green-800 px-6 py-3 rounded-lg font-medium transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}