'use client';

import Head from 'next/head';
import "../../app/globals.css";
import "../../app/fonts.css";
import Footer from '@/components/Footer';
import CleanerApplication from '../ApplicationForms/CleanersForm';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';

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
