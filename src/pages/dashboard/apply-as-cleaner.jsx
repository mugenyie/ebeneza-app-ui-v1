import LeadDashboardLayout from '@/components/Dashboard/LeadDashboardLayout'
import CleanerApplicationForm from '@/components/Forms/CleanerApplicationForm'
import React from 'react'
import { getSession } from '@auth0/nextjs-auth0';

export default function CleanerApply() {
  return (
    <LeadDashboardLayout title="Apply as a cleaner">
      <CleanerApplicationForm />
    </LeadDashboardLayout>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const session = await getSession(ctx.req, ctx.res);

    if (!session || !session.user) {
      // If user is not logged in, redirect to the login page
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {
        user: session.user, // Pass the user object to the component
      },
    };
  } catch (error) {
    console.error('Error fetching session:', error);

    // Handle other errors or redirect to an error page
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}

