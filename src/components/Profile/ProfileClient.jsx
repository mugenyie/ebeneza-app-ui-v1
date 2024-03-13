'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
      <>
        {user ? (
            <div class="flex items-center justify-center">
                <Link href="/dashboard" className="shadow-sm flex items-center justify-center gap-2 px-2 py-1 bg-blue-100 rounded-r-full rounded-l-full" role="alert">
                    <div>
                        <img className='w-14 rounded-full' src={user.picture} alt={user.name} />
                    </div>
                    <div className='text-left px-2 py-2'>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm">{user.email}</p>
                    </div>
                </Link>
            </div>
          ) : (
          <>
            <Link className='flex items-center justify-center' href="/api/auth/login">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Log in / Create account
              </button>
            </Link>
            </>)}
      </>
  );
}