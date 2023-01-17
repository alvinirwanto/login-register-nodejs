import React from 'react'

import Link from 'next/link'

const GuestPage = () => {
    return (
        <>
            <div className='fixed top-0 right-0 m-8'>
                <Link
                    href='/login'
                    className='bg-black text-white px-8 py-2'
                >
                    Login
                </Link>
            </div>
            <div className='flex justify-center items-center h-screen w-full'>GuestPage</div>
        </>

    )
}

export default GuestPage