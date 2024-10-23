import React from 'react';
import { ShoppingCart, TrendingUp, BarChart2, Globe } from 'lucide-react';

const marketStats = [
  { label: 'Active Markets', value: '120+' },
  { label: 'Registered Farmers', value: '25,000' },
  { label: 'Annual Trade Volume', value: '$50M' },
  { label: 'Export Partners', value: '15' }
];

export default function Marketing() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting farmers with markets and promoting agricultural trade
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ShoppingCart className="h-12 w-12 text-green-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Market Access</h2>
            <p className="text-gray-600 mb-4">
              Connecting farmers with local and international markets
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Market information systems</li>
              <li>• Price monitoring</li>
              <li>• Buyer-seller networking</li>
              <li>• Trade facilitation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <TrendingUp className="h-12 w-12 text-green-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Market Development</h2>
            <p className="text-gray-600 mb-4">
              Strategies for expanding agricultural markets
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Market research</li>
              <li>• Product development</li>
              <li>• Value chain analysis</li>
              <li>• Marketing strategies</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Market Prices</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-green-100">
                  <th className="px-6 py-3 text-left">Commodity</th>
                  <th className="px-6 py-3 text-right">Current Price</th>
                  <th className="px-6 py-3 text-right">Weekly Change</th>
                  <th className="px-6 py-3 text-right">Market Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Wheat</td>
                  <td className="px-6 py-4 text-right">$320/ton</td>
                  <td className="px-6 py-4 text-right text-green-600">+2.5%</td>
                  <td className="px-6 py-4 text-right">Upward</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Maize</td>
                  <td className="px-6 py-4 text-right">$180/ton</td>
                  <td className="px-6 py-4 text-right text-red-600">-1.2%</td>
                  <td className="px-6 py-4 text-right">Stable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Sorghum</td>
                  <td className="px-6 py-4 text-right">$200/ton</td>
                  <td className="px-6 py-4 text-right text-green-600">+1.8%</td>
                  <td className="px-6 py-4 text-right">Upward</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Globe className="h-12 w-12 text-green-600 mb-6" />
            <h2 className="text-2xl font-bold mb-6">Export Opportunities</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Middle East Markets</h3>
                <p className="text-gray-600">Export opportunities for cereals and pulses</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">European Union</h3>
                <p className="text-gray-600">Organic produce and specialty crops</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Regional Markets</h3>
                <p className="text-gray-600">Cross-border trade opportunities</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <BarChart2 className="h-12 w-12 text-green-600 mb-6" />
            <h2 className="text-2xl font-bold mb-6">Market Analysis</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Commodity</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option>Wheat</option>
                  <option>Maize</option>
                  <option>Sorghum</option>
                  <option>Other Crops</option>
                </select>
              </div><boltAction type="file" filePath="src/components/directorates/Marketing.tsx">
              <div>
                <label className="block text-sm font-medium text-gray-700">Time Period</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option>Last Week</option>
                  <option>Last Month</option>
                  <option>Last Quarter</option>
                  <option>Last Year</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Generate Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}