import Link from 'next/link'
import React from 'react'

export function LoginPrompt() {
    

    return (
        <div className='flex-col items-center justify-center'>
            <h1 className='font-semibold text-center py-8'>Log in or create an account <br />to unlock our exclusively personalized experience.</h1>
            <Link 
            href="/api/auth/login"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Log in / Create account
            </Link>
        </div>
    )
}
