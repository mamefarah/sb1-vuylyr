import React from 'react';
import { Users, Award, BookOpen, Briefcase } from 'lucide-react';

const departments = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Staff Development',
    description: 'Professional growth and training programs'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Performance Management',
    description: 'Employee evaluation and recognition'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Training & Education',
    description: 'Continuous learning opportunities'
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Recruitment',
    description: 'Talent acquisition and placement'
  }
];

export default function HumanResource() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Human Resource Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building and maintaining a skilled workforce for agricultural excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">{dept.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
              <p className="text-gray-600">{dept.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Career Opportunities</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Agricultural Extension Officer</h3>
                    <p className="text-gray-600 text-sm">Full-time position</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">New</span>
                </div>
                <button className="mt-4 text-green-600 hover:text-green-700">View Details →</button>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Research Specialist</h3>
                    <p className="text-gray-600 text-sm">Contract position</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Featured</span>
                </div>
                <button className="mt-4 text-green-600 hover:text-green-700">View Details →</button>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Field Coordinator</h3>
                    <p className="text-gray-600 text-sm">Full-time position</p>
                  </div>
                </div>
                <button className="mt-4 text-green-600 hover:text-green-700">View Details →</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Training Calendar</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-green-600 font-bold mb-2">March 20, 2024</div>
                <h3 className="font-semibold">New Employee Orientation</h3>
                <p className="text-gray-600 text-sm">Introduction to agricultural policies and procedures</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-green-600 font-bold mb-2">April 5, 2024</div>
                <h3 className="font-semibold">Leadership Development</h3>
                <p className="text-gray-600 text-sm">Management skills workshop for team leaders</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-green-600 font-bold mb-2">April 15, 2024</div>
                <h3 className="font-semibold">Technical Skills Workshop</h3>
                <p className="text-gray-600 text-sm">Advanced agricultural techniques training</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Employee Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Document Center</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Employee Handbook</li>
                <li>• Benefits Guide</li>
                <li>• Training Materials</li>
                <li>• Policy Documents</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Self-Service Portal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Leave Management</li>
                <li>• Performance Reviews</li>
                <li>• Training Registration</li>
                <li>• Personal Information</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Support Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IT Help Desk</li>
                <li>• HR Support</li>
                <li>• Employee Assistance</li>
                <li>• Career Counseling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}