'use client';

import Head from 'next/head';
import "../../app/globals.css";
import "../../app/fonts.css";
import Footer from '@/components/Footer';
import CleanerApplication from '../../components/ApplicationForms/CleanersForm';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const ProfileLayout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Dashboard | Ebenezer Cleaning Services - Toronto</title>
        <meta name="description" content="Your page description goes here." />
        <link rel="icon" href="/logo/icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" />
      </Head>
      <UserProvider>
          {children}
      </UserProvider>
    </div>
  );
};

export default ProfileLayout;
