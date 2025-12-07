import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import Plan from '../components/Plan.jsx';
import Footer from '../components/Footer.jsx';
import { Testimonial } from '../components/Testimonial.jsx';

const Home = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section with subtle background */}
      <div className="bg-linear-to-b from-blue-50 via-white to-blue-50">
        <Features />
      </div>

      {/* Pricing/Plan Section */}
      <Plan id="pricing-section" />
      <div className=" bg-linear-to-b from-blue-50 via-white to-blue-50 flex items-center justify-center py-8 ">
        <Testimonial/>

      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
