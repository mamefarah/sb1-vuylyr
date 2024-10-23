import React from 'react';
import { Scale, BarChart, Users, ShieldCheck } from 'lucide-react';

const metrics = [
  { label: 'Households Supported', value: '50,000+' },
  { label: 'Food Banks', value: '25' },
  { label: 'Distribution Centers', value: '100' },
  { label: 'Partner Organizations', value: '40+' }
];

export default function FoodSecurity() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Food Security</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensuring sustainable food access and distribution across the Somali Region
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Scale className="h-12 w-12 text-green-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Food Distribution</h2>
            <p className="text-gray-600 mb-4">
              Strategic distribution networks ensuring food reaches vulnerable communities
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Emergency food assistance</li>
              <li>• School feeding programs</li>
              <li>• Community food banks</li>
              <li>• Mobile distribution units</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <BarChart className="h-12 w-12 text-green-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Monitoring & Assessment</h2>
            <p className="text-gray-600 mb-4">
              Regular monitoring of food security indicators and needs assessment
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Food security surveys</li>
              <li>• Market price monitoring</li>
              <li>• Vulnerability mapping</li>
              <li>• Impact assessment</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Current Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Targeted assistance for vulnerable households</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <ShieldCheck className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Food Safety</h3>
              <p className="text-gray-600">Quality control and safety standards implementation</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Report Food Security Issues</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issue Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                <option>Food Shortage</option>
                <option>Distribution Problems</option>
                <option>Quality Concerns</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}