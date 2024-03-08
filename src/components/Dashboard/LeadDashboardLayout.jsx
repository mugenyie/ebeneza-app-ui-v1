'use client';

import Head from 'next/head';
import "../../app/globals.css";
import "../../app/fonts.css";
import { getSession } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const LeadDashboardLayout = ({children, title}) => {
  return (
    <div>
      <Head>
        <title>{title ?? ""} | Ebenezer Cleaning Services - Toronto</title>
        <link rel="icon" href="/logo/icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" />
      </Head>
      <UserProvider>
          <DashboardLayout title={title}>
            {children}
          </DashboardLayout>
      </UserProvider>
    </div>
  );
};

export default LeadDashboardLayout;