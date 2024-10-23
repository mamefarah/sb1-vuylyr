import React, { useState } from 'react';
import { Menu, X, Sprout, ChevronDown } from 'lucide-react';

const directorates = [
  { name: 'Crop Production', href: '#crop-production', description: 'Sustainable crop management and production systems' },
  { name: 'Food Security', href: '#food-security', description: 'Ensuring regional food security and distribution' },
  { name: 'Natural Resource Management', href: '#natural-resource', description: 'Conservation and sustainable resource use' },
  { name: 'Extension', href: '#extension', description: 'Agricultural education and community outreach' },
  { name: 'Marketing', href: '#marketing', description: 'Agricultural market development and trade' },
  { name: 'Human Resource Management', href: '#hr-management', description: 'Staff development and administration' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDirectorates, setShowDirectorates] = useState(false);

  return (
    <nav className="bg-green-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
              <Sprout className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">SRBA</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                Home
              </a>
              
              {/* Enhanced Directorates Dropdown */}
              <div className="relative group">
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-1 group"
                  onMouseEnter={() => setShowDirectorates(true)}
                  onMouseLeave={() => setShowDirectorates(false)}
                  aria-expanded={showDirectorates}
                  aria-haspopup="true"
                >
                  Directorates
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showDirectorates ? 'rotate-180' : ''}`} />
                </button>
                
                <div
                  className={`absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top-left ${
                    showDirectorates ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  onMouseEnter={() => setShowDirectorates(true)}
                  onMouseLeave={() => setShowDirectorates(false)}
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1 divide-y divide-gray-100">
                    {directorates.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex flex-col px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                        role="menuitem"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-gray-500 text-xs mt-1">
                          {item.description}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                Services
              </a>
              <a href="#zones" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                Agricultural Zones
              </a>
              <a href="#resources" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                Resources
              </a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      <div className={`md:hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors">
            Home
          </a>
          
          {/* Enhanced Mobile Directorates Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setShowDirectorates(!showDirectorates)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors"
              aria-expanded={showDirectorates}
            >
              <span>Directorates</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showDirectorates ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`transition-all duration-200 ${showDirectorates ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              {directorates.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block pl-6 pr-4 py-2 text-base text-gray-100 hover:bg-green-700 transition-colors"
                >
                  <span className="block font-medium">{item.name}</span>
                  <span className="block text-sm opacity-75 mt-0.5">{item.description}</span>
                </a>
              ))}
            </div>
          </div>

          <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors">
            Services
          </a>
          <a href="#zones" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors">
            Agricultural Zones
          </a>
          <a href="#resources" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors">
            Resources
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}