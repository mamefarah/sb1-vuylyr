import React from 'react';
import { TreePine, Mountain, Droplets, Wind } from 'lucide-react';

const resources = [
  {
    icon: <TreePine className="h-12 w-12" />,
    title: 'Forest Management',
    description: 'Sustainable forestry practices and conservation'
  },
  {
    icon: <Mountain className="h-12 w-12" />,
    title: 'Land Conservation',
    description: 'Soil preservation and land use planning'
  },
  {
    icon: <Droplets className="h-12 w-12" />,
    title: 'Water Resources',
    description: 'Water management and irrigation systems'
  },
  {
    icon: <Wind className="h-12 w-12" />,
    title: 'Climate Action',
    description: 'Climate change adaptation strategies'
  }
];

export default function NaturalResource() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Natural Resource Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preserving and managing our natural resources for sustainable agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-600 mb-4 flex justify-center">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Conservation Projects</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Watershed Management</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">Area Coverage</h4>
                  <p className="text-green-600 font-bold">250,000 hectares</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">Communities Involved</h4>
                  <p className="text-green-600 font-bold">75+</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">Water Sources Protected</h4>
                  <p className="text-green-600 font-bold">120</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Soil Conservation</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">Protected Area</h4>
                  <p className="text-green-600 font-bold">180,000 hectares</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">Farmers Trained</h4>
                  <p className="text-green-600 font-bold">5,000+</p>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">Success Rate</h4>
                  <p className="text-green-600 font-bold">85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Resource Management Tools</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                <span>GIS Mapping Systems</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                <span>Soil Testing Kits</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                <span>Water Quality Monitoring</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                <span>Climate Data Analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
            <p className="text-gray-600 mb-6">
              Join our conservation efforts and help protect our natural resources
            </p>
            <div className="space-y-4">
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Volunteer Program
              </button>
              <button className="w-full bg-green-100 text-green-700 px-6 py-2 rounded-lg hover:bg-green-200 transition-colors">
                Report Environmental Issues
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}