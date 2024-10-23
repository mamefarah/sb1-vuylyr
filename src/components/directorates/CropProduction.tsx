import React from 'react';
import { Sprout, Leaf, Sun, Cloud, Droplet } from 'lucide-react';

const programs = [
  {
    icon: <Sprout className="h-6 w-6" />,
    title: 'Crop Diversification',
    description: 'Promoting diverse crop varieties adapted to local conditions'
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Sustainable Farming',
    description: 'Implementing environmentally friendly farming practices'
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: 'Climate-Smart Agriculture',
    description: 'Adapting farming methods to climate change'
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'Weather Monitoring',
    description: 'Real-time weather tracking for optimal crop management'
  },
  {
    icon: <Droplet className="h-6 w-6" />,
    title: 'Irrigation Systems',
    description: 'Modern irrigation solutions for efficient water use'
  }
];

export default function CropProduction() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Crop Production</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading innovation in sustainable crop production and management systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-600 mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Current Initiatives</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold">Drought-Resistant Crop Development</h3>
              <p className="text-gray-600">Research and implementation of drought-resistant varieties</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold">Soil Health Program</h3>
              <p className="text-gray-600">Comprehensive soil testing and improvement initiatives</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold">Modern Farming Techniques</h3>
              <p className="text-gray-600">Training farmers in latest agricultural technologies</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-4">Join our regular training sessions on modern crop production techniques</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Register Now
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-4">Get expert assistance for your farming operations</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Request Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}