import React from 'react';
import { GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';

const programs = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Farmer Training',
    description: 'Comprehensive training programs for modern farming techniques'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Educational Resources',
    description: 'Access to agricultural guides and learning materials'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community Outreach',
    description: 'Engaging with local farming communities'
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Workshops & Events',
    description: 'Regular workshops and agricultural demonstrations'
  }
];

export default function Extension() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Extension</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between agricultural research and farming practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-green-600 font-bold mb-2">March 15, 2024</div>
              <h3 className="text-xl font-semibold mb-2">Modern Irrigation Workshop</h3>
              <p className="text-gray-600 mb-4">Learn about efficient irrigation systems and water management</p>
              <button className="text-green-600 hover:text-green-700 font-medium">Register →</button>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-green-600 font-bold mb-2">April 2, 2024</div>
              <h3 className="text-xl font-semibold mb-2">Soil Health Seminar</h3>
              <p className="text-gray-600 mb-4">Understanding soil composition and maintenance</p>
              <button className="text-green-600 hover:text-green-700 font-medium">Register →</button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Training Materials</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                <h3 className="font-semibold">Crop Management Guide</h3>
                <p className="text-gray-600 text-sm">Comprehensive guide for crop cultivation</p>
                <button className="mt-2 text-green-600 hover:text-green-700">Download PDF</button>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                <h3 className="font-semibold">Pest Control Handbook</h3>
                <p className="text-gray-600 text-sm">Strategies for managing agricultural pests</p>
                <button className="mt-2 text-green-600 hover:text-green-700">Download PDF</button>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                <h3 className="font-semibold">Irrigation Systems Manual</h3>
                <p className="text-gray-600 text-sm">Guide to modern irrigation techniques</p>
                <button className="mt-2 text-green-600 hover:text-green-700">Download PDF</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Request Training</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Topic of Interest</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option>Crop Management</option>
                  <option>Livestock Care</option>
                  <option>Soil Management</option>
                  <option>Pest Control</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Training Date</label>
                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Participants</label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}