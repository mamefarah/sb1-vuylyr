import React from 'react';
import { Leaf, Users, BookOpen, Map } from 'lucide-react';

const services = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Agricultural Support',
    description: 'Expert guidance on crop management, soil health, and sustainable farming practices'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community Programs',
    description: 'Training workshops and community initiatives to promote agricultural development'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Research & Development',
    description: 'Latest agricultural research and innovative farming techniques'
  },
  {
    icon: <Map className="h-8 w-8" />,
    title: 'Zone Management',
    description: 'Detailed mapping and management of agricultural zones in the Somali Region'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Supporting agricultural development through comprehensive services and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-green-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}