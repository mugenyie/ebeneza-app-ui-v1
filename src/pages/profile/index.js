import React from 'react'
import ProfileLayout from './ProfileLayout'
import Dashboard from '@/components/Profile/Dashboard'

export default function Index() {
    return (
        <ProfileLayout>
            <Dashboard />
        </ProfileLayout>
    )
}
