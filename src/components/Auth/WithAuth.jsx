import { getSession } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProfileServer() {
  const router = useRouter();

  useEffect(async () => {
    const { user } = await getSession();

    if (!user) {
      // If user is not logged in, redirect to the login page
      router.push('/login');
    } else {
      // If user is logged in, redirect to the dashboard
      router.push('/dashboard');
    }
  }, []);

  return null; // This component doesn't render anything directly
}
