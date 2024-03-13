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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/65f13ce09131ed19d979541d/1hor5bjjc';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
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