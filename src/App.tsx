import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AgriZones from './components/AgriZones';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CropProduction from './components/directorates/CropProduction';
import FoodSecurity from './components/directorates/FoodSecurity';
import NaturalResource from './components/directorates/NaturalResource';
import Extension from './components/directorates/Extension';
import Marketing from './components/directorates/Marketing';
import HumanResource from './components/directorates/HumanResource';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <AgriZones />
              <Contact />
            </main>
          } />
          <Route path="/crop-production" element={<CropProduction />} />
          <Route path="/food-security" element={<FoodSecurity />} />
          <Route path="/natural-resource" element={<NaturalResource />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/hr-management" element={<HumanResource />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;