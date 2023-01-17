import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import Image from 'next/image'
import Link from 'next/link'

import LogoUMB from '../public/LogoUMB/logo-umb-full.png'
import LogoUMB2 from '../public/LogoUMB/logo-umb.png'

import { FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'


const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })


    const user = useSelector((state) => state.AuthReducer.authData);
    const router = useRouter()

    const [dataProfile, setDataProfile] = useState([])

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('profile'))

        setDataProfile(data.user)
    }, [])


    return (
        <nav className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white fixed top-0 duration-300 z-[100] w-full px-4 md:px-8 xl:px-[5rem] py-4 flex justify-between items-center`}>
            <div className='flex gap-2 md:gap-4 items-center'>
                <Link href='/'>
                    <Image
                        alt='logo UMB'
                        src={shadowNav ? LogoUMB2 : LogoUMB}
                        className={`${shadowNav ? 'w-8 h-8 md:w-[3rem] md:h-[3rem] xl:h-[3.5rem] xl:w-[3.5rem]' : 'w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] xl:h-[7rem] xl:w-[7rem]'} duration-500 cursor-pointer`}
                    />
                </Link>
                <div className={`border-l-2 border-primary-blue flex flex-col justify-center px-2 md:px-5 ${shadowNav ? 'py-0' : 'py-1 md:py-4'}`}>
                    <p className='text-xs md:text-base xl:text-xl font-semibold'>Pangkalan Data</p>
                    <p className='text-sm md:text-lg xl:text-xl font-semibold text-primary-blue'>Universitas Mercu Buana</p>
                </div>
            </div>
            <div className='block md:hidden'>
                <FiMenu className='text-2xl' />
            </div>
            <div className='flex items-center gap-[3rem]'>


                <div className={dataProfile.role === 'admin' ? 'hidden md:block relative group'
                    : dataProfile.role === 'keuangan' ? 'hidden md:block relative group'
                        : 'hidden'}>
                    <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                        <div className='flex gap-2 justify-center items-center'>
                            <span>Keuangan</span>
                            <MdKeyboardArrowDown />
                        </div>
                    </button>

                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div className="w-full bg-white shadow-lg">
                            <div className="flex flex-col">
                                <Link href='/keuangan/permintaan-pembayaran' className='hover:bg-gray-100 px-6 py-4'>Pengajuan PP dan PUM</Link>
                                <Link href='/keuangan/saldo' className='hover:bg-gray-100 px-6 py-4'>Saldo</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={dataProfile.role === 'admin' ? 'hidden md:block relative group'
                    : dataProfile.role === 'mahasiswa' ? 'hidden md:block relative group'
                        : 'hidden'}>
                    <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                        <div className='flex gap-2 justify-center items-center'>
                            <span>Mahasiswa</span>
                            <MdKeyboardArrowDown />
                        </div>
                    </button>

                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div className="w-full bg-white shadow-lg">
                            <div className="flex flex-col">
                                <Link href='/mahasiswa/mahasiswa' className='hover:bg-gray-100 px-6 py-4'>Data Mahasiswa</Link>
                                <Link href='/mahasiswa/keuangan' className='hover:bg-gray-100 px-6 py-4'>Keuangan</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={dataProfile.role === 'admin' ? 'hidden md:block relative group'
                    : dataProfile.role === 'marketing' ? 'hidden md:block relative group'
                        : 'hidden'}>
                    <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                        <div className='flex gap-2 justify-center items-center'>
                            <span>Marketing</span>
                            <MdKeyboardArrowDown />
                        </div>
                    </button>

                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div className="w-full bg-white shadow-lg">
                            <div className="flex flex-col">
                                <Link href='/marketing/data-closing' className='hover:bg-gray-100 px-6 py-4'>Data Closing</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={dataProfile.role === 'admin' ? 'hidden md:block relative group'
                    : dataProfile.role === 'pegawai' ? 'hidden md:block relative group'
                        : 'hidden'}>
                    <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                        <div className='flex gap-2 justify-center items-center'>
                            <span>Pegawai</span>
                            <MdKeyboardArrowDown />
                        </div>
                    </button>

                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div className="w-full bg-white shadow-lg">
                            <div className="flex flex-col">
                                <Link href='/pegawai/rasio-dosen' className='hover:bg-gray-100 px-6 py-4'>Rasio Dosen</Link>
                                <Link href='/pegawai/pressensi' className='hover:bg-gray-100 px-6 py-4'>Pressensi</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={dataProfile.role === 'admin' ? 'hidden md:block relative group'
                    : dataProfile.role === 'proyek' ? 'hidden md:block relative group'
                        : 'hidden'}>
                    <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                        <div className='flex gap-2 justify-center items-center'>
                            <span>Proyek</span>
                            <MdKeyboardArrowDown />
                        </div>
                    </button>

                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div className="w-full bg-white shadow-lg">
                            <div className="flex flex-col">
                                <Link href='/pegawai/rasio-dosen' className='hover:bg-gray-100 px-6 py-4'>Hambalang Farm</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar