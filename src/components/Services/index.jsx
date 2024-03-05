// Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      name:"Kitchen cleaning",
      image:"https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/photography/whats-included/kitchen.webp",
      items:["Wash dishes","Dust and wipe all surfaces", "Wipe exterior of cupboards", "Scrub the hob", "Wipe the countertops", "Clean the sink", "Put away clean dishes", "Take out rubbish & recycling", "Vacuum and mop floors"]
    },
    {
      name: "Bathroom",
      image:"https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/photography/whats-included/bathroom.webp",
      items:["Clean the toilet", "Scrub shower, bath and sink","Clean cabinet exteriors, mirrors and fixtures", "Wipe switches & handles", "Empty rubbish bins", "Vacuum and mop floors"]
    },
    {
      name:"Living Areas",
      image:"https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/photography/whats-included/living-areas.webp",
      items:["Dust and wipe all accessible surfaces", "Wipe switches and handles", "Clean mirrors", "Empty rubbish bins", "Vacuum and mop floors"]
    },
    {
      name:"Bedrooms",
      image:"https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/photography/whats-included/bedroom.webp",
      items:["Dust and wipe all accessible surfaces", "Wipe switches and handles", "Clean mirrors", "Make the bed (leave fresh linen our if you would like us to change)", "Vacuum mop floor"]
    }
  ];

  return (
    <section id='services' className="flex-col items-center justify-center px-10 py-8">
      <div className='text-center mb-8'>
        <h1 className="text-lg leading-8 text-gray-600">What you get with Ebenezer Cleaning Services</h1>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">We go above and beyond</h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>We’ve set a new standard for thorough and thoughtful service. You don’t just get <br />a quality clean - you get a Housekeep quality clean. Here’s what’s included:</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 justify-items-center items-center">
        {services.map((service, index) => (
          <div className='shadow-md w-auto pb-4'>
            <img src={service.image} />
            <div className='px-8'>
              <p key={index} className="mb-2 font-bold py-4">{service.name}</p>
              <ul className='list-disc'>
                {service.items.map((item, index) => (<li key={index}>{item}</li>))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
