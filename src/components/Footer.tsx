import React from 'react';
import { Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Sprout className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">SRBA</span>
            </div>
            <p className="mt-4 text-gray-300">
              Promoting sustainable agriculture and food security in the Somali Region
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#zones" className="hover:text-gray-300">Agricultural Zones</a></li>
              <li><a href="#resources" className="hover:text-gray-300">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Publications</a></li>
              <li><a href="#" className="hover:text-gray-300">Research Papers</a></li>
              <li><a href="#" className="hover:text-gray-300">Training Materials</a></li>
              <li><a href="#" className="hover:text-gray-300">News & Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-300">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Somali Region Bureau of Agriculture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}