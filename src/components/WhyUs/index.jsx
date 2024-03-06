// WhyUs.js
import React from 'react';

const WhyUs = () => {
  const reasons = [
    "Book online or in the app",
    "Cashless payment",
    "Customize your clean",
    "Change or cancel in seconds",
    "No contracts",
    "Vetted, experienced cleaners",
    "Consistent, reliable service",
    "7-day support"
  ];

  return (
    <section id='why-us' className="flex-col items-center justify-center px-10 py-10 bg-slate-100">
      <div className='text-center mb-8'>
        <h1 className="text-lg leading-8 text-gray-600">Why choose Ebenezer Cleaning Services</h1>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Finally, housework that works</h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>No calendar mix ups. No hassle with cash. No stress – and no mess. <br /> Just an easy experience, super responsive customer support and a squad of experienced, vetted Housekeepers.</p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <img 
        className="rounded" 
        src="https://fcdrycleaners.com/wp-content/uploads/2023/09/How-Much-Vinegar-Should-You-Use-In-Your-Washing-Machine-A-Complete-Guide-998x570.jpg" 
        alt="Your Image" />
        <div className='shadow-md px-8 py-4'>
          <ul className="list-disc list-inside">
            {reasons.map((reason, index) => (
              <li key={index} className="mb-2 text-lg leading-8 text-gray-600">{reason}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
