import React from 'react'
import { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children, pageTitle }) => {

    useEffect(() => {
        document.title = `${ pageTitle }`
    }, [])

    return (
        <>
            <Navbar />
            <main className='px-4 md:px-8 xl:px-[5rem] py-[5rem]'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout