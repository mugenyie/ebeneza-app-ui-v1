// pages/my-page.js
import { getSession } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function About({children, user }) {
  const router = useRouter();

  if (!user) {
    // If user is not logged in, redirect to the login page
    router.push('/login');
    return null;
  }

  return (
    <>
    <Head>
        <title>Dah | Ebenezer Cleaning Services - Toronto</title>
        <link rel="icon" href="/logo/icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" />
      </Head>
      <UserProvider>
          <DashboardLayout title={"title"}>
            <h1>About</h1>
            {user && (
                <div>
                <p>Welcome, {user.name}!</p>
                <a href='/api/auth/logout'>LogOut?</a>
                </div>
            )}
          </DashboardLayout>
      </UserProvider>
    </>
  );
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
          destination: '/error',
          permanent: false,
        },
      };
    }
  }
