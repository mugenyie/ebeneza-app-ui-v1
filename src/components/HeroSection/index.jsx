// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Brilliant local cleaners</h1>
      <p className="text-lg mb-8">Vetted cleaners. All managed online.</p>
      <div className="flex space-x-4">
        <button className="bg-white text-primary py-2 px-4 rounded">Find Your Cleaner</button>
        <button className="bg-white text-primary py-2 px-4 rounded">Register as a Cleaner</button>
      </div>
    </section>
  );
};

export default HeroSection;
