import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { logout } from '../action/AuthAction'

const Guest = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })


    return (
        <>
            <nav className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white fixed top-0 duration-300 z-[100] w-full px-4 md:px-8 xl:px-[5rem] py-2 flex justify-between items-center`}>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <a href='/'>
                        <img
                            alt='logo UMB'
                            src={shadowNav ? '/LogoUMB/logo-umb-full.png' : '/LogoUMB/logo-umb-full.png'}
                            className={`${shadowNav ? 'w-8 h-8 md:w-[3rem] md:h-[3rem] xl:h-[3.5rem] xl:w-[3.5rem]' : 'w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] xl:h-[6rem] xl:w-[6rem]'} duration-500 cursor-pointer`}
                        />
                    </a>
                    <div className={`border-l-2 border-primary-blue flex flex-col justify-center px-2 md:px-5 ${shadowNav ? 'py-8' : 'py-1 md:py-1'}`}>
                        <p className='text-xs md:text-base xl:text-lg font-semibold'>Pangkalan Data</p>
                        <p className='text-sm md:text-lg xl:text-lg font-semibold text-primary-blue'>Universitas Mercu Buana</p>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <FiMenu className='text-2xl' />
                </div>
                <a href='/login' className='bg-primary-blue border-2 border-primary-blue hover:bg-transparent hover:text-primary-blue duration-300 font-medium text-white px-8 py-2'>
                    Login
                </a>
            </nav>
            <div>
                <p className='w-full h-screen flex justify-center items-center'>Hello</p>
            </div>
        </>
    )
}

export default Guest