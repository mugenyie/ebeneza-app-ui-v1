// HowItWorks.js
import Link from 'next/link';
import React from 'react';
import { ImHappy } from "react-icons/im";
import { MdManageHistory } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

const HowItWorks = () => {
  return (
    <section id='how-it-works' className="flex-col items-center justify-center px-10 py-8">
      <div className='text-center mb-8'>
        <h1 className="text-lg leading-8 text-gray-600">How it works</h1>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Hassle-free house cleaning</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className='flex-row text-center items-center justify-center text-gray-900'>
          <div className='bg-slate-100 shadow-md py-20 px-4 mb-8 rounded-sm'>
            <img 
            className='w-32 inline'
            src='images/connect.png'
             />
          </div>
          <h3 className="text-xl font-bold mb-2">1. Match</h3>
          <p className='mt-6 text-lg leading-8 text-gray-600'>We'll pair you with the best local cleaner and give you a price.</p>
        </div>
        <div className='flex-row text-center items-center justify-center text-gray-900'>
          <div className='bg-slate-100 shadow-md py-20 px-4 mb-8 rounded-sm'>
          <img 
            className='w-32 inline'
            src='images/manage.png'
             />
          </div>
          <h3 className="text-xl font-bold mb-2">2. Manage</h3>
          <p className='mt-6 text-lg leading-8 text-gray-600'>Customise and schedule your clean - every week or whenever suits you. You’re in full control.</p>
        </div>
        <div className='flex-row text-center items-center justify-center text-gray-900'>
          <div className='bg-slate-100 shadow-md py-20 px-4 mb-8 rounded-sm'>
          <img 
            className='w-32 inline'
            src='images/happy.png'
             />
          </div>
          <h3 className="text-xl font-bold mb-2">3. Marvel</h3>
          <p className='mt-6 text-lg leading-8 text-gray-600'>…at your spotless house and lack of stress. Plus there’s no hassle with cash - we’ll bill your card when the clean’s complete.</p>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/dashboard/cleaning-request"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Find your cleaner
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
