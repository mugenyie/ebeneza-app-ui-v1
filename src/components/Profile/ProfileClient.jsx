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
            <div class="flex justify-center items-center">
                <Link href="/profile" className="shadow-sm flex justify-center items-center px-4 py-3 bg-blue-100 rounded-r-full rounded-l-full" role="alert">
                    <div>
                        <img className='w-16 rounded-full' src={user.picture} alt={user.name} />
                    </div>
                    <div className='text-left px-2 py-2'>
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm">{user.email}</p>
                    </div>
                </Link>
                <Link
                    href="/api/auth/logout"
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Logout ?
                </Link>
            </div>
          ) : (
          <>
            <Link href="/api/auth/login">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Log in / Create account
              </button>
            </Link>
            <Link href="/client">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get a quote
              </button>
            </Link>
            </>)}
      </>
  );
}