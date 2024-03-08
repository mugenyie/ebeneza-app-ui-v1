import LeadDashboardLayout from '@/components/Dashboard/LeadDashboardLayout'
import { GiVacuumCleaner } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import React from 'react'
import { Link } from 'react-scroll';

const userLinks = [
  {
    name:"Request for Cleaning Services",
    icon:<GiVacuumCleaner size={48} />,
    link:"dashboard/cleaning-request"
  },
  {
    name:"Apply as a cleaner",
    icon:<GrUserWorker size={48} />,
    link:"dashboard/apply-as-cleaner"
  }
]

export default function Index() {
  return (
    <LeadDashboardLayout title="Dashboard">
      <div class="grid lg:grid-cols-4 gap-4 grid-cols-1">
      {userLinks.map((item, index)=>(
          <a key={index} href={item.link} className='shadow-md rounded-md px-4 h-32 flex items-center'>
            {item.icon}
            <p className='font-semibold ml-8'>{item.name}</p>
          </a>
        ))}
      </div>
    </LeadDashboardLayout>
  )
}
